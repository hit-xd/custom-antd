---
title: 主题定制
order: 2
---

# 主题定制

`privatebank-design` 通过 `wplusTheme` 统一维护企业主题，并在包装版 `ConfigProvider` 中默认合并。

当前主题以 `src/theme/tokens` 为事实来源：

| 源码文件                                     | 落地方式                                         |
| -------------------------------------------- | ------------------------------------------------ |
| `src/theme/tokens/primitive-tokens.ts`       | 品牌色、数据色、渐变、圆角、阴影、间距和字体层级 |
| `src/theme/tokens/semantic-tokens.ts`        | 业务语义色、文字色、背景色、边框色               |
| `src/theme/tokens/antd-tokens.ts`            | Ant Design 全局 token                            |
| `src/theme/tokens/antd-component-tokens.ts`  | Ant Design 组件级 token                          |
| `src/theme/tokens/wplus-component-tokens.ts` | W+ 组件语义 token                                |

## 内置 token

```tsx
import { BRAND_COLORS, Button, ConfigProvider } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Button type="primary">{BRAND_COLORS.brand7}</Button>
  </ConfigProvider>
);
```

## 覆盖主题

```tsx
import { Button, ConfigProvider } from 'privatebank-design';

export default () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#0052d9', borderRadius: 6 } }}>
    <Button type="primary">企业主按钮</Button>
  </ConfigProvider>
);
```

## 复用完整主题

```tsx
import { Button, ConfigProvider, wplusTheme } from 'privatebank-design';

export default () => (
  <ConfigProvider theme={wplusTheme}>
    <Button type="primary">W+ 主题按钮</Button>
  </ConfigProvider>
);
```

## CSS 变量

引入 `privatebank-design/reset.css` 后可使用基础 CSS 变量：

```css
.page {
  background: var(--wplus-color-bg-page);
  padding: var(--wplus-layout-content-padding);
}

.cover {
  aspect-ratio: var(--wplus-image-ratio-widescreen);
  border-radius: var(--wplus-radius-md);
}
```
