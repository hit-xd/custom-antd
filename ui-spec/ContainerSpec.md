# Container 容器规范

**中文名称：** 容器规范
**英文名称：** Container
**所属分类：** 全局样式
**一句话简介：** 统一容器投影、圆角、状态容器样式；现有组件不一致时以本规范 token 为准。

---

## 投影 Shadow

### 悬停投影（hover）

CSS 参数：
```css
box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.12), 0px 1px 2px -2px rgba(0,0,0,0.16), 0px 5px 12px 4px rgba(0,0,0,0.09);
```
- 适用场景：卡片、列表项 hover 状态

### 默认投影（default）

CSS 参数：
```css
box-shadow: 0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 6px -4px rgba(0,0,0,0.12);
```
- 适用场景：常规卡片、默认浮层容器

### 模态框投影（modal）

CSS 参数：
```css
box-shadow: 0px 12px 48px 16px rgba(0,0,0,0.03), 0px 9px 28px 0px rgba(0,0,0,0.05), 0px 6px 16px -8px rgba(0,0,0,0.08);
```
- 适用场景：弹窗、抽屉、模态对话框

### 文字提示投影（tooltip）

CSS 参数：
```css
box-shadow: 0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 7px -4px rgba(0,0,0,0.12);
```
- 适用场景：Tooltip、气泡提示

---

## 圆角 Radius

| 圆角 | CSS 值 | 典型场景 |
|------|--------|----------|
| 2px | `border-radius: 2px` | 输入框、下拉框、小型标签 |
| 4px | `border-radius: 4px` | 按钮、表单行、辅助提示框 |
| 6px | `border-radius: 6px` | 普通卡片、列表项 |
| 8px | `border-radius: 8px` | 弹窗、抽屉、模态框 |
| 100px | `border-radius: 100px` | 胶囊标签、头像、圆形按钮 |

**嵌套规则：**
- 同级容器 `border-radius` 须一致
- 外层圆角 ≥ 内层圆角（例：模态框 `8px`，内部按钮 `4px`）

---

## 边框+背景容器

| key | 背景色 | 边框 | 典型场景 |
|-----|--------|------|----------|
| base | `#FFFFFF` | `1px solid rgba(0,0,0,0.15)` | 页面卡片、表单区域 |
| base-plain | `#FFFFFF` | 无 | 轻量化内容展示 |
| base-dashed | `#FFFFFF` | `1px dashed rgba(0,0,0,0.15)` | 上传占位、可添加区域 |
| disabled | `#F4F6F8` | `1px solid rgba(0,0,0,0.15)` | 禁用/不可编辑区域 |
| selected | `#FFFFFF` | `1px solid #1874FF` | 选中卡片、当前步骤 |
| brand | `#FFFFFF` | `1px solid #9B7235` | 品牌强调模块 |
| danger | `#FFFFFF` | `1px solid #FF4D4F` | 删除确认、高风险 |
| success | `#EBFAF5` | `1px solid #52D4A3` | 成功反馈 |
| error | `#FFF1F0` | `1px solid #FFA39E` | 错误、驳回提示 |
| info | `#EDF4FF` | `1px solid #63A1FF` | 说明、帮助信息 |
| warning | `#FFF8EB` | `1px solid #FFBF52` | 风险提醒、待确认 |
| badge | `#FC4B4D` | 无 | 徽标、角标 |

---

## 纯背景色容器

| 状态 | CSS 值 | 典型场景 |
|------|--------|----------|
| 成功 | `background-color: #EBFAF5` | 成功提示背景 |
| 失败 | `background-color: #FFF1F0` | 失败提示背景 |
| 灰色 | `background-color: #F4F6F8` | 中性/失效背景 |
| 警告 | `background-color: #FFF8EB` | 警告提示背景 |
| 提示 | `background-color: #EDF4FF` | 辅助说明背景 |
| 品牌色 | `background-color: #9B7235` | 品牌重点信息 |

---

## Token 引用

| Token | 类型 | 说明 |
|-------|------|------|
| SHADOW_TOKENS | ShadowToken[] | 4 种投影 |
| RADIUS_TOKENS | RadiusToken[] | 5 级圆角 |
| CONTAINER_TOKENS | ContainerToken[] | 12 种边框+背景容器 |
| PURE_BG_TOKENS | PureBgToken[] | 6 种纯背景色容器 |
