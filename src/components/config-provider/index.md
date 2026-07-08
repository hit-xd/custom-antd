---
title: ConfigProvider
order: 1
---

# ConfigProvider

包装 Ant Design v5 的 ConfigProvider，默认注入企业级主题 token，其他能力与 antd 保持兼容。

## 组件类型

- 默认企业主题
- 覆盖主题 token
- 不使用定制主题
- 默认组件主题
- 表单文案

## 默认企业主题

```tsx
import { ConfigProvider, Button } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Button type="primary">提交</Button>
  </ConfigProvider>
);
```

## 覆盖主题

默认启用 W+ 主题 token；Ant Design `theme.cssVar` 由包装版按 React 版本统一控制：React 17 下不启用，React 18/19 下使用 W+ 默认 cssVar 配置。

```tsx
import { ConfigProvider, Button } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <ConfigProvider theme={{ token: { colorPrimary: '#8A642D' } }}>
      <Button type="primary">提交申请</Button>
    </ConfigProvider>
  </ConfigProvider>
);
```

## 不使用定制主题

显式传入空 `theme` 对象时不会注入企业主题配置。

```tsx
import { ConfigProvider, Button, Space, Table } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <ConfigProvider theme={{}}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button type="primary">Ant Design 默认主按钮</Button>
        <Table
          pagination={false}
          columns={[{ title: '客户', dataIndex: 'name' }]}
          dataSource={[{ key: '1', name: '张先生' }]}
        />
      </Space>
    </ConfigProvider>
  </ConfigProvider>
);
```

## 默认组件主题

未传 `theme.components` 时，组件默认使用 W+ 组件级 token。

```tsx
import { ConfigProvider, Button, Space, Table } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button type="primary">新增客户</Button>
      <Table
        pagination={false}
        columns={[{ title: '客户', dataIndex: 'name' }]}
        dataSource={[{ key: '1', name: '张先生' }]}
      />
    </Space>
  </ConfigProvider>
);
```

## 表单文案

```tsx
import { ConfigProvider, Button, Form, Input } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <ConfigProvider form={{ validateMessages: { required: '请填写${label}' } }}>
      <Form layout="inline">
        <Form.Item label="客户名称" name="name" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </ConfigProvider>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { ConfigProviderProps } from '@lf39.03/antd';
```

业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
