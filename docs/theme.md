---
title: 主题定制
order: 2
---

# 主题定制

`privatebank-design` 的主题体系基于 `src/theme/tokens/` 下的三层架构：原始 token（primitive）→ 语义 token（semantic）→ antd 映射 token，最终通过 `wplusTheme` 统一导出，包装版 `ConfigProvider` 会默认合并该主题。

当前主题已从新版 `ui-spec/` 提取以下设计规范：

| 规范文件 | 落地 token 文件 | 说明 |
|---|---|---|
| `全局规范/Color.style.md` | `primitive-tokens.ts` + `semantic-tokens.ts` | 品牌色阶、功能色、数据色、渐变色 |
| `全局规范/Container.style.md` | `semantic-tokens.ts`（`CONTAINER_TOKENS`） | 容器圆角、阴影、边框、背景 |
| `全局规范/Typography.style.md` | `primitive-tokens.ts`（`TYPOGRAPHY_TOKENS`） | 字体族、字号、行高、字重 |
| `全局规范/AntdLayout.md` | `primitive-tokens.ts`（`wplusSpacing`） | 4px 间距体系、布局尺寸 |
| 组件规范（数据录入/样式/反馈/导航） | `antd-component-tokens.ts` + `wplus-component-tokens.ts` | 42 个 antd 组件 + 44 个 W+ 自定义组件 token |

## 内置 token

```tsx
import { ConfigProvider } from 'privatebank-design';
import {
  privateBankingPrimitiveTokens,
  privateBankingSemanticTokens,
  wplusTheme,
} from 'privatebank-design';

// 使用原始 token（品牌色阶、圆角、字体等）
console.log(privateBankingPrimitiveTokens.BRAND_6); // '#c5a267'

// 使用语义 token（业​​务含义层）
console.log(privateBankingSemanticTokens.COLOR_PRIMARY); // 映射自 BRAND_6

export default () => (
  <ConfigProvider theme={wplusTheme}>
    {/* 组件自动应用企业主题 */}
  </ConfigProvider>
);
```

## 覆盖主题

```tsx
import { Button, ConfigProvider } from 'privatebank-design';
import { wplusTheme } from 'privatebank-design';

// 在 wplusTheme 基础上覆盖（使用对象 spread 做浅合并）
const customTheme = {
  ...wplusTheme,
  token: {
    ...wplusTheme.token,
    colorPrimary: '#0052d9',
    borderRadius: 6,
  },
};

export default () => (
  <ConfigProvider theme={customTheme}>
    <Button type="primary">企业主按钮</Button>
  </ConfigProvider>
);
```

> 若需深度合并组件级 token，可使用 `lodash/merge` 或自行递归合并——antd v5 的 `ThemeConfig` 对 `components` 字段仅支持浅合并。

## CSS 变量

引入 `privatebank-design` 后，`src/styles/css-variables.css` 中定义的 CSS 变量会自动注入，无需手动引入。所有变量使用 `--wplus-` 前缀。

主要可用变量分组如下：

### 颜色

```css
/* 品牌色 */
--wplus-brand-1 ~ --wplus-brand-7
--wplus-color-primary / --wplus-color-primary-hover / --wplus-color-primary-active

/* 功能色 */
--wplus-color-success / --wplus-color-warning / --wplus-color-error / --wplus-color-info

/* 文字色 */
--wplus-color-text-heading / --wplus-color-text-body / --wplus-color-text-secondary / --wplus-color-text-disabled

/* 背景色 */
--wplus-color-bg-page / --wplus-color-bg-container / --wplus-color-bg-module
--wplus-color-bg-success / --wplus-color-bg-error / --wplus-color-bg-info / --wplus-color-bg-warning

/* 边框 */
--wplus-color-border / --wplus-color-border-strong / --wplus-color-split
```

### 圆角

```css
--wplus-radius-xs: 2px;
--wplus-radius-sm: 4px;
--wplus-radius-md: 6px;
--wplus-radius-lg: 8px;
--wplus-radius-round: 999px; /* 胶囊形 */
```

### 间距（4px 基数）

```css
--wplus-space-xs: 4px;
--wplus-space-sm: 8px;
--wplus-space-md: 12px;
--wplus-space-lg: 16px;
--wplus-space-xl: 20px;
--wplus-space-xxl: 24px;
--wplus-space-xxxl: 30px;
```

### 使用示例

```css
.page {
  background: var(--wplus-color-bg-page);
  border-radius: var(--wplus-radius-md);
  padding: var(--wplus-space-xl);
}

.header {
  background: var(--wplus-color-nav-top-bg);
  color: var(--wplus-color-nav-top-text);
}
```

> 完整 CSS 变量定义见 `src/styles/css-variables.css`。

组件级细节优先通过 antd token 落地；无法稳定映射的交互、热区和组合布局保留在规范文档中，后续通过包装组件或业务组件沉淀。

## tokens 目录结构

所有 token 定义集中在 `src/theme/tokens/` 下：

```
src/theme/tokens/
├── index.ts                       — barrel 入口，re-export 全部模块
├── primitive-tokens.ts            — 原始 token：品牌色阶、圆角、字体、阴影、间距（wplusSpacing）、排版
├── semantic-tokens.ts             — 语义 token：功能色、文字色、背景色、容器色（CONTAINER_TOKENS）、页头/锚点/标签页/步骤条色系
├── antd-tokens.ts                 — Ant Design 全局 seed Token（colorPrimary、borderRadius、fontFamily 等）
├── antd-component-tokens.ts       — 42 个 antd 组件的组件级 Token
└── wplus-component-tokens.ts      — 44 个 W+ 自定义组件的 Token（非 antd 标准 token）
```

`src/theme/index.ts` 将 `antd-tokens` 与 `antd-component-tokens` 组合为 `wplusTheme`，直接传递给 `ConfigProvider` 的 `theme` 属性即可使用。
