---
title: Input 输入框
order: 103
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

## 基础输入框

用于录入单行文本、客户名称和查询关键字。

```tsx
import { ConfigProvider, Input } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Input placeholder="请输入客户名称" />
  </ConfigProvider>
);
```

## 前后缀

用于在输入内容前后补充语义、单位或操作入口。

```tsx
import { ConfigProvider, Input, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: 360 }}>
      <Input addonBefore="https://" placeholder="请输入地址" />
      <Input prefix="￥" suffix="万元" placeholder="请输入资产规模" />
    </Space>
  </ConfigProvider>
);
```

## 搜索框

查询场景使用 Search 承载关键词提交。

```tsx
import { ConfigProvider, Input } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Input.Search style={{ width: 360 }} placeholder="搜索客户" enterButton />
  </ConfigProvider>
);
```

## 密码框

敏感信息录入使用 Password，保留显示/隐藏能力。

```tsx
import { ConfigProvider, Input } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Input.Password style={{ width: 360 }} placeholder="请输入密码" />
  </ConfigProvider>
);
```

## Textarea

较长说明、审批意见和备注使用多行输入。

```tsx
import { ConfigProvider, Input } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Input.TextArea rows={3} showCount maxLength={100} placeholder="请输入审批意见" />
  </ConfigProvider>
);
```

## 状态

校验失败或风险提示可通过 status 表达。

```tsx
import { ConfigProvider, Input, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: 360 }}>
      <Input status="error" placeholder="错误状态" />
      <Input status="warning" placeholder="警告状态" />
      <Input disabled placeholder="禁用状态" />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { InputProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
