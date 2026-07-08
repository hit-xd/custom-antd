---
title: Flex 弹性布局
order: 149
---

# Flex 弹性布局

用于构建一维弹性排列和对齐关系。

## 组件类型

- 默认布局
- 组合布局

## 基础排列

```tsx
import { ConfigProvider, Button, Flex } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Flex gap="small">
      <Button>取消</Button>
      <Button type="primary">提交</Button>
    </Flex>
  </ConfigProvider>
);
```

## 主轴对齐

```tsx
import { ConfigProvider, Button, Flex, Typography } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Flex justify="space-between" align="center">
      <Typography.Text>客户信息</Typography.Text>
      <Button type="link">查看</Button>
    </Flex>
  </ConfigProvider>
);
```

## 自动换行

```tsx
import { ConfigProvider, Button, Flex } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Flex wrap="wrap" gap="small">
      <Button>操作一</Button>
      <Button>操作二</Button>
      <Button>操作三</Button>
      <Button>操作四</Button>
    </Flex>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { FlexProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
