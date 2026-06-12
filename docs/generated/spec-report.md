---
title: 规范解析报告
order: 120
---

# 规范解析报告

本页由 `pnpm spec:sync` 自动生成，用于检查新版 Markdown 规范解析结果。

## 已识别

- 规范文件：55 个
- 品牌色：10 项
- 数据色：10 项
- 渐变色：3 项
- 投影：4 项
- 圆角：5 项
- 间距：7 项
- 字体层级：9 项
- 图片比例：5 项
- 自动导出组件：42 个
- 独立组件文档：44 个
- CSS 覆盖：Modal、Drawer、Alert、Popconfirm、Popover、Collapse、Descriptions、Tabs、Pagination、Upload 等
- 业务组件：ErrorBlock、Status、DetailPageHeader、ApprovalProgressSteps

## 低置信度项

- 无

## 处理原则

- 能稳定映射到 Ant Design v5 token 的规则进入 `ThemeConfig`。
- antd token 无法表达的 DOM 级细节进入生成 CSS 覆盖。
- 非 antd 直接导出的业务规范通过业务组件承载。
