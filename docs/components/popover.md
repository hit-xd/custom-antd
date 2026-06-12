---
title: Popover 气泡卡片
order: 123
---

# Popover 气泡卡片

用于展示比 Tooltip 更丰富的临时内容。

`Popover` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Popover  气泡卡片样式.md`。

## 组件类型

- 点击触发
- 悬停触发
- 带标题
- 不同方向

## 基础用法

```tsx
import { ConfigProvider, Popover, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Popover title="客户信息" content="稳健型客户，资产规模 1,280 万元。">
      <Button>查看信息</Button>
    </Popover>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Popover, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Popover
      trigger="click"
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

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { PopoverProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
