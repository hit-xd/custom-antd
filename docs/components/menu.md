---
title: Menu 导航菜单
order: 155
---

# Menu 导航菜单

用于页面导航和侧边栏菜单。

## 组件类型

- 默认导航
- 组合导航

## 垂直菜单

适用于侧边导航和页面内分组导航。

```tsx
import { ConfigProvider, Menu } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Menu
      mode="inline"
      items={[
        { key: 'home', label: '首页' },
        { key: 'customer', label: '客户管理' },
      ]}
    />
  </ConfigProvider>
);
```

## 水平菜单

适用于顶部导航。

```tsx
import { ConfigProvider, Menu } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Menu
      mode="horizontal"
      selectedKeys={['customer']}
      items={[
        { key: 'home', label: '首页' },
        { key: 'customer', label: '客户管理' },
      ]}
    />
  </ConfigProvider>
);
```

## 子菜单

```tsx
import { ConfigProvider, Menu } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Menu
      mode="inline"
      defaultOpenKeys={['customer']}
      items={[
        {
          key: 'customer',
          label: '客户管理',
          children: [
            { key: 'list', label: '客户列表' },
            { key: 'group', label: '客户分组' },
          ],
        },
      ]}
    />
  </ConfigProvider>
);
```

## 暗色菜单

```tsx
import { ConfigProvider, Menu } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Menu
      theme="dark"
      mode="inline"
      items={[
        { key: 'home', label: '首页' },
        { key: 'report', label: '报表' },
      ]}
    />
  </ConfigProvider>
);
```

## 分组菜单

```tsx
import { ConfigProvider, Menu } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Menu
      mode="inline"
      items={[
        { type: 'group', label: '客户', children: [{ key: 'customer-list', label: '客户列表' }] },
        { type: 'group', label: '审批', children: [{ key: 'approval-list', label: '审批列表' }] },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { MenuProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
