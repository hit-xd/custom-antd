---
title: Modal 对话框
order: 129
---

# Modal 对话框

用于需要用户确认或集中处理的阻断式任务。

`Modal` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdModal.md`。

## 组件类型

- 基础对话框
- 确认对话框
- 异步关闭
- 自定义底部

## 基础对话框

用于需要用户确认或集中处理的阻断式任务。

```tsx
import { ConfigProvider, Button, Modal } from '@lf39.03/antd';
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

## 确认对话框

使用静态确认框处理轻量二次确认。

```tsx
import { ConfigProvider, Button, Modal } from '@lf39.03/antd';

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

## 异步关闭

提交中使用 confirmLoading 展示等待状态。

```tsx
import { ConfigProvider, Button, Modal } from '@lf39.03/antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setOpen(false);
        }, 800);
      };
      return (
        <>
          <Button type="primary" onClick={() => setOpen(true)}>
            异步提交
          </Button>
          <Modal
            title="提交审批"
            open={open}
            confirmLoading={loading}
            onOk={handleOk}
            onCancel={() => setOpen(false)}
          >
            正在提交审批信息。
          </Modal>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## 自定义底部

复杂流程可通过 footer 自定义操作顺序和按钮文案。

```tsx
import { ConfigProvider, Button, Modal, Space } from '@lf39.03/antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>处理审批</Button>
          <Modal
            title="审批处理"
            open={open}
            onCancel={() => setOpen(false)}
            footer={
              <Space>
                <Button onClick={() => setOpen(false)}>取消</Button>
                <Button>保存草稿</Button>
                <Button type="primary" onClick={() => setOpen(false)}>
                  提交
                </Button>
              </Space>
            }
          >
            请确认审批意见后提交。
          </Modal>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## 表单承载

```tsx
import { ConfigProvider, Button, Form, Input, Modal } from '@lf39.03/antd';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>填写意见</Button>
          <Modal
            title="审批意见"
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
          >
            <Form layout="vertical">
              <Form.Item label="意见" required>
                <Input.TextArea rows={3} placeholder="请输入审批意见" />
              </Form.Item>
            </Form>
          </Modal>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { ModalProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
