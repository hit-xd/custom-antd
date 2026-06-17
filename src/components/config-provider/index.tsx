import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import type { ConfigProviderProps as AntdConfigProviderProps, ThemeConfig } from 'antd';
import type { PropsWithChildren } from 'react';
import { wplusTheme } from '../../theme';

export interface ConfigProviderProps extends AntdConfigProviderProps {
  theme?: ThemeConfig;
}

const isNonEmptyObject = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && Object.keys(value).length > 0;

const isEmptyObject = (value: unknown): value is Record<string, never> =>
  !!value && typeof value === 'object' && Object.keys(value).length === 0;

const mergeComponentThemes = (
  components?: ThemeConfig['components'],
): ThemeConfig['components'] => {
  const mergedComponents = { ...wplusTheme.components } as Record<string, unknown>;
  const customComponents = components as Record<string, unknown> | undefined;

  Object.entries(customComponents ?? {}).forEach(([componentName, componentTheme]) => {
    const defaultComponentTheme = mergedComponents[componentName];

    mergedComponents[componentName] = {
      ...(defaultComponentTheme && typeof defaultComponentTheme === 'object'
        ? defaultComponentTheme
        : undefined),
      ...(componentTheme && typeof componentTheme === 'object' ? componentTheme : undefined),
    };
  });

  return mergedComponents as ThemeConfig['components'];
};

const mergeTheme = (theme?: ThemeConfig): ThemeConfig => {
  const hasCustomToken = isNonEmptyObject(theme?.token);
  const hasEmptyComponents = isEmptyObject(theme?.components);
  const shouldUseEnterpriseComponents = !hasCustomToken && !hasEmptyComponents;

  return {
    algorithm: antdTheme.defaultAlgorithm,
    ...theme,
    token: {
      ...wplusTheme.token,
      ...theme?.token,
    },
    components: shouldUseEnterpriseComponents
      ? mergeComponentThemes(theme?.components)
      : theme?.components,
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
