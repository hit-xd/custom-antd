---
title: DatePicker 日期选择器
order: 103
---

# DatePicker 日期选择器

用于选择日期、日期范围、月份、季度或年份。

`DatePicker` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/DatePicker.dev.md`。

## 组件类型

- 日期
- 日期范围
- 月份
- 季度
- 年份
- 禁用与校验状态

## 基础用法

```tsx
import { ConfigProvider, DatePicker, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <DatePicker placeholder="请选择日期" />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, DatePicker, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical">
      <DatePicker.RangePicker />
      <Space>
        <DatePicker picker="month" />
        <DatePicker picker="quarter" />
        <DatePicker picker="year" />
      </Space>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { DatePickerProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
