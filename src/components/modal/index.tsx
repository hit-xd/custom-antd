import React from 'react';
import './styles.css';

import type { ModalProps as AntdModalProps } from 'antd';
import { Modal as AntdModal } from 'antd';
import { withStaticTheme } from '../static-theme';

export type ModalProps = AntdModalProps;

export const Modal = Object.assign(
  function Modal({ centered = true, ...props }: ModalProps) {
    return <AntdModal centered={centered} {...props} />;
  },
  {
    ...AntdModal,
    confirm: withStaticTheme(AntdModal.confirm),
    error: withStaticTheme(AntdModal.error),
    info: withStaticTheme(AntdModal.info),
    success: withStaticTheme(AntdModal.success),
    warning: withStaticTheme(AntdModal.warning),
    warn: withStaticTheme(AntdModal.warn),
    useModal: AntdModal.useModal,
    destroyAll: AntdModal.destroyAll,
    config: AntdModal.config,
  },
);
