---
title: Drawer 抽屉
order: 127
---

# Drawer 抽屉

用于在不离开当前页面的情况下查看详情或完成编辑。

`Drawer` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdDrawer.md`。

## 组件类型

- 右侧抽屉
- 不同尺寸
- 多层抽屉
- 带操作区

## 基础用法

```tsx
import { ConfigProvider, Drawer, Button } from 'privatebank-design';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>查看客户详情</Button>
          <Drawer title="客户详情" open={open} onClose={() => setOpen(false)}>
            客户资产和持仓信息。
          </Drawer>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Drawer, Button } from 'privatebank-design';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    <Drawer
      title="编辑资料"
      open={false}
      width={560}
      extra={<Button type="primary">保存</Button>}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { DrawerProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
