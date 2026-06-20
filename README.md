# @lf39.03/antd

`@lf39.03/antd` 是基于 Ant Design v5 的企业级 UI 封装组件库，以金色（`#C5A267`）为主色调的 W+ 设计体系。
目标是让业务项目从：

```ts
import * as antd from 'antd';
```

平滑切换到：

```ts
import * as antd from '@lf39.03/antd';
```

包入口默认透传 Ant Design 的全部导出，并在此基础上覆盖导出 W+ 包装组件、企业版 `ConfigProvider`、企业主题和可复用业务组件。

## 特性

- 全量透传 Ant Design v5 导出（`export * from 'antd'`），可直接替换导入来源。
- 68 个 W+ 包装组件覆盖导出常用 antd 组件，保留原有 props、复合组件和静态 API。
- 内置企业主题 `wplusTheme`，由 `ui-spec/` 规范同步生成，并通过包装版 `ConfigProvider` 默认注入。
- CSS 变量体系 `--wplus-*` 从 TS token 生成，统一管理颜色、圆角、间距、阴影、字体等设计 Token。
- 4 个业务组件：`ApprovalProgressSteps`、`DetailPageHeader`、`ErrorBlock`、`Status`。
- 使用 dumi 维护文档站，文档风格参考 Ant Design 官网。

## 安装

```bash
pnpm add @lf39.03/antd antd react react-dom
```

`antd`、`react` 和 `react-dom` 是 peer dependencies，业务项目需要显式安装。

## 快速使用

```tsx
import { Button, ConfigProvider } from '@lf39.03/antd';
import '@lf39.03/antd/index.css';

export function App() {
  return (
    <ConfigProvider>
      <Button type="primary">提交</Button>
    </ConfigProvider>
  );
}
```

`import '@lf39.03/antd/index.css'` 会加载完整的 W+ 设计体系。该入口对应发布产物 `dist/index.css`，建议在业务应用入口显式引入，避免依赖不同打包器对 JS 入口 CSS 副作用的处理差异。兼容历史用法时也可以继续使用 `@lf39.03/antd/dist/index.css`。

- antd 基础 reset 样式
- `:root` CSS 变量定义（`--wplus-*`）
- W+ 组件样式覆盖
- 业务组件共享样式

## 从 antd 迁移

大多数 Ant Design 组件可以直接从 `@lf39.03/antd` 导入：

```tsx
import { Button, DatePicker, Form, Table } from '@lf39.03/antd';
```

如果项目中原来使用命名空间导入，也可以保持相同调用方式：

```tsx
import * as antd from '@lf39.03/antd';

export function Example() {
  return <antd.Button type="primary">提交</antd.Button>;
}
```

迁移时建议先替换导入来源，再在应用入口引入 `@lf39.03/antd/index.css`，最后接入企业版 `ConfigProvider` 和业务组件。

## 组件架构

组件入口 `src/components/index.ts` 先透传 `antd`，再用 W+ wrapper 覆盖导出常用组件。当前包装导出的 antd 组件数量为 68 个，覆盖 Button、Form、Table、Modal、Drawer、Menu、Tabs、Select、Input、DatePicker、Upload、Layout、Typography 等常用组件。

包装组件遵循这些规则：

- 保持 antd 原有 props 和行为兼容。
- 保留复合组件 API，例如 `Input.Search`、`Layout.Header`、`Typography.Title`、`Dropdown.Button`。
- 保留静态 API，例如 `Modal.confirm`、`Modal.useModal`、`Modal.destroyAll`。
- 组件级样式仅覆盖 token 无法描述的结构、布局或状态细节。

每个包装组件目录结构：

```text
src/components/modal/
  ├── index.tsx       # wrapper 组件，透传 antd 并加载 CSS
  └── styles.css      # 组件级样式覆盖
```

## 主题

主题 Token 组织在 `src/theme/tokens/` 下。规范来源是 `ui-spec/`，通常通过 `pnpm spec:sync` 同步生成相关文件。

```text
src/theme/tokens/
  ├── primitive-tokens.ts        # 原子 Token（品牌色阶、功能色等）
  ├── semantic-tokens.ts         # 语义 Token
  ├── antd-tokens.ts             # ConfigProvider 全局 Token
  ├── antd-component-tokens.ts   # antd 组件级 Token
  ├── wplus-component-tokens.ts  # 业务侧组件 Token 源
  └── index.ts
```

`src/styles/css-variables.css` 由上述 TS token 生成，使用 `pnpm tokens:css` 更新，`pnpm tokens:css:check` 校验一致性。

主入口导出企业主题：

```ts
import {
  privateBankingPrimitiveTokens,
  privateBankingSemanticTokens,
  wplusTheme,
} from '@lf39.03/antd';
```

也可以从主题子入口导入：

```ts
import {
  privateBankingPrimitiveTokens,
  privateBankingSemanticTokens,
  wplusTheme,
} from '@lf39.03/antd/theme';
```

`ConfigProvider` 默认使用企业主题和中文 locale：

```tsx
import { ConfigProvider } from '@lf39.03/antd';

export function App() {
  return <ConfigProvider>{/* app */}</ConfigProvider>;
}
```

自定义主题时，传入值会交给 antd 原生 `ConfigProvider`，并继续默认启用 W+ CSS 变量配置：

```tsx
import { ConfigProvider } from '@lf39.03/antd';

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

主题合并规则：

- 未传 `theme` 时，使用 `wplusTheme.token`、`wplusTheme.components` 和 `wplusTheme.cssVar`。
- 默认使用 `antd` 的 `defaultAlgorithm`，业务侧传入 `theme.algorithm` 时会覆盖默认算法。
- 默认启用 Ant Design v5 `theme.cssVar`，配置为 `{ prefix: 'wplus', key: 'wplus' }`；业务侧传入 `theme.cssVar` 时会覆盖默认配置。
- 传入 `theme: {}` 时，不注入企业全局 token 和企业组件 token，使用 antd 默认 token，同时保留默认 CSS 变量配置。
- 传入 `theme.token` 时，只使用业务侧传入的全局 token；`theme.token: {}` 表示显式使用 antd 默认全局 token。
- 传入 `theme.components` 时，只使用业务侧传入的组件 token；`theme.components: {}` 表示显式使用 antd 默认组件 token。

### CSS 变量

所有设计 Token 同时以 CSS 自定义属性的形式输出，定义在 `:root` 中：

```css
--wplus-color-brand-7: #b0915c; /* 品牌主色 */
--wplus-radius-xs: 2px; /* 小圆角 */
--wplus-radius-sm: 4px; /* 默认圆角 */
--wplus-space-lg: 16px; /* 大间距 */
--wplus-shadow-modal: ...; /* 弹窗投影 */
--wplus-font-size-base: 14px; /* 基础字号 */
```

CSS 变量与组件样式打包在同一个 `dist/index.css` 中，消费者通过 `@lf39.03/antd/index.css` 引入一次即可。

## 业务组件

业务组件可从主入口导入：

```tsx
import { ApprovalProgressSteps, DetailPageHeader, ErrorBlock, Status } from '@lf39.03/antd';
```

也可以从业务组件子入口导入：

```tsx
import { Status } from '@lf39.03/antd/business';
```

当前包含：

- `ApprovalProgressSteps`：审批进度步骤。
- `DetailPageHeader`：详情页头部。
- `ErrorBlock`：错误、空状态或异常提示。
- `Status`：业务状态标识。

## 导出入口

| 入口                           | 说明                                                       |
| ------------------------------ | ---------------------------------------------------------- |
| `@lf39.03/antd`                | 主入口，透传 antd 全部导出 + W+ 包装组件 + 业务组件 + 主题 |
| `@lf39.03/antd/theme`          | `wplusTheme` 企业主题配置和 token                          |
| `@lf39.03/antd/business`       | 可复用业务组件                                             |
| `@lf39.03/antd/index.css`      | 完整 W+ 样式（antd reset + CSS 变量 + 组件覆盖）           |
| `@lf39.03/antd/dist/index.css` | 兼容样式入口，指向同一份 `dist/index.css`                  |

## 本地开发

统一使用 pnpm：

```bash
pnpm install
pnpm dev
```

常用命令：

```bash
pnpm docs:dev       # 启动 dumi 文档站
pnpm docs:build     # 构建静态文档
pnpm docs:preview   # 预览静态文档
pnpm build          # 输出 ESM + CJS + DTS 到 dist/
pnpm typecheck      # TypeScript 类型检查
pnpm test           # 运行 Vitest
pnpm test:watch     # 以 watch 模式运行 Vitest
pnpm lint           # ESLint 检查
pnpm format:check   # Prettier 格式检查
pnpm tokens:css     # 从 TS token 生成 CSS variables
pnpm tokens:css:check # 校验 CSS variables 与 TS token 一致
pnpm spec:sync      # 从 ui-spec/ 同步生成规范、主题和文档
pnpm spec:check     # 校验 ui-spec/ 与生成文件一致性
pnpm package:check  # 校验发布包 CSS export 和关键样式内容
pnpm check          # 串联规范同步、格式、lint、类型检查和测试
pnpm ci             # 完整 CI（check + build + package-check + docs:build）
```

发布或提交 PR 前至少运行：

```bash
pnpm build
pnpm typecheck
pnpm test
```

完整校验建议运行：

```bash
pnpm ci
```

## 贡献约定

- 新增包装组件时，尽量保持 antd 原有 props 与行为兼容。
- 企业定制优先通过 Token（`src/theme/tokens/`）实现；Token 无法覆盖的结构/布局样式才写入组件 `styles.css`。
- CSS 属性优先使用 `--wplus-*` 变量，避免硬编码色值、圆角、间距。
- 公共 CSS 变量在 `src/styles/css-variables.css` 统一定义，新增变量时同步更新。
- 新增组件需在 `src/components/index.ts` 中导出。
- 修改公开 API 时同步检查主入口、子入口、类型导出和文档。
- 测试文件与源码同目录放置，命名为 `*.test.ts` 或 `*.test.tsx`。
