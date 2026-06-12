---
title: Alert 警告提示
order: 125
---

# Alert 警告提示

用于在页面中展示持续可见的状态和风险提示。

`Alert` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdAlert.md`。

## 组件类型

- 成功
- 信息
- 警告
- 错误
- 可关闭

## 基础用法

```tsx
import { ConfigProvider, Alert, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Alert message="客户资料保存成功" type="success" showIcon />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Alert, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert message="配置将在发布后生效" type="info" showIcon />
      <Alert
        message="风险评估即将到期"
        description="请在 7 天内完成重新评估。"
        type="warning"
        showIcon
        closable
      />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { AlertProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
