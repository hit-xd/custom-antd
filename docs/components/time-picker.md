---
title: TimePicker 时间选择器
order: 104
---

# TimePicker 时间选择器

用于选择时间点或时间范围。

`TimePicker` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/TimePicker.dev.md`。

## 组件类型

- 时间点
- 时间范围
- 格式化
- 禁用与校验状态

## 基础用法

```tsx
import { ConfigProvider, TimePicker, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <TimePicker placeholder="请选择时间" />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, TimePicker, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Space>
      <TimePicker format="HH:mm" />
      <TimePicker.RangePicker />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { TimePickerProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
