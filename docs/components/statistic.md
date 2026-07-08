---
title: Statistic 统计数值
order: 123
---

# Statistic 统计数值

用于突出展示统计指标和关键数值。

`Statistic` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Statistic  统计数值样式.md`。

## 组件类型

- 基础数值
- 前后缀
- 精度
- 倒计时

## 基础数值

展示 Statistic 统计数值 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Statistic, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Statistic title="客户总资产" value={1280} suffix="万元" />
  </ConfigProvider>
);
```

## 前后缀 / 精度 / 倒计时

展示 Statistic 统计数值 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Statistic, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space size="large">
      <Statistic title="本月新增" value={36} prefix="+" />
      <Statistic title="转化率" value={18.6} precision={1} suffix="%" />
    </Space>
  </ConfigProvider>
);
```

## 容器展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Statistic, Space, Card, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      <Statistic title="客户总资产" value={1280} suffix="万元" />
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
import type { StatisticProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
