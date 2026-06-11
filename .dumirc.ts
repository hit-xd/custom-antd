import { defineConfig } from 'dumi';
import path from 'node:path';

export default defineConfig({
  outputPath: 'docs-dist',
  alias: {
    'pb-antd': path.resolve(process.cwd(), 'src/index.ts'),
    'pb-antd/reset.css': path.resolve(process.cwd(), 'src/reset.css'),
  },
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'src/components',
      },
      {
        type: 'business',
        dir: 'src/business',
      },
    ],
  },
  themeConfig: {
    name: 'pb-antd',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '主题', link: '/theme' },
      { title: '组件', link: '/components/config-provider' },
    ],
    sidebar: {
      '/components': [
        {
          title: '基础能力',
          children: [
            { title: 'ConfigProvider', link: '/components/config-provider' },
            { title: 'Button 按钮', link: '/components/button' },
            { title: 'Form 表单', link: '/components/form' },
            { title: 'Table 表格', link: '/components/table' },
            { title: 'Data Entry 数据录入', link: '/components/data-entry' },
            { title: 'Feedback 反馈', link: '/components/feedback' },
            { title: 'Layout 展示布局', link: '/components/layout-display' },
            { title: '自动生成组件', link: '/generated/components' },
          ],
        },
        {
          title: '设计规范',
          children: [
            { title: '设计 Token', link: '/generated/design-tokens' },
            { title: '解析报告', link: '/generated/spec-report' },
          ],
        },
      ],
    },
    footer: '基于 Ant Design v5 的企业级 UI 封装',
  },
});
