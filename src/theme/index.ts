import type { ThemeConfig } from 'antd';

import { antdComponentTokens, antdTokens } from './tokens';

// re-export tokens for consumers who need direct access
export { privateBankingPrimitiveTokens, privateBankingSemanticTokens } from './tokens';

export const wplusTheme: ThemeConfig = {
  token: antdTokens,
  components: antdComponentTokens,
  cssVar: {
    prefix: 'wplus',
    key: 'wplus',
  },
};
