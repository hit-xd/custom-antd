import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import type { ConfigProviderProps as AntdConfigProviderProps, ThemeConfig } from 'antd';
import type { PropsWithChildren } from 'react';
import { wplusTheme } from '../../theme';

export interface ConfigProviderProps extends AntdConfigProviderProps {
  theme?: ThemeConfig;
}

const mergeTheme = (theme?: ThemeConfig): ThemeConfig => ({
  ...theme,
  token: {
    ...wplusTheme.token,
  },
  components: {
    ...wplusTheme.components,
  },
});

export function ConfigProvider({
  children,
  theme,
  ...props
}: PropsWithChildren<ConfigProviderProps>) {
  return (
    <AntdConfigProvider
      {...props}
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        ...mergeTheme(theme),
      }}
    >
      {children}
    </AntdConfigProvider>
  );
}
