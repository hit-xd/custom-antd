---
title: TreeSelect 树选择
order: 109
---

# TreeSelect 树选择

用于从树形层级数据中选择一个或多个节点。

`TreeSelect` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/TreeSelect.dev.md`。

## 组件类型

- 单选
- 多选
- 可勾选
- 搜索
- 禁用节点

## 单选

```tsx
import { ConfigProvider, TreeSelect } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <TreeSelect
      style={{ width: 280 }}
      placeholder="请选择组织"
      treeData={[
        { title: '总部', value: 'hq', children: [{ title: '财富管理部', value: 'wealth' }] },
      ]}
    />
  </ConfigProvider>
);
```

## 可勾选

```tsx
import { ConfigProvider, TreeSelect } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <TreeSelect
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_PARENT}
      style={{ width: 320 }}
      placeholder="请选择组织"
      treeData={[
        {
          title: '总部',
          value: 'hq',
          children: [
            { title: '财富管理部', value: 'wealth' },
            { title: '运营部', value: 'ops' },
          ],
        },
      ]}
    />
  </ConfigProvider>
);
```

## 可搜索

```tsx
import { ConfigProvider, TreeSelect } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <TreeSelect
      showSearch
      style={{ width: 280 }}
      placeholder="搜索组织"
      treeData={[
        { title: '总部', value: 'hq', children: [{ title: '上海分行', value: 'shanghai' }] },
      ]}
    />
  </ConfigProvider>
);
```

## 多选

```tsx
import { ConfigProvider, TreeSelect } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <TreeSelect
      multiple
      style={{ width: 320 }}
      placeholder="请选择多个组织"
      treeData={[
        {
          title: '总部',
          value: 'hq',
          children: [
            { title: '上海分行', value: 'shanghai' },
            { title: '北京分行', value: 'beijing' },
          ],
        },
      ]}
    />
  </ConfigProvider>
);
```

## 禁用节点

```tsx
import { ConfigProvider, TreeSelect } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <TreeSelect
      style={{ width: 280 }}
      placeholder="请选择组织"
      treeData={[
        {
          title: '总部',
          value: 'hq',
          children: [{ title: '停用机构', value: 'disabled', disabled: true }],
        },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { TreeSelectProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
