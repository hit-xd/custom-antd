# privatebank-design

`privatebank-design` 是基于 Ant Design v5 的企业级 UI 二次封装组件库。它的目标是让业务项目可以从：

```ts
import * as antd from 'antd';
```

平滑切换到：

```ts
import * as antd from 'privatebank-design';
```

包入口默认透传 Ant Design 的导出，并在此基础上提供企业主题、包装组件和可复用业务组件。

## 特性

- 兼容 Ant Design v5 的组件导出和主要使用方式。
- 内置企业主题 `enterpriseTheme`，由 `ui-spec/` 规范同步生成到 `src/theme/`。
- 提供企业版 `ConfigProvider`，默认注入企业主题，并支持继续传入 antd `theme` 覆盖。
- 提供包装组件，例如 `Modal`。
- 提供业务组件，例如 `ApprovalProgressSteps`、`DetailPageHeader`、`ErrorBlock` 和 `Status`。
- 使用 dumi 维护文档站，文档风格参考 Ant Design 官网。

## 安装

```bash
pnpm add privatebank-design antd react react-dom
```

`antd`、`react` 和 `react-dom` 是 peer dependencies，业务项目需要显式安装。

## 快速使用

```tsx
import { Button, ConfigProvider } from 'privatebank-design';
import 'privatebank-design/reset.css';

export function App() {
  return (
    <ConfigProvider>
      <Button type="primary">提交</Button>
    </ConfigProvider>
  );
}
```

## 从 antd 迁移

大多数 Ant Design 组件可以直接从 `privatebank-design` 导入：

```tsx
import { Button, DatePicker, Form, Table } from 'privatebank-design';
```

如果项目中原来使用命名空间导入，也可以保持相同调用方式：

```tsx
import * as antd from 'privatebank-design';

export function Example() {
  return <antd.Button type="primary">提交</antd.Button>;
}
```

迁移时建议先替换导入来源，再逐步接入企业版 `ConfigProvider` 和业务组件。

## 主题

主入口会导出企业主题相关能力：

```ts
import { createEnterpriseTheme, enterpriseTheme, globalDesignTokens } from 'privatebank-design';

globalDesignTokens.color.brand[7]; // #9B7235

const theme = createEnterpriseTheme({
  primaryColor: '#9B7235',
  borderRadius: 4,
});
```

也可以从主题子入口导入：

```ts
import { createEnterpriseTheme, enterpriseTheme, globalDesignTokens } from 'privatebank-design/theme';
```

`ConfigProvider` 会默认使用 `enterpriseTheme`，并合并业务侧传入的 antd `theme`：

```tsx
import { ConfigProvider } from 'privatebank-design';

export function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#8A642D',
        },
      }}
    >
      {/* app */}
    </ConfigProvider>
  );
}
```

## 业务组件

业务组件可从主入口导入：

```tsx
import { ApprovalProgressSteps, DetailPageHeader, ErrorBlock, Status } from 'privatebank-design';
```

也可以从业务组件子入口导入：

```tsx
import { Status } from 'privatebank-design/business';
```

当前包含：

- `ApprovalProgressSteps`：审批进度步骤。
- `DetailPageHeader`：详情页头部。
- `ErrorBlock`：错误、空状态或异常提示。
- `Status`：业务状态标识。

## 导出入口

| 入口 | 说明 |
| --- | --- |
| `privatebank-design` | 主入口，透传 antd 导出，并导出企业包装组件、业务组件和主题能力。 |
| `privatebank-design/theme` | 主题 token、主题工厂和企业主题配置。 |
| `privatebank-design/business` | 可复用业务组件。 |
| `privatebank-design/reset.css` | 基础 reset 样式。 |

## 本地开发

统一使用 pnpm：

```bash
pnpm install
pnpm dev
```

常用命令：

```bash
pnpm docs:dev
pnpm docs:build
pnpm build
pnpm typecheck
pnpm test
pnpm lint
pnpm format:check
pnpm check
pnpm run ci
```

命令说明：

- `pnpm dev`：以 watch 模式构建库代码。
- `pnpm docs:dev`：启动本地 dumi 文档站。
- `pnpm docs:build`：构建静态文档到 `docs-dist/`。
- `pnpm build`：输出 ESM、CJS 和类型声明到 `dist/`。
- `pnpm typecheck`：执行 TypeScript 类型检查。
- `pnpm test`：运行 Vitest。
- `pnpm lint`：执行 ESLint。
- `pnpm format:check`：校验 Prettier 格式。
- `pnpm check`：串联规范生成一致性、格式、lint、类型检查和测试。
- `pnpm run ci`：运行完整 CI 校验，包括库构建和文档构建。

发布或提交 PR 前至少运行：

```bash
pnpm build
pnpm typecheck
pnpm test
```

完整校验建议运行：

```bash
pnpm run ci
```

## 文档

项目使用 dumi 维护文档站：

- `docs/` 存放全局指南、主题说明和组件文档。
- 组件旁的 `index.md` 用于维护组件就近文档。
- 示例代码应使用 `privatebank-design` 导入，体现业务项目真实用法。

## 贡献约定

- 新增包装组件时，尽量保持 antd 原有 props 与行为兼容。
- 企业定制优先通过主题 token、包装组件或业务组件沉淀，不要破坏 antd 的命名导出。
- 新增主题合并逻辑、包装组件行为或业务组件时，需要补充对应测试。
- 测试文件与源码同目录放置，命名为 `*.test.ts` 或 `*.test.tsx`。
