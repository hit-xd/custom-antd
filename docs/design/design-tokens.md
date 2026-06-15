---
title: 设计 Token
order: 100
---

# 设计 Token

本页反映 `src/theme/tokens/` 当前实际值，手动维护。

## 品牌色

10 级金色品牌色阶，主色 `BRAND_6 = #C5A267`，映射为语义 token `COLOR_PRIMARY`。

| Token | Value | 语义映射 |
|-------|-------|----------|
| `BRAND_1` | `#FFFCF0` | 品牌浅底 |
| `BRAND_2` | `#F7F4E9` | |
| `BRAND_3` | `#DFCFB4` | |
| `BRAND_4` | `#DED3BA` | |
| `BRAND_5` | `#D1BB8E` | `COLOR_PRIMARY_HOVER` |
| `BRAND_6` | `#C5A267` | `COLOR_PRIMARY`（主色） |
| `BRAND_7` | `#B0915C` | `COLOR_PRIMARY_ACTIVE` |
| `BRAND_8` | `#785A32` | |
| `BRAND_9` | `#523A1E` | |
| `BRAND_10` | `#2B1D10` | 最深 |

## 功能色

| Token | Value | CSS 变量 |
|-------|-------|----------|
| `COLOR_INFO` | `#1874FF` | `--wplus-color-info` |
| `COLOR_SUCCESS` | `#00C078` | `--wplus-color-success` |
| `COLOR_WARNING` | `#FFA000` | `--wplus-color-warning` |
| `COLOR_ERROR` | `#FF4D4F` | `--wplus-color-error` |

## 圆角

| Token | Value | 用途 |
|-------|-------|------|
| `BORDER_RADIUS_XS` | `2px` | 微圆角 |
| `BUTTON_BORDER_RADIUS` | `2px` | 按钮 |
| `TAG_BORDER_RADIUS` | `2px` | 标签 |
| `BORDER_RADIUS` | `4px` | 基础 |
| `CONTROL_BORDER_RADIUS` | `4px` | 输入控件 |
| `CHOICE_CONTROL_BORDER_RADIUS` | `4px` | 选择控件 |
| `CARD_BORDER_RADIUS` | `6px` | 卡片 |
| `SURFACE_BORDER_RADIUS` | `6px` | 数据展示/反馈 |
| `LAYER_BORDER_RADIUS` | `8px` | 弹窗/承载容器 |
| `BORDER_RADIUS_LG` | `8px` | 大圆角 |
| `BORDER_RADIUS_XL` | `999px` | 胶囊形 |

## 间距体系（4px 基数）

定义在 `primitive-tokens.ts` 的 `wplusSpacing` 对象中，按场景分层。

### 通用间距

| CSS 变量 | Value |
|----------|-------|
| `--wplus-space-xs` | `4px` |
| `--wplus-space-sm` | `8px` |
| `--wplus-space-md` | `12px` |
| `--wplus-space-lg` | `16px` |
| `--wplus-space-xl` | `20px` |
| `--wplus-space-xxl` | `24px` |
| `--wplus-space-xxxl` | `30px` |

### 场景间距

各场景（layout / sidebar / tabs / search / toolbar / table / pagination / alert / modal）在 `wplusSpacing` 中有独立子对象，覆盖 margin、padding、gutter 等维度。

## 字体

| Token | Value | CSS 变量 |
|-------|-------|----------|
| `FONT_FAMILY` | `"Helvetica Neue", Helvetica, "PingFang SC", "Microsoft YaHei", sans-serif` | `--wplus-font-family` |
| `FONT_SIZE_BASE` | `14px` | `--wplus-font-size-base` |
| `FONT_SIZE_SM` | `12px` | `--wplus-font-size-sm` |
| `FONT_SIZE_LG` | `16px` | `--wplus-font-size-lg` |
| `FONT_SIZE_XL` | `20px` | `--wplus-font-size-xl` |
| `LINE_HEIGHT_BASE` | `1.5714` (22/14) | `--wplus-line-height-base` |

## CSS 变量体系（`--wplus-*`）

所有变量定义在 `src/styles/css-variables.css`，引入包后自动注入。

### 颜色

```css
--wplus-brand-1 ~ --wplus-brand-7        /* 品牌色阶 */
--wplus-color-primary / -hover / -active  /* 主色 */
--wplus-color-success / warning / error / info   /* 功能色 */
--wplus-color-text-heading / body / secondary / disabled  /* 文字色 */
--wplus-color-bg-page / container / module   /* 背景色 */
--wplus-color-bg-success / error / info / warning  /* 状态背景 */
--wplus-color-border / border-strong / split   /* 边框/分割线 */
--wplus-color-nav-top-bg / text / text-selected  /* 顶部导航 */
--wplus-color-nav-side-text / -hover / -selected / -indicator  /* 侧边导航 */
```

### 圆角

```css
--wplus-radius-xs: 2px;
--wplus-radius-sm: 4px;
--wplus-radius-md: 6px;
--wplus-radius-lg: 8px;
--wplus-radius-round: 999px;
```

### 阴影

```css
--wplus-shadow-hover    /* 元素 hover 投影 */
--wplus-shadow-default  /* 元素默认投影 */
--wplus-shadow-modal    /* Modal 投影 */
--wplus-shadow-tooltip  /* Tooltip/Popover 投影 */
--wplus-shadow-header   /* 顶部导航投影 */
```

### 布局

```css
--wplus-header-height: 64px;
--wplus-sidebar-width: 208px;
--wplus-control-height: 32px;
--wplus-control-height-sm: 24px;
--wplus-control-height-lg: 40px;
```

## 组件 Token 覆盖范围

组件级 Token 分布在两个文件：

| 文件 | 覆盖数量 | 说明 |
|------|----------|------|
| `antd-component-tokens.ts` | 42 个 antd 组件 | 直接映射到 antd v5 `ThemeConfig.components` |
| `wplus-component-tokens.ts` | 44 个 W+ 自定义组件 | 非 antd 标准 token，用于 `ConfigProvider` 扩展 |

完整列表见各文件注释头部。
