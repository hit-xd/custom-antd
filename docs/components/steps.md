---
title: Steps 步骤条
order: 136
---

# Steps 步骤条

用于展示任务流程、当前进度和状态。

`Steps` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/steps-Style-Spec.md`。

## 组件类型

- 水平步骤
- 竖向步骤
- 小尺寸
- 状态步骤

## 基础用法

```tsx
import { ConfigProvider, Steps, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Steps
      current={1}
      items={[{ title: '填写资料' }, { title: '风险评估' }, { title: '提交审批' }]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

```tsx
import { ConfigProvider, Steps, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Steps
      direction="vertical"
      size="small"
      current={1}
      items={[
        { title: '申请已提交', description: '2026-06-12 09:00' },
        { title: '审批处理中', description: '等待负责人审批' },
        { title: '审批完成' },
      ]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { StepsProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
