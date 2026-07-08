---
title: Alert 警告提示
order: 128
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

## 四种样式

通过 type 表达成功、信息、警告和错误等提示语义。

```tsx
import { ConfigProvider, Alert, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert message="客户资料保存成功" type="success" showIcon />
      <Alert message="配置将在发布后生效" type="info" showIcon />
      <Alert message="风险评估即将到期" type="warning" showIcon />
      <Alert message="提交失败，请稍后重试" type="error" showIcon />
    </Space>
  </ConfigProvider>
);
```

## 含描述

需要补充原因或处理建议时使用 description。

```tsx
import { ConfigProvider, Alert } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Alert
      message="风险评估即将到期"
      description="请在 7 天内完成重新评估，逾期后部分业务操作将受限。"
      type="warning"
      showIcon
    />
  </ConfigProvider>
);
```

## 可关闭

非阻断提示可允许用户主动关闭。

```tsx
import { ConfigProvider, Alert } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Alert message="配置将在发布后生效" type="info" showIcon closable />
  </ConfigProvider>
);
```

## 操作按钮

```tsx
import { ConfigProvider, Alert, Button } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Alert
      message="客户资料待补充"
      description="补充完整后可继续发起审批。"
      type="warning"
      showIcon
      action={
        <Button size="small" type="primary">
          去补充
        </Button>
      }
    />
  </ConfigProvider>
);
```

## 无图标提示

低风险提示可关闭图标，降低视觉占用。

```tsx
import { ConfigProvider, Alert } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Alert message="系统将在今晚 22:00 进行例行维护" type="info" />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { AlertProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
