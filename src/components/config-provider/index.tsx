import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import type { ConfigProviderProps as AntdConfigProviderProps, ThemeConfig } from 'antd';
import type { PropsWithChildren } from 'react';
import { wplusTheme } from '../../theme';

export interface ConfigProviderProps extends AntdConfigProviderProps {
  theme?: ThemeConfig;
}

const isEmptyObject = (value: unknown): value is Record<string, never> =>
  !!value && typeof value === 'object' && Object.keys(value).length === 0;

const mergeTheme = (theme?: ThemeConfig): ThemeConfig => {
  let customToken;
  let customComponents;

  if (theme?.token && isEmptyObject(theme.token)) {
    customToken = wplusTheme.token;
  } else {
    customToken = theme?.token;
  }

  if (theme?.components && isEmptyObject(theme.components)) {
    customComponents = wplusTheme.components;
  } else {
    customComponents = theme?.components;
  }

  return {
    algorithm: antdTheme.defaultAlgorithm,
    ...theme,
    token: {
      ...customToken,
    },
    components: { ...customComponents },
  };
};

export function ConfigProvider({
  children,
  theme,
  ...props
}: PropsWithChildren<ConfigProviderProps>) {
  return (
    <AntdConfigProvider {...props} theme={mergeTheme(theme)}>
      {children}
    </AntdConfigProvider>
  );
}
