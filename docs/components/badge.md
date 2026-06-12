---
title: Badge 徽标数
order: 114
---

# Badge 徽标数

用于标记数量、状态或待处理信息。

`Badge` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Badge  徽标数样式.md`。

## 组件类型

- 数字徽标
- 小红点
- 状态点
- 封顶数字

## 基础用法

```tsx
import { ConfigProvider, Badge, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space size="large">
      <Badge count={5}>
        <span style={{ display: 'block', width: 40, height: 40, background: '#f4f6f8' }} />
      </Badge>
      <Badge dot>消息</Badge>
    </Space>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Badge, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space>
      <Badge status="success" text="运行中" />
      <Badge status="warning" text="待审核" />
      <Badge status="error" text="异常" />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { BadgeProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
