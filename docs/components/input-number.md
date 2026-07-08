---
title: InputNumber 数字输入框
order: 104
---

# InputNumber 数字输入框

用于录入金额、数量、比例等具有明确数值范围的数据。

`InputNumber` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/InputNumber.dev.md`。

## 组件类型

- 基础数值
- 范围限制
- 步进值
- 前后缀
- 禁用与校验状态

## 基础数值

```tsx
import { ConfigProvider, InputNumber } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <InputNumber min={0} max={100} defaultValue={20} />
  </ConfigProvider>
);
```

## 范围限制

通过 min 和 max 限制业务数值范围。

```tsx
import { ConfigProvider, InputNumber } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <InputNumber min={0} max={1000000} defaultValue={200000} />
  </ConfigProvider>
);
```

## 前后缀

金额、比例等场景可补充单位。

```tsx
import { ConfigProvider, InputNumber, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space>
      <InputNumber addonBefore="￥" defaultValue={1280} />
      <InputNumber addonAfter="%" min={0} max={100} defaultValue={36} />
    </Space>
  </ConfigProvider>
);
```

## 精度与步长

```tsx
import { ConfigProvider, InputNumber } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <InputNumber min={0} max={10} step={0.1} precision={1} defaultValue={3.5} />
  </ConfigProvider>
);
```

## 状态

```tsx
import { ConfigProvider, InputNumber, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space>
      <InputNumber status="warning" placeholder="请输入额度" />
      <InputNumber disabled defaultValue={1000} />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { InputNumberProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
