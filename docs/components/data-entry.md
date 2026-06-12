---
title: Data Entry 数据录入
order: 40
---

# Data Entry 数据录入

输入、选择、日期、开关等组件均透传 antd API。企业主题统一了高度、圆角和边框层级。

## 常用录入控件

```tsx
import {
  ConfigProvider,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Space,
  Switch,
} from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" size="middle" style={{ width: 320 }}>
      <Input placeholder="请输入名称" />
      <Select
        placeholder="请选择环境"
        options={[
          { label: '生产环境', value: 'prod' },
          { label: '测试环境', value: 'test' },
        ]}
      />
      <DatePicker style={{ width: '100%' }} />
      <InputNumber min={1} max={100} defaultValue={20} style={{ width: '100%' }} />
      <Switch checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
    </Space>
  </ConfigProvider>
);
```

## 使用建议

录入组件宽度应按表单栅格统一控制。需要枚举值时优先使用 `Select`，需要开关态时使用 `Switch`，避免用按钮模拟状态。
