---
title: Image 图片
order: 118
---

# Image 图片

用于展示和预览图片资源。

`Image` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Image  图片样式.md`。

## 组件类型

- 基础图片
- 预览
- 失败占位
- 图片组

## 基础用法

```tsx
import { ConfigProvider, Image, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Image width={200} src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600" />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Image, Space } from 'privatebank-design';

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

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { ImageProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
