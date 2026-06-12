---
title: Popconfirm 气泡确认框
order: 128
---

# Popconfirm 气泡确认框

用于对轻量但有风险的操作进行二次确认。

`Popconfirm` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdPopconfirm.md`。

## 组件类型

- 基础确认
- 自定义按钮
- 异步确认
- 不同方向

## 基础用法

```tsx
import { ConfigProvider, Popconfirm, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Popconfirm title="确认删除该记录？" description="删除后无法恢复。">
      <Button danger>删除</Button>
    </Popconfirm>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Popconfirm, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Popconfirm title="确认停用该账户？" okText="确认停用" cancelText="取消">
      <Button>停用账户</Button>
    </Popconfirm>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { PopconfirmProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
