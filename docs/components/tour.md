---
title: Tour 漫游式引导
order: 127
---

# Tour 漫游式引导

用于分步骤引导用户了解关键功能。

`Tour` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Tour  漫游式引导样式.md`。

## 组件类型

- 基础引导
- 步骤切换
- 遮罩
- 非模态引导

## 基础引导

展示 Tour 漫游式引导 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Button, Space, Tour } from '@lf39.03/antd';
import { useRef, useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      const ref = useRef(null);
      return (
        <>
          <Button ref={ref} type="primary" onClick={() => setOpen(true)}>
            开始引导
          </Button>
          <Tour
            open={open}
            onClose={() => setOpen(false)}
            steps={[
              {
                title: '客户检索',
                description: '通过条件快速查找客户。',
                target: () => ref.current,
              },
            ]}
          />
        </>
      );
    })()}
  </ConfigProvider>
);
```

## 步骤切换 / 遮罩 / 非模态引导

展示 Tour 漫游式引导 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Button, Space, Tour } from '@lf39.03/antd';
import { useRef, useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      const ref = useRef(null);
      return (
        <Space>
          <Button ref={ref} type="primary" onClick={() => setOpen(true)}>
            开始引导
          </Button>
          <Button>辅助操作</Button>
          <Tour
            open={open}
            onClose={() => setOpen(false)}
            steps={[
              { title: '步骤一', description: '先确认关键入口。', target: () => ref.current },
              { title: '步骤二', description: '继续查看后续流程。', target: () => ref.current },
            ]}
          />
        </Space>
      );
    })()}
  </ConfigProvider>
);
```

## 容器展示

放入内容容器中观察与标题、辅助说明和周边内容的组合效果。

```tsx
import { ConfigProvider, Button, Space, Tour, Card, Typography } from '@lf39.03/antd';
import { useRef, useState } from 'react';

export default () => (
  <ConfigProvider>
    <Card title="信息展示" style={{ maxWidth: 560 }}>
      {(() => {
        const [open, setOpen] = useState(false);
        const ref = useRef(null);
        return (
          <>
            <Button ref={ref} type="primary" onClick={() => setOpen(true)}>
              开始引导
            </Button>
            <Tour
              open={open}
              onClose={() => setOpen(false)}
              steps={[
                {
                  title: '客户检索',
                  description: '通过条件快速查找客户。',
                  target: () => ref.current,
                },
              ]}
            />
          </>
        );
      })()}
      <Typography.Paragraph type="secondary" style={{ marginTop: 12, marginBottom: 0 }}>
        用于展示客户、产品、审批等业务信息。
      </Typography.Paragraph>
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { TourProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
