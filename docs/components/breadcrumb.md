---
title: Breadcrumb 面包屑
order: 137
---

# Breadcrumb 面包屑

用于展示当前页面在信息层级中的位置。

`Breadcrumb` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/breadcrumb-Style-Spec.md`。

## 组件类型

- 基础路径
- 带链接
- 下拉菜单
- 自定义分隔符

## 基础用法

```tsx
import { ConfigProvider, Breadcrumb, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Breadcrumb items={[{ title: '客户管理' }, { title: '客户列表' }, { title: '客户详情' }]} />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Breadcrumb, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Breadcrumb
      separator=">"
      items={[
        { title: <a href="#">首页</a> },
        { title: <a href="#">审批中心</a> },
        { title: '审批详情' },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { BreadcrumbProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
