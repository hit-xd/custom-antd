import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Pagination } from './index';

Object.defineProperty(globalThis, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Pagination', () => {
  it('defaults to right aligned full width layout', () => {
    const { container } = render(<Pagination defaultCurrent={1} total={120} />);
    const pagination = container.querySelector('.ant-pagination');

    expect(pagination).toBeTruthy();
    expect(pagination?.getAttribute('style')).toContain('display: flex');
    expect(pagination?.getAttribute('style')).toContain('justify-content: flex-end');
    expect(pagination?.getAttribute('style')).toContain('width: 100%');
  });

  it('renders enterprise total text by default', () => {
    render(<Pagination defaultCurrent={1} total={120} />);

    expect(screen.getByText('共 120 条')).toBeTruthy();
  });

  it('allows layout style to be overridden', () => {
    const { container } = render(
      <Pagination defaultCurrent={1} total={120} style={{ justifyContent: 'center' }} />,
    );
    const pagination = container.querySelector('.ant-pagination');

    expect(pagination?.getAttribute('style')).toContain('justify-content: center');
  });
});
