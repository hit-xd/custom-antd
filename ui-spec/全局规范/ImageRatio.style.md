# ImageRatio — 样式要点（供开发使用）

## 推荐 CSS 类（现代浏览器）
.ratio-1-1   { aspect-ratio: 1 / 1; }
.ratio-4-3   { aspect-ratio: 4 / 3; }
.ratio-3-2   { aspect-ratio: 3 / 2; }
.ratio-16-9  { aspect-ratio: 16 / 9; }
.ratio-2-1   { aspect-ratio: 2 / 1; }

## 兼容方案（旧浏览器）
- 使用 padding-bottom 模拟：
  - 1:1 -> padding-bottom: 100%
  - 4:3 -> padding-bottom: 75%
  - 3:2 -> padding-bottom: 66.6667%
  - 16:9 -> padding-bottom: 56.25%
  - 2:1 -> padding-bottom: 50%
- 容器需 position: relative；内容绝对定位并铺满。

## 使用要点（仅样式）
- 优先用 `aspect-ratio`。移动端注意高度是否过低。
- 图片应使用 object-fit: cover; object-position: center; 如需保证主体完整可改为 contain 并用背景填充。
