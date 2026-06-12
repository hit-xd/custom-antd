# Button — 样式要点（供开发使用）

## 基础尺寸与排版
- 高度：`default` 32px，`small` 24px
- 圆角：2px
- 字号：14px；行高：22px；字重：Regular
- 图标尺寸：16px（常规），14px（次要/小图标）
- 文本与图标间距：8px（常规），4px（文字按钮）
- 相邻按钮间距：12px
- 水平内边距：默认 16px；小按钮 8px；带图标左边距 12px
- 垂直内边距：上下 5px（默认）

## 颜色 token（主要值）
- primary-bg: #9B7235
- primary-text: #FFFFFF
- primary-hover: #D1BB8E
- primary-active: #785A32
- secondary-border: #D9D9D9
- secondary-text: rgba(0,0,0,0.85)
- link-text: #1874FF
- danger-bg: #FF4D4F
- danger-text: #FFFFFF
- ghost-border-on-dark: rgba(255,255,255,0.65)
- disabled-bg: #F5F5F5
- disabled-text: rgba(0,0,0,0.25)

## 状态规则（仅样式）
- Hover（主按钮）：背景使用 `primary-hover` 或颜色加深；次要按钮可变化描边或文字色。
- Active（主按钮）：使用 `primary-active`。
- Disabled：背景 `disabled-bg`；文字/边框使用 25% 透明度黑色。
- Loading：保持原始高度与内边距，显示 loading 图标并设置按钮不可交互（建议降低不透明度至 30% 视觉上不可点击）。

## 类型映射（UI -> 样式）
- Primary（实心主按钮）：bg=`primary-bg`，color=`primary-text`，padding 横向 16px
- Secondary（描边）：bg=transparent；border=`secondary-border`；color=`secondary-text`
- Secondary-Brand：border=`primary-bg`；color=`primary-bg`
- Text/Link：bg=transparent；color=`link-text`；padding 横向 0-4px
- Danger（实心）：bg=`danger-bg`；color=`danger-text`
- Ghost（深色场景）：bg=transparent；border=`ghost-border-on-dark`；color=`primary-text`（或 `#FFFFFF`）

## 尺寸表（仅样式）
- default: height 32px; padding: 0 16px; font-size 14px
- small: height 24px; padding: 0 8px; font-size 14px

## 使用要点（供 antd 覆写参考）
- 覆写 `@btn-primary-bg`、`@btn-primary-color`、`@btn-border-radius`、`@btn-height-base` 等变量。
- 次要按钮使用无填充、1px 描边、文字色为 `rgba(0,0,0,0.85)`。
- 禁用状态务必禁用 hover/focus 样式，使用指定禁用色。
- 深色背景下使用 Ghost 类型，边框与文字使用白色系透明值。
