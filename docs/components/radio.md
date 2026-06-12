---
title: Radio 单选框
order: 108
---

# Radio 单选框

用于在互斥选项中选择一个值。

`Radio` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Radio.dev.md`。

## 组件类型

- 基础单选
- 单选组
- 按钮样式
- 禁用状态

## 基础用法

```tsx
import { ConfigProvider, Radio, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Radio.Group options={['稳健型', '平衡型', '进取型']} defaultValue="稳健型" />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Radio, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Radio.Group
      optionType="button"
      buttonStyle="solid"
      options={['日', '周', '月']}
      defaultValue="月"
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { RadioProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
