import { notification as antdNotification } from 'antd';
import { withStaticTheme } from '../static-theme';

export const notification = {
  ...antdNotification,
  open: withStaticTheme(antdNotification.open),
  success: withStaticTheme(antdNotification.success),
  info: withStaticTheme(antdNotification.info),
  warning: withStaticTheme(antdNotification.warning),
  error: withStaticTheme(antdNotification.error),
} as typeof antdNotification;
