---
title: ErrorBlock 空状态
---

# ErrorBlock 空状态

用于列表、表格、日历和业务区块的空状态反馈，统一空态图形、文案层级和操作入口。

## 基础示例

```tsx
import { ConfigProvider, ErrorBlock } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <ErrorBlock
      title="暂无数据"
      description="当前筛选条件下没有可展示的内容。"
      action={<ErrorBlock.Button type="primary">新建数据</ErrorBlock.Button>}
    />
  </ConfigProvider>
);
```

## 状态示例

```tsx
import { ConfigProvider, ErrorBlock, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <ErrorBlock variant="table" title="暂无表格数据" description="可以调整筛选条件后重试。" />
      <ErrorBlock variant="calendar" title="暂无日程" description="今天还没有待办安排。" />
      <ErrorBlock variant="business" title="暂无业务内容" description="请先完成上游配置。" />
    </Space>
  </ConfigProvider>
);
```

## API

| 参数        | 说明       | 类型                                               | 默认值      |
| ----------- | ---------- | -------------------------------------------------- | ----------- |
| variant     | 空状态场景 | `'default' \| 'table' \| 'calendar' \| 'business'` | `'default'` |
| title       | 标题       | `ReactNode`                                        | 按场景内置  |
| description | 辅助说明   | `ReactNode`                                        | -           |
| icon        | 自定义图形 | `ReactNode`                                        | -           |
| action      | 操作区     | `ReactNode`                                        | -           |
| className   | 自定义类名 | `string`                                           | -           |
| style       | 自定义样式 | `CSSProperties`                                    | -           |
