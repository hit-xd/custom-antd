---
title: Input 输入框
order: 100
---

# Input 输入框

用于录入单行文本、密码、搜索条件和多行说明。

`Input` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Input.dev.md`。

## 组件类型

- 基础输入框
- 前后缀输入框
- 搜索框
- 密码框
- Textarea
- 禁用与校验状态

## 基础用法

```tsx
import { ConfigProvider, Input, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Input placeholder="请输入客户名称" />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Input, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: 360 }}>
      <Input.Search placeholder="搜索客户" enterButton />
      <Input.Password placeholder="请输入密码" />
      <Input.TextArea rows={3} showCount maxLength={100} placeholder="请输入说明" />
      <Input status="error" placeholder="校验失败状态" />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { InputProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
