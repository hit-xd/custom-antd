---
title: Carousel 走马灯
order: 118
---

# Carousel 走马灯

用于轮播展示同级内容。

`Carousel` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Carousel  走马灯样式.md`。

## 组件类型

- 基础轮播
- 自动播放
- 切换箭头
- 指示器位置

## 基础轮播

展示 Carousel 走马灯 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Carousel, Space } from '@lf39.03/antd';

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

## 自动播放 / 切换箭头 / 指示器位置

展示 Carousel 走马灯 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Carousel, Space } from '@lf39.03/antd';

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

## 容器展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Carousel, Space, Card, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      <Carousel style={{ width: 420 }}>
        <div>
          <h3 style={{ padding: 48, background: '#f4f6f8' }}>资产配置</h3>
        </div>
        <div>
          <h3 style={{ padding: 48, background: '#edf4ff' }}>市场观点</h3>
        </div>
      </Carousel>
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
import type { CarouselProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
