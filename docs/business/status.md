---
title: Status 状态
---

# Status 状态

用于在表格、详情页和流程节点中展示轻量状态，保持颜色和文案结构一致。

## 基础示例

```tsx
import { ConfigProvider, Space, Status } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space>
      <Status type="success" text="已生效" />
      <Status type="processing" text="处理中" />
      <Status type="warning" text="待确认" />
      <Status type="error" text="已驳回" />
      <Status text="未开始" />
    </Space>
  </ConfigProvider>
);
```

## 配置示例

```tsx
import { ConfigProvider, Status } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Status type="processing" text="审批中" style={{ fontWeight: 500 }} />
  </ConfigProvider>
);
```

## API

| 参数      | 说明       | 类型                                                             | 默认值      |
| --------- | ---------- | ---------------------------------------------------------------- | ----------- |
| type      | 状态类型   | `'success' \| 'processing' \| 'warning' \| 'error' \| 'default'` | `'default'` |
| text      | 状态文案   | `ReactNode`                                                      | -           |
| className | 自定义类名 | `string`                                                         | -           |
| style     | 自定义样式 | `CSSProperties`                                                  | -           |
