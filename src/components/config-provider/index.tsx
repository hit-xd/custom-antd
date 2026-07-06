import type { ConfigProviderProps as AntdConfigProviderProps, ThemeConfig } from 'antd';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import zhCNRaw from 'antd/locale/zh_CN.js';
import React, { type PropsWithChildren } from 'react';
import { wplusTheme } from '../../theme';

type AntdLocale = NonNullable<AntdConfigProviderProps['locale']>;
type LocaleModule = AntdLocale | { default: LocaleModule };
type CssVarConfig = Exclude<NonNullable<ThemeConfig['cssVar']>, boolean>;

let cssVarKeySeed = 0;

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

const createCssVarFallbackKey = () => {
  cssVarKeySeed += 1;

  return `wplus-theme-${cssVarKeySeed}`;
};

const getDefaultCssVar = (): CssVarConfig =>
  typeof wplusTheme.cssVar === 'object' && wplusTheme.cssVar
    ? wplusTheme.cssVar
    : { prefix: 'wplus', key: 'wplus' };

const normalizeCssVar = (
  cssVar: ThemeConfig['cssVar'] | undefined,
  getFallbackKey: () => string,
): ThemeConfig['cssVar'] => {
  if (cssVar === undefined) {
    return getDefaultCssVar();
  }

  if (cssVar === false) {
    return false;
  }

  if (cssVar === true) {
    return {
      ...getDefaultCssVar(),
      key: getFallbackKey(),
    };
  }

  return cssVar.key
    ? cssVar
    : {
        ...cssVar,
        key: getFallbackKey(),
      };
};

const mergeTheme = (theme: ThemeConfig | undefined, getFallbackKey: () => string): ThemeConfig => {
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
  const cssVar = normalizeCssVar(theme?.cssVar, getFallbackKey);

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
  const cssVarKeyRef = React.useRef<string>();
  const getFallbackKey = () => {
    if (!cssVarKeyRef.current) {
      cssVarKeyRef.current = createCssVarFallbackKey();
    }

    return cssVarKeyRef.current;
  };

  return (
    <AntdConfigProvider {...props} locale={locale} theme={mergeTheme(theme, getFallbackKey)}>
      {children}
    </AntdConfigProvider>
  );
}
