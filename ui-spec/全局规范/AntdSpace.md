# Space 栅格与间距

**组件：** Space / Row / Col | **分类：** 布局

---

## 12 列栅格

| 属性 | 数值 |
|------|------|
| 列数 | `12` |
| 水槽 Gutter | `20px`（固定，不随屏幕变化） |
| 画布 | `1440px` / `1920px` |
| 容器宽度公式 | `N列 + (N-1) × 20px` |

常用分法：`span={6}`（4列）| `span={8}`（3列）| `span={4}+span={8}` | `span={18}+span={6}`

### 响应式断点

| 断点 | 宽度 |
|------|------|
| xs | `<576px` |
| sm | `≥576px` |
| md | `≥768px` |
| lg | `≥992px` |
| xl | `≥1200px` |
| xxl | `≥1600px` |

---

## 间距体系（4px 基数）

| 尺寸 | 场景 |
|------|------|
| `4px` | 图标 + 文字 |
| `8px` | 按钮内部、小型组件 |
| `12px` | 表单控件、中型组件 |
| `16px` | 常规模块、内容区 |
| `20px` | 栅格列间距、卡片 |
| `24px` | 大模块、页面分区 |
| `32px` | 页面级大间距 |

| 分类 | 说明 |
|------|------|
| Padding | 元素内部留白 |
| Margin | 模块之间留白 |
| Gutter | 栅格列间距，固定 `20px` |

---

## Space 组件

### size 预设

| 值 | 间距 |
|----|------|
| small | `8px` |
| middle | `16px` |
| large | `24px` |
| number | 自定义，如 `12` |

### 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| size | small \| middle \| large \| number | small | 间距 |
| direction | horizontal \| vertical | horizontal | 排列方向 |
| align | start \| end \| center \| baseline | center | 对齐 |
| wrap | boolean | false | 自动换行 |
| split | ReactNode | — | 分隔符 |

---

## Row / Col 属性

| 属性 | 组件 | 类型 | 说明 |
|------|------|------|------|
| gutter | Row | number \| [h, v] | 列间距 |
| span | Col | number | 占位格数（12列） |
| offset | Col | number | 左侧偏移格数 |
| xs/sm/md/lg/xl/xxl | Col | number \| object | 响应式 |

---

## 设计 Token

| Token | 数值 |
|-------|------|
| 栅格列数 | `12` |
| 水槽间距 | `20px` |
| gapSmall | `8px` |
| gapMiddle | `16px` |
| gapLarge | `24px` |
