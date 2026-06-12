---
title: Tabs 标签页
order: 135
---

# Tabs 标签页

用于在同一层级的内容视图之间切换。

`Tabs` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/tabs-Style-Spec.md`。

## 组件类型

- 一级标签
- 二级卡片标签
- 可编辑标签
- 禁用状态

## 基础用法

```tsx
import { ConfigProvider, Tabs, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Tabs
      items={[
        { key: '1', label: '客户概览', children: '客户概览内容' },
        { key: '2', label: '资产持仓', children: '资产持仓内容' },
      ]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Tabs, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Tabs
      type="card"
      items={[
        { key: '1', label: '待处理', children: '待处理任务' },
        { key: '2', label: '已完成', children: '已完成任务' },
        { key: '3', label: '已关闭', disabled: true, children: '' },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { TabsProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
