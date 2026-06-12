---
title: Upload 上传
order: 111
---

# Upload 上传

用于上传文件、图片和附件。

`Upload` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Upload.dev.md`。

## 组件类型

- 按钮上传
- 拖拽上传
- 图片列表
- 上传状态

## 基础用法

```tsx
import { ConfigProvider, Upload, Button } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Upload>
      <Button>选择文件</Button>
    </Upload>
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Upload, Button } from 'pb-antd';

export default () => (
  <ConfigProvider>
    <Upload.Dragger style={{ width: 420 }}>
      <p>点击或拖拽文件到此区域上传</p>
      <p>支持单个或批量上传</p>
    </Upload.Dragger>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { UploadProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
