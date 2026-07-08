---
title: BackTop 回到顶部
order: 142
---

# BackTop 回到顶部

用于长页面快速返回顶部。

`BackTop` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/backtop-Style-Spec.md`。

## 组件类型

- 基础回顶
- 自定义可见高度
- 自定义位置

## 基础回顶

展示 BackTop 回到顶部 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, FloatButton } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ position: 'relative', height: 160, overflow: 'auto', background: '#f4f6f8' }}>
      <div style={{ height: 360, padding: 16 }}>滚动区域示例</div>
      <FloatButton.BackTop
        visibilityHeight={0}
        style={{ position: 'absolute', right: 24, bottom: 24 }}
      />
    </div>
  </ConfigProvider>
);
```

## 自定义可见高度 / 自定义位置

展示 BackTop 回到顶部 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, FloatButton } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ position: 'relative', height: 160, overflow: 'auto', background: '#f4f6f8' }}>
      <div style={{ height: 360, padding: 16 }}>向下滚动后可返回顶部</div>
      <FloatButton.BackTop
        visibilityHeight={0}
        style={{ position: 'absolute', right: 24, bottom: 24 }}
      />
    </div>
  </ConfigProvider>
);
```

## 页面导航

在页面导航区域中使用，观察与内容标题和操作入口的组合效果。

```tsx
import { ConfigProvider, FloatButton, Card } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Card title="页面导航" style={{ maxWidth: 640 }}>
      <div style={{ position: 'relative', height: 160, overflow: 'auto', background: '#f4f6f8' }}>
        <div style={{ height: 360, padding: 16 }}>滚动区域示例</div>
        <FloatButton.BackTop
          visibilityHeight={0}
          style={{ position: 'absolute', right: 24, bottom: 24 }}
        />
      </div>
    </Card>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { FloatButtonProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
