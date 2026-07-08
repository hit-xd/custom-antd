---
title: Select 选择器
order: 105
---

# Select 选择器

用于从一组明确选项中选择单个或多个值。

`Select` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Select.dev.md`。

## 组件类型

- 单选
- 多选
- 可搜索
- 标签模式
- 禁用与校验状态

## 单选

从明确选项中选择一个值。

```tsx
import { ConfigProvider, Select } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Select
      style={{ width: 240 }}
      placeholder="请选择业务类型"
      options={[
        { label: '财富管理', value: 'wealth' },
        { label: '资产配置', value: 'asset' },
      ]}
    />
  </ConfigProvider>
);
```

## 多选

标签、人员、机构等可使用 multiple 模式。

```tsx
import { ConfigProvider, Select } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Select
      mode="multiple"
      style={{ width: 320 }}
      placeholder="请选择标签"
      options={[
        { label: '重点', value: 'important' },
        { label: '跟进中', value: 'following' },
      ]}
    />
  </ConfigProvider>
);
```

## 可搜索

选项较多时开启 showSearch，提高选择效率。

```tsx
import { ConfigProvider, Select } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Select
      showSearch
      style={{ width: 240 }}
      placeholder="请选择城市"
      options={[
        { label: '上海', value: 'shanghai' },
        { label: '北京', value: 'beijing' },
      ]}
    />
  </ConfigProvider>
);
```

## 标签模式

允许用户录入并选择自定义标签。

```tsx
import { ConfigProvider, Select } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Select
      mode="tags"
      style={{ width: 320 }}
      placeholder="请输入标签"
      options={[{ label: '重点客户', value: 'important' }]}
    />
  </ConfigProvider>
);
```

## 状态

```tsx
import { ConfigProvider, Select, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical">
      <Select
        status="error"
        style={{ width: 240 }}
        placeholder="错误状态"
        options={[{ label: '选项', value: 'item' }]}
      />
      <Select disabled style={{ width: 240 }} placeholder="禁用状态" />
      <Select loading style={{ width: 240 }} placeholder="加载状态" />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { SelectProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
