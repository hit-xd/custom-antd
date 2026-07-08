---
title: Transfer 穿梭框
order: 144
---

# Transfer 穿梭框

用于在两个列表之间移动选项。

## 组件类型

- 默认输入
- 组合输入

## 基础输入

展示 Transfer 穿梭框 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Transfer, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Transfer
      dataSource={[
        { key: '1', title: '客户资料' },
        { key: '2', title: '资产信息' },
      ]}
      targetKeys={['2']}
      render={(item) => item.title ?? ''}
    />
  </ConfigProvider>
);
```

## 组合输入 / 表单组合

展示 Transfer 穿梭框 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Transfer, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Transfer
      oneWay
      dataSource={[
        { key: '1', title: '待分配客户' },
        { key: '2', title: '重点客户' },
      ]}
      targetKeys={['2']}
      render={(item) => item.title ?? ''}
    />
  </ConfigProvider>
);
```

## 表单组合

放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。

```tsx
import { ConfigProvider, Transfer, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        <Transfer
          dataSource={[
            { key: '1', title: '客户资料' },
            { key: '2', title: '资产信息' },
          ]}
          targetKeys={['2']}
          render={(item) => item.title ?? ''}
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
import type { TransferProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
