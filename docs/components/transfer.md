---
title: Transfer 穿梭框
order: 144
---

# Transfer 穿梭框

用于在两个列表之间移动选项。

## 组件类型

- 基础用法
- 常用配置
- 组合场景

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

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

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

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

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Transfer, Space, Card, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Transfer
          dataSource={[
            { key: '1', title: '客户资料' },
            { key: '2', title: '资产信息' },
          ]}
          targetKeys={['2']}
          render={(item) => item.title ?? ''}
        />
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Transfer, Space, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Transfer
        oneWay
        dataSource={[
          { key: '1', title: '待分配客户' },
          { key: '2', title: '重点客户' },
        ]}
        targetKeys={['2']}
        render={(item) => item.title ?? ''}
      />
    </Card>
  </ConfigProvider>
);
```

## 筛选表单

放入查询条件区域，体现与表单标签、按钮的组合方式。

```tsx
import { ConfigProvider, Transfer, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件">
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

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { TransferProps } from '@lf39.03/antd';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { TransferProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
