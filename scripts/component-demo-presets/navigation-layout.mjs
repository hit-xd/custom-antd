export const navigationLayoutPresets = {
  Button: [
    {
      title: '按钮类型',
      description: '展示主按钮、默认按钮、危险按钮和链接按钮等常用类型。',
      imports: ['Button', 'Space'],
      code: `<Space wrap>
      <Button type="primary">主按钮</Button>
      <Button>默认按钮</Button>
      <Button danger>危险操作</Button>
      <Button type="link">文本链接</Button>
    </Space>`,
    },
    {
      title: '按钮尺寸',
      description: '通过 size 切换大、中、小三种尺寸，按钮组内建议保持同一高度。',
      imports: ['Button', 'Space'],
      code: `<Space align="center" wrap>
      <Button type="primary" size="large">大按钮</Button>
      <Button type="primary">默认按钮</Button>
      <Button type="primary" size="small">小按钮</Button>
    </Space>`,
    },
    {
      title: '加载中',
      imports: ['Button', 'Space'],
      code: `<Space wrap>
      <Button type="primary" loading>保存中</Button>
      <Button loading>加载中</Button>
    </Space>`,
    },
    {
      title: '禁用',
      imports: ['Button', 'Space'],
      code: `<Space wrap>
      <Button type="primary" disabled>主按钮</Button>
      <Button disabled>默认按钮</Button>
      <Button type="link" disabled>链接按钮</Button>
    </Space>`,
    },
    {
      title: '按钮组合',
      description: '常见操作区保持主次关系清晰，同一操作区最多一个主按钮。',
      imports: ['Button', 'Space'],
      code: `<Space>
      <Button>取消</Button>
      <Button>保存草稿</Button>
      <Button type="primary">提交审批</Button>
    </Space>`,
    },
  ],
  Tabs: [
    {
      title: '基础标签',
      imports: ['Tabs'],
      code: `<Tabs items={[{ key: '1', label: '客户概览', children: '客户概览内容' }, { key: '2', label: '资产持仓', children: '资产持仓内容' }]} />`,
    },
    {
      title: '卡片标签',
      imports: ['Tabs'],
      code: `<Tabs type="card" items={[{ key: '1', label: '待处理', children: '待处理任务' }, { key: '2', label: '已完成', children: '已完成任务' }, { key: '3', label: '已关闭', disabled: true, children: '' }]} />`,
    },
    {
      title: '禁用标签',
      imports: ['Tabs'],
      code: `<Tabs items={[{ key: '1', label: '可用', children: '可用内容' }, { key: '2', label: '禁用', disabled: true, children: '禁用内容' }]} />`,
    },
    {
      title: '居中展示',
      imports: ['Tabs'],
      code: `<Tabs centered items={[{ key: '1', label: '客户', children: '客户内容' }, { key: '2', label: '资产', children: '资产内容' }]} />`,
    },
    {
      title: '附加操作',
      imports: ['Button', 'Tabs'],
      code: `<Tabs
      tabBarExtraContent={<Button type="link">刷新</Button>}
      items={[{ key: '1', label: '待处理', children: '待处理任务' }, { key: '2', label: '已完成', children: '已完成任务' }]}
    />`,
    },
  ],
  Menu: [
    {
      title: '垂直菜单',
      description: '适用于侧边导航和页面内分组导航。',
      imports: ['Menu'],
      code: `<Menu mode="inline" items={[{ key: 'home', label: '首页' }, { key: 'customer', label: '客户管理' }]} />`,
    },
    {
      title: '水平菜单',
      description: '适用于顶部导航。',
      imports: ['Menu'],
      code: `<Menu mode="horizontal" selectedKeys={['customer']} items={[{ key: 'home', label: '首页' }, { key: 'customer', label: '客户管理' }]} />`,
    },
    {
      title: '子菜单',
      imports: ['Menu'],
      code: `<Menu
      mode="inline"
      defaultOpenKeys={['customer']}
      items={[{ key: 'customer', label: '客户管理', children: [{ key: 'list', label: '客户列表' }, { key: 'group', label: '客户分组' }] }]}
    />`,
    },
    {
      title: '暗色菜单',
      imports: ['Menu'],
      code: `<Menu theme="dark" mode="inline" items={[{ key: 'home', label: '首页' }, { key: 'report', label: '报表' }]} />`,
    },
    {
      title: '分组菜单',
      imports: ['Menu'],
      code: `<Menu
      mode="inline"
      items={[
        { type: 'group', label: '客户', children: [{ key: 'customer-list', label: '客户列表' }] },
        { type: 'group', label: '审批', children: [{ key: 'approval-list', label: '审批列表' }] },
      ]}
    />`,
    },
  ],
  Pagination: [
    {
      title: '基础分页',
      imports: ['Pagination'],
      code: `<Pagination defaultCurrent={1} total={120} />`,
    },
    {
      title: '更多配置',
      imports: ['Pagination'],
      code: `<Pagination showSizeChanger showQuickJumper showTotal={(total) => \`共 \${total} 条\`} total={500} />`,
    },
    {
      title: '小尺寸',
      imports: ['Pagination'],
      code: `<Pagination size="small" total={120} />`,
    },
    {
      title: '简洁模式',
      imports: ['Pagination'],
      code: `<Pagination simple total={120} />`,
    },
    {
      title: '受控分页',
      imports: ['Pagination'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [current, setCurrent] = useState(1);
      return <Pagination current={current} total={120} onChange={setCurrent} />;
    })()}`,
    },
  ],
  Steps: [
    {
      title: '水平步骤',
      imports: ['Steps'],
      code: `<Steps current={1} items={[{ title: '填写资料' }, { title: '风险评估' }, { title: '提交审批' }]} />`,
    },
    {
      title: '竖向步骤',
      imports: ['Steps'],
      code: `<Steps direction="vertical" current={1} items={[{ title: '申请已提交', description: '2026-06-12 09:00' }, { title: '审批处理中', description: '等待负责人审批' }, { title: '审批完成' }]} />`,
    },
    {
      title: '小尺寸',
      imports: ['Steps'],
      code: `<Steps size="small" current={1} items={[{ title: '提交' }, { title: '复核' }, { title: '完成' }]} />`,
    },
    {
      title: '状态步骤',
      imports: ['Steps'],
      code: `<Steps current={1} status="error" items={[{ title: '提交申请' }, { title: '复核失败' }, { title: '重新提交' }]} />`,
    },
    {
      title: '点状步骤',
      imports: ['Steps'],
      code: `<Steps progressDot current={1} items={[{ title: '提交' }, { title: '复核' }, { title: '完成' }]} />`,
    },
  ],
  Breadcrumb: [
    {
      title: '基础路径',
      imports: ['Breadcrumb'],
      code: `<Breadcrumb items={[{ title: '客户管理' }, { title: '客户列表' }, { title: '客户详情' }]} />`,
    },
    {
      title: '带链接',
      imports: ['Breadcrumb'],
      code: `<Breadcrumb items={[{ title: <a href="#">首页</a> }, { title: <a href="#">审批中心</a> }, { title: '审批详情' }]} />`,
    },
    {
      title: '自定义分隔符',
      imports: ['Breadcrumb'],
      code: `<Breadcrumb separator=">" items={[{ title: '首页' }, { title: '客户管理' }, { title: '客户详情' }]} />`,
    },
  ],
  Layout: [
    {
      title: '顶部布局',
      imports: ['Layout'],
      code: `<Layout style={{ minHeight: 180 }}><Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header><Layout.Content style={{ padding: 24 }}>内容区</Layout.Content></Layout>`,
    },
    {
      title: '侧边布局',
      imports: ['Layout'],
      code: `<Layout style={{ minHeight: 220 }}><Layout.Sider width={160}>侧边导航</Layout.Sider><Layout.Content style={{ padding: 24 }}>内容区</Layout.Content></Layout>`,
    },
    {
      title: '顶侧布局',
      imports: ['Layout'],
      code: `<Layout style={{ minHeight: 220 }}><Layout.Sider width={160}>侧边导航</Layout.Sider><Layout><Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header><Layout.Content style={{ padding: 24 }}>内容区</Layout.Content></Layout></Layout>`,
    },
  ],
  Space: [
    {
      title: '基础间距',
      imports: ['Button', 'Space'],
      code: `<Space><Button>取消</Button><Button type="primary">提交</Button></Space>`,
    },
    {
      title: '垂直间距',
      imports: ['Button', 'Space'],
      code: `<Space direction="vertical" size={16}><Button>第一项</Button><Button>第二项</Button></Space>`,
    },
    {
      title: '自动换行',
      imports: ['Button', 'Space'],
      code: `<Space wrap><Button>操作一</Button><Button>操作二</Button><Button>操作三</Button><Button>操作四</Button></Space>`,
    },
    {
      title: '分隔符',
      imports: ['Space'],
      code: `<Space split={<span style={{ color: '#d9d9d9' }}>|</span>}><a>查看</a><a>编辑</a><a>删除</a></Space>`,
    },
  ],
  Flex: [
    {
      title: '基础排列',
      imports: ['Button', 'Flex'],
      code: `<Flex gap="small"><Button>取消</Button><Button type="primary">提交</Button></Flex>`,
    },
    {
      title: '主轴对齐',
      imports: ['Button', 'Flex', 'Typography'],
      code: `<Flex justify="space-between" align="center"><Typography.Text>客户信息</Typography.Text><Button type="link">查看</Button></Flex>`,
    },
    {
      title: '自动换行',
      imports: ['Button', 'Flex'],
      code: `<Flex wrap="wrap" gap="small"><Button>操作一</Button><Button>操作二</Button><Button>操作三</Button><Button>操作四</Button></Flex>`,
    },
  ],
  FloatButton: [
    {
      title: '基础按钮',
      description: '在固定高度容器中展示悬浮按钮，方便在文档预览区观察位置。',
      imports: ['FloatButton'],
      code: `<div style={{ position: 'relative', height: 160, background: '#f4f6f8' }}>
      <FloatButton tooltip="快捷操作" style={{ position: 'absolute', right: 24, bottom: 24 }} />
    </div>`,
    },
    {
      title: '组合按钮',
      description: '多个快捷操作可收纳为悬浮按钮组。',
      imports: ['FloatButton'],
      code: `<div style={{ position: 'relative', height: 180, background: '#f4f6f8' }}>
      <FloatButton.Group trigger="click" style={{ position: 'absolute', right: 24, bottom: 24 }}>
        <FloatButton tooltip="编辑" />
        <FloatButton tooltip="刷新" />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </div>`,
    },
    {
      title: '回到顶部',
      imports: ['FloatButton'],
      code: `<div style={{ position: 'relative', height: 160, overflow: 'auto', background: '#f4f6f8' }}><div style={{ height: 360, padding: 16 }}>滚动区域示例</div><FloatButton.BackTop visibilityHeight={0} style={{ position: 'absolute', right: 24, bottom: 24 }} /></div>`,
    },
  ],
};
