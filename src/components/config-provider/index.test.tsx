import { render, screen } from '@testing-library/react';
import type { ConfigProviderProps as AntdConfigProviderProps } from 'antd';
import { Button, DatePicker, theme as antdTheme } from 'antd';
import { describe, expect, it, vi } from 'vitest';
import { wplusTheme } from '../../theme';
import { ConfigProvider } from './index';

let lastAntdConfigProviderProps: AntdConfigProviderProps | undefined;

vi.mock('antd', async (importOriginal) => {
  const actual = await importOriginal<typeof import('antd')>();

  return {
    ...actual,
    ConfigProvider: ({ children, ...props }: AntdConfigProviderProps) => {
      lastAntdConfigProviderProps = props;
      const ActualConfigProvider = actual.ConfigProvider;

      return <ActualConfigProvider {...props}>{children}</ActualConfigProvider>;
    },
  };
});

describe('ConfigProvider', () => {
  it('renders children with the wrapped provider', () => {
    render(
      <ConfigProvider>
        <Button>Save</Button>
      </ConfigProvider>,
    );

    expect(screen.getByText('Save')).toBeTruthy();
  });

  it('uses the resolved zh_CN locale config by default', () => {
    render(
      <ConfigProvider>
        <Button>Save</Button>
      </ConfigProvider>,
    );

    expect(lastAntdConfigProviderProps?.locale?.locale).toBe('zh-cn');
    expect(lastAntdConfigProviderProps?.locale).not.toHaveProperty('default');
  });

  it('renders date components with the default zh_CN locale', () => {
    render(
      <ConfigProvider>
        <DatePicker />
      </ConfigProvider>,
    );

    expect(screen.getByPlaceholderText('请选择日期')).toBeTruthy();
  });

  it('uses design spec tokens as the default enterprise theme', () => {
    const theme = wplusTheme;

    expect(theme.token?.colorPrimary).toBe('#C5A267');
    expect(theme.token?.colorLink).toBe('#1874FF');
    expect(theme.token?.borderRadius).toBe(4);
    expect(theme.cssVar).toEqual({ prefix: 'wplus', key: 'wplus' });
    expect(theme.components?.Button?.borderRadius).toBe(2);
    expect(theme.components?.Table?.headerBg).toBe('#F1F2F7');
    expect(theme.components?.Avatar?.containerSize).toBe(32);
    expect(theme.components?.Carousel?.dotWidth).toBe(24);
    expect(theme.components?.Layout?.headerBg).toBe('#050816');
    expect(theme.components).not.toHaveProperty('button');
    expect(theme.components).not.toHaveProperty('searchForm');
    expect(theme.components).not.toHaveProperty('table');
    expect(theme.components?.Layout).not.toHaveProperty('headerHeight');
    expect(theme.components?.Switch).not.toHaveProperty('colorPrimary');
    expect(theme.components?.Result).not.toHaveProperty('colorSuccess');
    expect(theme.components?.Pagination).not.toHaveProperty('itemSize');
  });

  it('uses antd default global tokens and only the provided component tokens when components are provided', () => {
    render(
      <ConfigProvider
        theme={{
          components: { Button: { borderRadius: 8 }, Table: { headerBg: '#F7F4E9' } },
        }}
      >
        <Button>Save</Button>
      </ConfigProvider>,
    );

    const theme = lastAntdConfigProviderProps?.theme;

    expect(theme?.token).toBeUndefined();
    expect(theme?.components?.Button?.borderRadius).toBe(8);
    expect(theme?.components?.Button?.colorPrimary).toBeUndefined();
    expect(theme?.components?.Button?.primaryShadow).toBeUndefined();
    expect(theme?.components?.Table?.headerBg).toBe('#F7F4E9');
    expect(theme?.components?.Table?.headerColor).toBeUndefined();
    expect(theme?.cssVar).toEqual({ prefix: 'wplus', key: 'wplus' });
  });

  it('uses antd default tokens for values omitted from custom global tokens', () => {
    render(
      <ConfigProvider
        theme={{
          token: { colorPrimary: '#0052d9' },
          components: { Button: { borderRadius: 8 } },
        }}
      >
        <Button>Save</Button>
      </ConfigProvider>,
    );

    const theme = lastAntdConfigProviderProps?.theme;

    expect(theme?.token?.colorPrimary).toBe('#0052d9');
    expect(theme?.token?.borderRadius).toBeUndefined();
    expect(theme?.token?.colorLink).toBeUndefined();
    expect(theme?.components?.Button?.borderRadius).toBe(8);
    expect(theme?.components?.Button?.colorPrimary).toBeUndefined();
    expect(theme?.components?.Table).toBeUndefined();
    expect(theme?.cssVar).toEqual({ prefix: 'wplus', key: 'wplus' });
  });

  it('uses antd default component tokens when components is an empty object', () => {
    render(
      <ConfigProvider theme={{ components: {} }}>
        <Button>Save</Button>
      </ConfigProvider>,
    );

    const theme = lastAntdConfigProviderProps?.theme;

    expect(theme?.token).toBeUndefined();
    expect(theme?.components).toEqual({});
    expect(theme?.cssVar).toEqual({ prefix: 'wplus', key: 'wplus' });
  });

  it('uses antd default global tokens when token is an empty object', () => {
    render(
      <ConfigProvider theme={{ token: {} }}>
        <Button>Save</Button>
      </ConfigProvider>,
    );

    const theme = lastAntdConfigProviderProps?.theme;

    expect(theme?.token).toEqual({});
    expect(theme?.components).toBeUndefined();
    expect(theme?.cssVar).toEqual({ prefix: 'wplus', key: 'wplus' });
  });

  it('allows custom algorithms to override the default algorithm', () => {
    render(
      <ConfigProvider theme={{ algorithm: antdTheme.darkAlgorithm }}>
        <Button>Save</Button>
      </ConfigProvider>,
    );

    const theme = lastAntdConfigProviderProps?.theme;

    expect(theme?.algorithm).toBe(antdTheme.darkAlgorithm);
  });

  it('allows custom css variable config to override the default config', () => {
    render(
      <ConfigProvider theme={{ cssVar: { prefix: 'app', key: 'app' } }}>
        <Button>Save</Button>
      </ConfigProvider>,
    );

    const theme = lastAntdConfigProviderProps?.theme;

    expect(theme?.cssVar).toEqual({ prefix: 'app', key: 'app' });
  });
});
