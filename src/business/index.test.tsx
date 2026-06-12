import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ApprovalProgressSteps, DetailPageHeader, ErrorBlock, Status } from './index';

describe('business components', () => {
  it('renders ErrorBlock variants with action', () => {
    render(
      <ErrorBlock variant="table" title="暂无数据" action={<button type="button">新建</button>} />,
    );

    expect(screen.getByText('暂无数据')).toBeTruthy();
    expect(screen.getByText('新建')).toBeTruthy();
  });

  it('renders semantic status', () => {
    const { container } = render(<Status type="success" text="已完成" />);

    expect(screen.getByText('已完成')).toBeTruthy();
    expect(container.querySelector('.pb-status-success')).toBeTruthy();
  });

  it('renders detail page header with limited actions and empty placeholders', () => {
    render(
      <DetailPageHeader
        title="客户详情"
        subtitle="重点客户"
        actions={[
          { key: 'a', label: '操作一' },
          { key: 'b', label: '操作二' },
          { key: 'c', label: '操作三' },
          { key: 'd', label: '操作四' },
          { key: 'e', label: '操作五' },
        ]}
        descriptions={[
          { key: 'owner', label: '更新人：', value: '张三' },
          { key: 'empty', label: '更新时间：' },
        ]}
      />,
    );

    expect(screen.getByText('客户详情')).toBeTruthy();
    expect(screen.queryByText('操作五')).toBeFalsy();
    expect(screen.getByText('--')).toBeTruthy();
  });

  it('renders approval progress states and reason cards', () => {
    render(
      <ApprovalProgressSteps
        steps={[
          { key: 'done', title: '提交申请', status: 'finished', opinion: '同意申请' },
          { key: 'reject', title: '负责人审批', status: 'rejected', reason: '缺少附件材料' },
          { key: 'wait', title: '归档', status: 'waiting' },
        ]}
      />,
    );

    expect(screen.getByText('提交申请')).toBeTruthy();
    expect(screen.getByText('已驳回')).toBeTruthy();
    expect(screen.getByText('缺少附件材料')).toBeTruthy();
  });
});
