# Color — 样式要点（供开发使用）

## 品牌色（Brand Gold 系列）
- brand-1: #FFFCF0
- brand-2: #F7F4E9
- brand-3: #DFCFB4
- brand-4: #DED3BA
- brand-5: #D1BB8E
- brand-6: #B0915C
- brand-7: #9B7235  (主品牌色)
- brand-8: #785A32
- brand-9: #523A1E
- brand-10: #2B1D10

## 中性色（文本/边框/分割）
- text-primary: rgba(0,0,0,0.85)
- text-secondary: rgba(0,0,0,0.65)
- text-placeholder: rgba(0,0,0,0.45)
- text-disabled: rgba(0,0,0,0.25)
- line-divider: rgba(0,0,0,0.15)
- border-default: rgba(0,0,0,0.25)
- bg-white: #FFFFFF
- bg-grey: #F4F6F8
- page-bg: #E9EBF3
- table-head-bg: #F1F2F7
- overlay-mask: rgba(0,0,0,0.30)

## 状态色（Functional Colors）
- success: #00C078
- error: #FF4D4F
- warning: #FFA000
- info/link: #1874FF

## 数据色（建议调色板）
- data-1: #5B8FF9
- data-2: #61DDAA
- data-3: #65789D
- data-4: #F6BD16
- data-5: #7262FD
- data-6: #78D3F8
- data-7: #9661BC
- data-8: #F6903D
- data-9: #008685
- data-10:#F08BB4

## 渐变色（示例）
- grad-gold: linear-gradient(90deg,#E9BC89 0%,#FFCD40 100%)
- grad-green: linear-gradient(90deg,#3EF17D 0%,#A5FFB6 100%)
- grad-blue: linear-gradient(90deg,#5A72E6 0%,#73AFFF 100%)

## 替换与优先级提示（供开发）
- 在 antd 主题或 token 层面优先映射：品牌主色 `#9B7235` -> `@primary-color`；状态色映射到 `@success-color` / `@error-color` 等。
- 文本与边框使用 rgba 精确透明度，避免直接用 8-bit 灰色替代透明黑。
- 页面主背景使用 `bg-white` 或 `page-bg`，卡片优先使用白色背景并配合 `line-divider` 或 `border-default` 边框。

## 无障碍与对比度提醒
- 重要文字与背景对比需满足可读性（建议 WCAG AA 标准）；在浅色或渐变背景上叠加文字时使用遮罩或底板提高对比。
- 禁用颜色应保持可辨识但弱化（使用 `text-disabled` 或 `bg-grey`）。
