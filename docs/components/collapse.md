---
title: Collapse 折叠面板
order: 116
---

# Collapse 折叠面板

用于分组收纳较长内容。

`Collapse` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Collapse  折叠面板样式.md`。

## 组件类型

- 基础面板
- 手风琴
- 无边框
- 禁用面板

## 基础用法

```tsx
import { ConfigProvider, Collapse, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Collapse
      items={[
        { key: '1', label: '客户基本信息', children: '展示客户身份和联系方式。' },
        { key: '2', label: '风险评估', children: '展示风险等级和有效期。' },
      ]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Collapse, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Collapse
      accordion
      bordered={false}
      items={[
        { key: '1', label: '资产概览', children: '总资产 1,280 万元。' },
        { key: '2', label: '持仓明细', children: '共持有 12 项产品。' },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { CollapseProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
