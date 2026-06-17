/** Ant Design global seed/map tokens for W+. */
import {
  BORDER_RADIUS,
  BORDER_RADIUS_LG,
  BORDER_RADIUS_XS,
  BOX_SHADOW_DEFAULT,
  BOX_SHADOW_MODAL,
  BRAND_1,
  BRAND_2,
  BRAND_3,
  BRAND_5,
  FONT_FAMILY,
  FONT_SIZE_BASE,
  FONT_SIZE_LG,
  FONT_SIZE_SM,
  wplusSpacing,
} from './primitive-tokens';
import {
  COLOR_BG_BASE,
  COLOR_BG_CONTAINER,
  COLOR_BG_ELEVATED,
  COLOR_BG_LAYOUT,
  COLOR_BG_MASK,
  COLOR_BG_MODULE,
  COLOR_BORDER,
  COLOR_BORDER_SECONDARY,
  COLOR_ERROR,
  COLOR_INFO,
  COLOR_PRIMARY,
  COLOR_PRIMARY_ACTIVE,
  COLOR_PRIMARY_HOVER,
  COLOR_SPLIT,
  COLOR_SUCCESS,
  COLOR_TABLE_HEADER_BG,
  COLOR_TEXT,
  COLOR_TEXT_DISABLED,
  COLOR_TEXT_HEADING,
  COLOR_TEXT_SECONDARY,
  COLOR_WARNING,
} from './semantic-tokens';

export const antdTokens = {
  // 色系
  colorPrimary: COLOR_PRIMARY,
  colorPrimaryHover: COLOR_PRIMARY_HOVER,
  colorPrimaryActive: COLOR_PRIMARY_ACTIVE,
  colorPrimaryBg: BRAND_1,
  colorPrimaryBgHover: BRAND_2,
  colorPrimaryBorder: BRAND_3,
  colorPrimaryBorderHover: BRAND_5,
  colorInfo: COLOR_INFO,
  colorLink: COLOR_INFO,
  colorSuccess: COLOR_SUCCESS,
  colorWarning: COLOR_WARNING,
  colorError: COLOR_ERROR,

  // 文字
  colorTextHeading: COLOR_TEXT_HEADING,
  colorText: COLOR_TEXT,
  colorTextSecondary: COLOR_TEXT_SECONDARY,
  colorTextDisabled: COLOR_TEXT_DISABLED,

  // 背景与边框
  colorBgBase: COLOR_BG_BASE,
  colorBgLayout: COLOR_BG_LAYOUT,
  colorBgContainer: COLOR_BG_CONTAINER,
  colorBgElevated: COLOR_BG_ELEVATED,
  colorBgMask: COLOR_BG_MASK,
  colorBorder: COLOR_BORDER,
  colorBorderSecondary: COLOR_BORDER_SECONDARY,
  colorSplit: COLOR_SPLIT,
  colorFillQuaternary: COLOR_BG_MODULE,
  colorFillSecondary: COLOR_TABLE_HEADER_BG,

  // 圆角
  borderRadius: BORDER_RADIUS,
  borderRadiusSM: BORDER_RADIUS_XS,
  borderRadiusXS: BORDER_RADIUS_XS,
  borderRadiusLG: BORDER_RADIUS_LG,

  // 字体
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE_BASE,
  fontSizeSM: FONT_SIZE_SM,
  fontSizeLG: FONT_SIZE_LG,
  controlHeight: wplusSpacing.searchControlHeight,
  controlHeightSM: 24,
  controlHeightLG: 40,

  // 阴影（自定义属性，用 boxShadow 系列）
  boxShadow: BOX_SHADOW_DEFAULT,
  boxShadowSecondary: BOX_SHADOW_MODAL,
} as const;
