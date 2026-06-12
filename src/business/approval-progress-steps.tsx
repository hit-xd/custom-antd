import type { CSSProperties, ReactNode } from 'react';

export type ApprovalProgressStatus =
  | 'finished'
  | 'processing'
  | 'rejected'
  | 'returned'
  | 'waiting';

export interface ApprovalProgressStep {
  key: string;
  title: ReactNode;
  description?: ReactNode;
  status: ApprovalProgressStatus;
  opinion?: ReactNode;
  reason?: ReactNode;
  attachments?: ReactNode[];
}

export interface ApprovalProgressStepsProps {
  steps: ApprovalProgressStep[];
  className?: string;
  style?: CSSProperties;
}

const statusText: Partial<Record<ApprovalProgressStatus, string>> = {
  processing: '待处理',
  rejected: '已驳回',
  returned: '已回退',
};

export function ApprovalProgressSteps({ steps, className, style }: ApprovalProgressStepsProps) {
  const classes = ['pb-approval-steps', className].filter(Boolean);

  return (
    <ol className={classes.join(' ')} style={style}>
      {steps.map((step, index) => (
        <li className={`pb-approval-step pb-approval-step-${step.status}`} key={step.key}>
          <span className="pb-approval-step-line" aria-hidden="true" />
          <span className="pb-approval-step-node" aria-hidden="true" />
          <div className="pb-approval-step-content">
            <div className="pb-approval-step-header">
              <div>
                <div className="pb-approval-step-title">{step.title}</div>
                {step.description ? (
                  <div className="pb-approval-step-description">{step.description}</div>
                ) : null}
              </div>
              {statusText[step.status] ? (
                <span className="pb-approval-step-status">{statusText[step.status]}</span>
              ) : null}
            </div>
            {step.opinion ? <div className="pb-approval-step-card">{step.opinion}</div> : null}
            {step.reason ? (
              <div className="pb-approval-step-card pb-approval-step-reason">
                <div>{step.reason}</div>
                {step.attachments?.length ? (
                  <div className="pb-approval-step-attachments">
                    {step.attachments.map((attachment, attachmentIndex) => (
                      <span key={`${step.key}-${attachmentIndex}`}>{attachment}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          {index === steps.length - 1 ? <span className="pb-approval-step-line-end" /> : null}
        </li>
      ))}
    </ol>
  );
}
