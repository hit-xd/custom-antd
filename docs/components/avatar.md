---
title: Avatar 头像
order: 113
---

# Avatar 头像

用于展示用户、机构或对象的头像标识。

`Avatar` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Avatar  头像样式.md`。

## 组件类型

- 图片头像
- 字符头像
- 方形头像
- 组合头像

## 基础用法

```tsx
import { ConfigProvider, Avatar, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Avatar>张</Avatar>
      <Avatar shape="square">企</Avatar>
      <Avatar size="large">VIP</Avatar>
    </Space>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Avatar, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Avatar.Group max={{ count: 3 }}>
      <Avatar>A</Avatar>
      <Avatar>B</Avatar>
      <Avatar>C</Avatar>
      <Avatar>D</Avatar>
    </Avatar.Group>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { AvatarProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
