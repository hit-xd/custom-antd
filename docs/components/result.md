---
title: Result 结果
order: 133
---

# Result 结果

用于展示任务完成后的明确结果。

`Result` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdResult.md`。

## 组件类型

- 成功
- 错误
- 警告
- 信息
- 自定义状态

## 成功

```tsx
import { ConfigProvider, Button, Result } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Result
      status="success"
      title="审批提交成功"
      subTitle="审批编号：AP-20260001"
      extra={<Button type="primary">返回列表</Button>}
    />
  </ConfigProvider>
);
```

## 警告

```tsx
import { ConfigProvider, Button, Result } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Result status="warning" title="当前操作需要进一步确认" extra={<Button>重新检查</Button>} />
  </ConfigProvider>
);
```

## 错误

```tsx
import { ConfigProvider, Button, Result } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Result
      status="error"
      title="提交失败"
      subTitle="请检查必填信息后重试。"
      extra={<Button type="primary">重新提交</Button>}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { ResultProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
