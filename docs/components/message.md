---
title: message 全局提示
order: 167
---

# message 全局提示

用于展示轻量级全局操作反馈。

## 组件类型

- 默认反馈
- 状态反馈

## 基础反馈

展示 message 全局提示 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Button, message } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Button onClick={() => message.success('保存成功')}>显示成功提示</Button>
  </ConfigProvider>
);
```

## 状态反馈 / 组合反馈

展示 message 全局提示 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Button, message } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Button onClick={() => message.loading('处理中', 1)}>显示加载提示</Button>
  </ConfigProvider>
);
```

## 组合反馈

多个反馈状态组合展示，便于对比信息层级和视觉强度。

```tsx
import { ConfigProvider, Button, message, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button onClick={() => message.success('保存成功')}>显示成功提示</Button>
      <Button onClick={() => message.loading('处理中', 1)}>显示加载提示</Button>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { MessageArgsProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
