---
title: Divider 分割线
order: 148
---

# Divider 分割线

用于分隔不同内容组或标记区块标题。

## 组件类型

- 默认布局
- 组合布局

## 基础布局

展示 Divider 分割线 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Divider, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Divider>分组标题</Divider>
  </ConfigProvider>
);
```

## 组合布局 / 响应式布局

展示 Divider 分割线 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Divider, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Divider orientation="left" dashed>
      客户信息
    </Divider>
  </ConfigProvider>
);
```

## 响应式布局

展示布局组件承载不同内容块时的排列和对齐效果。

```tsx
import { ConfigProvider, Divider, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ padding: 16, background: '#f4f6f8' }}>
      <Divider>分组标题</Divider>
    </div>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { DividerProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
