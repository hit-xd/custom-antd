import { describe, expect, it } from 'vitest';
import {
  Dropdown,
  FloatButton,
  Input,
  Layout,
  message,
  Modal,
  notification,
  Typography,
} from './index';

describe('component exports', () => {
  it('preserves common antd compound component APIs', () => {
    expect(Input.Search).toBeTruthy();
    expect(Input.Password).toBeTruthy();
    expect(Input.TextArea).toBeTruthy();
    expect(Layout.Header).toBeTruthy();
    expect(Layout.Sider).toBeTruthy();
    expect(Typography.Title).toBeTruthy();
    expect(Dropdown.Button).toBeTruthy();
    expect(FloatButton.Group).toBeTruthy();
  });

  it('preserves Modal static APIs on the wrapped export', () => {
    expect(Modal.confirm).toBeTruthy();
    expect(Modal.error).toBeTruthy();
    expect(Modal.info).toBeTruthy();
    expect(Modal.success).toBeTruthy();
    expect(Modal.warning).toBeTruthy();
    expect(Modal.warn).toBeTruthy();
    expect(Modal.useModal).toBeTruthy();
    expect(Modal.destroyAll).toBeTruthy();
    expect(Modal.config).toBeTruthy();
  });

  it('preserves message and notification static APIs on the wrapped exports', () => {
    expect(message.success).toBeTruthy();
    expect(message.error).toBeTruthy();
    expect(message.config).toBeTruthy();
    expect(message.destroy).toBeTruthy();
    expect(message.useMessage).toBeTruthy();
    expect(notification.open).toBeTruthy();
    expect(notification.success).toBeTruthy();
    expect(notification.config).toBeTruthy();
    expect(notification.destroy).toBeTruthy();
    expect(notification.useNotification).toBeTruthy();
  });
});
