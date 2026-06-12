---
title: Statistic 统计数值
order: 120
---

# Statistic 统计数值

用于突出展示统计指标和关键数值。

`Statistic` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Statistic  统计数值样式.md`。

## 组件类型

- 基础数值
- 前后缀
- 精度
- 倒计时

## 基础用法

```tsx
import { ConfigProvider, Statistic, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Statistic title="客户总资产" value={1280} suffix="万元" />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Statistic, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space size="large">
      <Statistic title="本月新增" value={36} prefix="+" />
      <Statistic title="转化率" value={18.6} precision={1} suffix="%" />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { StatisticProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
