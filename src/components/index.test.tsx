import { describe, expect, it } from 'vitest';
import { Dropdown, FloatButton, Input, Layout, Modal, Typography } from './index';

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
    expect(Modal.useModal).toBeTruthy();
    expect(Modal.destroyAll).toBeTruthy();
    expect(Modal.config).toBeTruthy();
  });
});
