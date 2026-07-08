---
title: Pagination 分页
order: 137
---

# Pagination 分页

用于在大量列表数据之间切换页面。

`Pagination` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/pagination-Style-Spec.md`。

## 组件类型

- 基础分页
- 完整分页
- 小尺寸
- 简洁模式

## 基础分页

```tsx
import { ConfigProvider, Pagination } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Pagination defaultCurrent={1} total={120} />
  </ConfigProvider>
);
```

## 更多配置

```tsx
import { ConfigProvider, Pagination } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Pagination
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `共 ${total} 条`}
      total={500}
    />
  </ConfigProvider>
);
```

## 小尺寸

```tsx
import { ConfigProvider, Pagination } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Pagination size="small" total={120} />
  </ConfigProvider>
);
```

## 简洁模式

```tsx
import { ConfigProvider, Pagination } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Pagination simple total={120} />
  </ConfigProvider>
);
```

## 受控分页

```tsx
import { ConfigProvider, Pagination } from '@lf39.03/antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [current, setCurrent] = useState(1);
      return <Pagination current={current} total={120} onChange={setCurrent} />;
    })()}
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { PaginationProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
