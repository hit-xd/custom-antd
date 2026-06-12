---
title: Slider 滑动输入条
order: 110
---

# Slider 滑动输入条

用于在连续或分段范围内选择数值。

`Slider` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Slider.dev.md`。

## 组件类型

- 单值
- 范围
- 刻度
- 禁用状态

## 基础用法

```tsx
import { ConfigProvider, Slider, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Slider defaultValue={36} />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Slider, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <div style={{ width: 360 }}>
      <Slider range marks={{ 0: '0%', 50: '50%', 100: '100%' }} defaultValue={[20, 80]} />
    </div>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { SliderProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
