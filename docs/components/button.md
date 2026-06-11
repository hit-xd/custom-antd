---
title: Button 按钮
order: 10
---

# Button 按钮

`pb-antd` 透传 antd `Button` API，并通过企业主题将主按钮颜色切换为品牌金。业务代码只需要从 `pb-antd` 导入。

## 基础用法

```tsx
import { Button, ConfigProvider, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Button type="primary">主按钮</Button>
      <Button>默认按钮</Button>
      <Button danger>危险操作</Button>
      <Button type="link">文本链接</Button>
    </Space>
  </ConfigProvider>
);
```

## 常用状态

```tsx
import { Button, ConfigProvider, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Button type="primary" loading>
        保存中
      </Button>
      <Button disabled>不可用</Button>
      <Button type="primary" ghost>
        次级强调
      </Button>
    </Space>
  </ConfigProvider>
);
```

## 使用建议

每个操作区只保留一个 `type="primary"`。危险操作使用 `danger`，不要仅依赖文案表达风险。
