---
title: Mentions 提及
order: 158
---

# Mentions 提及

用于在文本输入中提及人员、团队或标签。

## 组件类型

- 默认输入
- 组合输入

## 基础输入

展示 Mentions 提及 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Mentions, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Mentions
      style={{ width: 320 }}
      options={[
        { value: 'risk', label: 'risk' },
        { value: 'ops', label: 'ops' },
      ]}
    />
  </ConfigProvider>
);
```

## 组合输入 / 表单组合

展示 Mentions 提及 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Mentions, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Mentions
      rows={3}
      placeholder="输入 @ 提及团队"
      options={[{ value: 'reviewer', label: 'reviewer' }]}
    />
  </ConfigProvider>
);
```

## 表单组合

放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。

```tsx
import { ConfigProvider, Mentions, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        <Mentions
          style={{ width: 320 }}
          options={[
            { value: 'risk', label: 'risk' },
            { value: 'ops', label: 'ops' },
          ]}
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
import type { MentionProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
