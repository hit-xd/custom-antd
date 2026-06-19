import { describe, expect, it } from 'vitest';
import { antdComponentTokens, antdTokens } from './index';

describe('theme tokens', () => {
  it('only contains official PascalCase antd component token entries', () => {
    const componentNames = Object.keys(antdComponentTokens);

    expect(componentNames).not.toContain('button');
    expect(componentNames).not.toContain('searchForm');
    expect(componentNames).not.toContain('table');

    expect(componentNames.every((name) => /^[A-Z]/.test(name))).toBe(true);
  });

  it('does not repeat global antd token values in component token overrides', () => {
    const duplicatedEntries = Object.entries(antdComponentTokens).flatMap(
      ([componentName, componentTokens]) =>
        Object.entries(componentTokens)
          .filter(([tokenName, tokenValue]) => {
            const globalTokenValue = antdTokens[tokenName as keyof typeof antdTokens];

            return globalTokenValue !== undefined && globalTokenValue === tokenValue;
          })
          .map(([tokenName]) => `${componentName}.${tokenName}`),
    );

    expect(duplicatedEntries).toEqual([]);
  });
});
