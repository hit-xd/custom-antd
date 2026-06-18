# Repository Guidelines

## 项目结构与模块组织

本项目是一个 pnpm 管理的 TypeScript 组件库，基于 Ant Design v5 做企业级 UI 二次封装。目标是让业务项目从 `import * as antd from 'antd'` 平滑切换到 `import * as antd from '@lf39.03/antd'`。

- `src/index.ts` 是包主入口，导入 reset CSS、透传 antd、导出包装组件、业务组件和主题。
- `src/components/` 存放 B 类 antd wrapper 组件和企业版 `ConfigProvider`。
- `src/business/` 存放可复用业务组件和共享业务样式。
- `src/theme/` 存放 `wplusTheme` 主题入口。
- `src/theme/tokens/` 存放设计 token 源文件。
- `src/styles/` 存放全局样式与 CSS 变量相关文件。
- `docs/` 存放 dumi 文档内容。
- `docs/generated/` 存放由 `pnpm spec:sync` 生成的设计规范文档。
- `scripts/` 存放文档生成、规范同步和发布包检查脚本。
- `ui-spec/` 存放设计规范来源。
- `dist/` 是库构建产物，`docs-dist/` 是文档站构建产物。
- 测试文件与源码同目录放置，命名为 `*.test.ts` 或 `*.test.tsx`。

## 公开入口

`package.json` 当前声明这些公开入口：

- `@lf39.03/antd`：主入口，透传 antd + W+ 包装组件 + 业务组件 + 主题。
- `@lf39.03/antd/theme`：主题子入口。
- `@lf39.03/antd/business`：业务组件子入口。
- `@lf39.03/antd/index.css$$`：完整样式入口，对应 `dist/index.css`。

构建配置在 `tsup.config.ts`，入口包括：

- `index`: `src/index.ts`
- `theme/index`: `src/theme/index.ts`
- `business/index`: `src/business/index.ts`

构建输出 ESM、CJS 和类型声明，`antd`、`react`、`react-dom` 保持 external。

## 主入口与组件规则

`src/index.ts` 的职责：

1. 导入 `./reset.css`，最终由 tsup 打进 `dist/index.css`。
2. `export * from 'antd'`，完整透传 Ant Design。
3. 用本项目 wrapper 覆盖导出部分 B 类组件。
4. 导出 `ConfigProvider`。
5. 导出 `wplusTheme` 和 token。
6. 导出 `src/business` 中的业务组件。

当前 B 类 wrapper 组件：

- `Modal`
- `Drawer`
- `Table`
- `Menu`
- `Tabs`
- `Alert`
- `Pagination`
- `Popover`
- `Collapse`
- `Descriptions`
- `Upload`
- `Breadcrumb`
- `ConfigProvider`

新增包装组件时应尽量保持 antd 原有 props 与行为兼容。企业定制优先通过主题 token、包装组件或业务组件沉淀，不要破坏 antd 的命名导出。组件级样式只覆盖 token 无法描述的结构、布局或状态细节。

## ConfigProvider 与主题

`src/components/config-provider/index.tsx` 包装 antd 的 `ConfigProvider`，默认注入 `wplusTheme`。

主题合并规则：

- 默认使用 `antdTheme.defaultAlgorithm`。
- `theme.token` 会覆盖企业全局 token。
- 未传自定义全局 token，且未显式传入空 `components: {}` 时，会合并企业组件 token 和业务侧组件 token。
- 传入自定义全局 token 时，组件 token 只使用业务侧 `theme.components`。
- `components: {}` 表示显式关闭企业组件 token 注入。

主题入口 `src/theme/index.ts` 导出：

- `wplusTheme`
- `privateBankingPrimitiveTokens`
- `privateBankingSemanticTokens`

token 文件包括：

- `primitive-tokens.ts`
- `semantic-tokens.ts`
- `antd-tokens.ts`
- `antd-component-tokens.ts`
- `wplus-component-tokens.ts`
- `index.ts`

README 中说明 token 文件由 `pnpm spec:sync` 从 `ui-spec/` 同步生成。通常不要手工改生成结果，除非任务明确要求。

## 业务组件

业务组件入口是 `src/business/index.ts`，当前导出：

- `ApprovalProgressSteps`
- `DetailPageHeader`
- `ErrorBlock`
- `Status`

业务组件共享样式在 `src/business/styles.css`，入口文件会导入该样式。

## 构建、测试与开发命令

统一使用 pnpm：

- `pnpm install` 安装依赖。
- `pnpm dev` 以 watch 模式构建库代码。
- `pnpm docs:dev` 启动本地文档站。
- `pnpm docs:build` 构建静态文档到 `docs-dist/`。
- `pnpm docs:preview` 预览静态文档。
- `pnpm build` 输出 ESM、CJS 和类型声明到 `dist/`。
- `pnpm typecheck` 执行 TypeScript 类型检查。
- `pnpm test` 运行 Vitest。
- `pnpm lint` 执行 ESLint。
- `pnpm format:check` 校验 Prettier 格式。
- `pnpm fix` 自动执行 ESLint fix 和 Prettier 格式化。
- `pnpm spec:sync` 同步生成规范、文档和侧边栏文件。
- `pnpm spec:check` 校验生成内容是否一致。
- `pnpm package:check` 检查发布包 CSS export 是否可用。
- `pnpm check` 串联规范一致性、格式、lint、类型检查和测试。
- `pnpm ci` 运行完整 CI 校验，包括库构建、发布包检查和文档构建。

发布或提交 PR 前至少运行 `pnpm build`、`pnpm typecheck`、`pnpm test`。涉及规范、文档生成或发布入口时优先运行 `pnpm check` 或 `pnpm ci`。

## 生成脚本

`scripts/spec-sync.mjs` 用于同步生成以下内容：

- `src/components/generated/index.ts`
- `src/components/generated/sidebar.generated.ts`
- `dumi.sidebar.ts`
- `docs/components/*.md`
- `docs/business/*.md`
- `src/components/config-provider/index.md`
- `docs/generated/design-tokens.md`
- `docs/generated/components.md`
- `docs/generated/spec-report.md`

`scripts/package-check.mjs` 用于检查发布包中 CSS export 是否可用，重点验证：

- `./index.css` 是否指向 `./dist/index.css`
- 打包产物是否包含 `package/dist/index.css`
- CSS 是否包含 reset、`--wplus-*` 变量和关键覆盖样式

## 编码风格与命名规范

项目使用 TypeScript、React JSX、ESLint 和 Prettier。缩进为 2 个空格，使用单引号和分号。变量与函数使用 `camelCase`，组件和导出类型使用 `PascalCase`，非组件目录和文件优先使用 `kebab-case`。

修改公开 API 时同步检查 `src/index.ts`、子入口、类型导出和 README/文档。修改样式入口或发布内容时关注 `dist/index.css`、`exports["./index.css"]` 和 `pnpm package:check`。

## 测试规范

组件测试使用 Vitest 和 Testing Library。测试应关注渲染结果、公开 props 和用户行为，不依赖内部实现细节。

当前测试文件：

- `src/business/index.test.tsx`
- `src/components/config-provider/index.test.tsx`
- `src/components/modal/index.test.tsx`

新增主题合并逻辑、包装组件行为或业务组件时，需要补充对应测试。

## 文档规范

文档使用 dumi。dumi 配置位于 `.dumirc.ts`。

关键点：

- 输出目录：`docs-dist`
- `@lf39.03/antd` alias 到本地 `src`
- `@lf39.03/antd/index.css$` alias 到 `src/reset.css`
- 组件侧边栏部分来自 `dumi.sidebar.ts`

全局指南放在 `docs/`。组件文档优先放在组件目录下的 `index.md` 或由 `pnpm spec:sync` 生成到 `docs/components/`。组件文档应包含用途说明、基础示例、可配置示例和 API 说明。示例代码应使用 `@lf39.03/antd` 导入，体现业务项目真实用法。

## Commit 与 Pull Request 规范

提交信息使用清晰的祈使句，例如 `Add enterprise table styles` 或 `Fix ConfigProvider theme merge`。

PR 应包含变更摘要、关联需求或 issue、测试结果；涉及 UI 或文档站变更时附截图或录屏。保持 PR 聚焦单一功能或修复。
