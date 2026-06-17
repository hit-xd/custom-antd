import { defineConfig } from 'dumi';
import path from 'node:path';
import { ComponentSidebar } from './dumi.sidebar';

export default defineConfig({
  outputPath: 'docs-dist',
  alias: {
    'privatebank-design': path.resolve(process.cwd(), 'src'),
    'privatebank-design/reset.css': path.resolve(process.cwd(), 'src/reset.css'),
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
    name: 'privatebank-design',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '主题', link: '/theme' },
      { title: '基础组件', link: '/components/config-provider' },
      { title: '业务组件', link: '/business/error-block' },
      { title: '设计规范', link: '/generated/components' },
    ],
    sidebar: {
      '/components': [
        {
          title: '全局配置',
          children: [{ title: 'ConfigProvider', link: '/components/config-provider' }],
        },
        ...ComponentSidebar,
      ],
      '/business': [
        {
          title: '业务沉淀',
          children: [
            { title: 'ErrorBlock 空状态', link: '/business/error-block' },
            { title: 'Status 状态', link: '/business/status' },
            { title: 'DetailPageHeader 详情页头', link: '/business/detail-page-header' },
            {
              title: 'ApprovalProgressSteps 审批进度',
              link: '/business/approval-progress-steps',
            },
          ],
        },
      ],
      '/generated': [
        {
          title: '设计规范',
          children: [
            { title: '组件总览', link: '/generated/components' },
            { title: '设计 Token', link: '/generated/design-tokens' },
            { title: '解析报告', link: '/generated/spec-report' },
          ],
        },
      ],
    },
    footer: '基于 Ant Design v5 的企业级 UI 封装',
  },
});
