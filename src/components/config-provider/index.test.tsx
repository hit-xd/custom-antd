import { render, screen } from '@testing-library/react';
import type { ConfigProviderProps as AntdConfigProviderProps } from 'antd';
import { Button, theme as antdTheme } from 'antd';
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
});
