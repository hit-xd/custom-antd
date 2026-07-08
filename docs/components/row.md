---
title: Row 栅格行
order: 151
---

# Row 栅格行

用于创建横向栅格行并配合 Col 使用。

## 组件类型

- 默认布局
- 组合布局

## 基础布局

展示 Row 栅格行 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Col, Row } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Row gutter={16}>
      <Col span={12}>左侧</Col>
      <Col span={12}>右侧</Col>
    </Row>
  </ConfigProvider>
);
```

## 组合布局 / 响应式布局

展示 Row 栅格行 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Col, Row } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Row gutter={[16, 16]}>
      <Col xs={24} md={8}>
        概览
      </Col>
      <Col xs={24} md={16}>
        明细
      </Col>
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
      <Row gutter={16}>
        <Col span={12}>左侧</Col>
        <Col span={12}>右侧</Col>
      </Row>
    </div>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { RowProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
