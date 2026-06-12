---
title: Tooltip 文字提示
order: 122
---

# Tooltip 文字提示

用于在悬停时解释图标、缩略文本或操作。

`Tooltip` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Tooltip  文字提示样式.md`。

## 组件类型

- 基础提示
- 不同方向
- 长文本
- 受控显示

## 基础用法

```tsx
import { ConfigProvider, Tooltip, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Tooltip title="查看客户详情">
      <Button>悬停查看</Button>
    </Tooltip>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Tooltip, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space>
      <Tooltip placement="top" title="顶部提示">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="right" title="右侧提示">
        <Button>Right</Button>
      </Tooltip>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { TooltipProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
