import type { ConfigProviderProps as AntdConfigProviderProps, ThemeConfig } from 'antd';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import zhCNRaw from 'antd/locale/zh_CN.js';
import React, { type PropsWithChildren } from 'react';
import { wplusTheme } from '../../theme';

type AntdLocale = NonNullable<AntdConfigProviderProps['locale']>;
type LocaleModule = AntdLocale | { default: LocaleModule };
type CssVarConfig = Exclude<NonNullable<ThemeConfig['cssVar']>, boolean>;

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

const getDefaultCssVar = (): CssVarConfig =>
  typeof wplusTheme.cssVar === 'object' && wplusTheme.cssVar
    ? wplusTheme.cssVar
    : { prefix: 'wplus', key: 'wplus' };

export const shouldEnableAntdCssVar = (reactVersion = React.version) => {
  const major = Number.parseInt(reactVersion.split('.')[0] ?? '', 10);

  return Number.isFinite(major) && major >= 18;
};

export const resolveAntdCssVar = (reactVersion = React.version): ThemeConfig['cssVar'] =>
  shouldEnableAntdCssVar(reactVersion) ? getDefaultCssVar() : undefined;

const omitCssVar = (theme?: ThemeConfig): ThemeConfig | undefined => {
  if (!hasOwnThemeKey(theme, 'cssVar')) {
    return theme;
  }

  const themeWithoutCssVar = { ...theme };
  delete themeWithoutCssVar.cssVar;

  return themeWithoutCssVar;
};

const mergeTheme = (theme?: ThemeConfig): ThemeConfig => {
  const hasCustomToken = hasOwnThemeKey(theme, 'token');
  const hasCustomComponents = hasOwnThemeKey(theme, 'components');
  const useEnterpriseTheme = theme === undefined;
  const themeWithoutCssVar = omitCssVar(theme);

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
  const cssVar = resolveAntdCssVar();

  return {
    algorithm: antdTheme.defaultAlgorithm,
    ...themeWithoutCssVar,
    token,
    components,
    ...(cssVar ? { cssVar } : {}),
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
