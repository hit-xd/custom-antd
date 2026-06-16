import { render, screen } from '@testing-library/react';
import type { ConfigProviderProps as AntdConfigProviderProps } from 'antd';
import { Button } from 'antd';
import { describe, expect, it, vi } from 'vitest';
import { ConfigProvider } from './index';
import { wplusTheme } from '../../theme';

let lastAntdConfigProviderProps: AntdConfigProviderProps | undefined;

vi.mock('antd', async (importOriginal) => {
  const actual = await importOriginal<typeof import('antd')>();

  return {
    ...actual,
    ConfigProvider: ({ children, ...props }: AntdConfigProviderProps) => {
      lastAntdConfigProviderProps = props;
      return <>{children}</>;
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

  it('uses design spec tokens as the default enterprise theme', () => {
    const theme = wplusTheme;

    expect(theme.token?.colorPrimary).toBe('#C5A267');
    expect(theme.token?.colorLink).toBe('#1874FF');
    expect(theme.token?.borderRadius).toBe(4);
    expect(theme.components?.Button?.borderRadius).toBe(2);
    expect(theme.components?.Table?.headerBg).toBe('#F1F2F7');
  });

  it('merges custom theme overrides on top of the enterprise theme', () => {
    render(
      <ConfigProvider
        theme={{
          token: { colorPrimary: '#0052d9', borderRadius: 6 },
          components: { Button: { borderRadius: 8 } },
        }}
      >
        <Button>Save</Button>
      </ConfigProvider>,
    );

    const theme = lastAntdConfigProviderProps?.theme;

    expect(theme?.token?.colorPrimary).toBe('#0052d9');
    expect(theme?.token?.borderRadius).toBe(6);
    expect(theme?.token?.colorLink).toBe('#1874FF');
    expect(theme?.components?.Button?.borderRadius).toBe(8);
    expect(theme?.components?.Table?.headerBg).toBe('#F1F2F7');
  });
});
