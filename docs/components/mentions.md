---
title: Mentions 提及
order: 159
---

# Mentions 提及

用于在文本输入中提及人员、团队或标签。

## 组件类型

- 基础用法
- 常用配置
- 组合场景

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Mentions, Space } from 'privatebank-design';

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

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Mentions, Space } from 'privatebank-design';

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

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Mentions, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Mentions
          style={{ width: 320 }}
          options={[
            { value: 'risk', label: 'risk' },
            { value: 'ops', label: 'ops' },
          ]}
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
import { ConfigProvider, Mentions, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Mentions
        rows={3}
        placeholder="输入 @ 提及团队"
        options={[{ value: 'reviewer', label: 'reviewer' }]}
      />
    </Card>
  </ConfigProvider>
);
```

## 筛选表单

放入查询条件区域，体现与表单标签、按钮的组合方式。

```tsx
import { ConfigProvider, Mentions, Space, Button, Form } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件">
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

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { MentionsProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { MentionsProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
