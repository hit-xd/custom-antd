---
title: Steps 步骤条
order: 139
---

# Steps 步骤条

用于展示任务流程、当前进度和状态。

`Steps` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/steps-Style-Spec.md`。

## 组件类型

- 水平步骤
- 竖向步骤
- 小尺寸
- 状态步骤

## 水平步骤

```tsx
import { ConfigProvider, Steps } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Steps
      current={1}
      items={[{ title: '填写资料' }, { title: '风险评估' }, { title: '提交审批' }]}
    />
  </ConfigProvider>
);
```

## 竖向步骤

```tsx
import { ConfigProvider, Steps } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Steps
      direction="vertical"
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

## 小尺寸

```tsx
import { ConfigProvider, Steps } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Steps
      size="small"
      current={1}
      items={[{ title: '提交' }, { title: '复核' }, { title: '完成' }]}
    />
  </ConfigProvider>
);
```

## 状态步骤

```tsx
import { ConfigProvider, Steps } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Steps
      current={1}
      status="error"
      items={[{ title: '提交申请' }, { title: '复核失败' }, { title: '重新提交' }]}
    />
  </ConfigProvider>
);
```

## 点状步骤

```tsx
import { ConfigProvider, Steps } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <Steps
      progressDot
      current={1}
      items={[{ title: '提交' }, { title: '复核' }, { title: '完成' }]}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { StepsProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
