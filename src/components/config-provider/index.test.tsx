import { render, screen } from '@testing-library/react';
import { Button } from 'antd';
import { describe, expect, it } from 'vitest';
import { ConfigProvider } from './index';
import { createEnterpriseTheme, globalDesignTokens } from '../../theme';

describe('ConfigProvider', () => {
  it('renders children with the wrapped provider', () => {
    render(
      <ConfigProvider>
        <Button>Save</Button>
      </ConfigProvider>,
    );

    expect(screen.getByText('Save')).toBeTruthy();
  });

  it('uses design spec tokens as the default enterprise theme', () => {
    const theme = createEnterpriseTheme();

    expect(theme.token?.colorPrimary).toBe(globalDesignTokens.color.brand[7]);
    expect(theme.token?.colorLink).toBe(globalDesignTokens.color.functional.info);
    expect(theme.token?.borderRadiusLG).toBe(globalDesignTokens.radius.lg);
  });
});
