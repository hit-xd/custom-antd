import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import type { ConfigProviderProps as AntdConfigProviderProps, ThemeConfig } from 'antd';
import type { PropsWithChildren } from 'react';
import { wplusTheme } from '../../theme';

export interface ConfigProviderProps extends AntdConfigProviderProps {
  theme?: ThemeConfig;
}

const isEmptyObject = (value: unknown): value is Record<string, never> =>
  !!value && typeof value === 'object' && Object.keys(value).length === 0;

const hasOwnThemeKey = (theme: ThemeConfig | undefined, key: keyof ThemeConfig) =>
  !!theme && Object.prototype.hasOwnProperty.call(theme, key);

const mergeTheme = (theme?: ThemeConfig): ThemeConfig => {
  const hasCustomToken = hasOwnThemeKey(theme, 'token');
  const hasCustomComponents = hasOwnThemeKey(theme, 'components');
  const useEnterpriseTheme = !hasCustomToken && !hasCustomComponents;

  const token = useEnterpriseTheme
    ? wplusTheme.token
    : hasCustomToken && isEmptyObject(theme?.token)
      ? {}
      : theme?.token;

  const components = useEnterpriseTheme
    ? wplusTheme.components
    : hasCustomComponents && isEmptyObject(theme?.components)
      ? {}
      : theme?.components;

  return {
    algorithm: antdTheme.defaultAlgorithm,
    ...theme,
    token,
    components,
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
