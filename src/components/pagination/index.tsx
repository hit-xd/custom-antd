import React from 'react';
import './styles.css';

import type { PaginationProps as AntdPaginationProps } from 'antd';
import { Pagination as AntdPagination } from 'antd';

export type PaginationProps = AntdPaginationProps;

const defaultPaginationStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
};

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <AntdPagination
      {...props}
      showTotal={props.showTotal ?? ((value) => `共 ${value} 条`)}
      style={{ ...defaultPaginationStyle, ...props.style }}
    />
  );
};

export { Pagination };
