---
title: Anchor 锚点
order: 138
---

# Anchor 锚点

用于长页面内快速定位不同内容区块。

`Anchor` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/anchor-Style-Spec.md`。

## 组件类型

- 基础锚点
- 水平锚点
- 滚动容器
- 自定义高亮

## 基础用法

```tsx
import { ConfigProvider, Anchor, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Anchor
      items={[
        { key: 'basic', href: '#basic', title: '基本信息' },
        { key: 'asset', href: '#asset', title: '资产信息' },
        { key: 'risk', href: '#risk', title: '风险信息' },
      ]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Anchor, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Anchor
      direction="horizontal"
      items={[
        { key: 'overview', href: '#overview', title: '概览' },
        { key: 'detail', href: '#detail', title: '详情' },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { AnchorProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
