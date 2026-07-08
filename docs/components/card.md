---
title: Card 卡片
order: 115
---

# Card 卡片

用于承载一组相关信息和操作。

`Card` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`全局规范/Container.style.md`。

## 组件类型

- 基础卡片
- 带标题
- 带操作
- 加载状态

## 基础卡片

```tsx
import { ConfigProvider, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="客户概览" style={{ width: 360 }}>
      当前客户资产规模为 1,280 万元。
    </Card>
  </ConfigProvider>
);
```

## 带操作

```tsx
import { ConfigProvider, Button, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="审批任务" extra={<Button type="link">查看全部</Button>} style={{ width: 360 }}>
      待处理任务 18 项
    </Card>
  </ConfigProvider>
);
```

## 加载中

```tsx
import { ConfigProvider, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card loading title="客户概览" style={{ width: 360 }}>
      加载中的内容
    </Card>
  </ConfigProvider>
);
```

## 内部卡片

```tsx
import { ConfigProvider, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="资产概览" style={{ width: 420 }}>
      <Card type="inner" title="本月新增">
        36 位客户
      </Card>
    </Card>
  </ConfigProvider>
);
```

## 栅格卡片

```tsx
import { ConfigProvider, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="客户指标" style={{ width: 420 }}>
      <Card.Grid style={{ width: '50%' }}>资产规模</Card.Grid>
      <Card.Grid style={{ width: '50%' }}>风险等级</Card.Grid>
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { CardProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
