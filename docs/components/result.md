---
title: Result 结果
order: 130
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

## 基础用法

```tsx
import { ConfigProvider, Result, Button } from 'privatebank-design';

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

## 常用类型与状态

```tsx
import { ConfigProvider, Result, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Result status="warning" title="当前操作需要进一步确认" extra={<Button>重新检查</Button>} />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { ResultProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
