import { componentDemoPresets, createCommonDemos } from './component-demo-presets.mjs';
import { componentDocs as baseComponentDocs } from './component-docs.mjs';

const primaryComponentDocs = [
  {
    name: 'Button',
    title: 'Button 按钮',
    category: '基础能力',
    spec: '全局规范/Button.style.md',
    summary:
      '`@lf39.03/antd` 透传 antd `Button` API，并通过企业主题统一主按钮颜色、圆角和交互状态。',
    imports: ['Button', 'Space'],
    variants: ['主按钮', '默认按钮', '危险按钮', '链接按钮', '加载状态', '禁用状态'],
    basic: `<Space>
      <Button type="primary">主按钮</Button>
      <Button>默认按钮</Button>
      <Button danger>危险操作</Button>
      <Button type="link">文本链接</Button>
    </Space>`,
    advanced: `<Space>
      <Button type="primary" loading>
        保存中
      </Button>
      <Button disabled>不可用</Button>
      <Button type="primary" ghost>
        次级强调
      </Button>
    </Space>`,
  },
  {
    name: 'Form',
    title: 'Form 表单',
    category: '基础能力',
    spec: '数据录入/Form.dev.md',
    summary: '用于承载查询、编辑、审批等业务录入任务，API 与 Ant Design v5 保持兼容。',
    imports: ['Button', 'Form', 'Input', 'Select', 'Space'],
    variants: ['基础表单', '行内查询', '表单校验', '禁用状态', '表单布局'],
    basic: `<Form layout="vertical" style={{ maxWidth: 420 }}>
      <Form.Item label="客户名称" name="name" rules={[{ required: true }]}>
        <Input placeholder="请输入客户名称" />
      </Form.Item>
      <Form.Item label="客户类型" name="type">
        <Select options={[{ label: '个人客户', value: 'personal' }, { label: '机构客户', value: 'org' }]} />
      </Form.Item>
      <Button type="primary" htmlType="submit">提交</Button>
    </Form>`,
    advanced: `<Form layout="inline">
      <Form.Item label="客户名称">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="状态">
        <Select style={{ width: 160 }} options={[{ label: '全部', value: 'all' }, { label: '处理中', value: 'processing' }]} />
      </Form.Item>
      <Space>
        <Button type="primary">查询</Button>
        <Button>重置</Button>
      </Space>
    </Form>`,
  },
  {
    name: 'Table',
    title: 'Table 表格',
    category: '基础能力',
    spec: '样式规范/Table 表格样式.md',
    summary: '表格继承 antd `Table` 能力，并应用企业规范中的表头背景、边框色和 hover 背景。',
    imports: ['Table', 'Tag'],
    variants: ['基础表格', '状态列', '分页表格', '行选择', '操作列'],
    basic: `<Table
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
    advanced: `<Table
      rowSelection={{}}
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
];

export const componentDocs = [...primaryComponentDocs, ...baseComponentDocs];

const fallbackVariantsByCategory = {
  基础能力: ['默认展示', '组合配置'],
  数据录入: ['默认输入', '组合输入'],
  数据展示: ['默认展示', '组合展示'],
  反馈: ['默认反馈', '状态反馈'],
  导航: ['默认导航', '组合导航'],
  布局: ['默认布局', '组合布局'],
  通用: ['默认展示', '组合配置'],
  其他: ['默认展示', '组合配置'],
};

const getDocVariants = (doc) =>
  doc.variants?.length
    ? doc.variants
    : (fallbackVariantsByCategory[doc.category] ?? ['默认展示', '组合配置']);

const renderVariants = (variants = ['默认展示', '组合配置']) =>
  variants.map((item) => `- ${item}`).join('\n');
const unique = (values) => [...new Set(values.filter(Boolean))];
const mergeImports = (...groups) => unique(groups.flat());
const extractComponents = (code) => {
  const names = new Set();
  const regex = /<([A-Z][A-Za-z0-9]*)(?:\.| |>|\/ ?>)/g;
  let match;
  while ((match = regex.exec(code)) !== null) {
    names.add(match[1]);
  }
  return [...names];
};

const demo = ({ title, description, imports = [], extraImports, code, pure = false }) => ({
  title,
  description,
  imports,
  extraImports,
  code,
  pure,
});

const getDocImports = (doc) => doc.imports ?? [doc.name, 'Space'];

const normalizeDemos = (doc, demos, options = {}) => {
  const baseImports = getDocImports(doc);
  const { inheritExtraImports = true } = options;

  return demos
    .filter((item) => item?.code)
    .map((item) =>
      demo({
        ...item,
        imports: item.imports ?? baseImports,
        extraImports: item.extraImports ?? (inheritExtraImports ? doc.extraImports : undefined),
      }),
    );
};

const createComponentDemos = (doc) => {
  const preset = componentDemoPresets[doc.name];
  if (preset) return normalizeDemos(doc, preset, { inheritExtraImports: false });

  return normalizeDemos(doc, createCommonDemos(doc));
};

const renderCodeBlock = (item) => {
  if (item.pure) {
    return `\`\`\`tsx | pure
${item.code}
\`\`\``;
  }

  const autoImports = extractComponents(item.code);
  const imports = mergeImports(['ConfigProvider'], item.imports, autoImports);
  const extraImports = item.extraImports ? `${item.extraImports}\n` : '';

  return `\`\`\`tsx
import { ${imports.join(', ')} } from '@lf39.03/antd';
${extraImports}
export default () => (
  <ConfigProvider>
    ${item.code}
  </ConfigProvider>
);
\`\`\``;
};

const renderDemos = (demos) =>
  demos
    .map(
      (item) => `## ${item.title}

${item.description ? `${item.description}\n\n` : ''}${renderCodeBlock(item)}`,
    )
    .join('\n\n');

export const renderComponentDoc = (doc, order) => {
  const propsType = doc.typeName ?? `${doc.name}Props`;
  const specLine =
    doc.spec && doc.spec !== 'antd'
      ? `

\`${doc.name}\` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：\`${doc.spec}\`。`
      : '';

  return `---
title: ${doc.title}
order: ${order}
---

# ${doc.title}

${doc.summary}${specLine}

## 组件类型

${renderVariants(getDocVariants(doc))}

${renderDemos(createComponentDemos(doc))}

## API 与类型

组件 Props 完全继承 antd，可直接从 \`@lf39.03/antd\` 导入：

\`\`\`tsx | pure
import type { ${propsType} } from '@lf39.03/antd';
\`\`\`

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。`;
};

export const businessDocs = [
  {
    path: 'docs/business/error-block.md',
    title: 'ErrorBlock 空状态',
    summary: '用于列表、表格、日历和业务区块的空状态反馈，统一空态图形、文案层级和操作入口。',
    variants: ['默认空态', '表格空态', '日历空态', '业务空态', '自定义操作'],
    propsType: 'ErrorBlockProps',
    demos: [
      demo({
        title: '基础空态',
        description: '适合列表、详情模块或卡片内容为空时使用。',
        imports: ['ErrorBlock'],
        code: `<ErrorBlock
      title="暂无数据"
      description="当前筛选条件下没有可展示的内容。"
      action={<ErrorBlock.Button type="primary">新建数据</ErrorBlock.Button>}
    />`,
      }),
      demo({
        title: '场景类型',
        description: '通过 variant 区分表格、日历和业务区块的空态语义。',
        imports: ['ErrorBlock', 'Space'],
        code: `<Space direction="vertical" size={16} style={{ width: '100%' }}>
      <ErrorBlock variant="table" title="暂无表格数据" description="可以调整筛选条件后重试。" />
      <ErrorBlock variant="calendar" title="暂无日程" description="今天还没有待办安排。" />
      <ErrorBlock variant="business" title="暂无业务内容" description="请先完成上游配置。" />
    </Space>`,
      }),
      demo({
        title: '表格空数据',
        description: '与 Table 的 emptyText 组合，统一表格无数据反馈。',
        imports: ['ErrorBlock', 'Table'],
        code: `<Table
      columns={[{ title: '客户名称', dataIndex: 'name' }]}
      dataSource={[]}
      pagination={false}
      locale={{
        emptyText: <ErrorBlock variant="table" title="暂无客户" description="没有匹配的客户记录。" />,
      }}
    />`,
      }),
    ],
  },
  {
    path: 'docs/business/status.md',
    title: 'Status 状态点',
    summary: '用于在表格、详情页和流程节点中展示轻量状态，保持颜色和文案结构一致。',
    variants: ['成功', '处理中', '警告', '错误', '默认状态', '表格状态列'],
    propsType: 'StatusProps',
    demos: [
      demo({
        title: '基础状态',
        description: '展示业务中常见的状态类型。',
        imports: ['Space', 'Status'],
        code: `<Space>
      <Status type="success" text="已生效" />
      <Status type="processing" text="处理中" />
      <Status type="warning" text="待确认" />
      <Status type="error" text="已驳回" />
      <Status text="未开始" />
    </Space>`,
      }),
      demo({
        title: '表格状态列',
        description: '在列表中保持状态点和状态文案的统一展示。',
        imports: ['Status', 'Table'],
        code: `<Table
      pagination={false}
      columns={[
        { title: '任务', dataIndex: 'name' },
        { title: '状态', dataIndex: 'status', render: (status) => <Status type={status} text={status} /> },
      ]}
      dataSource={[
        { key: '1', name: '风险复核', status: 'processing' },
        { key: '2', name: '资料补充', status: 'warning' },
      ]}
    />`,
      }),
      demo({
        title: '详情字段',
        description: '用于详情页字段中，避免只用颜色表达状态。',
        imports: ['Descriptions', 'Status'],
        code: `<Descriptions
      bordered
      column={2}
      items={[
        { key: 'owner', label: '负责人', children: '张三' },
        { key: 'status', label: '当前状态', children: <Status type="processing" text="审批中" /> },
      ]}
    />`,
      }),
    ],
  },
  {
    path: 'docs/business/detail-page-header.md',
    title: 'DetailPageHeader 详情页头',
    summary: '用于详情页顶部区域，统一面包屑、标题、副标题、操作按钮和关键字段的排布。',
    variants: ['基础页头', '带面包屑', '带操作区', '带描述字段', '审批详情'],
    propsType: 'DetailPageHeaderProps',
    demos: [
      demo({
        title: '基础页头',
        imports: ['DetailPageHeader'],
        code: `<DetailPageHeader title="企业门户改版需求" subtitle="REQ-20260612-001" />`,
      }),
      demo({
        title: '带操作按钮',
        imports: ['DetailPageHeader'],
        code: `<DetailPageHeader
      title="采购合同审批"
      subtitle="合同编号 CT-2026-0612"
      actions={[
        { key: 'download', label: '下载' },
        { key: 'reject', label: '驳回', danger: true },
        { key: 'approve', label: '通过', type: 'primary' },
      ]}
    />`,
      }),
      demo({
        title: '完整详情页头',
        imports: ['DetailPageHeader', 'Status'],
        code: `<DetailPageHeader
      breadcrumb={[{ title: '项目管理' }, { title: '需求详情' }]}
      title="企业门户改版需求"
      subtitle="REQ-20260612-001"
      actions={[
        { key: 'cancel', label: '取消' },
        { key: 'submit', label: '提交审批', type: 'primary' },
      ]}
      descriptions={[
        { key: 'owner', label: '负责人', value: '张三' },
        { key: 'amount', label: '合同金额', value: '￥230,000' },
        { key: 'status', label: '当前状态', value: <Status type="processing" text="审批中" /> },
        { key: 'updatedAt', label: '更新时间', value: '2026-06-12 10:30' },
      ]}
    />`,
      }),
    ],
  },
  {
    path: 'docs/business/approval-progress-steps.md',
    title: 'ApprovalProgressSteps 审批进度',
    summary: '用于展示审批流程节点、审批意见、驳回原因和附件信息。',
    variants: ['基础流程', '处理中', '驳回节点', '退回节点', '附件信息'],
    propsType: 'ApprovalProgressStepsProps',
    demos: [
      demo({
        title: '基础流程',
        imports: ['ApprovalProgressSteps'],
        code: `<ApprovalProgressSteps
      steps={[
        { key: 'submit', title: '提交申请', description: '张三 2026-06-12 09:00', status: 'finished' },
        { key: 'review', title: '部门复核', description: '李四处理中', status: 'processing' },
        { key: 'done', title: '审批完成', status: 'waiting' },
      ]}
    />`,
      }),
      demo({
        title: '审批意见',
        imports: ['ApprovalProgressSteps'],
        code: `<ApprovalProgressSteps
      steps={[
        {
          key: 'submit',
          title: '提交申请',
          description: '张三',
          status: 'finished',
          opinion: '资料完整，提交部门负责人复核。',
        },
        {
          key: 'review',
          title: '部门复核',
          description: '李四',
          status: 'processing',
          opinion: '正在核对合同金额和审批权限。',
        },
      ]}
    />`,
      }),
      demo({
        title: '驳回与附件',
        imports: ['ApprovalProgressSteps'],
        code: `<ApprovalProgressSteps
      steps={[
        { key: 'submit', title: '提交申请', status: 'finished' },
        {
          key: 'reject',
          title: '风控复核',
          status: 'rejected',
          reason: '合同附件缺少盖章页，请补充后重新提交。',
          attachments: ['合同扫描件.pdf', '客户授权书.pdf'],
        },
      ]}
    />`,
      }),
    ],
  },
];

export const configProviderDoc = {
  path: 'src/components/config-provider/index.md',
  title: 'ConfigProvider',
  summary:
    '包装 Ant Design v5 的 ConfigProvider，默认注入企业级主题 token，其他能力与 antd 保持兼容。',
  variants: ['默认企业主题', '覆盖主题 token', '不使用定制主题', '默认组件主题', '表单文案'],
  propsType: 'ConfigProviderProps',
  demos: [
    demo({
      title: '默认企业主题',
      imports: ['Button'],
      code: `<Button type="primary">提交</Button>`,
    }),
    demo({
      title: '覆盖主题',
      description:
        '默认启用 W+ 主题 token；Ant Design `theme.cssVar` 由包装版按 React 版本统一控制：React 17 下不启用，React 18/19 下使用 W+ 默认 cssVar 配置。',
      imports: ['Button'],
      code: `<ConfigProvider theme={{ token: { colorPrimary: '#8A642D' } }}>
      <Button type="primary">提交申请</Button>
    </ConfigProvider>`,
    }),
    demo({
      title: '不使用定制主题',
      description: '显式传入空 `theme` 对象时不会注入企业主题配置。',
      imports: ['Button', 'Space', 'Table'],
      code: `<ConfigProvider theme={{}}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Button type="primary">Ant Design 默认主按钮</Button>
        <Table
          pagination={false}
          columns={[{ title: '客户', dataIndex: 'name' }]}
          dataSource={[{ key: '1', name: '张先生' }]}
        />
      </Space>
    </ConfigProvider>`,
    }),
    demo({
      title: '默认组件主题',
      description: '未传 `theme.components` 时，组件默认使用 W+ 组件级 token。',
      imports: ['Button', 'Space', 'Table'],
      code: `<Space direction="vertical" style={{ width: '100%' }}>
        <Button type="primary">新增客户</Button>
        <Table
          pagination={false}
          columns={[{ title: '客户', dataIndex: 'name' }]}
          dataSource={[{ key: '1', name: '张先生' }]}
        />
      </Space>`,
    }),
    demo({
      title: '表单文案',
      imports: ['Button', 'Form', 'Input'],
      code: `<ConfigProvider form={{ validateMessages: { required: '请填写\${label}' } }}>
      <Form layout="inline">
        <Form.Item label="客户名称" name="name" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form>
    </ConfigProvider>`,
    }),
  ],
};

export const renderStandaloneDoc = (doc, order) => `---
title: ${doc.title}
order: ${order}
---

# ${doc.title}

${doc.summary}

## 组件类型

${renderVariants(doc.variants)}

${renderDemos([...doc.demos])}

## API 与类型

组件 Props 可直接从 \`@lf39.03/antd\` 导入：

\`\`\`tsx | pure
import type { ${doc.propsType} } from '@lf39.03/antd';
\`\`\`

业务代码应优先使用公开 Props，不依赖内部 DOM 结构。`;
