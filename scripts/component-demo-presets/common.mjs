const fallbackVariantsByCategory = {
  基础能力: ['基础展示', '组合使用', '状态展示'],
  数据录入: ['基础输入', '组合输入', '表单组合'],
  数据展示: ['基础展示', '组合展示', '容器展示'],
  反馈: ['基础反馈', '状态反馈', '组合反馈'],
  导航: ['基础导航', '组合导航', '页面导航'],
  布局: ['基础布局', '组合布局', '响应式布局'],
  通用: ['基础展示', '组合配置', '状态展示'],
  其他: ['基础展示', '组合配置', '容器展示'],
};

const getVariants = (doc) =>
  doc.variants?.length
    ? doc.variants
    : (fallbackVariantsByCategory[doc.category] ?? fallbackVariantsByCategory.其他);

const getFallbackTitle = (doc, index) => {
  const variants = getVariants(doc);
  if (index === 0) return variants[0];
  if (index === 1) return variants.slice(1, 4).join(' / ') || variants[0];
  return (
    variants.slice(4, 7).join(' / ') || fallbackVariantsByCategory[doc.category]?.[2] || '组合展示'
  );
};

const defaultImports = (doc) => doc.imports ?? [doc.name, 'Space'];
const unique = (values) => [...new Set(values.filter(Boolean))];
const mergeImports = (...groups) => unique(groups.flat());

const baseDemo = (doc) => ({
  title: getFallbackTitle(doc, 0),
  description: `展示 ${doc.title} 的默认样式和企业主题效果。`,
  imports: defaultImports(doc),
  extraImports: doc.extraImports,
  code: doc.basic,
});

const advancedDemo = (doc) => ({
  title: getFallbackTitle(doc, 1),
  description: `展示 ${doc.title} 的常用配置、状态或组合形态。`,
  imports: defaultImports(doc),
  extraImports: doc.extraImports,
  code: doc.advanced,
});

const dataEntryDemo = (doc) => ({
  title: getFallbackTitle(doc, 2),
  description: '放入 Form 中展示字段标签、校验信息和提交按钮的组合方式。',
  imports: mergeImports(defaultImports(doc), ['Button', 'Form']),
  extraImports: doc.extraImports,
  code: `<Form layout="inline">
      <Form.Item label="查询条件" validateStatus="success">
        ${doc.basic}
      </Form.Item>
      <Form.Item>
        <Button type="primary">查询</Button>
      </Form.Item>
    </Form>`,
});

const dataDisplayDemo = (doc) => ({
  title: getFallbackTitle(doc, 2),
  description: '放入内容容器中观察与标题、辅助说明和周边内容的组合效果。',
  imports: mergeImports(defaultImports(doc), ['Card', 'Typography']),
  extraImports: doc.extraImports,
  code: `<Card title="信息展示" style={{ maxWidth: 560 }}>
      ${doc.basic}
      <Typography.Paragraph type="secondary" style={{ marginTop: 12, marginBottom: 0 }}>
        用于展示客户、产品、审批等业务信息。
      </Typography.Paragraph>
    </Card>`,
});

const feedbackDemo = (doc) => ({
  title: getFallbackTitle(doc, 2),
  description: '多个反馈状态组合展示，便于对比信息层级和视觉强度。',
  imports: mergeImports(defaultImports(doc), ['Space']),
  extraImports: doc.extraImports,
  code: `<Space direction="vertical" style={{ width: '100%' }}>
      ${doc.basic}
      ${doc.advanced}
    </Space>`,
});

const navigationDemo = (doc) => ({
  title: getFallbackTitle(doc, 2),
  description: '在页面导航区域中使用，观察与内容标题和操作入口的组合效果。',
  imports: mergeImports(defaultImports(doc), ['Card']),
  extraImports: doc.extraImports,
  code: `<Card title="页面导航" style={{ maxWidth: 640 }}>
      ${doc.basic}
    </Card>`,
});

const layoutDemo = (doc) => ({
  title: getFallbackTitle(doc, 2),
  description: '展示布局组件承载不同内容块时的排列和对齐效果。',
  imports: defaultImports(doc),
  extraImports: doc.extraImports,
  code: `<div style={{ padding: 16, background: '#f4f6f8' }}>
      ${doc.basic}
    </div>`,
});

const byCategory = {
  数据录入: dataEntryDemo,
  数据展示: dataDisplayDemo,
  反馈: feedbackDemo,
  导航: navigationDemo,
  布局: layoutDemo,
  基础能力: dataDisplayDemo,
  通用: dataDisplayDemo,
  其他: dataDisplayDemo,
};

export const createCommonDemos = (doc) => {
  const demos = [baseDemo(doc), advancedDemo(doc)];
  const thirdDemo = byCategory[doc.category]?.(doc) ?? dataDisplayDemo(doc);

  if (thirdDemo.code !== demos[1].code) {
    demos.push(thirdDemo);
  }

  return demos;
};
