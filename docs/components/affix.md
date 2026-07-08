---
title: Affix 固钉
order: 145
---

# Affix 固钉

用于将操作入口固定在滚动容器内的指定位置。

## 组件类型

- 默认展示
- 组合配置

## 基础展示

展示 Affix 固钉 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Affix, Button } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ height: 160, overflow: 'auto', background: '#f4f6f8', padding: 16 }}>
      <Affix offsetTop={16}>
        <Button>固定操作</Button>
      </Affix>
      <div style={{ height: 320 }} />
    </div>
  </ConfigProvider>
);
```

## 组合配置 / 容器展示

展示 Affix 固钉 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Affix, Button } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ height: 160, overflow: 'auto', background: '#f4f6f8', padding: 16 }}>
      <Affix offsetBottom={24}>
        <Button type="primary">提交审批</Button>
      </Affix>
      <div style={{ height: 320 }} />
    </div>
  </ConfigProvider>
);
```

## 容器展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Affix, Button, Card, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      <div style={{ height: 160, overflow: 'auto', background: '#f4f6f8', padding: 16 }}>
        <Affix offsetTop={16}>
          <Button>固定操作</Button>
        </Affix>
        <div style={{ height: 320 }} />
      </div>
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
import type { AffixProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
