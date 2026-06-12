---
title: Select 选择器
order: 102
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

## 基础用法

```tsx
import { ConfigProvider, Select, Space } from 'privatebank-design';

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

## 常用类型与状态

```tsx
import { ConfigProvider, Select, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: 360 }}>
      <Select
        mode="multiple"
        placeholder="请选择标签"
        options={[
          { label: '重点', value: 'important' },
          { label: '跟进中', value: 'following' },
        ]}
      />
      <Select
        showSearch
        status="error"
        placeholder="可搜索的错误状态"
        options={[
          { label: '上海', value: 'shanghai' },
          { label: '北京', value: 'beijing' },
        ]}
      />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { SelectProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
