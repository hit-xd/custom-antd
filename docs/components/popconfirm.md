---
title: Popconfirm 气泡确认框
order: 131
---

# Popconfirm 气泡确认框

用于对轻量但有风险的操作进行二次确认。

`Popconfirm` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdPopconfirm.md`。

## 组件类型

- 基础确认
- 自定义按钮
- 异步确认
- 不同方向

## 基础确认

```tsx
import { ConfigProvider, Button, Popconfirm } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Popconfirm title="确认删除该记录？" description="删除后无法恢复。">
      <Button danger>删除</Button>
    </Popconfirm>
  </ConfigProvider>
);
```

## 自定义按钮

```tsx
import { ConfigProvider, Button, Popconfirm } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Popconfirm title="确认停用该账户？" okText="确认停用" cancelText="取消">
      <Button>停用账户</Button>
    </Popconfirm>
  </ConfigProvider>
);
```

## 不同方向

```tsx
import { ConfigProvider, Button, Popconfirm, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Popconfirm placement="top" title="顶部确认">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm placement="right" title="右侧确认">
        <Button>Right</Button>
      </Popconfirm>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { PopconfirmProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
