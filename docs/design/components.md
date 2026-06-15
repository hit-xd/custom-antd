---
title: 组件总览
order: 110
---

# 组件总览

所有组件通过 `import { X } from 'privatebank-design'` 统一导入。按实现方式分为以下四类：

## B 类 wrapper 组件（12 个）

以下组件有独立的 `src/components/<name>/styles.css`，通过 CSS 变量 `--wplus-*` 对企业视觉规范进行精确覆盖，部分包含定制行为。

| 组件 | 定制行为 |
|------|----------|
| **Alert** | 4 种状态背景/文字色、`--wplus-radius-xs` 圆角 |
| **Breadcrumb** | 分隔符颜色/间距、链接 hover 色 |
| **Collapse** | 边框色 `#e5e6eb`、面板标题/内容色 |
| **Descriptions** | label/content 文字色 |
| **Drawer** | 标题栏 56px、标题 600 字重、遮罩背景色 |
| **Menu** | 顶部导航深色主题、侧边导航选中态+右侧指示线、行高 40px |
| **Modal** | 默认 `centered=true`、圆角+投影、Header/Footer 定高含分隔线 |
| **Pagination** | 激活/hover 态使用 `--wplus-color-button-primary` |
| **Popover** | `--wplus-radius-sm` + `--wplus-shadow-tooltip` |
| **Table** | 表头 600 字重、行 hover 背景、紧凑模式 padding |
| **Tabs** | ink bar 颜色、标签文字色、卡片式 Tab 背景 |
| **Upload** | 拖拽区边框、圆角、背景色 |

> 实现细节见各组件源码 `src/components/<name>/`。

## 纯透传组件

其余 antd 组件通过 `export * from 'antd'`（`src/index.ts`）直接透传，主题通过 `ConfigProvider` 注入。包括但不限于：

| 分类 | 组件 |
|------|------|
| 通用 | Button |
| 数据录入 | Form、Input、InputNumber、Select、DatePicker、TimePicker、Cascader、TreeSelect、Checkbox、Radio、Switch、Slider |
| 数据展示 | Card、List、Image、Statistic、Tag、Tooltip、Carousel、Avatar、Badge |
| 反馈 | Popconfirm、Progress、Result、Skeleton、Spin、Tour |
| 导航 | Layout、Steps、Anchor、BackTop |

## ConfigProvider

`ConfigProvider` 是主题注入的核心组件，默认合并 `wplusTheme`（包含 42 个 antd 组件 token + 44 个 W+ 自定义组件 token）。所有业务代码应在根节点包裹 `ConfigProvider`。

```tsx
import { ConfigProvider } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    {/* 所有子组件自动应用企业主题 */}
  </ConfigProvider>
);
```

## 业务组件（4 个）

非 antd 直接导出的业务规范通过独立业务组件承载。详见 [业务组件文档](/business/error-block)。

| 组件 | 用途 |
|------|------|
| **ErrorBlock** | 列表/表格/日历/业务区块空态反馈 |
| **Status** | 表格/详情页/流程节点轻量状态展示 |
| **DetailPageHeader** | 详情页顶部区域（面包屑、标题、操作按钮） |
| **ApprovalProgressSteps** | 审批流程节点展示（驳回原因、附件、审批意见） |
