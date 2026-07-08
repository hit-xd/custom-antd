---
title: Avatar 头像
order: 116
---

# Avatar 头像

用于展示用户、机构或对象的头像标识。

`Avatar` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Avatar  头像样式.md`。

## 组件类型

- 图片头像
- 字符头像
- 方形头像
- 组合头像

## 图片头像

展示 Avatar 头像 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Avatar, Space } from '@lf39.03/antd';

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

## 字符头像 / 方形头像 / 组合头像

展示 Avatar 头像 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Avatar, Space } from '@lf39.03/antd';

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

## 容器展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Avatar, Space, Card, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      <Space>
        <Avatar>张</Avatar>
        <Avatar shape="square">企</Avatar>
        <Avatar size="large">VIP</Avatar>
      </Space>
      <Typography.Paragraph type="secondary" style={{ marginTop: 12, marginBottom: 0 }}>
        用于展示客户、产品、审批等业务信息。
      </Typography.Paragraph>
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { AvatarProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
