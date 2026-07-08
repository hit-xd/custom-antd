---
title: notification 通知提醒框
order: 168
---

# notification 通知提醒框

用于展示较完整的全局通知和风险提醒。

## 组件类型

- 默认反馈
- 状态反馈

## 基础反馈

展示 notification 通知提醒框 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Button, notification } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Button onClick={() => notification.success({ message: '处理完成' })}>显示通知</Button>
  </ConfigProvider>
);
```

## 状态反馈 / 组合反馈

展示 notification 通知提醒框 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Button, notification } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Button
      onClick={() =>
        notification.warning({ message: '风险提醒', description: '客户风险评估即将到期。' })
      }
    >
      显示风险提醒
    </Button>
  </ConfigProvider>
);
```

## 组合反馈

多个反馈状态组合展示，便于对比信息层级和视觉强度。

```tsx
import { ConfigProvider, Button, notification, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button onClick={() => notification.success({ message: '处理完成' })}>显示通知</Button>
      <Button
        onClick={() =>
          notification.warning({ message: '风险提醒', description: '客户风险评估即将到期。' })
        }
      >
        显示风险提醒
      </Button>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { NotificationArgsProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
