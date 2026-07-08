---
title: Col 栅格列
order: 152
---

# Col 栅格列

用于创建栅格列和响应式宽度。

## 组件类型

- 默认布局
- 组合布局

## 基础布局

展示 Col 栅格列 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Col, Row } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Row>
      <Col span={12}>半宽内容</Col>
      <Col span={12}>半宽内容</Col>
    </Row>
  </ConfigProvider>
);
```

## 组合布局 / 响应式布局

展示 Col 栅格列 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Col, Row } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Row gutter={16}>
      <Col flex="120px">标签</Col>
      <Col flex="auto">内容区域</Col>
    </Row>
  </ConfigProvider>
);
```

## 响应式布局

展示布局组件承载不同内容块时的排列和对齐效果。

```tsx
import { ConfigProvider, Col, Row } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ padding: 16, background: '#f4f6f8' }}>
      <Row>
        <Col span={12}>半宽内容</Col>
        <Col span={12}>半宽内容</Col>
      </Row>
    </div>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { ColProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
