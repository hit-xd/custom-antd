import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Modal } from './index';

describe('Modal', () => {
  it('defaults to centered enterprise modal behavior', () => {
    const { container } = render(
      <Modal title="确认发布" open getContainer={false}>
        发布后配置将同步到生产环境。
      </Modal>,
    );

    expect(screen.getByText('确认发布')).toBeTruthy();
    expect(container.querySelector('.ant-modal-centered')).toBeTruthy();
  });

  it('allows centered to be overridden', () => {
    const { container } = render(
      <Modal title="确认发布" open centered={false} getContainer={false}>
        发布后配置将同步到生产环境。
      </Modal>,
    );

    expect(container.querySelector('.ant-modal-centered')).toBeFalsy();
  });
});
