---
title: Tree 树形控件
order: 166
---

# Tree 树形控件

用于展示层级结构并支持展开、选择和勾选。

## 组件类型

- 基础用法
- 常用配置
- 组合场景

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Tree, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Tree
      treeData={[{ title: '总部', key: 'hq', children: [{ title: '财富管理部', key: 'wealth' }] }]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Tree, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Tree
      checkable
      defaultExpandAll
      treeData={[{ title: '总部', key: 'hq', children: [{ title: '运营部', key: 'ops' }] }]}
    />
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Tree, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Tree
          treeData={[
            { title: '总部', key: 'hq', children: [{ title: '财富管理部', key: 'wealth' }] },
          ]}
        />
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Tree, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Tree
        checkable
        defaultExpandAll
        treeData={[{ title: '总部', key: 'hq', children: [{ title: '运营部', key: 'ops' }] }]}
      />
    </Card>
  </ConfigProvider>
);
```

## 列表内容区

在列表或详情内容区中使用组件，适合检查只读信息展示场景。

```tsx
import { ConfigProvider, Tree, Space, List } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <List
      bordered
      dataSource={['客户信息', '资产信息']}
      renderItem={(item) => (
        <List.Item>
          <Space direction="vertical" style={{ width: '100%' }}>
            <strong>{item}</strong>
            <Tree
              treeData={[
                { title: '总部', key: 'hq', children: [{ title: '财富管理部', key: 'wealth' }] },
              ]}
            />
          </Space>
        </List.Item>
      )}
    />
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { TreeProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { TreeProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
