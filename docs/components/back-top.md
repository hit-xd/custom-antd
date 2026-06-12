---
title: BackTop 回到顶部
order: 139
---

# BackTop 回到顶部

用于长页面快速返回顶部。

`BackTop` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/backtop-Style-Spec.md`。

## 组件类型

- 基础回顶
- 自定义可见高度
- 自定义位置

## 基础用法

```tsx
import { ConfigProvider, FloatButton } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <div style={{ height: 120, overflow: 'auto' }}>
      <div style={{ height: 360 }}>滚动区域示例</div>
      <FloatButton.BackTop />
    </div>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, FloatButton } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <FloatButton.BackTop visibilityHeight={100} />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { FloatButtonProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
