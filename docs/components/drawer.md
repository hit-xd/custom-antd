---
title: Drawer 抽屉
order: 130
---

# Drawer 抽屉

用于在不离开当前页面的情况下查看详情或完成编辑。

`Drawer` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdDrawer.md`。

## 组件类型

- 右侧抽屉
- 不同尺寸
- 多层抽屉
- 带操作区

## 右侧抽屉

在不离开当前页面的情况下查看详情。

```tsx
import { ConfigProvider, Button, Drawer } from '@lf39.03/antd';
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

## 不同方向

```tsx
import { ConfigProvider, Button, Drawer, Space } from '@lf39.03/antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [placement, setPlacement] = useState('right');
      const [open, setOpen] = useState(false);
      return (
        <Space>
          <Button
            onClick={() => {
              setPlacement('right');
              setOpen(true);
            }}
          >
            右侧
          </Button>
          <Button
            onClick={() => {
              setPlacement('bottom');
              setOpen(true);
            }}
          >
            底部
          </Button>
          <Drawer placement={placement} title="抽屉" open={open} onClose={() => setOpen(false)}>
            抽屉内容
          </Drawer>
        </Space>
      );
    })()}
  </ConfigProvider>
);
```

## 不同尺寸

复杂编辑场景可调整 width 承载更多内容。

```tsx
import { ConfigProvider, Button, Drawer } from '@lf39.03/antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button type="primary" onClick={() => setOpen(true)}>
            编辑资料
          </Button>
          <Drawer
            title="编辑资料"
            open={open}
            width={560}
            extra={<Button type="primary">保存</Button>}
            onClose={() => setOpen(false)}
          >
            客户资料编辑区。
          </Drawer>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## 表单抽屉

```tsx
import { ConfigProvider, Button, Drawer, Form, Input } from '@lf39.03/antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>新建客户</Button>
          <Drawer
            title="新建客户"
            open={open}
            width={520}
            onClose={() => setOpen(false)}
            extra={<Button type="primary">保存</Button>}
          >
            <Form layout="vertical">
              <Form.Item label="客户名称" required>
                <Input placeholder="请输入客户名称" />
              </Form.Item>
              <Form.Item label="备注">
                <Input.TextArea rows={3} />
              </Form.Item>
            </Form>
          </Drawer>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## 无遮罩

需要保留页面可见上下文时，可关闭 mask。

```tsx
import { ConfigProvider, Button, Drawer } from '@lf39.03/antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>打开无遮罩抽屉</Button>
          <Drawer title="客户备注" mask={false} open={open} onClose={() => setOpen(false)}>
            页面内容仍保持可见。
          </Drawer>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { DrawerProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
