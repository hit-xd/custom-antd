import './styles.css';

import type { UploadProps as AntdUploadProps } from 'antd';
import { Upload as AntdUpload } from 'antd';

export type UploadProps = AntdUploadProps;

export const Upload = AntdUpload;
