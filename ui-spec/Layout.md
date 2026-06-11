# Layout 布局

**中文名称：** 布局
**英文名称：** Layout
**所属分类：** 布局
**一句话简介：** 三种核心布局骨架：顶侧布局、首页版心布局、三层顶部导航布局。

---

## 布局选型

| 布局 | 典型场景 |
|------|----------|
| 顶侧布局 | 列表页、审批页、详情页等纵深菜单业务页 |
| 首页版心布局 | 工作台首页、门户概览页 |
| 三层顶栏布局 | 多子系统控制台、扁平模块横向切换 |

---

## 顶侧布局（经典后台）

### 顶部导航栏

| 属性 | CSS 值 |
|------|--------|
| 高度 | `64px` |
| 背景 | `background-color: #050816` |
| 内边距 | `padding: 0 20px` |
| 底边框 | `border-bottom: 1px solid rgba(255,255,255,0.06)` |
| 布局 | `display: flex; justify-content: space-between; align-items: center` |

**菜单项：**
- 字号 `14px`，内边距 `0 14px`，高度 `64px`
- 默认：`color: rgba(255,255,255,0.75)`，`font-weight: 400`
- 选中：`color: #fff`，`font-weight: 500`，底部 `3px solid #B0915C`（左右缩进 `16px`）

### 左侧侧边栏

| 属性 | CSS 值 |
|------|--------|
| 展开宽度 | `208px` |
| 收起宽度 | `48px` |
| 背景 | `background-color: #FFFFFF` |
| 右边框 | `border-right: 1px solid rgba(0,0,0,0.12)` |
| 内边距 | `padding: 12px 0` |

**菜单项（L2）：**
- 字号 `14px`，内边距 `9px 20px 9px 40px`
- 默认：`color: rgba(0,0,0,0.65)`
- 悬停：`color: rgba(0,0,0,0.85)`，`background: #F4F6F8`
- 选中：`color: #B0915C`，`background: #FFFCF0`，`border-left: 3px solid #B0915C`

### 内容区

| 属性 | CSS 值 |
|------|--------|
| 背景 | `background-color: #E8EAF2` |
| 内边距 | `padding: 20px 16px` |
| 宽度 | `calc(100% - 侧边栏宽度)` |
| 高度 | `calc(100vh - 64px)` |

---

## 首页版心布局

### Header 通栏

| 属性 | CSS 值 |
|------|--------|
| 高度 | `64px` |
| 背景 | `background-color: #090a15` |
| 文字 | `color: #c7c9d3` |
| 内边距 | `padding: 0 24px` |

**导航项：**
- 字号 `15px`，最小宽度 `78px`，内边距 `0 13px`
- 默认：`color: #c7c9d3`，`font-weight: 400`
- 选中：`color: #fff`，`font-weight: 600`，底部 `3px solid #f4cd74`

### 版心内容区

| 属性 | CSS 值 |
|------|--------|
| 左右留白 | `padding: 0 261px`（或 `width: calc(100% - 522px); margin: auto`） |
| 顶部偏移 | `40px` |
| 底部边距 | `48px` |
| 背景 | `background-color: #F5F6F7` |

**响应式留白：**

| 断点 | 左右留白 |
|------|----------|
| `≥ 1600px` | `261px`（可调 `280~320px`） |
| `1440px ~ 1599px` | `261px` |
| `1280px ~ 1439px` | `80px ~ 120px` |
| `< 1280px` | `24px` |

---

## 三层顶部导航布局

### L1 全局通栏

与首页版心 Header 相同：`height: 64px`，`background: #090a15`

### L2 二级导航

| 属性 | CSS 值 |
|------|--------|
| 高度 | `48px` |
| 背景 | `background-color: #fff` |
| 底边框 | `border-bottom: 1px solid rgba(0,0,0,0.12)` |
| 标签字号 | `14px`，最小宽度 `86px`，间距 `24px` |

**三态：**

| 状态 | 文字 | 底部指示器 |
|------|------|------------|
| 未选中 | `rgba(0,0,0,0.65)` | 无 |
| 悬浮 | `#9B7235` | 无 |
| 选中 | `#9B7235` | `2px solid #9B7235` |

### L3 三级 Tabs

| 属性 | CSS 值 |
|------|--------|
| 容器高度 | `40px` |
| 标签高度 | `26px` |
| 标签内边距 | `0 12px` |
| 标签间距 | `4px` |
| 圆角 | `border-radius: 2px` |

**三态：**

| 状态 | 文字 | 背景 |
|------|------|------|
| 未选中 | `rgba(0,0,0,0.85)` | 透明 |
| 悬浮 | `#C5A267` | 透明 |
| 选中 | `#FFFFFF` | `#C5A267` |

---

## Layout Token

| Token | 值 | 说明 |
|-------|-----|------|
| `--layout-header-height` | `64px` | 顶栏高度 |
| `--layout-sider-expanded-width` | `208px` | 侧边栏展开宽 |
| `--layout-sider-collapsed-width` | `48px` | 侧边栏收起宽 |
| `--layout-content-padding` | `20px 16px` | 内容区内边距 |
| `--brand-w-gold` | `#e9b35d` | Brand 金色 |
| `--brand-active-underline` | `#f4cd74` | 顶栏选中下划线 |
| `--brand-primary-active` | `#B0915C` | 侧边栏选中色 |
| `--brand-tabs-active` | `#9B7235` | L2 标签选中色 |
| `--brand-tabs-fill` | `#C5A267` | L3 标签填充色 |
| `--brand-sidebar-selected-bg` | `#FFFCF0` | 侧边栏选中背景 |
| `--page-margin-xl` | `261px` | 首页版心大屏留白 |
| `--page-margin-lg` | `120px` | 中等屏留白 |
| `--page-margin-base` | `24px` | 标准边距 |
| `--global-bar-height` | `64px` | L1 通栏高度 |
| `--sub-nav-bar-height` | `48px` | L2 导航高度 |
| `--tertiary-bar-height` | `40px` | L3 导航高度 |
