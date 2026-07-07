import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Input } from './index';

describe('Input.TextArea', () => {
  it('renders showCount inside the textarea wrapper and updates the count', () => {
    const { container } = render(
      <Input.TextArea showCount maxLength={100} placeholder="请输入说明" />,
    );

    const textarea = screen.getByPlaceholderText('请输入说明');

    expect(container.querySelector('.ant-input-textarea-show-count')).toBeTruthy();
    expect(container.querySelector('.ant-input-data-count')?.textContent).toBe('0 / 100');

    fireEvent.change(textarea, { target: { value: 'abc' } });

    expect(container.querySelector('.ant-input-data-count')?.textContent).toBe('3 / 100');
  });

  it('keeps showCount rendered when allowClear is enabled', () => {
    const { container } = render(
      <Input.TextArea allowClear showCount maxLength={20} defaultValue="risk" />,
    );

    expect(container.querySelector('.ant-input-textarea-show-count')).toBeTruthy();
    expect(container.querySelector('.ant-input-data-count')?.textContent).toBe('4 / 20');
  });
});
