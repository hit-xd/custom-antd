# Layout 布局

**组件：** Layout | **分类：** 全局样式

三种骨架：**顶侧布局**、**首页版心布局**、**三层顶部导航布局**

---

## 顶侧布局（经典后台）

### 顶部导航栏

| 属性 | 数值 |
|------|------|
| 高度 | `64px` |
| 背景色 | `#050816` |
| 底部边框 | `1px solid rgba(255, 255, 255, 0.06)` |
| 定位 | `position: relative` |

**Brand 区：** `left: 24px`，垂直居中；W+ 标识约 `52px` 宽；「私行」`#ffffff` `23px` `700`

**L1 菜单：** 容器 `left: 206px`；字号 `14px`；内边距 `0 14px`；高度 `64px`

| 状态 | 文字 | 字重 | 指示器 |
|------|------|------|--------|
| 默认 | `rgba(255,255,255,0.65)` | 400 | — |
| 选中 | `#ffebae` | 500 | 底部 `3px solid #B0915C`，左右缩进 `16px` |

**用户区：** `right: 20px`；头像 `32px`；文案 `#fff` `14px`；向右图标 `#ffffff` `16px`；间距 `10px`

### 左侧侧边栏

| 属性 | 数值 |
|------|------|
| 展开宽度 | `208px` |
| 收起宽度 | `48px` |
| 背景色 | `#FFFFFF` |
| 右边框 | `1px solid rgba(0, 0, 0, 0.12)` |
| 内边距 | `12px 0` |

**L1 分组：** `14px` `500`，`rgba(0,0,0,0.65)`，内边距 `12px 20px`

**L2 菜单项：** `14px`，内边距 `9px 20px 9px 40px`，底部间距 `8px`

| 状态 | 文字 | 背景 | 左边框 | 字重 |
|------|------|------|--------|------|
| 默认 | `rgba(0,0,0,0.65)` | 透明 | 透明 | — |
| 选中 | `#B0915C` | `#FFFCF0` | `3px solid #B0915C` | 500 |

**收起状态：** 图标 `16px`，点击区 `32×32px` 圆角 `4px`

| 状态 | 图标色 | 背景 |
|------|--------|------|
| 默认 | `rgba(0,0,0,0.65)` | 透明 |
| 选中 | `#C5A267` | `#FFFCF0` |

### 内容区

| 属性 | 数值 |
|------|------|
| 背景色 | `#E8EAF2` |
| 内边距 | `20px 16px` |
| 宽度 | 页面宽度 − 侧边栏宽度 |
| 高度 | 页面高度 − `64px` |

---

## 首页版心布局

### Header

| 属性 | 数值 |
|------|------|
| 高度 | `64px` |
| 背景色 | `#090a15` |
| 定位 | `position: relative` |

**Brand：** `left: 24px`；W+ 标识高 `32px`；「私行」`#ffffff` `23px` `700`

**L1 导航：** `left: 206px`；字号 `15px`；最小宽 `78px`；内边距 `0 13px`

| 状态 | 文字 | 字重 | 指示器 |
|------|------|------|--------|
| 默认 | `rgba(255,255,255,0.65)` | 400 | — |
| 选中 | `#ffebae` | 600 | 底部 `3px solid #f4cd74`，圆角 `2px 2px 0 0`，左右缩进 `13px` |
| 「更多」 | `#a9acb8` + `⌄` | — | 不可点击 |

**用户区：** `right: 24px`；间距 `10px`（同顶侧布局）

### 版心画布

| 属性 | 数值 |
|------|------|
| 左右留白 | `261px`（`width: calc(100% - 522px)` 居中） |
| 版心宽 | `100vw - 261px × 2`（1440 稿 ≈ `918px`） |
| 顶部偏移 | `40px` |
| 底部边距 | `48px` |
| 背景色 | `#F5F6F7` |

### 响应式留白

| 断点 | 左右留白 |
|------|----------|
| ≥ `1600px` | `261px`（或 `280~320px`） |
| `1440~1599px` | `261px` |
| `1280~1439px` | `80~120px` |
| < `1280px` | `padding: 0 24px` |

---

## 三层顶部导航布局

### Layer 1 全局通栏

| 属性 | 数值 |
|------|------|
| 高度 | `64px` |
| 背景色 | `#090a15` |

Brand / L1 / 用户区规范同首页版心 Header。

### Layer 2 二级导航

| 属性 | 数值 |
|------|------|
| 容器高度 | `48px` |
| 背景 | `#fff` |
| 底部边框 | `1px solid rgba(0,0,0,0.12)` |
| 对齐 | `align-items: flex-end` |
| 标签高度 | `48px` |
| 标签最小宽 | `86px` |
| 首个标签左间距 | `32px` |
| 标签间距 | `24px` |
| 字号 | `14px` |

| 状态 | 文字 | 背景 | 指示器 |
|------|------|------|--------|
| 未选中 | `rgba(0,0,0,0.65)` | 透明 | — |
| 悬浮 | `#9B7235` | 透明 | — |
| 选中 | `#9B7235` | 透明 | `2px solid #9B7235` ink bar |

### Layer 3 三级 Tabs

| 属性 | 数值 |
|------|------|
| 容器高度 | `40px` |
| 背景 | `#fff` |
| 标签高度 | `26px` |
| 标签内边距 | `0 12px` |
| 首个标签左间距 | `24px` |
| 标签间距 | `24px` |
| 字号 | `14px` |
| 圆角 | `2px` |

| 状态 | 文字 | 背景 |
|------|------|------|
| 未选中 | `rgba(0,0,0,0.85)` | 透明 |
| 悬浮 | `#C5A267` | 透明 |
| 选中 | `#FFFFFF` | `#C5A267` |

**内容区：** 背景 `#F5F6F7`，内边距 `20px 16px`

---

## Layout Token

### 间距

| Token | 数值 |
|-------|------|
| `--layout-header-height` | `64px` |
| `--layout-l1-nav-left` | `206px` |
| `--layout-sider-expanded-width` | `208px` |
| `--layout-sider-collapsed-width` | `48px` |
| `--layout-content-padding-top` | `20px` |
| `--layout-content-padding-bottom` | `20px` |
| `--layout-content-padding-left` | `16px` |
| `--layout-content-padding-right` | `16px` |
| `--layout-l2-first-left` | `32px` |
| `--layout-l2-item-gap` | `24px` |
| `--layout-l3-first-left` | `24px` |
| `--layout-l3-item-gap` | `24px` |

### 品牌与用户区

| Token | 数值 |
|-------|------|
| `--brand-logo-left` | `24px` |
| `--brand-wplus-text` | `#ffffff` |
| `--brand-l1-active-text` | `#ffebae` |
| `--brand-active-underline-home` | `#f4cd74` |
| `--brand-primary-active` | `#B0915C` |
| `--brand-sidebar-selected-bg` | `#FFFCF0` |
| `--brand-sidebar-icon-active` | `#C5A267` |
| `--brand-tabs-active` | `#9B7235` |
| `--brand-tabs-fill` | `#C5A267` |
| `--layout-user-avatar-size` | `32px` |
| `--layout-user-caret-color` | `#ffffff` |

### 首页版心

| Token | 设计稿 | 降级 |
|-------|--------|------|
| `--page-margin-xl` | `261px` | `280~320px` |
| `--page-margin-lg` | `120px` | `80~120px` |
| `--page-margin-base` | `24px` | `24px` |

### 三层顶栏

| Token | 数值 |
|-------|------|
| `--global-bar-height` | `64px` |
| `--global-bar-bg` | `#090a15` |
| `--sub-nav-bar-height` | `48px` |
| `--sub-nav-active-color` | `#9B7235` |
| `--sub-nav-ink-bar-height` | `2px` |
| `--tertiary-bar-height` | `40px` |
| `--tertiary-tab-height` | `26px` |
| `--tertiary-active-bg` | `#C5A267` |
