---
title: Spin 加载中
order: 132
---

# Spin 加载中

用于表示局部或容器内容正在加载。

`Spin` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdSpin.md`。

## 组件类型

- 基础加载
- 不同尺寸
- 容器加载
- 延迟显示

## 基础用法

```tsx
import { ConfigProvider, Spin, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Spin />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Spin, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Spin spinning tip="正在加载客户数据...">
      <div style={{ padding: 32, background: '#f4f6f8' }}>客户详情内容</div>
    </Spin>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { SpinProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
