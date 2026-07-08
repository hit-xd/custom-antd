---
title: Popover 气泡卡片
order: 126
---

# Popover 气泡卡片

用于展示比 Tooltip 更丰富的临时内容。

`Popover` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Popover  气泡卡片样式.md`。

## 组件类型

- 点击触发
- 悬停触发
- 带标题
- 不同方向

## 点击触发

```tsx
import { ConfigProvider, Button, Popover } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Popover title="客户信息" content="稳健型客户，资产规模 1,280 万元。">
      <Button>查看信息</Button>
    </Popover>
  </ConfigProvider>
);
```

## 悬停触发

```tsx
import { ConfigProvider, Button, Popover } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Popover trigger="hover" content="悬停后展示更多内容">
      <Button>悬停查看</Button>
    </Popover>
  </ConfigProvider>
);
```

## 带标题

```tsx
import { ConfigProvider, Button, Popover } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Popover
      title="工作提醒"
      content={
        <div>
          <p>待处理审批：3</p>
          <p>待回访客户：8</p>
        </div>
      }
    >
      <Button>工作提醒</Button>
    </Popover>
  </ConfigProvider>
);
```

## 不同方向

```tsx
import { ConfigProvider, Button, Popover, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Popover placement="top" content="顶部内容">
        <Button>Top</Button>
      </Popover>
      <Popover placement="right" content="右侧内容">
        <Button>Right</Button>
      </Popover>
    </Space>
  </ConfigProvider>
);
```

## 卡片内容

```tsx
import { ConfigProvider, Button, Popover } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Popover
      content={
        <div style={{ width: 220 }}>客户最近一次回访时间为 2026-06-12，当前状态为跟进中。</div>
      }
    >
      <Button>客户摘要</Button>
    </Popover>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { PopoverProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
