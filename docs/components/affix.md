---
title: Affix 固钉
order: 145
---

# Affix 固钉

用于将操作入口固定在滚动容器内的指定位置。

## 组件类型

- 基础用法
- 常用配置
- 组合场景

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Affix, Button } from 'privatebank-design';

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

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Affix, Button } from 'privatebank-design';

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

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Affix, Button, Card, Typography, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <div style={{ height: 160, overflow: 'auto', background: '#f4f6f8', padding: 16 }}>
          <Affix offsetTop={16}>
            <Button>固定操作</Button>
          </Affix>
          <div style={{ height: 320 }} />
        </div>
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Affix, Button, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <div style={{ height: 160, overflow: 'auto', background: '#f4f6f8', padding: 16 }}>
        <Affix offsetBottom={24}>
          <Button type="primary">提交审批</Button>
        </Affix>
        <div style={{ height: 320 }} />
      </div>
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { AffixProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { AffixProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
