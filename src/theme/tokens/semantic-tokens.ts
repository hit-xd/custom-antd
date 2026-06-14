/**
 * W+ semantic tokens.
 * Business meaning layered on primitive values.
 */
import {
  BRAND_1,
  BRAND_5,
  BRAND_6,
  BRAND_7,
} from './primitive-tokens';

export const COLOR_PRIMARY = BRAND_6;
/** 主色浅 1（hover / 填充背景） */
export const COLOR_PRIMARY_HOVER = BRAND_5;
/** 主色深 1（active / 深色强调） */
export const COLOR_PRIMARY_ACTIVE = BRAND_7;
/** 按钮主色 */
export const BUTTON_COLOR_PRIMARY = '#9B7235';
/** 按钮主色 hover */
export const BUTTON_COLOR_PRIMARY_HOVER = '#B8873B';
/** 按钮主色 active */
export const BUTTON_COLOR_PRIMARY_ACTIVE = '#7F5A29';
/** 品牌描边按钮色 */
export const BUTTON_COLOR_SECONDARY_GOLD = '#C5A267';
/** 按钮链接色 */
export const BUTTON_COLOR_LINK = '#1874FF';
/** 按钮链接色 hover */
export const BUTTON_COLOR_LINK_HOVER = '#4096FF';
/** 按钮链接色 active */
export const BUTTON_COLOR_LINK_ACTIVE = '#0958D9';
/** 按钮危险色 hover */
export const BUTTON_COLOR_DANGER_HOVER = '#FF7875';
/** 按钮危险色 active */
export const BUTTON_COLOR_DANGER_ACTIVE = '#D9363E';

// ─── 标签页 / 分段 / 单选筛选 ────────────────────────────────────────────────
export const TABS_ACTIVE_COLOR = BUTTON_COLOR_PRIMARY;
export const TABS_ACTIVE_BG = COLOR_PRIMARY;
export const TABS_ACTIVE_TEXT_INVERSE = '#FFFFFF';
export const TABS_TEXT_COLOR = 'rgba(0, 0, 0, 0.65)';
export const TABS_TEXT_STRONG = 'rgba(0, 0, 0, 0.85)';
export const TABS_TEXT_SECONDARY = 'rgba(0, 0, 0, 0.45)';
export const TABS_TEXT_DISABLED = 'rgba(0, 0, 0, 0.25)';
export const TABS_BORDER_COLOR = 'rgba(0, 0, 0, 0.15)';
export const TABS_BG_LIGHT = '#F4F6F8';
export const TABS_SEGMENTED_BG = 'rgba(232, 234, 242, 0.6)';

// ─── 步骤条 / 流程导航 ────────────────────────────────────────────────────────
export const STEPS_PRIMARY = BUTTON_COLOR_PRIMARY;
export const STEPS_BRAND_LINE = COLOR_PRIMARY;
export const STEPS_SUCCESS = '#00C078';
export const STEPS_ERROR = '#FF4D4F';
export const STEPS_TEXT_STRONG = 'rgba(0, 0, 0, 0.85)';
export const STEPS_TEXT = 'rgba(0, 0, 0, 0.65)';
export const STEPS_TEXT_SECONDARY = 'rgba(0, 0, 0, 0.45)';
export const STEPS_TEXT_DISABLED = 'rgba(0, 0, 0, 0.25)';
export const STEPS_LINE = 'rgba(0, 0, 0, 0.12)';
export const STEPS_BORDER = 'rgba(0, 0, 0, 0.15)';
export const STEPS_BG = '#FFFFFF';

/** 信息色：选中/聚焦蓝 */
export const COLOR_INFO = '#1874FF';
/** 成功色 */
export const COLOR_SUCCESS = '#00C078';
/** 警告色 */
export const COLOR_WARNING = '#FFA000';
/** 危险/错误色 */
export const COLOR_ERROR = '#FF4D4F';

// ─── 文字色系 ────────────────────────────────────────────────────────────────
/** 标题/重点文字色 */
export const COLOR_TEXT_HEADING = 'rgba(0, 0, 0, 0.85)';
/** 正文/主要文字色 */
export const COLOR_TEXT = 'rgba(0, 0, 0, 0.65)';
/** 辅助文字色 */
export const COLOR_TEXT_SECONDARY = 'rgba(0, 0, 0, 0.45)';
/** 第三级文字色 */
export const COLOR_TEXT_TERTIARY = COLOR_TEXT_SECONDARY;
/** 禁用文字色 */
export const COLOR_TEXT_DISABLED = 'rgba(0, 0, 0, 0.25)';

// ─── 背景与边框 ──────────────────────────────────────────────────────────────
/** 页面底色 */
export const COLOR_BG_BASE = '#E8EAF2';
/** 布局底色 */
export const COLOR_BG_LAYOUT = COLOR_BG_BASE;
/** 模块底色 */
export const COLOR_BG_MODULE = '#F4F6F8';
/** 卡片背景 */
export const COLOR_BG_CONTAINER = '#FFFFFF';
/** 浮层背景 */
export const COLOR_BG_ELEVATED = '#FFFFFF';
/** 基础容器描边 */
export const COLOR_BORDER = 'rgba(0, 0, 0, 0.15)';
/** 分割线 */
export const COLOR_SPLIT = 'rgba(0, 0, 0, 0.12)';
/** 弱边框（卡片分隔） */
export const COLOR_BORDER_SECONDARY = COLOR_SPLIT;
/** 失效/禁用背景 */
export const COLOR_BG_DISABLED = COLOR_BG_MODULE;
/** 表头背景 */
export const COLOR_TABLE_HEADER_BG = '#F1F2F7';
/** 遮罩 */
export const COLOR_BG_MASK = 'rgba(0, 0, 0, 0.3)';
/** Tooltip / 文字提示深色背景 */
export const COLOR_BG_SPOTLIGHT = 'rgba(0, 0, 0, 0.75)';
/** 成功容器背景 */
export const COLOR_BG_SUCCESS = '#EBFAF5';
/** 错误容器背景 */
export const COLOR_BG_ERROR = '#FFF1F0';
/** 提示容器背景 */
export const COLOR_BG_INFO = '#E6F7FF';
/** 警告容器背景 */
export const COLOR_BG_WARNING = '#FFFBE6';
/** 品牌浅金容器背景 */
export const COLOR_BG_BRAND = BRAND_1;
/** 信息容器边框 */
export const COLOR_INFO_BORDER = '#63A1FF';
/** 成功容器边框 */
export const COLOR_SUCCESS_BORDER = '#52D4A3';
/** 警告容器边框 */
export const COLOR_WARNING_BORDER = '#FFBF52';
/** 错误容器边框 */
export const COLOR_ERROR_BORDER = '#FFA39E';
/** 徽标红 */
export const COLOR_BADGE_RED = '#FC4B4D';

// ─── 页头 ────────────────────────────────────────────────────────────────────
export const PAGE_HEADER_BG = COLOR_BG_CONTAINER;
export const PAGE_HEADER_TITLE = COLOR_TEXT_HEADING;
export const PAGE_HEADER_TEXT = COLOR_TEXT;
export const PAGE_HEADER_TEXT_SECONDARY = COLOR_TEXT_SECONDARY;
export const PAGE_HEADER_TEXT_DISABLED = COLOR_TEXT_DISABLED;
export const PAGE_HEADER_BORDER = COLOR_BORDER;
export const PAGE_HEADER_SPLIT = COLOR_SPLIT;
export const PAGE_HEADER_PRIMARY = BUTTON_COLOR_PRIMARY;
export const PAGE_HEADER_WHITE = '#FFFFFF';

// ─── 锚点 ────────────────────────────────────────────────────────────────────
export const ANCHOR_BG = COLOR_BG_CONTAINER;
export const ANCHOR_LINE = COLOR_BG_MODULE;
export const ANCHOR_ACTIVE = BUTTON_COLOR_PRIMARY;
export const ANCHOR_TEXT = COLOR_TEXT_HEADING;
export const ANCHOR_TEXT_DISABLED = COLOR_TEXT_DISABLED;
export const ANCHOR_DOT_INNER = COLOR_BG_CONTAINER;

// ─── 数据色与渐变 ────────────────────────────────────────────────────────────

export interface ContainerToken {
  key: string;
  label: string;
  background: string;
  border: string;
  usage: string;
}

export const CONTAINER_TOKENS: ContainerToken[] = [
  {
    key: 'base',
    label: '基础',
    background: COLOR_BG_CONTAINER,
    border: COLOR_BORDER,
    usage: '常规白底容器，有浅描边。',
  },
  {
    key: 'base-plain',
    label: '基础-无边框',
    background: COLOR_BG_CONTAINER,
    border: 'none',
    usage: '无需强调边界的白底容器。',
  },
  {
    key: 'base-dashed',
    label: '基础-虚线',
    background: COLOR_BG_CONTAINER,
    border: `${COLOR_BORDER} dashed`,
    usage: '占位、上传、可添加区域。',
  },
  {
    key: 'disabled',
    label: '失效',
    background: COLOR_BG_DISABLED,
    border: COLOR_BORDER,
    usage: '禁用、失效、不可编辑状态。',
  },
  {
    key: 'selected',
    label: '选中',
    background: COLOR_BG_CONTAINER,
    border: COLOR_INFO,
    usage: '选中态、聚焦态。',
  },
  {
    key: 'brand',
    label: '品牌色（金色）边框',
    background: COLOR_BG_CONTAINER,
    border: BUTTON_COLOR_SECONDARY_GOLD,
    usage: '品牌强调、高端业务场景。',
  },
  {
    key: 'danger',
    label: '危险',
    background: COLOR_BG_CONTAINER,
    border: COLOR_ERROR,
    usage: '高风险、删除、危险操作提示。',
  },
  {
    key: 'success',
    label: '成功',
    background: '#EBFAF5',
    border: '#52D4A3',
    usage: '成功状态容器。',
  },
  {
    key: 'error',
    label: '错误',
    background: '#FFF1F0',
    border: '#FFA39E',
    usage: '错误状态容器。',
  },
  {
    key: 'info',
    label: '提示',
    background: '#E6F7FF',
    border: '#63A1FF',
    usage: '信息提示、说明状态容器。',
  },
  {
    key: 'warning',
    label: '警告',
    background: '#FFFBE6',
    border: '#FFBF52',
    usage: '警告、需关注状态容器。',
  },
  {
    key: 'badge',
    label: '徽标',
    background: '#FC4B4D',
    border: 'none',
    usage: '红色强调标记、小型状态标识。',
  },
];

export const privateBankingSemanticTokens = {
  colorPrimary: COLOR_PRIMARY,
  colorPrimaryHover: COLOR_PRIMARY_HOVER,
  colorPrimaryActive: COLOR_PRIMARY_ACTIVE,
  colorActionPrimary: BUTTON_COLOR_PRIMARY,
  colorActionLink: BUTTON_COLOR_LINK,
  colorActionDanger: COLOR_ERROR,
  colorInfo: COLOR_INFO,
  colorSuccess: COLOR_SUCCESS,
  colorWarning: COLOR_WARNING,
  colorError: COLOR_ERROR,
  colorSurfaceDefault: COLOR_BG_CONTAINER,
  colorSurfaceElevated: COLOR_BG_ELEVATED,
  colorSurfacePage: COLOR_BG_BASE,
  colorSurfaceModule: COLOR_BG_MODULE,
  colorBgMask: COLOR_BG_MASK,
  colorBgSpotlight: COLOR_BG_SPOTLIGHT,
  colorTextHeading: COLOR_TEXT_HEADING,
  colorTextBody: COLOR_TEXT,
  colorTextSecondary: COLOR_TEXT_SECONDARY,
  colorTextDisabled: COLOR_TEXT_DISABLED,
  colorBorder: COLOR_BORDER,
  colorSplit: COLOR_SPLIT,
  containers: CONTAINER_TOKENS,
} as const;
