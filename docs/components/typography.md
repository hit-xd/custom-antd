---
title: Typography 排版
order: 147
---

# Typography 排版

用于展示标题、正文、辅助说明和可编辑文本。

## 组件类型

- 默认展示
- 组合配置

## 基础展示

展示 Typography 排版 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Typography, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Typography.Text>这是一段正文内容。</Typography.Text>
  </ConfigProvider>
);
```

## 组合配置 / 状态展示

展示 Typography 排版 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Typography, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Typography>
      <Typography.Title level={4}>客户概览</Typography.Title>
      <Typography.Paragraph>用于展示说明文字和业务摘要。</Typography.Paragraph>
    </Typography>
  </ConfigProvider>
);
```

## 状态展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Typography, Space, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      <Typography.Text>这是一段正文内容。</Typography.Text>
      <Typography.Paragraph type="secondary" style={{ marginTop: 12, marginBottom: 0 }}>
        用于展示客户、产品、审批等业务信息。
      </Typography.Paragraph>
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { TypographyProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
