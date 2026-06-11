# 栅格与间距

**中文名称：** 栅格与间距
**英文名称：** Space
**所属分类：** 布局
**一句话简介：** 12 列栅格定页面结构，4px 基数间距控元素空隙。

---

## 栅格 Grid

| 属性 | 值 |
|------|-----|
| 列数 | `12` |
| 水槽 Gutter | `20px`（固定，不随屏幕变化） |
| 画布标准 | `1440px` / `1920px` |
| 列宽公式 | `(容器宽度 - (N-1) × 20px) ÷ N` |

**常用分栏：**
- 4 列均分：`span={3}` × 4（每列占 3 格，即 1/4）
- 3 列均分：`span={4}` × 3
- 非对称：`span={4} + span={8}`、`span={3} + span={9}`

**响应式断点：**

| 断点 | 宽度 |
|------|------|
| xs | `< 576px` |
| sm | `≥ 576px` |
| md | `≥ 768px` |
| lg | `≥ 992px` |
| xl | `≥ 1200px` |
| xxl | `≥ 1600px` |

---

## 间距 Spacing

以 `4px` 为基数，所有间距须为 4 的倍数。

| 尺寸 | CSS 值 | 典型用途 |
|------|--------|----------|
| 4px | `4px` | 图标 + 文字 |
| 8px | `8px` | 按钮内部、小型组件 |
| 12px | `12px` | 表单控件 |
| 16px | `16px` | 常规模块 |
| 20px | `20px` | 栅格列间距、卡片间距 |
| 24px | `24px` | 大模块、页面分区 |
| 32px | `32px` | 页面级大间距 |

| 分类 | 说明 |
|------|------|
| Padding | 元素内部留白 |
| Margin | 模块之间留白 |
| Gutter | 栅格列间距，固定 `20px` |

---

## Space 组件 API

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| size | `'small' \| 'middle' \| 'large' \| number` | `'small'` | 间距：`8px` / `16px` / `24px` 或自定义 |
| direction | `'horizontal' \| 'vertical'` | `'horizontal'` | 排列方向 |
| align | `'start' \| 'end' \| 'center' \| 'baseline'` | `'center'` | 对齐方式 |
| wrap | `boolean` | `false` | 宽度不足时自动换行 |
| split | `ReactNode` | — | 子元素间分隔符 |

---

## Row / Col API

| 属性 | 组件 | 类型 | 说明 |
|------|------|------|------|
| gutter | Row | `number \| [number, number]` | 列间距（水平, 垂直） |
| span | Col | `number` | 占位格数（共 12 列） |
| offset | Col | `number` | 左侧偏移格数 |
| xs/sm/md/lg/xl/xxl | Col | `number \| object` | 响应式断点配置 |

---

## Token

| Token | 值 |
|-------|-----|
| gapSmall | `8px` |
| gapMiddle | `16px` |
| gapLarge | `24px` |
