---
title: 实现状态
order: 120
---

# 实现状态

反映 `ui-spec/` 设计规范在当前代码中的落地情况，手动维护。

## 主题 Token

| 规范文件 | 落地文件 | 状态 |
|----------|----------|------|
| `全局规范/Color.style.md` | `src/theme/tokens/primitive-tokens.ts` + `semantic-tokens.ts` | ✅ 已落地 |
| `全局规范/Container.style.md` | `src/theme/tokens/semantic-tokens.ts`（`CONTAINER_TOKENS`） | ✅ 已落地 |
| `全局规范/Typography.style.md` | `src/theme/tokens/primitive-tokens.ts`（`TYPOGRAPHY_TOKENS`） | ✅ 已落地 |
| `全局规范/AntdLayout.md` | `src/theme/tokens/primitive-tokens.ts`（`wplusSpacing`） | ✅ 已落地 |

## 组件覆盖

### B 类 wrapper（独立 CSS + 定制行为，12 个）

Modal、Drawer、Table、Menu、Tabs、Alert、Pagination、Popover、Collapse、Descriptions、Upload、Breadcrumb

### antd 透传（41 个）

通过 `src/index.ts` 的 `export * from 'antd'` 直接透传，主题由 `ConfigProvider` 注入。

### 业务组件（4 个）

ErrorBlock、Status、DetailPageHeader、ApprovalProgressSteps

## CSS 变量

定义在 `src/styles/css-variables.css`，以 `--wplus-` 为前缀，覆盖颜色（品牌色/功能色/文字色/背景色/边框色/导航色）、圆角（5 级）、间距（7 级）、阴影（5 种）、字体、布局尺寸。通过 `src/reset.css` → `src/index.ts` 自动注入。

## 处理原则

- **ThemeConfig 映射**：能稳定映射到 Ant Design v5 token 的规范进入 `antd-tokens.ts` / `antd-component-tokens.ts`。
- **CSS 覆盖**：antd token 无法表达的 DOM 级细节通过组件独立 `styles.css`（B 类 wrapper）覆盖。
- **业务组件**：非 antd 直接导出的业务规范通过 `src/business/` 独立组件承载。
