---
title: ConfigProvider
group:
  title: 基础能力
  order: 1
---

# ConfigProvider

包装 Ant Design v5 的 `ConfigProvider`，默认注入企业级主题 token。除默认主题外，其他用法与 antd 保持一致。

## 基础用法

```tsx
import { Button, ConfigProvider } from 'wrap-antd';

export default () => (
  <ConfigProvider>
    <Button type="primary">提交</Button>
  </ConfigProvider>
);
```

## 覆盖主题

```tsx
import { Button, ConfigProvider } from 'wrap-antd';

export default () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#0052d9' } }}>
    <Button type="primary">品牌按钮</Button>
  </ConfigProvider>
);
```

## API

完全继承 antd `ConfigProvider` 的 props，并额外默认合并 `enterpriseTheme`。
