import { render } from '@testing-library/react';
import type { ConfigProviderProps as AntdConfigProviderProps } from 'antd';
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { wplusTheme } from '../theme';

const antdSpies = vi.hoisted(() => {
  const configProviderConfig = vi.fn();
  const modalResult = { destroy: vi.fn(), update: vi.fn() };
  const modalStaticMethod = vi.fn(() => {
    if (configProviderConfig.mock.calls.length === 0) {
      console.error(
        "Warning: [antd: Modal] Static function can not consume context like dynamic theme. Please use 'App' component instead.",
      );
    }

    return modalResult;
  });

  return {
    configProviderConfig,
    modalConfirm: modalStaticMethod,
    modalWarn: vi.fn(modalStaticMethod),
    messageSuccess: vi.fn(() => vi.fn()),
    notificationOpen: vi.fn(),
  };
});

let lastAntdConfigProviderProps: AntdConfigProviderProps | undefined;

vi.mock('antd', async (importOriginal) => {
  const actual = await importOriginal<typeof import('antd')>();

  return {
    ...actual,
    ConfigProvider: Object.assign(
      ({ children, ...props }: AntdConfigProviderProps) => {
        lastAntdConfigProviderProps = props;

        return <>{children}</>;
      },
      { config: antdSpies.configProviderConfig },
    ),
    Modal: {
      ...actual.Modal,
      confirm: antdSpies.modalConfirm,
      warn: antdSpies.modalWarn,
    },
    message: {
      ...actual.message,
      success: antdSpies.messageSuccess,
    },
    notification: {
      ...actual.notification,
      open: antdSpies.notificationOpen,
    },
  };
});

describe('static theme holder', () => {
  beforeEach(async () => {
    antdSpies.configProviderConfig.mockClear();
    antdSpies.modalConfirm.mockClear();
    antdSpies.modalWarn.mockClear();
    antdSpies.messageSuccess.mockClear();
    antdSpies.notificationOpen.mockClear();
    lastAntdConfigProviderProps = undefined;

    const { resetStaticThemeForTests } = await import('./static-theme');
    resetStaticThemeForTests();
  });

  it('registers the enterprise holder when the component entry is imported', async () => {
    await import('./index');

    expect(antdSpies.configProviderConfig).toHaveBeenCalledTimes(1);
  });

  it('wraps Modal.confirm with the enterprise theme holder', async () => {
    const { Modal } = await import('./modal');
    const config = { title: '确认发布', content: '发布后将同步配置。' };
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const result = Modal.confirm(config);

    expect(result).toBe(antdSpies.modalConfirm.mock.results[0]?.value);
    expect(antdSpies.modalConfirm).toHaveBeenCalledWith(config);
    expect(antdSpies.configProviderConfig).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).not.toHaveBeenCalledWith(
      expect.stringContaining('Static function can not consume context like dynamic theme'),
    );

    const holderRender = antdSpies.configProviderConfig.mock.calls[0]?.[0].holderRender;
    render(<>{holderRender?.(<span>static content</span>)}</>);

    expect(lastAntdConfigProviderProps?.theme?.token?.colorPrimary).toBe(
      wplusTheme.token?.colorPrimary,
    );
    expect(lastAntdConfigProviderProps?.theme?.components?.Button?.colorPrimary).toBe(
      wplusTheme.components?.Button?.colorPrimary,
    );

    consoleErrorSpy.mockRestore();
  });

  it('wraps Modal.warn alias with the enterprise theme holder', async () => {
    const { Modal } = await import('./modal');
    const config = { title: '风险提示' };

    Modal.warn(config);

    expect(antdSpies.configProviderConfig).toHaveBeenCalledTimes(1);
    expect(antdSpies.modalWarn).toHaveBeenCalledWith(config);
  });

  it('initializes once across message and notification static methods', async () => {
    const [{ message }, { notification }] = await Promise.all([
      import('./message'),
      import('./notification'),
    ]);

    message.success('保存成功');
    notification.open({ message: '处理完成' });

    expect(antdSpies.configProviderConfig).toHaveBeenCalledTimes(1);
    expect(antdSpies.messageSuccess).toHaveBeenCalledWith('保存成功');
    expect(antdSpies.notificationOpen).toHaveBeenCalledWith({ message: '处理完成' });
  });
});
