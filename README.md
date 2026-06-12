# privatebank-design

`privatebank-design` is an enterprise UI wrapper based on Ant Design v5. Existing consumers can replace:

```ts
import * as antd from 'antd';
```

with:

```ts
import * as antd from 'privatebank-design';
```

Most Ant Design components are re-exported unchanged. The package adds an enterprise theme extracted from `global-spec/`, a themed `ConfigProvider`, and a place to collect business components.

## Install

```bash
pnpm add privatebank-design antd react react-dom
```

## Usage

```tsx
import { Button, ConfigProvider } from 'privatebank-design';
import 'privatebank-design/reset.css';

export function App() {
  return (
    <ConfigProvider>
      <Button type="primary">Submit</Button>
    </ConfigProvider>
  );
}
```

## Development

```bash
pnpm install
pnpm dev
pnpm docs:dev
pnpm build
pnpm typecheck
pnpm test
pnpm check
pnpm run ci
```

## Documentation

This project uses dumi for an Ant Design-style documentation site.

- `pnpm docs:dev` starts the local documentation server.
- `pnpm docs:build` builds static documentation into `docs-dist/`.

## Design Tokens

`globalDesignTokens` exposes the extracted color, radius, shadow, space, typography, layout, and image-ratio specs:

```ts
import { globalDesignTokens } from 'privatebank-design';

globalDesignTokens.color.brand[7]; // #9B7235
```
