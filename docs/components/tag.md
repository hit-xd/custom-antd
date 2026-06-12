---
title: Tag 标签
order: 121
---

# Tag 标签

用于标记对象属性、分类和状态。

`Tag` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Tag  标签样式.md`。

## 组件类型

- 基础标签
- 状态色
- 可关闭
- 可选择

## 基础用法

```tsx
import { ConfigProvider, Tag, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space>
      <Tag>默认</Tag>
      <Tag color="success">已完成</Tag>
      <Tag color="warning">待审核</Tag>
      <Tag color="error">异常</Tag>
    </Space>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Tag, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space>
      <Tag closable>重点客户</Tag>
      <Tag.CheckableTag checked>已选标签</Tag.CheckableTag>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { TagProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
