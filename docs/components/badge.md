---
title: Badge 徽标数
order: 117
---

# Badge 徽标数

用于标记数量、状态或待处理信息。

`Badge` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Badge  徽标数样式.md`。

## 组件类型

- 数字徽标
- 小红点
- 状态点
- 封顶数字

## 数字徽标

展示 Badge 徽标数 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Badge, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space size="large">
      <Badge count={5}>
        <span style={{ display: 'block', width: 40, height: 40, background: '#f4f6f8' }} />
      </Badge>
      <Badge dot>消息</Badge>
    </Space>
  </ConfigProvider>
);
```

## 小红点 / 状态点 / 封顶数字

展示 Badge 徽标数 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Badge, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Badge status="success" text="运行中" />
      <Badge status="warning" text="待审核" />
      <Badge status="error" text="异常" />
    </Space>
  </ConfigProvider>
);
```

## 容器展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Badge, Space, Card, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      <Space size="large">
        <Badge count={5}>
          <span style={{ display: 'block', width: 40, height: 40, background: '#f4f6f8' }} />
        </Badge>
        <Badge dot>消息</Badge>
      </Space>
      <Typography.Paragraph type="secondary" style={{ marginTop: 12, marginBottom: 0 }}>
        用于展示客户、产品、审批等业务信息。
      </Typography.Paragraph>
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { BadgeProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
