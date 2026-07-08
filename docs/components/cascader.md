---
title: Cascader 级联选择
order: 108
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

## 单选

展示 Cascader 级联选择 的默认样式和企业主题效果。

```tsx
import { ConfigProvider, Cascader, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Cascader
      placeholder="请选择机构"
      options={[{ value: 'east', label: '华东', children: [{ value: 'shanghai', label: '上海' }] }]}
    />
  </ConfigProvider>
);
```

## 多选 / 可搜索 / 禁用选项

展示 Cascader 级联选择 的常用配置、状态或组合形态。

```tsx
import { ConfigProvider, Cascader, Space } from '@lf39.03/antd';

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

## 加载状态

放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。

```tsx
import { ConfigProvider, Cascader, Space, Button, Form } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        <Cascader
          placeholder="请选择机构"
          options={[
            { value: 'east', label: '华东', children: [{ value: 'shanghai', label: '上海' }] },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary">查询</Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { CascaderProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
