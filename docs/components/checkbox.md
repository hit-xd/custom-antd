---
title: Checkbox 多选框
order: 110
---

# Checkbox 多选框

用于在多个独立选项中选择任意数量的值。

`Checkbox` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Checkbox.dev.md`。

## 组件类型

- 基础多选
- 多选组
- 全选与半选
- 禁用状态

## 基础多选

展示 Checkbox 多选框 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Checkbox, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Checkbox defaultChecked>接收风险提醒</Checkbox>
  </ConfigProvider>
);
```

## 多选组 / 全选与半选 / 禁用状态

展示 Checkbox 多选框 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Checkbox, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Checkbox.Group options={['重点客户', '高净值客户', '机构客户']} defaultValue={['重点客户']} />
  </ConfigProvider>
);
```

## 表单组合

放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。

```tsx
import { ConfigProvider, Checkbox, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        <Checkbox defaultChecked>接收风险提醒</Checkbox>
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
import type { CheckboxProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
