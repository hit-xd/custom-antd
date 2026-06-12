---
title: Modal 对话框
order: 126
---

# Modal 对话框

用于需要用户确认或集中处理的阻断式任务。

`Modal` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdModal.md`。

## 组件类型

- 基础对话框
- 确认对话框
- 异步关闭
- 自定义底部

## 基础用法

```tsx
import { ConfigProvider, Modal, Button } from 'pb-antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button type="primary" onClick={() => setOpen(true)}>
            打开对话框
          </Button>
          <Modal
            title="确认提交"
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
          >
            提交后将进入审批流程。
          </Modal>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Modal, Button } from 'pb-antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    <Button
      onClick={() => Modal.confirm({ title: '确认删除客户记录？', content: '删除后无法恢复。' })}
    >
      确认对话框
    </Button>
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `pb-antd` 导入：

```tsx | pure
import type { ModalProps } from 'pb-antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
