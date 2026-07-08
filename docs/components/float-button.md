---
title: FloatButton 悬浮按钮
order: 143
---

# FloatButton 悬浮按钮

用于承载固定在页面角落的快捷操作入口。

## 组件类型

- 基础按钮
- 组合按钮
- 提示文案
- 自定义位置

## 基础按钮

在固定高度容器中展示悬浮按钮，方便在文档预览区观察位置。

```tsx
import { ConfigProvider, FloatButton } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ position: 'relative', height: 160, background: '#f4f6f8' }}>
      <FloatButton tooltip="快捷操作" style={{ position: 'absolute', right: 24, bottom: 24 }} />
    </div>
  </ConfigProvider>
);
```

## 组合按钮

多个快捷操作可收纳为悬浮按钮组。

```tsx
import { ConfigProvider, FloatButton } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <div style={{ position: 'relative', height: 180, background: '#f4f6f8' }}>
      <FloatButton.Group trigger="click" style={{ position: 'absolute', right: 24, bottom: 24 }}>
        <FloatButton tooltip="编辑" />
        <FloatButton tooltip="刷新" />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </div>
  </ConfigProvider>
);
```

## 回到顶部

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

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { FloatButtonProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
