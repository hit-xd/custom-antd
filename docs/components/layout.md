---
title: Layout 布局
order: 133
---

# Layout 布局

用于构建企业后台的页面整体骨架。

`Layout` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`全局规范/AntdLayout.md`。

## 组件类型

- 顶部布局
- 侧边布局
- 顶侧布局
- 可折叠侧栏

## 基础用法

```tsx
import { ConfigProvider, Layout, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Layout style={{ minHeight: 180 }}>
      <Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header>
      <Layout.Content style={{ padding: 24 }}>内容区</Layout.Content>
    </Layout>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Layout, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Layout style={{ minHeight: 220 }}>
      <Layout.Sider width={160}>侧边导航</Layout.Sider>
      <Layout>
        <Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header>
        <Layout.Content style={{ padding: 24 }}>内容区</Layout.Content>
      </Layout>
    </Layout>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { LayoutProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
