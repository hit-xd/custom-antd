---
title: Space 间距
order: 153
---

# Space 间距

用于在相邻元素之间保持统一间距。

## 组件类型

- 默认布局
- 组合布局

## 基础间距

```tsx
import { ConfigProvider, Button, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Button>取消</Button>
      <Button type="primary">提交</Button>
    </Space>
  </ConfigProvider>
);
```

## 垂直间距

```tsx
import { ConfigProvider, Button, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" size={16}>
      <Button>第一项</Button>
      <Button>第二项</Button>
    </Space>
  </ConfigProvider>
);
```

## 自动换行

```tsx
import { ConfigProvider, Button, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space wrap>
      <Button>操作一</Button>
      <Button>操作二</Button>
      <Button>操作三</Button>
      <Button>操作四</Button>
    </Space>
  </ConfigProvider>
);
```

## 分隔符

```tsx
import { ConfigProvider, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space split={<span style={{ color: '#d9d9d9' }}>|</span>}>
      <a>查看</a>
      <a>编辑</a>
      <a>删除</a>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { SpaceProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
