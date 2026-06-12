# Container — 样式要点（供开发使用）

## 投影（box-shadow）
- hover: 0px 3px 6px 0px rgba(0,0,0,0.12), 0px 1px 2px -2px rgba(0,0,0,0.16), 0px 5px 12px 4px rgba(0,0,0,0.09)
- default: 0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 6px -4px rgba(0,0,0,0.12)
- modal: 0px 12px 48px 16px rgba(0,0,0,0.03), 0px 9px 28px 0px rgba(0,0,0,0.05), 0px 6px 16px -8px rgba(0,0,0,0.08)
- tooltip: 0px 9px 28px 8px rgba(0,0,0,0.05), 0px 6px 16px 0px rgba(0,0,0,0.08), 0px 3px 7px -4px rgba(0,0,0,0.12)

## 圆角（radius）
- r-2: 2px
- r-4: 4px
- r-6: 6px
- r-8: 8px
- r-100: 100px（胶囊/圆形）

规则：外层圆角 >= 内层圆角；模态/浮层优先使用 8px。

## 边框+背景组合（常用 token）
- base: background: #FFFFFF; border: rgba(0,0,0,0.15) 1px solid
- base-plain: background: #FFFFFF; border: none
- base-dashed: background: #FFFFFF; border: rgba(0,0,0,0.15) 1px dashed
- disabled: background: #F4F6F8; border: rgba(0,0,0,0.15) 1px solid
- selected: background: #FFFFFF; border: #1874FF 1px solid
- brand: background: #FFFFFF; border: #9B7235 1px solid
- danger: background: #FFFFFF; border: #FF4D4F 1px solid
- success: background: #EBFAF5; border: #52D4A3 1px solid
- error: background: #FFF1F0; border: #FFA39E 1px solid
- info: background: #EDF4FF; border: #63A1FF 1px solid
- warning: background: #FFF8EB; border: #FFBF52 1px solid
- badge: background: #FC4B4D; border: none

## 纯背景色容器
- success-bg: #EBFAF5
- error-bg: #FFF1F0
- grey-bg: #F4F6F8
- warning-bg: #FFF8EB
- info-bg: #EDF4FF
- brand-bg: #9B7235

## 使用要点（仅样式）
- 模态/抽屉使用 `r-8` + `modal` 投影。
- 卡片默认使用 `r-6` + `default` 投影；hover 使用 `hover` 投影。
- 输入/小控件使用 `r-2` 或 `r-4`。
- 禁用容器不要使用投影。
- 白底容器在浅灰页面可省略边框，白底页面建议保留 `rgba(0,0,0,0.15)` 边框。
