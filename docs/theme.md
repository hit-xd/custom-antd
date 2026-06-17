---
title: 主题定制
order: 2
---

# 主题定制

`privatebank-design` 通过 `wplusTheme` 统一维护企业主题。业务项目使用包装版 `ConfigProvider` 后，会默认注入企业主题 token，同时保留 Ant Design v5 的 `theme` 配置能力。

当前主题以 `src/theme/tokens` 为事实来源：

| 源码文件                                     | 落地方式                                         |
| -------------------------------------------- | ------------------------------------------------ |
| `src/theme/tokens/primitive-tokens.ts`       | 品牌色、数据色、渐变、圆角、阴影、间距和字体层级 |
| `src/theme/tokens/semantic-tokens.ts`        | 业务语义色、文字色、背景色、边框色               |
| `src/theme/tokens/antd-tokens.ts`            | Ant Design 全局 token                            |
| `src/theme/tokens/antd-component-tokens.ts`  | Ant Design 组件级 token                          |
| `src/theme/tokens/wplus-component-tokens.ts` | W+ 组件语义 token                                |

## 主题入口

| 导出                            | 用途                                                               |
| ------------------------------- | ------------------------------------------------------------------ |
| `ConfigProvider`                | 包装版 Provider，默认合并企业主题，并透传 antd ConfigProvider 能力 |
| `wplusTheme`                    | 完整 Ant Design ThemeConfig，可用于复用或二次扩展                  |
| `privateBankingPrimitiveTokens` | 品牌色、数据色、渐变、圆角、阴影、间距和字体层级                   |
| `privateBankingSemanticTokens`  | 业务语义色、文字色、背景色、边框色和容器语义                       |

## 应用接入

在应用根节点包裹 `ConfigProvider`，并引入 `reset.css` 获取基础样式和 CSS 变量。

```tsx
import { Button, ConfigProvider } from 'privatebank-design';
import 'privatebank-design/reset.css';

export default () => (
  <ConfigProvider>
    <Button type="primary">提交</Button>
  </ConfigProvider>
);
```

## 全局 token 覆盖

通过 `theme.token` 覆盖 Ant Design 全局 token。传入值会覆盖企业默认值，未传入的 token 继续使用 `wplusTheme`。传入非空 `theme.token` 后，组件级 token 会回到 Ant Design 默认派生逻辑。

```tsx
import { Button, Card, ConfigProvider, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#0052d9',
        borderRadius: 6,
      },
    }}
  >
    <Space direction="vertical">
      <Button type="primary">蓝色主按钮</Button>
      <Card title="统一圆角">内容区域</Card>
    </Space>
  </ConfigProvider>
);
```

## 组件级 token 覆盖

通过 `theme.components` 覆盖指定 antd 组件 token，适合只调整某一类组件的尺寸、圆角或背景。

```tsx
import { Button, ConfigProvider, Space, Table } from 'privatebank-design';

const columns = [
  { title: '客户', dataIndex: 'name' },
  { title: '资产规模', dataIndex: 'asset' },
];

const dataSource = [
  { key: '1', name: '张先生', asset: '1,280 万' },
  { key: '2', name: '李女士', asset: '860 万' },
];

export default () => (
  <ConfigProvider
    theme={{
      components: {
        Button: { borderRadius: 8 },
        Table: { headerBg: '#F7F4E9' },
      },
    }}
  >
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button type="primary">组件级圆角</Button>
      <Table pagination={false} columns={columns} dataSource={dataSource} />
    </Space>
  </ConfigProvider>
);
```

## 使用默认组件配置

包装版 `ConfigProvider` 默认会注入企业组件级 token。传入非空 `theme.token` 后，会自动使用 Ant Design 默认组件派生配置。如果只想显式清空企业组件级 token，也可以传入空的 `theme.components`。

```tsx
import { Button, ConfigProvider, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#0052d9' } }}>
    <Space>
      <Button type="primary">默认派生主按钮</Button>
      <Button>默认按钮</Button>
    </Space>
  </ConfigProvider>
);
```

## 复用完整主题

需要在独立预览、微前端子应用或局部区域复用完整企业主题时，可以直接传入 `wplusTheme`。需要追加覆盖时，基于 `wplusTheme` 展开后再覆盖。

```tsx
import { Button, ConfigProvider, Space, wplusTheme } from 'privatebank-design';

const theme = {
  ...wplusTheme,
  token: {
    ...wplusTheme.token,
    colorPrimary: '#0052d9',
  },
  components: {
    ...wplusTheme.components,
    Button: {
      ...wplusTheme.components?.Button,
      borderRadius: 8,
    },
  },
};

export default () => (
  <ConfigProvider theme={theme}>
    <Space>
      <Button type="primary">扩展主题</Button>
      <Button>默认按钮</Button>
    </Space>
  </ConfigProvider>
);
```

## 内置业务 token

业务组件或页面样式需要读取企业 token 时，优先使用公开导出的 `privateBankingPrimitiveTokens` 和 `privateBankingSemanticTokens`。

```tsx
import {
  Card,
  ConfigProvider,
  Space,
  Typography,
  privateBankingPrimitiveTokens,
  privateBankingSemanticTokens,
} from 'privatebank-design';

const { colors, spacing } = privateBankingPrimitiveTokens;
const semantic = privateBankingSemanticTokens;

export default () => (
  <ConfigProvider>
    <Card
      style={{
        maxWidth: 420,
        borderColor: colors.brand7,
        background: semantic.colorSurfaceDefault,
      }}
    >
      <Space direction="vertical" size={spacing.space12}>
        <Typography.Text strong style={{ color: semantic.colorTextHeading }}>
          私行金：{colors.brand7}
        </Typography.Text>
        <Typography.Text style={{ color: semantic.colorTextBody }}>
          页面背景：{semantic.colorSurfacePage}
        </Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## CSS 变量

`privatebank-design/reset.css` 会注入基础 CSS 变量，适合在业务 CSS、Less 或 CSS Modules 中引用。

```css
.page {
  background: var(--wplus-color-bg-page);
  padding: var(--wplus-layout-content-padding);
}

.cover {
  aspect-ratio: var(--wplus-image-ratio-widescreen);
  border-radius: var(--wplus-radius-md);
}
```

## 完整 token 表

完整品牌色、数据色、渐变、圆角、阴影、间距和 Ant Design token 表由 `pnpm spec:sync` 自动生成，查看 [设计 Token](/generated/design-tokens)。
