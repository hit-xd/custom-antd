---
title: Pagination 分页
order: 134
---

# Pagination 分页

用于在大量列表数据之间切换页面。

`Pagination` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/pagination-Style-Spec.md`。

## 组件类型

- 基础分页
- 完整分页
- 小尺寸
- 简洁模式

## 基础用法

```tsx
import { ConfigProvider, Pagination, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Pagination defaultCurrent={1} total={120} />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Pagination, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space direction="vertical">
      <Pagination showSizeChanger showQuickJumper total={500} />
      <Pagination size="small" simple total={120} />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { PaginationProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
