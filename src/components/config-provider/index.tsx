import type { ConfigProviderProps as AntdConfigProviderProps, ThemeConfig } from 'antd';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import zhCNRaw from 'antd/locale/zh_CN.js';
import type { PropsWithChildren } from 'react';
import { wplusTheme } from '../../theme';

type AntdLocale = NonNullable<AntdConfigProviderProps['locale']>;
type LocaleModule = AntdLocale | { default: LocaleModule };

const unwrapLocale = (localeModule: LocaleModule): AntdLocale => {
  if (
    localeModule &&
    typeof localeModule === 'object' &&
    'default' in localeModule &&
    !('locale' in localeModule)
  ) {
    return unwrapLocale(localeModule.default);
  }

  return localeModule as AntdLocale;
};

const zhCN = unwrapLocale(zhCNRaw as LocaleModule);

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
  const useEnterpriseTheme = theme === undefined;

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
  const cssVar = theme?.cssVar ?? wplusTheme.cssVar;

  return {
    algorithm: antdTheme.defaultAlgorithm,
    ...theme,
    token,
    components,
    cssVar,
  };
};

export function ConfigProvider({
  children,
  locale = zhCN,
  theme,
  ...props
}: PropsWithChildren<ConfigProviderProps>) {
  return (
    <AntdConfigProvider {...props} locale={locale} theme={mergeTheme(theme)}>
      {children}
    </AntdConfigProvider>
  );
}
