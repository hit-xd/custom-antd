import { ConfigProvider as AntdConfigProvider } from 'antd';
import React from 'react';
import { ConfigProvider } from './config-provider';

let staticThemeInitialized = false;

export const ensureStaticTheme = () => {
  if (staticThemeInitialized) {
    return;
  }

  AntdConfigProvider.config({
    holderRender: (children) => <ConfigProvider>{children}</ConfigProvider>,
  });

  staticThemeInitialized = true;
};

export const withStaticTheme = <T extends (...args: never[]) => unknown>(method: T): T =>
  ((...args: Parameters<T>): ReturnType<T> => {
    ensureStaticTheme();

    return method(...args) as ReturnType<T>;
  }) as T;

export const resetStaticThemeForTests = () => {
  staticThemeInitialized = false;
};
