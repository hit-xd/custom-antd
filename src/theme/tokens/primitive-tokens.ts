/**
 * W+ primitive tokens.
 * Base colors, typography, radii, shadows, spacing, and design-system token lists.
 */
export const BRAND_1 = '#FFFCF0';
export const BRAND_2 = '#F7F4E9';
export const BRAND_3 = '#DFCFB4';
export const BRAND_4 = '#DED3BA';
export const BRAND_5 = '#D1BB8E';
export const BRAND_6 = '#C5A267';
export const BRAND_7 = '#B0915C';
export const BRAND_8 = '#785A32';
export const BRAND_9 = '#523A1E';
export const BRAND_10 = '#2B1D10';

export const BRAND_COLORS = {
  brand1: BRAND_1,
  brand2: BRAND_2,
  brand3: BRAND_3,
  brand4: BRAND_4,
  brand5: BRAND_5,
  brand6: BRAND_6,
  brand7: BRAND_7,
  brand8: BRAND_8,
  brand9: BRAND_9,
  brand10: BRAND_10,
} as const;

/** 主色：私行金 */

export const DATA_COLORS = [
  'rgba(91, 143, 249, 0.85)',
  'rgba(97, 221, 170, 0.85)',
  'rgba(101, 120, 155, 0.85)',
  'rgba(246, 189, 22, 0.85)',
  'rgba(114, 98, 253, 0.85)',
  'rgba(120, 211, 248, 0.85)',
  'rgba(150, 97, 188, 0.85)',
  'rgba(246, 144, 61, 0.85)',
  'rgba(0, 134, 133, 0.85)',
  'rgba(240, 139, 180, 0.85)',
] as const;

export const GRADIENTS = {
  gold: 'linear-gradient(135deg, #E9BC89 0%, #FFCD40 100%)',
  green: 'linear-gradient(135deg, #3EF17D 0%, #A5FFB6 100%)',
  cyan: 'linear-gradient(135deg, #00AAFF 0%, #38DCF7 100%)',
  blue: 'linear-gradient(135deg, #5A72E6 0%, #73AFFF 100%)',
  orange: 'linear-gradient(135deg, #FF8D00 0%, #FFB367 100%)',
} as const;

// ─── 深色导航背景（顶部 Header / 侧栏深色） ────────────────────────────────
/** 顶部导航起始色 */
export const COLOR_HEADER_START = '#050816';
/** 顶部导航结束色 */
export const COLOR_HEADER_END = '#050816';

// ─── 尺寸与形状 ──────────────────────────────────────────────────────────────
/** 基础圆角 */
export const BORDER_RADIUS = 4;
/** 微圆角 */
export const BORDER_RADIUS_XS = 2;
/** 按钮统一圆角 */
export const BUTTON_BORDER_RADIUS = 2;
/** 输入类控件统一圆角 */
export const CONTROL_BORDER_RADIUS = 4;
/** 标签统一圆角 */
export const TAG_BORDER_RADIUS = 2;
/** 选择控件统一圆角 */
export const CHOICE_CONTROL_BORDER_RADIUS = 4;
/** 卡片统一圆角 */
export const CARD_BORDER_RADIUS = 6;
/** 数据展示与反馈统一圆角 */
export const SURFACE_BORDER_RADIUS = 6;
/** 弹窗与承载型容器圆角 */
export const LAYER_BORDER_RADIUS = 8;
/** 大圆角（承载型容器） */
export const BORDER_RADIUS_LG = 8;
/** 超大圆角（标签、按钮 pill） */
export const BORDER_RADIUS_XL = 999;

// ─── 字体 ────────────────────────────────────────────────────────────────────
export const FONT_FAMILY =
  '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif';
export const FONT_FAMILY_NUMERIC =
  '"CMBSans font", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif';
export const FONT_FAMILY_CODE = FONT_FAMILY;
export const FONT_SIZE_NUMERIC_XXL = 40;
export const FONT_SIZE_NUMERIC_XL = 32;
export const FONT_SIZE_NUMERIC_LG = 28;
export const FONT_SIZE_DISPLAY = 24;
export const FONT_SIZE_XXL = 24;
export const FONT_SIZE_XL = 20;
export const FONT_SIZE_NAV = 18;
export const FONT_SIZE_BASE = 14;
export const FONT_SIZE_SM = 12;
export const FONT_SIZE_LG = 16;
export const BUTTON_FONT_SIZE = 14;
export const ICON_SIZE_XL = 24;
export const ICON_SIZE_LG = 20;
export const ICON_SIZE_MD = 16;
export const ICON_SIZE_SM = 12;
export const FONT_WEIGHT_REGULAR = 400;
export const FONT_WEIGHT_MEDIUM = 500;
export const FONT_WEIGHT_SEMIBOLD = 600;
export const FONT_WEIGHT_BOLD = 700;

export interface TypographyToken {
  key: string;
  label: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: 400 | 500 | 600 | 700;
  iconSize: number;
  fontFamily?: string;
  sampleText?: string;
  usage: string;
}

export const TYPOGRAPHY_TOKENS: TypographyToken[] = [
  {
    key: 'numeric-40',
    label: '文本-数字 40',
    fontSize: FONT_SIZE_NUMERIC_XXL,
    lineHeight: 48,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    iconSize: ICON_SIZE_XL,
    fontFamily: FONT_FAMILY_NUMERIC,
    sampleText: '98,560',
    usage: '凸显数字 / 强调数字。',
  },
  {
    key: 'numeric-32',
    label: '文本-数字 32',
    fontSize: FONT_SIZE_NUMERIC_XL,
    lineHeight: 40,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    iconSize: ICON_SIZE_XL,
    fontFamily: FONT_FAMILY_NUMERIC,
    sampleText: '3,286.00',
    usage: '凸显数字 / 强调数字。',
  },
  {
    key: 'numeric-28',
    label: '文本-数字 28',
    fontSize: FONT_SIZE_NUMERIC_LG,
    lineHeight: 36,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    iconSize: ICON_SIZE_XL,
    fontFamily: FONT_FAMILY_NUMERIC,
    sampleText: '1,942',
    usage: '凸显数字 / 强调数字。',
  },
  {
    key: 'page-title',
    label: '文本-大标题',
    fontSize: FONT_SIZE_XXL,
    lineHeight: 32,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    iconSize: ICON_SIZE_LG,
    usage: '页面标题 / 模块标题 / 强调数字等。',
  },
  {
    key: 'section-title',
    label: '文本-标题 20',
    fontSize: FONT_SIZE_XL,
    lineHeight: 28,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    iconSize: ICON_SIZE_MD,
    usage: '页面标题 / 强调内容 / 模块标题等。',
  },
  {
    key: 'nav-title',
    label: '文本-导航栏标题 18',
    fontSize: FONT_SIZE_NAV,
    lineHeight: 26,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    iconSize: ICON_SIZE_MD,
    usage: '导航栏标题等。',
  },
  {
    key: 'module-title',
    label: 'H3 模块标题',
    fontSize: FONT_SIZE_LG,
    lineHeight: 24,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    iconSize: ICON_SIZE_MD,
    usage: '对话框标题 / 模块标题 / 导航栏标题等。',
  },
  {
    key: 'body',
    label: 'Body 正文',
    fontSize: FONT_SIZE_BASE,
    lineHeight: 22,
    fontWeight: FONT_WEIGHT_REGULAR,
    iconSize: ICON_SIZE_MD,
    usage: '正文文字 / 按钮文字 / 导航栏文字等。',
  },
  {
    key: 'meta',
    label: '文本-说明',
    fontSize: FONT_SIZE_SM,
    lineHeight: 20,
    fontWeight: FONT_WEIGHT_REGULAR,
    iconSize: ICON_SIZE_SM,
    usage: '辅助文字 / 次要的说明文字。',
  },
];

// ─── 阴影 ────────────────────────────────────────────────────────────────────
export const BOX_SHADOW_HOVER =
  '0px 3px 6px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px -2px rgba(0, 0, 0, 0.16), 0px 5px 12px 4px rgba(0, 0, 0, 0.09)';
export const BOX_SHADOW_DEFAULT =
  '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)';
export const BOX_SHADOW_MODAL =
  '0px 12px 48px 16px rgba(0, 0, 0, 0.03), 0px 9px 28px 0px rgba(0, 0, 0, 0.05), 0px 6px 16px -8px rgba(0, 0, 0, 0.08)';
export const BOX_SHADOW_TOOLTIP =
  '0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 3px 7px -4px rgba(0, 0, 0, 0.12)';
export const BOX_SHADOW_CARD = BOX_SHADOW_DEFAULT;
export const BOX_SHADOW_HEADER = '0 12px 36px rgba(15, 31, 53, 0.18)';

export interface ShadowToken {
  key: string;
  label: string;
  boxShadow: string;
  usage: string;
}

export const SHADOW_TOKENS: ShadowToken[] = [
  {
    key: 'hover',
    label: '悬停投影',
    boxShadow: BOX_SHADOW_HOVER,
    usage: '卡片、列表项 hover 状态，强调可点击与浮起感。',
  },
  {
    key: 'default',
    label: '默认投影',
    boxShadow: BOX_SHADOW_DEFAULT,
    usage: '常规卡片、默认浮层容器。',
  },
  {
    key: 'modal',
    label: '模态框投影',
    boxShadow: BOX_SHADOW_MODAL,
    usage: 'Modal、Dialog、需要更强层级的弹窗。',
  },
  {
    key: 'tooltip',
    label: '文字提示投影',
    boxShadow: BOX_SHADOW_TOOLTIP,
    usage: 'Tooltip、文字提示类轻量浮层。',
  },
];

export interface RadiusToken {
  key: string;
  label: string;
  radius: string;
  usage: string;
}

export const RADIUS_TOKENS: RadiusToken[] = [
  { key: 'radius-2', label: '2px', radius: '2px', usage: '小型控件、局部轻微圆角。' },
  { key: 'radius-4', label: '4px', radius: '4px', usage: '表单输入框、按钮、基础控件。' },
  { key: 'radius-6', label: '6px', radius: '6px', usage: '卡片、小容器、信息模块。' },
  { key: 'radius-8', label: '8px', radius: '8px', usage: '大卡片、弹窗、承载型容器。' },
  {
    key: 'radius-round',
    label: '100px',
    radius: '100px',
    usage: '标签、小型操作按钮（如关闭按钮）。',
  },
];

export interface PureBgToken {
  key: string;
  label: string;
  background: string;
  usage: string;
}

export const PURE_BG_TOKENS: PureBgToken[] = [
  {
    key: 'pure-success',
    label: '成功',
    background: '#EBFAF5',
    usage: '成功提示背景、操作完成反馈区域。',
  },
  {
    key: 'pure-error',
    label: '失败',
    background: '#FFF1F0',
    usage: '失败提示背景、操作异常反馈区域。',
  },
  { key: 'pure-gray', label: '灰色', background: '#F4F6F8', usage: '中性背景、失效内容背景。' },
  {
    key: 'pure-warning',
    label: '警告',
    background: '#FFFBE6',
    usage: '警告提示背景、风险提示区域。',
  },
  { key: 'pure-info', label: '提示', background: '#E6F7FF', usage: '普通提示背景、辅助说明区域。' },
  {
    key: 'pure-brand',
    label: '品牌色(金色)',
    background: '#FFFCF0',
    usage: '招行品牌相关内容背景、重点信息区域。',
  },
];

// ─── 间距 ────────────────────────────────────────────────────────────────────

export const wplusSpacing = {
  // base
  space4: 4,
  space8: 8,
  space12: 12,
  space16: 16,
  space20: 20,
  space24: 24,
  space32: 32,

  // layout
  topNavHeight: 64,
  sidebarWidth: 208,
  pageMargin: 20,
  pagePanelPadding: 20,
  demoPagePadding: 32,

  // sidebar
  sideMenuItemHeight: 40,
  sideMenuItemGap: 8,
  sideMenuItemPaddingX: 16,
  sideMenuItemPaddingY: 8,

  // tabs
  tabsContainerPaddingX: 20,
  tabsPrimaryHeight: 48,
  tabsLayerGap: 12,
  tabsToSearchGap: 16,

  // search
  searchPaddingX: 20,
  searchPaddingYCompact: 16,
  searchPaddingYDefault: 20,
  searchLabelControlGap: 8,
  searchFieldColumnGap: 20,
  searchRowGap: 16,
  searchActionGap: 12,
  searchActionButtonWidth: 64,
  searchControlHeight: 32,

  // toolbar
  toolbarGapY: 16,
  buttonGroupGap: 12,
  buttonHeight: 32,
  buttonPaddingXDefault: 16,
  buttonPaddingXWide: 20,

  // table
  tableHeaderHeight: 48,
  tableHeaderHeightCompact: 34,
  tableRowHeightSingle: 56,
  tableRowHeightDouble: 72,
  tableRowHeightCompactSingle: 34,
  tableRowHeightCompactDouble: 54,
  tableCellPaddingX: 20,
  tableCellPaddingY: 16,
  tableStatusDotGap: 4,
  tableActionGap: 12,

  // pagination
  tableToPaginationGap: 20,
  paginationRightGap: 20,
  paginationBottomGap: 20,
  paginationItemGap: 8,
  paginationItemSize: 32,

  // alert
  alertAdjacentGap: 16,
  alertPaddingX: 20,
  alertPaddingY: 8,
  alertIconGap: 8,

  // modal / drawer
  modalPadding: 24,
  modalSectionGap: 20,
  drawerPadding: 24,
  drawerSectionGap: 20,
} as const;

export const privateBankingPrimitiveTokens = {
  colors: BRAND_COLORS,
  dataColors: DATA_COLORS,
  gradients: GRADIENTS,
  radii: {
    borderRadius: BORDER_RADIUS,
    borderRadiusXS: BORDER_RADIUS_XS,
    buttonBorderRadius: BUTTON_BORDER_RADIUS,
    controlBorderRadius: CONTROL_BORDER_RADIUS,
    tagBorderRadius: TAG_BORDER_RADIUS,
    choiceControlBorderRadius: CHOICE_CONTROL_BORDER_RADIUS,
    cardBorderRadius: CARD_BORDER_RADIUS,
    surfaceBorderRadius: SURFACE_BORDER_RADIUS,
    layerBorderRadius: LAYER_BORDER_RADIUS,
    borderRadiusLG: BORDER_RADIUS_LG,
    borderRadiusXL: BORDER_RADIUS_XL,
  },
  fontSizes: {
    numericXxl: FONT_SIZE_NUMERIC_XXL,
    numericXl: FONT_SIZE_NUMERIC_XL,
    numericLg: FONT_SIZE_NUMERIC_LG,
    display: FONT_SIZE_DISPLAY,
    xxl: FONT_SIZE_XXL,
    xl: FONT_SIZE_XL,
    nav: FONT_SIZE_NAV,
    base: FONT_SIZE_BASE,
    sm: FONT_SIZE_SM,
    lg: FONT_SIZE_LG,
  },
  fontWeights: {
    regular: FONT_WEIGHT_REGULAR,
    medium: FONT_WEIGHT_MEDIUM,
    semibold: FONT_WEIGHT_SEMIBOLD,
    bold: FONT_WEIGHT_BOLD,
  },
  iconSizes: {
    xl: ICON_SIZE_XL,
    lg: ICON_SIZE_LG,
    md: ICON_SIZE_MD,
    sm: ICON_SIZE_SM,
  },
  spacing: wplusSpacing,
  typography: TYPOGRAPHY_TOKENS,
  shadows: SHADOW_TOKENS,
  radius: RADIUS_TOKENS,
  pureBackgrounds: PURE_BG_TOKENS,
} as const;
