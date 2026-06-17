# 本地打包安装操作手册

本文用于指导开发者将当前 `@lf39.03/antd` 本地构建、打包为 `.tgz`，并安装到业务项目中联调。

## 1. 前置条件

- 当前库代码已完成修改。
- 本机已安装 Node.js 和 pnpm。
- 目标业务项目已安装 `react`、`react-dom`、`antd`。
- 当前库包名为 `@lf39.03/antd`，版本号以 `package.json` 为准。
- 命令建议在 PowerShell 7 中执行。

## 2. 在库项目中准备产物

进入当前组件库根目录：

```powershell
cd E:\Code\FE\custom-antd
```

安装依赖：

```powershell
pnpm install
```

同步生成规范文件：

```powershell
pnpm spec:sync
```

构建库产物：

```powershell
pnpm build
```

建议打包前至少执行：

```powershell
pnpm typecheck
pnpm test
```

如果需要完整校验，可执行：

```powershell
pnpm run ci
```

## 3. 打包成本地安装包

在组件库根目录执行：

```powershell
pnpm pack
```

命令会在当前目录生成类似文件：

```text
@lf39.03/antd-0.1.0.tgz
```

如果希望输出到固定目录：

```powershell
pnpm pack --pack-destination E:\tmp\pack
```

打包前可执行发布包检查：

```powershell
pnpm package:check
```

该检查会验证包内是否包含必要 CSS 文件，以及 `reset.css` 引用的样式文件是否可发布。

## 4. 在目标项目中安装

进入目标业务项目目录后，通过本地 `.tgz` 安装：

```powershell
pnpm add file:E:\Code\FE\custom-antd\@lf39.03/antd-0.1.0.tgz
```

如果 `.tgz` 输出到了 `E:\tmp\pack`：

```powershell
pnpm add file:E:\tmp\pack\@lf39.03/antd-0.1.0.tgz
```

安装后，目标项目的 `package.json` 会记录本地 tarball 依赖。

## 5. 在目标项目中使用

应用入口推荐引入包装版 `ConfigProvider` 和样式入口：

```tsx
import { Button, ConfigProvider } from '@lf39.03/antd';
import '@lf39.03/antd/reset.css';

export function App() {
  return (
    <ConfigProvider>
      <Button type="primary">提交</Button>
    </ConfigProvider>
  );
}
```

主题入口可这样使用：

```tsx
import { wplusTheme } from '@lf39.03/antd/theme';
```

业务组件入口可这样使用：

```tsx
import { Status } from '@lf39.03/antd/business';
```

## 6. 验证安装结果

在目标项目中检查依赖：

```powershell
pnpm list @lf39.03/antd
pnpm why @lf39.03/antd
```

然后启动目标项目：

```powershell
pnpm dev
```

页面中确认：

- `@lf39.03/antd` 组件可以正常导入。
- `ConfigProvider` 注入的企业主题生效。
- `@lf39.03/antd/reset.css` 引入后组件样式和 CSS 变量生效。

## 7. 常见问题

### 7.1 安装后找不到 `@lf39.03/antd/reset.css`

确认打包前执行过：

```powershell
pnpm build
```

并确认当前库存在：

```text
dist/index.css
```

### 7.2 组件样式没有生效

确认目标项目入口已引入：

```tsx
import '@lf39.03/antd/reset.css';
```

### 7.3 主题 token 没有生效

确认使用的是本库包装版：

```tsx
import { ConfigProvider } from '@lf39.03/antd';
```

不要直接从 `antd` 引入 `ConfigProvider`。

### 7.4 修改库代码后目标项目没有变化

本地 tarball 不会自动更新。每次修改组件库后，需要重新执行：

```powershell
pnpm build
pnpm pack
```

然后在目标项目重新安装新的 `.tgz`：

```powershell
pnpm add file:E:\Code\FE\custom-antd\@lf39.03/antd-0.1.0.tgz
```

### 7.5 目标项目仍使用旧缓存

可在目标项目中删除依赖并重新安装：

```powershell
pnpm remove @lf39.03/antd
pnpm add file:E:\Code\FE\custom-antd\@lf39.03/antd-0.1.0.tgz
```

必要时清理目标项目的构建缓存后重新启动开发服务。

## 8. 推荐联调顺序

1. 在组件库中修改代码。
2. 执行 `pnpm spec:sync`。
3. 执行 `pnpm build`。
4. 执行 `pnpm pack`。
5. 在目标项目中执行 `pnpm add file:E:\Code\FE\custom-antd\@lf39.03/antd-0.1.0.tgz`。
6. 启动目标项目验证组件、主题和样式。

## 9. 最小命令清单

组件库：

```powershell
cd E:\Code\FE\custom-antd
pnpm spec:sync
pnpm build
pnpm pack
```

目标项目：

```powershell
pnpm add file:E:\Code\FE\custom-antd\@lf39.03/antd-0.1.0.tgz
pnpm dev
```
