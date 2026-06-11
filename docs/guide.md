---
title: 快速开始
order: 1
---

# 快速开始

`wrap-antd` 面向已有 Ant Design v5 项目，目标是保持组件 API 基本一致，同时注入企业 UI 规范和沉淀业务组件。

## 安装

```bash
pnpm add wrap-antd antd react react-dom
```

## 替换导入

```tsx | pure
import { Button, ConfigProvider } from 'wrap-antd';
import 'wrap-antd/reset.css';

export default () => (
  <ConfigProvider>
    <Button type="primary">提交</Button>
  </ConfigProvider>
);
```

## 本地开发

```bash
pnpm docs:dev
pnpm build
pnpm typecheck
pnpm test
```
