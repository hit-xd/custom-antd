import type { BreadcrumbProps, ButtonProps } from 'antd';
import { Breadcrumb, Button, Space } from 'antd';
import type { CSSProperties, ReactNode } from 'react';

export interface DetailPageHeaderAction extends ButtonProps {
  key: string;
  label: ReactNode;
}

export interface DetailPageHeaderDescription {
  key: string;
  label: ReactNode;
  value?: ReactNode;
}

export interface DetailPageHeaderProps {
  breadcrumb?: BreadcrumbProps['items'];
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: DetailPageHeaderAction[];
  descriptions?: DetailPageHeaderDescription[];
  className?: string;
  style?: CSSProperties;
}

export function DetailPageHeader({
  breadcrumb,
  title,
  subtitle,
  actions = [],
  descriptions = [],
  className,
  style,
}: DetailPageHeaderProps) {
  const visibleActions = actions.slice(0, 4);
  const classes = ['pb-detail-page-header', className].filter(Boolean);

  return (
    <section className={classes.join(' ')} style={style}>
      {breadcrumb?.length ? (
        <Breadcrumb className="pb-detail-page-header-breadcrumb" items={breadcrumb} />
      ) : null}
      <div className="pb-detail-page-header-main">
        <div className="pb-detail-page-header-title-group">
          <h1 className="pb-detail-page-header-title">{title}</h1>
          {subtitle ? <span className="pb-detail-page-header-subtitle">{subtitle}</span> : null}
        </div>
        {visibleActions.length ? (
          <Space className="pb-detail-page-header-actions" size={12}>
            {visibleActions.map(({ key, label, ...buttonProps }, index) => (
              <Button
                key={key}
                type={
                  buttonProps.type ?? (index === visibleActions.length - 1 ? 'primary' : 'default')
                }
                {...buttonProps}
              >
                {label}
              </Button>
            ))}
          </Space>
        ) : null}
      </div>
      {descriptions.length ? (
        <dl className="pb-detail-page-header-descriptions">
          {descriptions.map((item) => (
            <div className="pb-detail-page-header-description" key={item.key}>
              <dt>{item.label}</dt>
              <dd title={typeof item.value === 'string' ? item.value : undefined}>
                {item.value || '--'}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </section>
  );
}
