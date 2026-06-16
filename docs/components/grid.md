---
title: Grid 栅格断点
order: 150
---

# Grid 栅格断点

用于读取响应式断点并适配页面布局。

## 组件类型

- 基础用法
- 常用配置
- 组合场景

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Grid, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    {(() => {
      const screens = Grid.useBreakpoint();
      return <pre>{JSON.stringify(screens, null, 2)}</pre>;
    })()}
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Grid, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    {(() => {
      const screens = Grid.useBreakpoint();
      return <Typography.Text>{screens.md ? '桌面布局' : '移动布局'}</Typography.Text>;
    })()}
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Grid, Typography, Card, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        {(() => {
          const screens = Grid.useBreakpoint();
          return <pre>{JSON.stringify(screens, null, 2)}</pre>;
        })()}
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Grid, Typography, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      {(() => {
        const screens = Grid.useBreakpoint();
        return <Typography.Text>{screens.md ? '桌面布局' : '移动布局'}</Typography.Text>;
      })()}
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { GridProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { GridProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
