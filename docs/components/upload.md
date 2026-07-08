---
title: Upload 上传
order: 114
---

# Upload 上传

用于上传文件、图片和附件。

`Upload` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Upload.dev.md`。

## 组件类型

- 按钮上传
- 拖拽上传
- 图片列表
- 上传状态

## 按钮上传

```tsx
import { ConfigProvider, Button, Upload } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Upload beforeUpload={() => false}>
      <Button>选择文件</Button>
    </Upload>
  </ConfigProvider>
);
```

## 拖拽上传

```tsx
import { ConfigProvider, Upload } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Upload.Dragger beforeUpload={() => false} style={{ width: 420 }}>
      <p>点击或拖拽文件到此区域上传</p>
      <p>支持单个或批量上传</p>
    </Upload.Dragger>
  </ConfigProvider>
);
```

## 图片列表

```tsx
import { ConfigProvider, Button, Upload } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Upload listType="picture" beforeUpload={() => false}>
      <Button>上传图片</Button>
    </Upload>
  </ConfigProvider>
);
```

## 默认文件列表

```tsx
import { ConfigProvider, Button, Upload } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Upload
      beforeUpload={() => false}
      defaultFileList={[{ uid: '1', name: '客户资料.pdf', status: 'done' }]}
    >
      <Button>继续上传</Button>
    </Upload>
  </ConfigProvider>
);
```

## 限制数量

```tsx
import { ConfigProvider, Button, Upload } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Upload maxCount={1} beforeUpload={() => false}>
      <Button>只能上传一个文件</Button>
    </Upload>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { UploadProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
