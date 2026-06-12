---
title: Tour 漫游式引导
order: 124
---

# Tour 漫游式引导

用于分步骤引导用户了解关键功能。

`Tour` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Tour  漫游式引导样式.md`。

## 组件类型

- 基础引导
- 步骤切换
- 遮罩
- 非模态引导

## 基础用法

```tsx
import { ConfigProvider, Tour, Button } from 'pb-antd';
import { useRef, useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      const ref = useRef(null);
      return (
        <>
          <Button ref={ref} onClick={() => setOpen(true)}>
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

## 常用类型与状态

```tsx
import { ConfigProvider, Tour, Button } from 'pb-antd';
import { useRef, useState } from 'react';

export default () => (
  <ConfigProvider>
    <Tour open={false} steps={[]} />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { TourProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
