import type { CSSProperties, ReactNode } from 'react';

export type StatusType = 'success' | 'processing' | 'warning' | 'error' | 'default';

export interface StatusProps {
  type?: StatusType;
  text?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Status({ type = 'default', text, className, style }: StatusProps) {
  const classes = ['pb-status', `pb-status-${type}`, className].filter(Boolean);

  return (
    <span className={classes.join(' ')} style={style}>
      <span className="pb-status-dot" aria-hidden="true" />
      {text ? <span className="pb-status-text">{text}</span> : null}
    </span>
  );
}
