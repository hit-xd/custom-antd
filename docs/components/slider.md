---
title: Slider 滑动输入条
order: 113
---

# Slider 滑动输入条

用于在连续或分段范围内选择数值。

`Slider` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Slider.dev.md`。

## 组件类型

- 单值
- 范围
- 刻度
- 禁用状态

## 单值

展示 Slider 滑动输入条 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Slider, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Slider defaultValue={36} />
  </ConfigProvider>
);
```

## 范围 / 刻度 / 禁用状态

展示 Slider 滑动输入条 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Slider, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ width: 360 }}>
      <Slider range marks={{ 0: '0%', 50: '50%', 100: '100%' }} defaultValue={[20, 80]} />
    </div>
  </ConfigProvider>
);
```

## 表单组合

放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。

```tsx
import { ConfigProvider, Slider, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        <Slider defaultValue={36} />
      </Form.Item>
      <Form.Item>
        <Button type="primary">查询</Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { SliderProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
