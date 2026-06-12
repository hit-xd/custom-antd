---
title: Carousel 走马灯
order: 115
---

# Carousel 走马灯

用于轮播展示同级内容。

`Carousel` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Carousel  走马灯样式.md`。

## 组件类型

- 基础轮播
- 自动播放
- 切换箭头
- 指示器位置

## 基础用法

```tsx
import { ConfigProvider, Carousel, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Carousel style={{ width: 420 }}>
      <div>
        <h3 style={{ padding: 48, background: '#f4f6f8' }}>资产配置</h3>
      </div>
      <div>
        <h3 style={{ padding: 48, background: '#edf4ff' }}>市场观点</h3>
      </div>
    </Carousel>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Carousel, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Carousel autoplay dotPosition="bottom" style={{ width: 420 }}>
      <div>
        <h3 style={{ padding: 48, background: '#fffcf0' }}>重点产品</h3>
      </div>
      <div>
        <h3 style={{ padding: 48, background: '#ebfaf5' }}>客户活动</h3>
      </div>
    </Carousel>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { CarouselProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
