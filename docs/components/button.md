---
title: Button 按钮
order: 100
---

# Button 按钮

`@lf39.03/antd` 透传 antd `Button` API，并通过企业主题统一主按钮颜色、圆角和交互状态。

`Button` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`全局规范/Button.style.md`。

## 组件类型

- 主按钮
- 默认按钮
- 危险按钮
- 链接按钮
- 加载状态
- 禁用状态

## 按钮类型

展示主按钮、默认按钮、危险按钮和链接按钮等常用类型。

```tsx
import { ConfigProvider, Button, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space wrap>
      <Button type="primary">主按钮</Button>
      <Button>默认按钮</Button>
      <Button danger>危险操作</Button>
      <Button type="link">文本链接</Button>
    </Space>
  </ConfigProvider>
);
```

## 按钮尺寸

通过 size 切换大、中、小三种尺寸，按钮组内建议保持同一高度。

```tsx
import { ConfigProvider, Button, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space align="center" wrap>
      <Button type="primary" size="large">
        大按钮
      </Button>
      <Button type="primary">默认按钮</Button>
      <Button type="primary" size="small">
        小按钮
      </Button>
    </Space>
  </ConfigProvider>
);
```

## 加载中

```tsx
import { ConfigProvider, Button, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space wrap>
      <Button type="primary" loading>
        保存中
      </Button>
      <Button loading>加载中</Button>
    </Space>
  </ConfigProvider>
);
```

## 禁用

```tsx
import { ConfigProvider, Button, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space wrap>
      <Button type="primary" disabled>
        主按钮
      </Button>
      <Button disabled>默认按钮</Button>
      <Button type="link" disabled>
        链接按钮
      </Button>
    </Space>
  </ConfigProvider>
);
```

## 按钮组合

常见操作区保持主次关系清晰，同一操作区最多一个主按钮。

```tsx
import { ConfigProvider, Button, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space>
      <Button>取消</Button>
      <Button>保存草稿</Button>
      <Button type="primary">提交审批</Button>
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { ButtonProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
