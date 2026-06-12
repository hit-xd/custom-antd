---
title: Progress 进度条
order: 129
---

# Progress 进度条

用于展示操作进度、完成比例或状态。

`Progress` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdProgress.md`。

## 组件类型

- 线形
- 圆形
- 仪表盘
- 步骤进度

## 基础用法

```tsx
import { ConfigProvider, Progress, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Progress percent={68} />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Progress, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Progress type="circle" percent={75} size={80} />
      <Progress type="dashboard" percent={42} size={80} status="exception" />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { ProgressProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
