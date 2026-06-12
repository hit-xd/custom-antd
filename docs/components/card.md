---
title: Card 卡片
order: 112
---

# Card 卡片

用于承载一组相关信息和操作。

`Card` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`全局规范/Container.style.md`。

## 组件类型

- 基础卡片
- 带标题
- 带操作
- 加载状态

## 基础用法

```tsx
import { ConfigProvider, Card, Button } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Card title="客户概览" style={{ width: 360 }}>
      当前客户资产规模为 1,280 万元。
    </Card>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Card, Button } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Card
      title="审批任务"
      extra={<Button type="link">查看全部</Button>}
      style={{ width: 360 }}
      loading={false}
    >
      待处理任务 18 项
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { CardProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
