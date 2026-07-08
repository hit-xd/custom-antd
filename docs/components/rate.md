---
title: Rate 评分
order: 159
---

# Rate 评分

用于展示或录入评分等级。

## 组件类型

- 默认输入
- 组合输入

## 基础输入

展示 Rate 评分 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Rate, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Rate defaultValue={3} />
  </ConfigProvider>
);
```

## 组合输入 / 表单组合

展示 Rate 评分 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Rate, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Rate allowHalf defaultValue={4.5} />
  </ConfigProvider>
);
```

## 表单组合

放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。

```tsx
import { ConfigProvider, Rate, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        <Rate defaultValue={3} />
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
import type { RateProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
