---
title: Switch 开关
order: 109
---

# Switch 开关

用于立即切换两个互斥状态。

`Switch` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Switch.dev.md`。

## 组件类型

- 基础开关
- 文字开关
- 加载状态
- 禁用状态

## 基础用法

```tsx
import { ConfigProvider, Switch, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Switch defaultChecked />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Switch, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space>
      <Switch checkedChildren="启用" unCheckedChildren="停用" defaultChecked />
      <Switch loading />
      <Switch disabled />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { SwitchProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
