---
title: AutoComplete 自动完成
order: 156
---

# AutoComplete 自动完成

用于在输入过程中提供匹配建议。

## 组件类型

- 默认输入
- 组合输入

## 基础输入

展示 AutoComplete 自动完成 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, AutoComplete, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <AutoComplete
      style={{ width: 240 }}
      options={[{ value: '客户A' }, { value: '客户B' }]}
      placeholder="搜索客户"
    />
  </ConfigProvider>
);
```

## 组合输入 / 表单组合

展示 AutoComplete 自动完成 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, AutoComplete, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <AutoComplete
      style={{ width: 280 }}
      allowClear
      options={[{ value: '上海分行' }, { value: '北京分行' }]}
      placeholder="输入机构名称"
    />
  </ConfigProvider>
);
```

## 表单组合

放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。

```tsx
import { ConfigProvider, AutoComplete, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        <AutoComplete
          style={{ width: 240 }}
          options={[{ value: '客户A' }, { value: '客户B' }]}
          placeholder="搜索客户"
        />
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
import type { AutoCompleteProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
