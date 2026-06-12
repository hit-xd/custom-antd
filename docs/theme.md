---
title: 主题定制
order: 2
---

# 主题定制

`pb-antd` 通过 `enterpriseTheme` 统一维护企业 token，并在包装版 `ConfigProvider` 中默认合并。

当前主题已从新版 `ui-spec/` 提取以下设计规范：

| 规范目录                                       | 落地方式                               |
| ---------------------------------------------- | -------------------------------------- |
| `全局规范/Color.style.md`                      | 品牌色、中性色、功能色、数据色、渐变色 |
| `全局规范/Container.style.md`                  | 圆角、阴影、容器边框与背景             |
| `全局规范/AntdSpace.md`                        | 4px 间距体系、12 列栅格、Space 预设    |
| `全局规范/Typography.style.md`                 | 字体族、字号、行高、字重               |
| `全局规范/AntdLayout.md`                       | Header、Sider、内容区、导航尺寸 token  |
| `全局规范/ImageRatio.style.md`                 | 常用图片比例 token 与 CSS 变量         |
| `数据录入/`、`样式规范/`、`反馈/`、`导航组件/` | 可稳定映射的组件级 antd 主题 token     |

## 内置 token

```tsx
import { Button, ConfigProvider, globalDesignTokens } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Button type="primary">{globalDesignTokens.color.brand[7]}</Button>
  </ConfigProvider>
);
```

## 覆盖主题

```tsx
import { Button, ConfigProvider, createEnterpriseTheme } from 'pb-antd';

const theme = createEnterpriseTheme({
  primaryColor: '#0052d9',
  borderRadius: 6,
});

export default () => (
  <ConfigProvider theme={theme}>
    <Button type="primary">企业主按钮</Button>
  </ConfigProvider>
);
```

组件级细节优先通过 antd token 落地；无法稳定映射的交互、热区和组合布局保留在规范文档中，后续通过包装组件或业务组件沉淀。

## CSS 变量

引入 `pb-antd/reset.css` 后可使用基础 CSS 变量：

```css
.page {
  background: var(--wrap-color-bg-page);
  padding: var(--wrap-layout-content-padding);
}

.cover {
  aspect-ratio: var(--wrap-image-ratio-widescreen);
  border-radius: var(--wrap-radius-md);
}
```
