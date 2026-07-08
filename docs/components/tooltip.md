---
title: Tooltip 文字提示
order: 125
---

# Tooltip 文字提示

用于在悬停时解释图标、缩略文本或操作。

`Tooltip` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Tooltip  文字提示样式.md`。

## 组件类型

- 基础提示
- 不同方向
- 长文本
- 受控显示

## 基础提示

```tsx
import { ConfigProvider, Button, Tooltip } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Tooltip title="查看客户详情">
      <Button>悬停查看</Button>
    </Tooltip>
  </ConfigProvider>
);
```

## 不同方向

```tsx
import { ConfigProvider, Button, Space, Tooltip } from '@lf39.03/antd';

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

## 长文本

```tsx
import { ConfigProvider, Button, Tooltip } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Tooltip title="这里展示一段较长的说明文字，用于解释字段含义或操作风险。">
      <Button>字段说明</Button>
    </Tooltip>
  </ConfigProvider>
);
```

## 颜色

```tsx
import { ConfigProvider, Button, Tooltip } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Tooltip color="#9B7235" title="品牌色提示">
      <Button>品牌色</Button>
    </Tooltip>
  </ConfigProvider>
);
```

## 禁用触发元素

```tsx
import { ConfigProvider, Button, Tooltip } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Tooltip title="当前无权限操作">
      <Button disabled>不可操作</Button>
    </Tooltip>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { TooltipProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
