---
title: Form 表单
order: 101
---

# Form 表单

用于承载查询、编辑、审批等业务录入任务，API 与 Ant Design v5 保持兼容。

`Form` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Form.dev.md`。

## 组件类型

- 基础表单
- 行内查询
- 表单校验
- 禁用状态
- 表单布局

## 基础表单

用于编辑、提交和审批等结构化录入任务。

```tsx
import { ConfigProvider, Button, Form, Input, Select } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="vertical" style={{ maxWidth: 420 }}>
      <Form.Item label="客户名称" name="name" rules={[{ required: true }]}>
        <Input placeholder="请输入客户名称" />
      </Form.Item>
      <Form.Item label="客户类型" name="type">
        <Select
          options={[
            { label: '个人客户', value: 'personal' },
            { label: '机构客户', value: 'org' },
          ]}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form>
  </ConfigProvider>
);
```

## 行内表单

查询区使用 inline 布局承载筛选项和操作按钮。

```tsx
import { ConfigProvider, Button, Form, Input, Select, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="客户名称">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="状态">
        <Select
          style={{ width: 160 }}
          options={[
            { label: '全部', value: 'all' },
            { label: '处理中', value: 'processing' },
          ]}
        />
      </Form.Item>
      <Space>
        <Button type="primary">查询</Button>
        <Button>重置</Button>
      </Space>
    </Form>
  </ConfigProvider>
);
```

## 表单校验

通过 rules 配置必填、格式和业务校验反馈。

```tsx
import { ConfigProvider, Button, Form, Input } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item label="联系人" name="owner" rules={[{ required: true, message: '请输入联系人' }]}>
        <Input placeholder="请输入联系人" />
      </Form.Item>
      <Form.Item label="手机号" name="phone" rules={[{ required: true, message: '请输入手机号' }]}>
        <Input placeholder="请输入手机号" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        保存
      </Button>
    </Form>
  </ConfigProvider>
);
```

## 禁用表单

整组字段不可编辑时使用 disabled 统一控制状态。

```tsx
import { ConfigProvider, Button, Form, Input, Select } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form disabled layout="vertical" style={{ maxWidth: 420 }}>
      <Form.Item label="客户名称">
        <Input defaultValue="张先生" />
      </Form.Item>
      <Form.Item label="客户类型">
        <Select defaultValue="personal" options={[{ label: '个人客户', value: 'personal' }]} />
      </Form.Item>
      <Button type="primary">提交</Button>
    </Form>
  </ConfigProvider>
);
```

## 表单布局

通过 labelCol 和 wrapperCol 控制标签与控件的比例。

```tsx
import { ConfigProvider, Button, Form, Input } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} style={{ maxWidth: 520 }}>
      <Form.Item label="客户名称" required>
        <Input placeholder="请输入客户名称" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary">保存</Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { FormProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
