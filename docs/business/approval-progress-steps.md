---
title: ApprovalProgressSteps 审批进度
---

# ApprovalProgressSteps 审批进度

用于审批、流转和复核类详情页，展示节点状态、处理意见、退回原因和附件信息。

## 基础示例

```tsx
import { ApprovalProgressSteps, ConfigProvider } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <ApprovalProgressSteps
      steps={[
        {
          key: 'submit',
          title: '提交申请',
          description: '张三 2026-06-12 09:30',
          status: 'finished',
          opinion: '申请资料已补充完整。',
        },
        {
          key: 'leader',
          title: '直属主管审批',
          description: '李四',
          status: 'processing',
        },
        {
          key: 'finance',
          title: '财务复核',
          status: 'waiting',
        },
      ]}
    />
  </ConfigProvider>
);
```

## 状态示例

```tsx
import { ApprovalProgressSteps, ConfigProvider } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <ApprovalProgressSteps
      steps={[
        {
          key: 'submit',
          title: '提交申请',
          description: '张三 2026-06-12 09:30',
          status: 'finished',
          opinion: '发起采购合同审批。',
        },
        {
          key: 'legal',
          title: '法务复核',
          description: '王五 2026-06-12 11:10',
          status: 'returned',
          reason: '合同付款条款需要补充违约责任说明。',
          attachments: ['合同修订说明.docx', '补充协议.pdf'],
        },
        {
          key: 'finance',
          title: '财务审批',
          status: 'waiting',
        },
      ]}
    />
  </ConfigProvider>
);
```

## API

### ApprovalProgressSteps

| 参数      | 说明         | 类型                     | 默认值 |
| --------- | ------------ | ------------------------ | ------ |
| steps     | 审批节点列表 | `ApprovalProgressStep[]` | -      |
| className | 自定义类名   | `string`                 | -      |
| style     | 自定义样式   | `CSSProperties`          | -      |

### ApprovalProgressStep

| 参数        | 说明           | 类型                                                                  | 默认值 |
| ----------- | -------------- | --------------------------------------------------------------------- | ------ |
| key         | 节点唯一标识   | `string`                                                              | -      |
| title       | 节点标题       | `ReactNode`                                                           | -      |
| description | 节点说明       | `ReactNode`                                                           | -      |
| status      | 节点状态       | `'finished' \| 'processing' \| 'rejected' \| 'returned' \| 'waiting'` | -      |
| opinion     | 处理意见       | `ReactNode`                                                           | -      |
| reason      | 驳回或退回原因 | `ReactNode`                                                           | -      |
| attachments | 附件列表       | `ReactNode[]`                                                         | -      |
