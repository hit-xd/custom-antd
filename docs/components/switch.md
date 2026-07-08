---
title: Switch 开关
order: 112
---

# Switch 开关

用于立即切换两个互斥状态。

`Switch` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Switch.dev.md`。

## 组件类型

- 基础开关
- 文字开关
- 加载状态
- 禁用状态

## 基础开关

展示 Switch 开关 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Switch, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Switch defaultChecked />
  </ConfigProvider>
);
```

## 文字开关 / 加载状态 / 禁用状态

展示 Switch 开关 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Switch, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Switch checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
      <Switch loading />
      <Switch disabled />
    </Space>
  </ConfigProvider>
);
```

## 表单组合

放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。

```tsx
import { ConfigProvider, Switch, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        <Switch defaultChecked />
      </Form.Item>
      <Form.Item>
        <Button type="primary">查询</Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { SwitchProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
