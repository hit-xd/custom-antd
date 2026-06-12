---
title: Descriptions 描述列表
order: 117
---

# Descriptions 描述列表

用于展示对象的多个只读字段。

`Descriptions` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Descriptions  描述列表样式.md`。

## 组件类型

- 基础描述
- 带边框
- 多列布局
- 响应式

## 基础用法

```tsx
import { ConfigProvider, Descriptions, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Descriptions
      items={[
        { key: '1', label: '客户名称', children: '张先生' },
        { key: '2', label: '风险等级', children: '稳健型' },
      ]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Descriptions, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Descriptions
      bordered
      column={2}
      items={[
        { key: '1', label: '客户编号', children: 'C-20260001' },
        { key: '2', label: '所属机构', children: '上海分行' },
        { key: '3', label: '资产规模', children: '1,280 万元' },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { DescriptionsProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
