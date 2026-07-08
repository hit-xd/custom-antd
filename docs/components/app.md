---
title: App 包裹组件
order: 166
---

# App 包裹组件

用于为 message、modal、notification 等静态方法提供上下文。

## 组件类型

- 默认反馈
- 状态反馈

## 基础反馈

展示 App 包裹组件 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, App, Button, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <App>
      <Typography.Text>App 为 message、modal、notification 提供上下文。</Typography.Text>
    </App>
  </ConfigProvider>
);
```

## 状态反馈 / 组合反馈

展示 App 包裹组件 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, App, Button, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <App>
      <Button type="primary">上下文内操作</Button>
    </App>
  </ConfigProvider>
);
```

## 组合反馈

多个反馈状态组合展示，便于对比信息层级和视觉强度。

```tsx
import { ConfigProvider, App, Button, Typography, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: '100%' }}>
      <App>
        <Typography.Text>App 为 message、modal、notification 提供上下文。</Typography.Text>
      </App>
      <App>
        <Button type="primary">上下文内操作</Button>
      </App>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { AppProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
