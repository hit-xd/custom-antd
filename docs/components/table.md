---
title: Table 表格
order: 102
---

# Table 表格

表格继承 antd `Table` 能力，并应用企业规范中的表头背景、边框色和 hover 背景。

`Table` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Table 表格样式.md`。

## 组件类型

- 基础表格
- 状态列
- 分页表格
- 行选择
- 操作列

## 基础表格

展示结构化列表数据，企业主题统一表头、边框和 hover 背景。

```tsx
import { ConfigProvider, Table, Tag } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Table
      columns={[
        { title: '名称', dataIndex: 'name' },
        { title: '负责人', dataIndex: 'owner' },
        {
          title: '状态',
          dataIndex: 'status',
          render: (status) => (
            <Tag color={status === 'online' ? 'success' : 'default'}>{status}</Tag>
          ),
        },
      ]}
      dataSource={[
        { key: '1', name: '客户中心', owner: 'Alice', status: 'online' },
        { key: '2', name: '报表平台', owner: 'Bob', status: 'offline' },
      ]}
      pagination={false}
    />
  </ConfigProvider>
);
```

## 可选择

批量处理场景可开启 rowSelection。

```tsx
import { ConfigProvider, Table } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Table
      rowSelection={{}}
      columns={[
        { title: '客户名称', dataIndex: 'name' },
        { title: '资产规模', dataIndex: 'amount' },
      ]}
      dataSource={[
        { key: '1', name: '上海分行重点客户', amount: '￥12,800,000' },
        { key: '2', name: '北京分行机构客户', amount: '￥8,600,000' },
      ]}
      pagination={false}
    />
  </ConfigProvider>
);
```

## 筛选和排序

列表列头可配置 filters 和 sorter 支持快速筛选。

```tsx
import { ConfigProvider, Table } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Table
      columns={[
        { title: '客户名称', dataIndex: 'name' },
        {
          title: '风险等级',
          dataIndex: 'risk',
          filters: [
            { text: '稳健型', value: '稳健型' },
            { text: '进取型', value: '进取型' },
          ],
          onFilter: (value, record) => record.risk === value,
        },
        { title: '资产规模', dataIndex: 'amount', sorter: (a, b) => a.amount - b.amount },
      ]}
      dataSource={[
        { key: '1', name: '张先生', risk: '稳健型', amount: 1280 },
        { key: '2', name: '李女士', risk: '进取型', amount: 860 },
      ]}
    />
  </ConfigProvider>
);
```

## 分页表格

大量数据使用分页控制信息密度。

```tsx
import { ConfigProvider, Table } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Table
      columns={[
        { title: '客户名称', dataIndex: 'name' },
        { title: '资产规模', dataIndex: 'amount' },
        { title: '操作', dataIndex: 'action', render: () => <a>查看</a> },
      ]}
      dataSource={[
        { key: '1', name: '上海分行重点客户', amount: '￥12,800,000' },
        { key: '2', name: '北京分行机构客户', amount: '￥8,600,000' },
      ]}
      pagination={{ pageSize: 5 }}
    />
  </ConfigProvider>
);
```

## 横向滚动

列较多时配置 scroll.x，避免挤压关键字段。

```tsx
import { ConfigProvider, Table } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Table
      scroll={{ x: 720 }}
      columns={[
        { title: '客户名称', dataIndex: 'name', fixed: 'left', width: 180 },
        { title: '所属机构', dataIndex: 'branch', width: 160 },
        { title: '资产规模', dataIndex: 'amount', width: 160 },
        { title: '风险等级', dataIndex: 'risk', width: 120 },
        {
          title: '操作',
          dataIndex: 'action',
          fixed: 'right',
          width: 100,
          render: () => <a>查看</a>,
        },
      ]}
      dataSource={[
        { key: '1', name: '张先生', branch: '上海分行', amount: '￥12,800,000', risk: '稳健型' },
      ]}
      pagination={false}
    />
  </ConfigProvider>
);
```

## 展开行

```tsx
import { ConfigProvider, Table } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Table
      expandable={{ expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.detail}</p> }}
      columns={[
        { title: '客户名称', dataIndex: 'name' },
        { title: '状态', dataIndex: 'status' },
      ]}
      dataSource={[
        { key: '1', name: '张先生', status: '跟进中', detail: '最近一次回访：2026-06-12' },
      ]}
      pagination={false}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { TableProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
