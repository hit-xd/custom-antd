import { message as antdMessage } from 'antd';
import { withStaticTheme } from '../static-theme';

export const message = {
  ...antdMessage,
  open: withStaticTheme(antdMessage.open),
  info: withStaticTheme(antdMessage.info),
  success: withStaticTheme(antdMessage.success),
  error: withStaticTheme(antdMessage.error),
  warning: withStaticTheme(antdMessage.warning),
  loading: withStaticTheme(antdMessage.loading),
} as typeof antdMessage;
