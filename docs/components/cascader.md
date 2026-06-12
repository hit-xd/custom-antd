---
title: Cascader 级联选择
order: 105
---

# Cascader 级联选择

用于从多层级关联数据中逐级选择。

`Cascader` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Cascader.dev.md`。

## 组件类型

- 单选
- 多选
- 可搜索
- 禁用选项
- 加载状态

## 基础用法

```tsx
import { ConfigProvider, Cascader, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Cascader
      placeholder="请选择机构"
      options={[{ value: 'east', label: '华东', children: [{ value: 'shanghai', label: '上海' }] }]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Cascader, Space } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Cascader
      multiple
      style={{ width: 320 }}
      placeholder="请选择多个机构"
      options={[
        {
          value: 'east',
          label: '华东',
          children: [
            { value: 'shanghai', label: '上海' },
            { value: 'hangzhou', label: '杭州' },
          ],
        },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { CascaderProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
