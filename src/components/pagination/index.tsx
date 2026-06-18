import React from 'react';
import './styles.css';

import type { PaginationProps as AntdPaginationProps } from 'antd';
import { Pagination as AntdPagination } from 'antd';

export type PaginationProps = AntdPaginationProps;

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <AntdPagination
      {...props}
      align={props.align || 'end'}
      showTotal={props.showTotal ?? ((value) => `共 ${value} 条`)}
    />
  );
};

export { Pagination };
