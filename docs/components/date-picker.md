---
title: DatePicker 日期选择器
order: 106
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

## 日期

```tsx
import { ConfigProvider, DatePicker } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <DatePicker placeholder="请选择日期" />
  </ConfigProvider>
);
```

## 日期范围

```tsx
import { ConfigProvider, DatePicker } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <DatePicker.RangePicker />
  </ConfigProvider>
);
```

## 选择器类型

```tsx
import { ConfigProvider, DatePicker, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space wrap>
      <DatePicker picker="month" placeholder="选择月份" />
      <DatePicker picker="quarter" placeholder="选择季度" />
      <DatePicker picker="year" placeholder="选择年份" />
    </Space>
  </ConfigProvider>
);
```

## 格式化

```tsx
import { ConfigProvider, DatePicker } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <DatePicker format="YYYY/MM/DD" placeholder="年/月/日" />
  </ConfigProvider>
);
```

## 状态

```tsx
import { ConfigProvider, DatePicker, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space wrap>
      <DatePicker status="error" placeholder="错误状态" />
      <DatePicker disabled placeholder="禁用状态" />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { DatePickerProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
