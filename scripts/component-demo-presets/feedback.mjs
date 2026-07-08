export const feedbackPresets = {
  Alert: [
    {
      title: '四种样式',
      description: '通过 type 表达成功、信息、警告和错误等提示语义。',
      imports: ['Alert', 'Space'],
      code: `<Space direction="vertical" style={{ width: '100%' }}>
      <Alert message="客户资料保存成功" type="success" showIcon />
      <Alert message="配置将在发布后生效" type="info" showIcon />
      <Alert message="风险评估即将到期" type="warning" showIcon />
      <Alert message="提交失败，请稍后重试" type="error" showIcon />
    </Space>`,
    },
    {
      title: '含描述',
      description: '需要补充原因或处理建议时使用 description。',
      imports: ['Alert'],
      code: `<Alert
      message="风险评估即将到期"
      description="请在 7 天内完成重新评估，逾期后部分业务操作将受限。"
      type="warning"
      showIcon
    />`,
    },
    {
      title: '可关闭',
      description: '非阻断提示可允许用户主动关闭。',
      imports: ['Alert'],
      code: `<Alert message="配置将在发布后生效" type="info" showIcon closable />`,
    },
    {
      title: '操作按钮',
      imports: ['Alert', 'Button'],
      code: `<Alert
      message="客户资料待补充"
      description="补充完整后可继续发起审批。"
      type="warning"
      showIcon
      action={<Button size="small" type="primary">去补充</Button>}
    />`,
    },
    {
      title: '无图标提示',
      description: '低风险提示可关闭图标，降低视觉占用。',
      imports: ['Alert'],
      code: `<Alert message="系统将在今晚 22:00 进行例行维护" type="info" />`,
    },
  ],
  Modal: [
    {
      title: '基础对话框',
      description: '用于需要用户确认或集中处理的阻断式任务。',
      imports: ['Button', 'Modal'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button type="primary" onClick={() => setOpen(true)}>打开对话框</Button><Modal title="确认提交" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>提交后将进入审批流程。</Modal></>;
    })()}`,
    },
    {
      title: '确认对话框',
      description: '使用静态确认框处理轻量二次确认。',
      imports: ['Button', 'Modal'],
      code: `<Button onClick={() => Modal.confirm({ title: '确认删除客户记录？', content: '删除后无法恢复。' })}>确认对话框</Button>`,
    },
    {
      title: '异步关闭',
      description: '提交中使用 confirmLoading 展示等待状态。',
      imports: ['Button', 'Modal'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [open, setOpen] = useState(false);
      const [loading, setLoading] = useState(false);
      const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setOpen(false);
        }, 800);
      };
      return <><Button type="primary" onClick={() => setOpen(true)}>异步提交</Button><Modal title="提交审批" open={open} confirmLoading={loading} onOk={handleOk} onCancel={() => setOpen(false)}>正在提交审批信息。</Modal></>;
    })()}`,
    },
    {
      title: '自定义底部',
      description: '复杂流程可通过 footer 自定义操作顺序和按钮文案。',
      imports: ['Button', 'Modal', 'Space'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button onClick={() => setOpen(true)}>处理审批</Button><Modal title="审批处理" open={open} onCancel={() => setOpen(false)} footer={<Space><Button onClick={() => setOpen(false)}>取消</Button><Button>保存草稿</Button><Button type="primary" onClick={() => setOpen(false)}>提交</Button></Space>}>请确认审批意见后提交。</Modal></>;
    })()}`,
    },
    {
      title: '表单承载',
      imports: ['Button', 'Form', 'Input', 'Modal'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button onClick={() => setOpen(true)}>填写意见</Button><Modal title="审批意见" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}><Form layout="vertical"><Form.Item label="意见" required><Input.TextArea rows={3} placeholder="请输入审批意见" /></Form.Item></Form></Modal></>;
    })()}`,
    },
  ],
  Drawer: [
    {
      title: '右侧抽屉',
      description: '在不离开当前页面的情况下查看详情。',
      imports: ['Button', 'Drawer'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button onClick={() => setOpen(true)}>查看客户详情</Button><Drawer title="客户详情" open={open} onClose={() => setOpen(false)}>客户资产和持仓信息。</Drawer></>;
    })()}`,
    },
    {
      title: '不同方向',
      imports: ['Button', 'Drawer', 'Space'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [placement, setPlacement] = useState('right');
      const [open, setOpen] = useState(false);
      return <Space><Button onClick={() => { setPlacement('right'); setOpen(true); }}>右侧</Button><Button onClick={() => { setPlacement('bottom'); setOpen(true); }}>底部</Button><Drawer placement={placement} title="抽屉" open={open} onClose={() => setOpen(false)}>抽屉内容</Drawer></Space>;
    })()}`,
    },
    {
      title: '不同尺寸',
      description: '复杂编辑场景可调整 width 承载更多内容。',
      imports: ['Button', 'Drawer'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button type="primary" onClick={() => setOpen(true)}>编辑资料</Button><Drawer title="编辑资料" open={open} width={560} extra={<Button type="primary">保存</Button>} onClose={() => setOpen(false)}>客户资料编辑区。</Drawer></>;
    })()}`,
    },
    {
      title: '表单抽屉',
      imports: ['Button', 'Drawer', 'Form', 'Input'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button onClick={() => setOpen(true)}>新建客户</Button><Drawer title="新建客户" open={open} width={520} onClose={() => setOpen(false)} extra={<Button type="primary">保存</Button>}><Form layout="vertical"><Form.Item label="客户名称" required><Input placeholder="请输入客户名称" /></Form.Item><Form.Item label="备注"><Input.TextArea rows={3} /></Form.Item></Form></Drawer></>;
    })()}`,
    },
    {
      title: '无遮罩',
      description: '需要保留页面可见上下文时，可关闭 mask。',
      imports: ['Button', 'Drawer'],
      extraImports: `import { useState } from 'react';`,
      code: `{(() => {
      const [open, setOpen] = useState(false);
      return <><Button onClick={() => setOpen(true)}>打开无遮罩抽屉</Button><Drawer title="客户备注" mask={false} open={open} onClose={() => setOpen(false)}>页面内容仍保持可见。</Drawer></>;
    })()}`,
    },
  ],
  Popconfirm: [
    {
      title: '基础确认',
      imports: ['Button', 'Popconfirm'],
      code: `<Popconfirm title="确认删除该记录？" description="删除后无法恢复。"><Button danger>删除</Button></Popconfirm>`,
    },
    {
      title: '自定义按钮',
      imports: ['Button', 'Popconfirm'],
      code: `<Popconfirm title="确认停用该账户？" okText="确认停用" cancelText="取消"><Button>停用账户</Button></Popconfirm>`,
    },
    {
      title: '不同方向',
      imports: ['Button', 'Popconfirm', 'Space'],
      code: `<Space><Popconfirm placement="top" title="顶部确认"><Button>Top</Button></Popconfirm><Popconfirm placement="right" title="右侧确认"><Button>Right</Button></Popconfirm></Space>`,
    },
  ],
  Progress: [
    {
      title: '线形进度',
      imports: ['Progress'],
      code: `<Progress percent={68} />`,
    },
    {
      title: '圆形进度',
      imports: ['Progress', 'Space'],
      code: `<Space><Progress type="circle" percent={75} size={80} /><Progress type="dashboard" percent={42} size={80} status="exception" /></Space>`,
    },
    {
      title: '小尺寸',
      imports: ['Progress'],
      code: `<Progress size="small" percent={36} />`,
    },
    {
      title: '状态',
      imports: ['Progress', 'Space'],
      code: `<Space direction="vertical" style={{ width: '100%' }}><Progress percent={100} status="success" /><Progress percent={70} status="exception" /></Space>`,
    },
  ],
  Result: [
    {
      title: '成功',
      imports: ['Button', 'Result'],
      code: `<Result status="success" title="审批提交成功" subTitle="审批编号：AP-20260001" extra={<Button type="primary">返回列表</Button>} />`,
    },
    {
      title: '警告',
      imports: ['Button', 'Result'],
      code: `<Result status="warning" title="当前操作需要进一步确认" extra={<Button>重新检查</Button>} />`,
    },
    {
      title: '错误',
      imports: ['Button', 'Result'],
      code: `<Result status="error" title="提交失败" subTitle="请检查必填信息后重试。" extra={<Button type="primary">重新提交</Button>} />`,
    },
  ],
  Spin: [
    {
      title: '基础加载',
      imports: ['Spin'],
      code: `<Spin />`,
    },
    {
      title: '不同尺寸',
      imports: ['Space', 'Spin'],
      code: `<Space><Spin size="small" /><Spin /><Spin size="large" /></Space>`,
    },
    {
      title: '容器加载',
      imports: ['Spin'],
      code: `<Spin spinning tip="正在加载客户数据..."><div style={{ padding: 32, background: '#f4f6f8' }}>客户详情内容</div></Spin>`,
    },
  ],
};
