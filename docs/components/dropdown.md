---
title: Dropdown 下拉菜单
order: 154
---

# Dropdown 下拉菜单

用于承载更多操作或次级选项。

## 组件类型

- 默认导航
- 组合导航

## 基础导航

展示 Dropdown 下拉菜单 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Button, Dropdown } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Dropdown
      menu={{
        items: [
          { key: 'edit', label: '编辑' },
          { key: 'delete', label: '删除' },
        ],
      }}
    >
      <Button>更多操作</Button>
    </Dropdown>
  </ConfigProvider>
);
```

## 组合导航 / 页面导航

展示 Dropdown 下拉菜单 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Button, Dropdown } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Dropdown.Button menu={{ items: [{ key: 'download', label: '下载' }] }}>主操作</Dropdown.Button>
  </ConfigProvider>
);
```

## 页面导航

在页面导航区域中使用，观察与内容标题和操作入口的组合效果。

```tsx
import { ConfigProvider, Button, Dropdown, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="页面导航" style={{ maxWidth: 640 }}>
      <Dropdown
        menu={{
          items: [
            { key: 'edit', label: '编辑' },
            { key: 'delete', label: '删除' },
          ],
        }}
      >
        <Button>更多操作</Button>
      </Dropdown>
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { DropdownProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
