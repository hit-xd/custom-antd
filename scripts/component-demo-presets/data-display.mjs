export const dataDisplayPresets = {
  Table: [
    {
      title: '基础表格',
      description: '展示结构化列表数据，企业主题统一表头、边框和 hover 背景。',
      imports: ['Table', 'Tag'],
      code: `<Table
      columns={[
        { title: '名称', dataIndex: 'name' },
        { title: '负责人', dataIndex: 'owner' },
        {
          title: '状态',
          dataIndex: 'status',
          render: (status) => <Tag color={status === 'online' ? 'success' : 'default'}>{status}</Tag>,
        },
      ]}
      dataSource={[
        { key: '1', name: '客户中心', owner: 'Alice', status: 'online' },
        { key: '2', name: '报表平台', owner: 'Bob', status: 'offline' },
      ]}
      pagination={false}
    />`,
    },
    {
      title: '可选择',
      description: '批量处理场景可开启 rowSelection。',
      imports: ['Table'],
      code: `<Table
      rowSelection={{}}
      columns={[
        { title: '客户名称', dataIndex: 'name' },
        { title: '资产规模', dataIndex: 'amount' },
      ]}
      dataSource={[
        { key: '1', name: '上海分行重点客户', amount: '￥12,800,000' },
        { key: '2', name: '北京分行机构客户', amount: '￥8,600,000' },
      ]}
      pagination={false}
    />`,
    },
    {
      title: '筛选和排序',
      description: '列表列头可配置 filters 和 sorter 支持快速筛选。',
      imports: ['Table'],
      code: `<Table
      columns={[
        { title: '客户名称', dataIndex: 'name' },
        {
          title: '风险等级',
          dataIndex: 'risk',
          filters: [{ text: '稳健型', value: '稳健型' }, { text: '进取型', value: '进取型' }],
          onFilter: (value, record) => record.risk === value,
        },
        { title: '资产规模', dataIndex: 'amount', sorter: (a, b) => a.amount - b.amount },
      ]}
      dataSource={[
        { key: '1', name: '张先生', risk: '稳健型', amount: 1280 },
        { key: '2', name: '李女士', risk: '进取型', amount: 860 },
      ]}
    />`,
    },
    {
      title: '分页表格',
      description: '大量数据使用分页控制信息密度。',
      imports: ['Table'],
      code: `<Table
      columns={[
        { title: '客户名称', dataIndex: 'name' },
        { title: '资产规模', dataIndex: 'amount' },
        { title: '操作', dataIndex: 'action', render: () => <a>查看</a> },
      ]}
      dataSource={[
        { key: '1', name: '上海分行重点客户', amount: '￥12,800,000' },
        { key: '2', name: '北京分行机构客户', amount: '￥8,600,000' },
      ]}
      pagination={{ pageSize: 5 }}
    />`,
    },
    {
      title: '横向滚动',
      description: '列较多时配置 scroll.x，避免挤压关键字段。',
      imports: ['Table'],
      code: `<Table
      scroll={{ x: 720 }}
      columns={[
        { title: '客户名称', dataIndex: 'name', fixed: 'left', width: 180 },
        { title: '所属机构', dataIndex: 'branch', width: 160 },
        { title: '资产规模', dataIndex: 'amount', width: 160 },
        { title: '风险等级', dataIndex: 'risk', width: 120 },
        { title: '操作', dataIndex: 'action', fixed: 'right', width: 100, render: () => <a>查看</a> },
      ]}
      dataSource={[{ key: '1', name: '张先生', branch: '上海分行', amount: '￥12,800,000', risk: '稳健型' }]}
      pagination={false}
    />`,
    },
    {
      title: '展开行',
      imports: ['Table'],
      code: `<Table
      expandable={{ expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.detail}</p> }}
      columns={[{ title: '客户名称', dataIndex: 'name' }, { title: '状态', dataIndex: 'status' }]}
      dataSource={[{ key: '1', name: '张先生', status: '跟进中', detail: '最近一次回访：2026-06-12' }]}
      pagination={false}
    />`,
    },
  ],
  Descriptions: [
    {
      title: '基础描述',
      imports: ['Descriptions'],
      code: `<Descriptions items={[{ key: '1', label: '客户名称', children: '张先生' }, { key: '2', label: '风险等级', children: '稳健型' }]} />`,
    },
    {
      title: '带边框',
      imports: ['Descriptions'],
      code: `<Descriptions bordered column={2} items={[{ key: '1', label: '客户编号', children: 'C-20260001' }, { key: '2', label: '所属机构', children: '上海分行' }, { key: '3', label: '资产规模', children: '1,280 万元' }]} />`,
    },
    {
      title: '多列布局',
      imports: ['Descriptions'],
      code: `<Descriptions column={3} items={[{ key: '1', label: '姓名', children: '张先生' }, { key: '2', label: '等级', children: '私行' }, { key: '3', label: '状态', children: '有效' }]} />`,
    },
    {
      title: '垂直布局',
      imports: ['Descriptions'],
      code: `<Descriptions layout="vertical" bordered items={[{ key: '1', label: '审批意见', children: '资料完整，同意提交复核。' }, { key: '2', label: '处理人', children: '李四' }]} />`,
    },
    {
      title: '尺寸',
      imports: ['Descriptions', 'Space'],
      code: `<Space direction="vertical" style={{ width: '100%' }}>
      <Descriptions size="small" bordered items={[{ key: '1', label: '小尺寸', children: '适合紧凑详情' }]} />
      <Descriptions size="middle" bordered items={[{ key: '1', label: '默认尺寸', children: '适合普通详情' }]} />
    </Space>`,
    },
  ],
  Card: [
    {
      title: '基础卡片',
      imports: ['Card'],
      code: `<Card title="客户概览" style={{ width: 360 }}>当前客户资产规模为 1,280 万元。</Card>`,
    },
    {
      title: '带操作',
      imports: ['Button', 'Card'],
      code: `<Card title="审批任务" extra={<Button type="link">查看全部</Button>} style={{ width: 360 }}>待处理任务 18 项</Card>`,
    },
    {
      title: '加载中',
      imports: ['Card'],
      code: `<Card loading title="客户概览" style={{ width: 360 }}>加载中的内容</Card>`,
    },
    {
      title: '内部卡片',
      imports: ['Card'],
      code: `<Card title="资产概览" style={{ width: 420 }}>
      <Card type="inner" title="本月新增">36 位客户</Card>
    </Card>`,
    },
    {
      title: '栅格卡片',
      imports: ['Card'],
      code: `<Card title="客户指标" style={{ width: 420 }}>
      <Card.Grid style={{ width: '50%' }}>资产规模</Card.Grid>
      <Card.Grid style={{ width: '50%' }}>风险等级</Card.Grid>
    </Card>`,
    },
  ],
  List: [
    {
      title: '基础列表',
      imports: ['List'],
      code: `<List bordered dataSource={['客户资料待补充', '风险评估即将到期', '资产配置方案待确认']} renderItem={(item) => <List.Item>{item}</List.Item>} />`,
    },
    {
      title: '带头像',
      imports: ['Avatar', 'List'],
      code: `<List dataSource={['张先生', '李女士']} renderItem={(item) => <List.Item><List.Item.Meta avatar={<Avatar>{item[0]}</Avatar>} title={item} description="重点客户" /></List.Item>} />`,
    },
    {
      title: '带操作',
      imports: ['List'],
      code: `<List dataSource={['待回访客户', '待审批任务']} renderItem={(item) => <List.Item actions={[<a key="view">查看</a>]}>{item}</List.Item>} />`,
    },
    {
      title: '分页列表',
      imports: ['List'],
      code: `<List pagination={{ pageSize: 2 }} dataSource={['客户 A', '客户 B', '客户 C']} renderItem={(item) => <List.Item>{item}</List.Item>} />`,
    },
    {
      title: '加载更多',
      imports: ['Button', 'List'],
      code: `<List
      dataSource={['客户 A', '客户 B']}
      loadMore={<div style={{ textAlign: 'center' }}><Button>加载更多</Button></div>}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />`,
    },
  ],
  Tag: [
    {
      title: '基础标签',
      imports: ['Space', 'Tag'],
      code: `<Space><Tag>默认</Tag><Tag color="success">已完成</Tag><Tag color="warning">待审核</Tag><Tag color="error">异常</Tag></Space>`,
    },
    {
      title: '可关闭',
      imports: ['Tag'],
      code: `<Tag closable>重点客户</Tag>`,
    },
    {
      title: '可选择',
      imports: ['Tag'],
      code: `<Tag.CheckableTag checked>已选标签</Tag.CheckableTag>`,
    },
    {
      title: '自定义颜色',
      imports: ['Space', 'Tag'],
      code: `<Space><Tag color="#9B7235">私行</Tag><Tag color="#1874FF">重点</Tag></Space>`,
    },
    {
      title: '图标标签',
      imports: ['Space', 'Tag'],
      code: `<Space><Tag color="processing">处理中</Tag><Tag color="success">已完成</Tag></Space>`,
    },
  ],
  Tooltip: [
    {
      title: '基础提示',
      imports: ['Button', 'Tooltip'],
      code: `<Tooltip title="查看客户详情"><Button>悬停查看</Button></Tooltip>`,
    },
    {
      title: '不同方向',
      imports: ['Button', 'Space', 'Tooltip'],
      code: `<Space><Tooltip placement="top" title="顶部提示"><Button>Top</Button></Tooltip><Tooltip placement="right" title="右侧提示"><Button>Right</Button></Tooltip></Space>`,
    },
    {
      title: '长文本',
      imports: ['Button', 'Tooltip'],
      code: `<Tooltip title="这里展示一段较长的说明文字，用于解释字段含义或操作风险。"><Button>字段说明</Button></Tooltip>`,
    },
    {
      title: '颜色',
      imports: ['Button', 'Tooltip'],
      code: `<Tooltip color="#9B7235" title="品牌色提示"><Button>品牌色</Button></Tooltip>`,
    },
    {
      title: '禁用触发元素',
      imports: ['Button', 'Tooltip'],
      code: `<Tooltip title="当前无权限操作"><Button disabled>不可操作</Button></Tooltip>`,
    },
  ],
  Popover: [
    {
      title: '点击触发',
      imports: ['Button', 'Popover'],
      code: `<Popover title="客户信息" content="稳健型客户，资产规模 1,280 万元。"><Button>查看信息</Button></Popover>`,
    },
    {
      title: '悬停触发',
      imports: ['Button', 'Popover'],
      code: `<Popover trigger="hover" content="悬停后展示更多内容"><Button>悬停查看</Button></Popover>`,
    },
    {
      title: '带标题',
      imports: ['Button', 'Popover'],
      code: `<Popover title="工作提醒" content={<div><p>待处理审批：3</p><p>待回访客户：8</p></div>}><Button>工作提醒</Button></Popover>`,
    },
    {
      title: '不同方向',
      imports: ['Button', 'Popover', 'Space'],
      code: `<Space><Popover placement="top" content="顶部内容"><Button>Top</Button></Popover><Popover placement="right" content="右侧内容"><Button>Right</Button></Popover></Space>`,
    },
    {
      title: '卡片内容',
      imports: ['Button', 'Popover'],
      code: `<Popover content={<div style={{ width: 220 }}>客户最近一次回访时间为 2026-06-12，当前状态为跟进中。</div>}><Button>客户摘要</Button></Popover>`,
    },
  ],
  Tree: [
    {
      title: '基础树',
      imports: ['Tree'],
      code: `<Tree treeData={[{ title: '总部', key: 'hq', children: [{ title: '财富管理部', key: 'wealth' }] }]} />`,
    },
    {
      title: '可勾选',
      imports: ['Tree'],
      code: `<Tree checkable defaultExpandAll treeData={[{ title: '总部', key: 'hq', children: [{ title: '运营部', key: 'ops' }] }]} />`,
    },
    {
      title: '默认展开',
      imports: ['Tree'],
      code: `<Tree defaultExpandedKeys={['hq']} treeData={[{ title: '总部', key: 'hq', children: [{ title: '上海分行', key: 'shanghai' }] }]} />`,
    },
    {
      title: '默认选中',
      imports: ['Tree'],
      code: `<Tree defaultSelectedKeys={['wealth']} defaultExpandAll treeData={[{ title: '总部', key: 'hq', children: [{ title: '财富管理部', key: 'wealth' }] }]} />`,
    },
    {
      title: '禁用节点',
      imports: ['Tree'],
      code: `<Tree treeData={[{ title: '总部', key: 'hq', children: [{ title: '停用机构', key: 'disabled', disabled: true }] }]} />`,
    },
  ],
  TreeSelect: [
    {
      title: '单选',
      imports: ['TreeSelect'],
      code: `<TreeSelect
      style={{ width: 280 }}
      placeholder="请选择组织"
      treeData={[{ title: '总部', value: 'hq', children: [{ title: '财富管理部', value: 'wealth' }] }]}
    />`,
    },
    {
      title: '可勾选',
      imports: ['TreeSelect'],
      code: `<TreeSelect
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_PARENT}
      style={{ width: 320 }}
      placeholder="请选择组织"
      treeData={[{ title: '总部', value: 'hq', children: [{ title: '财富管理部', value: 'wealth' }, { title: '运营部', value: 'ops' }] }]}
    />`,
    },
    {
      title: '可搜索',
      imports: ['TreeSelect'],
      code: `<TreeSelect
      showSearch
      style={{ width: 280 }}
      placeholder="搜索组织"
      treeData={[{ title: '总部', value: 'hq', children: [{ title: '上海分行', value: 'shanghai' }] }]}
    />`,
    },
    {
      title: '多选',
      imports: ['TreeSelect'],
      code: `<TreeSelect
      multiple
      style={{ width: 320 }}
      placeholder="请选择多个组织"
      treeData={[{ title: '总部', value: 'hq', children: [{ title: '上海分行', value: 'shanghai' }, { title: '北京分行', value: 'beijing' }] }]}
    />`,
    },
    {
      title: '禁用节点',
      imports: ['TreeSelect'],
      code: `<TreeSelect
      style={{ width: 280 }}
      placeholder="请选择组织"
      treeData={[{ title: '总部', value: 'hq', children: [{ title: '停用机构', value: 'disabled', disabled: true }] }]}
    />`,
    },
  ],
};
