---
title: Image 图片
order: 121
---

# Image 图片

用于展示和预览图片资源。

`Image` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Image  图片样式.md`。

## 组件类型

- 基础图片
- 预览
- 失败占位
- 图片组

## 基础图片

展示 Image 图片 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Image, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Image width={200} src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600" />
  </ConfigProvider>
);
```

## 预览 / 失败占位 / 图片组

展示 Image 图片 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Image, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Image.PreviewGroup>
      <Space>
        <Image width={120} src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400" />
        <Image width={120} src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400" />
      </Space>
    </Image.PreviewGroup>
  </ConfigProvider>
);
```

## 容器展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Image, Space, Card, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      <Image width={200} src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600" />
      <Typography.Paragraph type="secondary" style={{ marginTop: 12, marginBottom: 0 }}>
        用于展示客户、产品、审批等业务信息。
      </Typography.Paragraph>
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { ImageProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
