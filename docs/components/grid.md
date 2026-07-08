---
title: Grid 栅格断点
order: 150
---

# Grid 栅格断点

用于读取响应式断点并适配页面布局。

## 组件类型

- 默认布局
- 组合布局

## 基础布局

展示 Grid 栅格断点 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Grid, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    {(() => {
      const screens = Grid.useBreakpoint();
      return <pre>{JSON.stringify(screens, null, 2)}</pre>;
    })()}
  </ConfigProvider>
);
```

## 组合布局 / 响应式布局

展示 Grid 栅格断点 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Grid, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    {(() => {
      const screens = Grid.useBreakpoint();
      return <Typography.Text>{screens.md ? '桌面布局' : '移动布局'}</Typography.Text>;
    })()}
  </ConfigProvider>
);
```

## 响应式布局

展示布局组件承载不同内容块时的排列和对齐效果。

```tsx
import { ConfigProvider, Grid, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ padding: 16, background: '#f4f6f8' }}>
      {(() => {
        const screens = Grid.useBreakpoint();
        return <pre>{JSON.stringify(screens, null, 2)}</pre>;
      })()}
    </div>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { GridProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
