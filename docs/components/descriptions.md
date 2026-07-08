---
title: Descriptions 描述列表
order: 120
---

# Descriptions 描述列表

用于展示对象的多个只读字段。

`Descriptions` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Descriptions  描述列表样式.md`。

## 组件类型

- 基础描述
- 带边框
- 多列布局
- 响应式

## 基础描述

```tsx
import { ConfigProvider, Descriptions } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Descriptions
      items={[
        { key: '1', label: '客户名称', children: '张先生' },
        { key: '2', label: '风险等级', children: '稳健型' },
      ]}
    />
  </ConfigProvider>
);
```

## 带边框

```tsx
import { ConfigProvider, Descriptions } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Descriptions
      bordered
      column={2}
      items={[
        { key: '1', label: '客户编号', children: 'C-20260001' },
        { key: '2', label: '所属机构', children: '上海分行' },
        { key: '3', label: '资产规模', children: '1,280 万元' },
      ]}
    />
  </ConfigProvider>
);
```

## 多列布局

```tsx
import { ConfigProvider, Descriptions } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Descriptions
      column={3}
      items={[
        { key: '1', label: '姓名', children: '张先生' },
        { key: '2', label: '等级', children: '私行' },
        { key: '3', label: '状态', children: '有效' },
      ]}
    />
  </ConfigProvider>
);
```

## 垂直布局

```tsx
import { ConfigProvider, Descriptions } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Descriptions
      layout="vertical"
      bordered
      items={[
        { key: '1', label: '审批意见', children: '资料完整，同意提交复核。' },
        { key: '2', label: '处理人', children: '李四' },
      ]}
    />
  </ConfigProvider>
);
```

## 尺寸

```tsx
import { ConfigProvider, Descriptions, Space } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: '100%' }}>
      <Descriptions
        size="small"
        bordered
        items={[{ key: '1', label: '小尺寸', children: '适合紧凑详情' }]}
      />
      <Descriptions
        size="middle"
        bordered
        items={[{ key: '1', label: '默认尺寸', children: '适合普通详情' }]}
      />
    </Space>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { DescriptionsProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
