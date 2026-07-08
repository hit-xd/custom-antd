---
title: Tree 树形控件
order: 165
---

# Tree 树形控件

用于展示层级结构并支持展开、选择和勾选。

## 组件类型

- 默认展示
- 组合展示

## 基础树

```tsx
import { ConfigProvider, Tree } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Tree
      treeData={[{ title: '总部', key: 'hq', children: [{ title: '财富管理部', key: 'wealth' }] }]}
    />
  </ConfigProvider>
);
```

## 可勾选

```tsx
import { ConfigProvider, Tree } from '@lf39.03/antd';

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

## 默认展开

```tsx
import { ConfigProvider, Tree } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Tree
      defaultExpandedKeys={['hq']}
      treeData={[{ title: '总部', key: 'hq', children: [{ title: '上海分行', key: 'shanghai' }] }]}
    />
  </ConfigProvider>
);
```

## 默认选中

```tsx
import { ConfigProvider, Tree } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Tree
      defaultSelectedKeys={['wealth']}
      defaultExpandAll
      treeData={[{ title: '总部', key: 'hq', children: [{ title: '财富管理部', key: 'wealth' }] }]}
    />
  </ConfigProvider>
);
```

## 禁用节点

```tsx
import { ConfigProvider, Tree } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Tree
      treeData={[
        {
          title: '总部',
          key: 'hq',
          children: [{ title: '停用机构', key: 'disabled', disabled: true }],
        },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { TreeProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
