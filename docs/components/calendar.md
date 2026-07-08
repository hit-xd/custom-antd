---
title: Calendar 日历
order: 160
---

# Calendar 日历

用于按月展示日期、日程或排班信息。

## 组件类型

- 默认展示
- 组合展示

## 基础展示

展示 Calendar 日历 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Calendar, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Calendar fullscreen={false} />
  </ConfigProvider>
);
```

## 组合展示 / 容器展示

展示 Calendar 日历 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Calendar, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Calendar fullscreen={false} mode="month" />
  </ConfigProvider>
);
```

## 容器展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Calendar, Space, Card, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      <Calendar fullscreen={false} />
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
import type { CalendarProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
