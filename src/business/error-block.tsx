import { Button } from 'antd';
import type { CSSProperties, ReactNode } from 'react';

export type ErrorBlockVariant = 'default' | 'table' | 'calendar' | 'business';

export interface ErrorBlockProps {
  variant?: ErrorBlockVariant;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const defaultTitle: Record<ErrorBlockVariant, string> = {
  default: '暂无数据',
  table: '暂无表格数据',
  calendar: '暂无日程',
  business: '暂无业务内容',
};

export function ErrorBlock({
  variant = 'default',
  title = defaultTitle[variant],
  description,
  icon,
  action,
  className,
  style,
}: ErrorBlockProps) {
  const classes = ['pb-error-block', `pb-error-block-${variant}`, className].filter(Boolean);

  return (
    <div className={classes.join(' ')} style={style}>
      <div className="pb-error-block-icon" aria-hidden="true">
        {icon ?? <span />}
      </div>
      <div className="pb-error-block-title">{title}</div>
      {description ? <div className="pb-error-block-description">{description}</div> : null}
      {action ? <div className="pb-error-block-action">{action}</div> : null}
    </div>
  );
}

ErrorBlock.Button = Button;
