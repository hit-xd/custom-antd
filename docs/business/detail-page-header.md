---
title: DetailPageHeader 详情页头
---

# DetailPageHeader 详情页头

用于详情页顶部区域，统一面包屑、标题、副标题、操作按钮和关键字段的排布。

## 基础示例

```tsx
import { ConfigProvider, DetailPageHeader } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <DetailPageHeader
      breadcrumb={[{ title: '项目管理' }, { title: '需求详情' }]}
      title="企业门户改版需求"
      subtitle="REQ-20260612-001"
      actions={[
        { key: 'cancel', label: '取消' },
        { key: 'submit', label: '提交审批' },
      ]}
    />
  </ConfigProvider>
);
```

## 配置示例

```tsx
import { ConfigProvider, DetailPageHeader } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <DetailPageHeader
      title="采购合同审批"
      subtitle="合同编号 CT-2026-0612"
      actions={[
        { key: 'download', label: '下载' },
        { key: 'reject', label: '驳回', danger: true },
        { key: 'approve', label: '通过', type: 'primary' },
      ]}
      descriptions={[
        { key: 'owner', label: '负责人', value: '张三' },
        { key: 'amount', label: '合同金额', value: '¥ 230,000' },
        { key: 'status', label: '当前状态', value: '审批中' },
        { key: 'updatedAt', label: '更新时间', value: '2026-06-12 10:30' },
      ]}
    />
  </ConfigProvider>
);
```

## API

| 参数         | 说明                    | 类型                            | 默认值 |
| ------------ | ----------------------- | ------------------------------- | ------ |
| breadcrumb   | 面包屑配置              | `BreadcrumbProps['items']`      | -      |
| title        | 标题                    | `ReactNode`                     | -      |
| subtitle     | 副标题                  | `ReactNode`                     | -      |
| actions      | 操作按钮，最多展示 4 个 | `DetailPageHeaderAction[]`      | `[]`   |
| descriptions | 描述字段                | `DetailPageHeaderDescription[]` | `[]`   |
| className    | 自定义类名              | `string`                        | -      |
| style        | 自定义样式              | `CSSProperties`                 | -      |
