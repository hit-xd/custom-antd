---
title: List 列表
order: 122
---

# List 列表

用于按相同结构连续展示数据项。

`List` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/List  列表样式.md`。

## 组件类型

- 基础列表
- 带头像
- 带操作
- 分页列表

## 基础列表

```tsx
import { ConfigProvider, List } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <List
      bordered
      dataSource={['客户资料待补充', '风险评估即将到期', '资产配置方案待确认']}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </ConfigProvider>
);
```

## 带头像

```tsx
import { ConfigProvider, Avatar, List } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <List
      dataSource={['张先生', '李女士']}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta avatar={<Avatar>{item[0]}</Avatar>} title={item} description="重点客户" />
        </List.Item>
      )}
    />
  </ConfigProvider>
);
```

## 带操作

```tsx
import { ConfigProvider, List } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <List
      dataSource={['待回访客户', '待审批任务']}
      renderItem={(item) => <List.Item actions={[<a key="view">查看</a>]}>{item}</List.Item>}
    />
  </ConfigProvider>
);
```

## 分页列表

```tsx
import { ConfigProvider, List } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <List
      pagination={{ pageSize: 2 }}
      dataSource={['客户 A', '客户 B', '客户 C']}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </ConfigProvider>
);
```

## 加载更多

```tsx
import { ConfigProvider, Button, List } from '@lf39.03/antd';

export default () => (
  <ConfigProvider>
    <List
      dataSource={['客户 A', '客户 B']}
      loadMore={
        <div style={{ textAlign: 'center' }}>
          <Button>加载更多</Button>
        </div>
      }
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </ConfigProvider>
);
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `@lf39.03/antd` 导入：

```tsx | pure
import type { ListProps } from '@lf39.03/antd';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
