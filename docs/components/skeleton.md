---
title: Skeleton 骨架屏
order: 131
---

# Skeleton 骨架屏

用于内容加载期间保持页面结构稳定。

`Skeleton` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdSkeleton.md`。

## 组件类型

- 基础骨架
- 头像
- 按钮
- 输入框
- 加载切换

## 基础用法

```tsx
import { ConfigProvider, Skeleton, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Skeleton active />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Skeleton, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space direction="vertical">
      <Skeleton.Avatar active />
      <Skeleton.Input active />
      <Skeleton.Button active />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { SkeletonProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
