export const dataEntryPresets = {
  Form: [
    {
      title: '基础表单',
      description: '用于编辑、提交和审批等结构化录入任务。',
      imports: ['Button', 'Form', 'Input', 'Select'],
      code: `<Form layout="vertical" style={{ maxWidth: 420 }}>
      <Form.Item label="客户名称" name="name" rules={[{ required: true }]}>
        <Input placeholder="请输入客户名称" />
      </Form.Item>
      <Form.Item label="客户类型" name="type">
        <Select options={[{ label: '个人客户', value: 'personal' }, { label: '机构客户', value: 'org' }]} />
      </Form.Item>
      <Button type="primary" htmlType="submit">提交</Button>
    </Form>`,
    },
    {
      title: '行内表单',
      description: '查询区使用 inline 布局承载筛选项和操作按钮。',
      imports: ['Button', 'Form', 'Input', 'Select', 'Space'],
      code: `<Form layout="inline">
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
      title: '表单校验',
      description: '通过 rules 配置必填、格式和业务校验反馈。',
      imports: ['Button', 'Form', 'Input'],
      code: `<Form layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item label="联系人" name="owner" rules={[{ required: true, message: '请输入联系人' }]}>
        <Input placeholder="请输入联系人" />
      </Form.Item>
      <Form.Item label="手机号" name="phone" rules={[{ required: true, message: '请输入手机号' }]}>
        <Input placeholder="请输入手机号" />
      </Form.Item>
      <Button type="primary" htmlType="submit">保存</Button>
    </Form>`,
    },
    {
      title: '禁用表单',
      description: '整组字段不可编辑时使用 disabled 统一控制状态。',
      imports: ['Button', 'Form', 'Input', 'Select'],
      code: `<Form disabled layout="vertical" style={{ maxWidth: 420 }}>
      <Form.Item label="客户名称">
        <Input defaultValue="张先生" />
      </Form.Item>
      <Form.Item label="客户类型">
        <Select defaultValue="personal" options={[{ label: '个人客户', value: 'personal' }]} />
      </Form.Item>
      <Button type="primary">提交</Button>
    </Form>`,
    },
    {
      title: '表单布局',
      description: '通过 labelCol 和 wrapperCol 控制标签与控件的比例。',
      imports: ['Button', 'Form', 'Input'],
      code: `<Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} style={{ maxWidth: 520 }}>
      <Form.Item label="客户名称" required>
        <Input placeholder="请输入客户名称" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary">保存</Button>
      </Form.Item>
    </Form>`,
    },
  ],
  Input: [
    {
      title: '基础输入框',
      description: '用于录入单行文本、客户名称和查询关键字。',
      imports: ['Input'],
      code: `<Input placeholder="请输入客户名称" />`,
    },
    {
      title: '前后缀',
      description: '用于在输入内容前后补充语义、单位或操作入口。',
      imports: ['Input', 'Space'],
      code: `<Space direction="vertical" style={{ width: 360 }}>
      <Input addonBefore="https://" placeholder="请输入地址" />
      <Input prefix="￥" suffix="万元" placeholder="请输入资产规模" />
    </Space>`,
    },
    {
      title: '搜索框',
      description: '查询场景使用 Search 承载关键词提交。',
      imports: ['Input'],
      code: `<Input.Search style={{ width: 360 }} placeholder="搜索客户" enterButton />`,
    },
    {
      title: '密码框',
      description: '敏感信息录入使用 Password，保留显示/隐藏能力。',
      imports: ['Input'],
      code: `<Input.Password style={{ width: 360 }} placeholder="请输入密码" />`,
    },
    {
      title: 'Textarea',
      description: '较长说明、审批意见和备注使用多行输入。',
      imports: ['Input'],
      code: `<Input.TextArea rows={3} showCount maxLength={100} placeholder="请输入审批意见" />`,
    },
    {
      title: '状态',
      description: '校验失败或风险提示可通过 status 表达。',
      imports: ['Input', 'Space'],
      code: `<Space direction="vertical" style={{ width: 360 }}>
      <Input status="error" placeholder="错误状态" />
      <Input status="warning" placeholder="警告状态" />
      <Input disabled placeholder="禁用状态" />
    </Space>`,
    },
  ],
  InputNumber: [
    {
      title: '基础数值',
      imports: ['InputNumber'],
      code: `<InputNumber min={0} max={100} defaultValue={20} />`,
    },
    {
      title: '范围限制',
      description: '通过 min 和 max 限制业务数值范围。',
      imports: ['InputNumber'],
      code: `<InputNumber min={0} max={1000000} defaultValue={200000} />`,
    },
    {
      title: '前后缀',
      description: '金额、比例等场景可补充单位。',
      imports: ['InputNumber', 'Space'],
      code: `<Space>
      <InputNumber addonBefore="￥" defaultValue={1280} />
      <InputNumber addonAfter="%" min={0} max={100} defaultValue={36} />
    </Space>`,
    },
    {
      title: '精度与步长',
      imports: ['InputNumber'],
      code: `<InputNumber min={0} max={10} step={0.1} precision={1} defaultValue={3.5} />`,
    },
    {
      title: '状态',
      imports: ['InputNumber', 'Space'],
      code: `<Space>
      <InputNumber status="warning" placeholder="请输入额度" />
      <InputNumber disabled defaultValue={1000} />
    </Space>`,
    },
  ],
  Select: [
    {
      title: '单选',
      description: '从明确选项中选择一个值。',
      imports: ['Select'],
      code: `<Select
      style={{ width: 240 }}
      placeholder="请选择业务类型"
      options={[{ label: '财富管理', value: 'wealth' }, { label: '资产配置', value: 'asset' }]}
    />`,
    },
    {
      title: '多选',
      description: '标签、人员、机构等可使用 multiple 模式。',
      imports: ['Select'],
      code: `<Select
      mode="multiple"
      style={{ width: 320 }}
      placeholder="请选择标签"
      options={[{ label: '重点', value: 'important' }, { label: '跟进中', value: 'following' }]}
    />`,
    },
    {
      title: '可搜索',
      description: '选项较多时开启 showSearch，提高选择效率。',
      imports: ['Select'],
      code: `<Select
      showSearch
      style={{ width: 240 }}
      placeholder="请选择城市"
      options={[{ label: '上海', value: 'shanghai' }, { label: '北京', value: 'beijing' }]}
    />`,
    },
    {
      title: '标签模式',
      description: '允许用户录入并选择自定义标签。',
      imports: ['Select'],
      code: `<Select
      mode="tags"
      style={{ width: 320 }}
      placeholder="请输入标签"
      options={[{ label: '重点客户', value: 'important' }]}
    />`,
    },
    {
      title: '状态',
      imports: ['Select', 'Space'],
      code: `<Space direction="vertical">
      <Select status="error" style={{ width: 240 }} placeholder="错误状态" options={[{ label: '选项', value: 'item' }]} />
      <Select disabled style={{ width: 240 }} placeholder="禁用状态" />
      <Select loading style={{ width: 240 }} placeholder="加载状态" />
    </Space>`,
    },
  ],
  DatePicker: [
    {
      title: '日期',
      imports: ['DatePicker'],
      code: `<DatePicker placeholder="请选择日期" />`,
    },
    {
      title: '日期范围',
      imports: ['DatePicker'],
      code: `<DatePicker.RangePicker />`,
    },
    {
      title: '选择器类型',
      imports: ['DatePicker', 'Space'],
      code: `<Space wrap>
      <DatePicker picker="month" placeholder="选择月份" />
      <DatePicker picker="quarter" placeholder="选择季度" />
      <DatePicker picker="year" placeholder="选择年份" />
    </Space>`,
    },
    {
      title: '格式化',
      imports: ['DatePicker'],
      code: `<DatePicker format="YYYY/MM/DD" placeholder="年/月/日" />`,
    },
    {
      title: '状态',
      imports: ['DatePicker', 'Space'],
      code: `<Space wrap>
      <DatePicker status="error" placeholder="错误状态" />
      <DatePicker disabled placeholder="禁用状态" />
    </Space>`,
    },
  ],
  Upload: [
    {
      title: '按钮上传',
      imports: ['Button', 'Upload'],
      code: `<Upload beforeUpload={() => false}>
      <Button>选择文件</Button>
    </Upload>`,
    },
    {
      title: '拖拽上传',
      imports: ['Upload'],
      code: `<Upload.Dragger beforeUpload={() => false} style={{ width: 420 }}>
      <p>点击或拖拽文件到此区域上传</p>
      <p>支持单个或批量上传</p>
    </Upload.Dragger>`,
    },
    {
      title: '图片列表',
      imports: ['Button', 'Upload'],
      code: `<Upload listType="picture" beforeUpload={() => false}>
      <Button>上传图片</Button>
    </Upload>`,
    },
    {
      title: '默认文件列表',
      imports: ['Button', 'Upload'],
      code: `<Upload
      beforeUpload={() => false}
      defaultFileList={[{ uid: '1', name: '客户资料.pdf', status: 'done' }]}
    >
      <Button>继续上传</Button>
    </Upload>`,
    },
    {
      title: '限制数量',
      imports: ['Button', 'Upload'],
      code: `<Upload maxCount={1} beforeUpload={() => false}>
      <Button>只能上传一个文件</Button>
    </Upload>`,
    },
  ],
};
