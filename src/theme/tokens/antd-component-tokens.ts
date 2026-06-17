/** Ant Design component tokens for W+. */
import {
  BORDER_RADIUS,
  BORDER_RADIUS_XS,
  BRAND_1,
  BUTTON_BORDER_RADIUS,
  BUTTON_FONT_SIZE,
  CARD_BORDER_RADIUS,
  CHOICE_CONTROL_BORDER_RADIUS,
  CONTROL_BORDER_RADIUS,
  FONT_SIZE_BASE,
  FONT_SIZE_SM,
  LAYER_BORDER_RADIUS,
  SURFACE_BORDER_RADIUS,
  TAG_BORDER_RADIUS,
} from './primitive-tokens';
import {
  ANCHOR_ACTIVE,
  ANCHOR_LINE,
  ANCHOR_TEXT,
  BUTTON_COLOR_DANGER_ACTIVE,
  BUTTON_COLOR_DANGER_HOVER,
  BUTTON_COLOR_LINK,
  BUTTON_COLOR_LINK_ACTIVE,
  BUTTON_COLOR_LINK_HOVER,
  BUTTON_COLOR_PRIMARY,
  BUTTON_COLOR_PRIMARY_ACTIVE,
  BUTTON_COLOR_PRIMARY_HOVER,
  COLOR_BG_BASE,
  COLOR_BG_CONTAINER,
  COLOR_BG_ERROR,
  COLOR_BG_MODULE,
  COLOR_BG_SPOTLIGHT,
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
  STEPS_ERROR,
  STEPS_LINE,
  STEPS_PRIMARY,
  STEPS_SUCCESS,
  STEPS_TEXT,
  STEPS_TEXT_DISABLED,
  STEPS_TEXT_SECONDARY,
  TABS_ACTIVE_BG,
  TABS_ACTIVE_COLOR,
  TABS_ACTIVE_TEXT_INVERSE,
  TABS_BG_LIGHT,
  TABS_BORDER_COLOR,
  TABS_SEGMENTED_BG,
  TABS_TEXT_COLOR,
  TABS_TEXT_DISABLED,
  TABS_TEXT_SECONDARY,
  TABS_TEXT_STRONG,
} from './semantic-tokens';

export const antdComponentTokens = {
  // ── Button ─────────────────────────────────────────────────────────────
  Button: {
    colorPrimary: BUTTON_COLOR_PRIMARY,
    colorPrimaryHover: BUTTON_COLOR_PRIMARY_HOVER,
    colorPrimaryActive: BUTTON_COLOR_PRIMARY_ACTIVE,
    colorPrimaryTextHover: BUTTON_COLOR_PRIMARY_HOVER,
    colorPrimaryTextActive: BUTTON_COLOR_PRIMARY_ACTIVE,
    colorLink: BUTTON_COLOR_LINK,
    colorLinkHover: BUTTON_COLOR_LINK_HOVER,
    colorLinkActive: BUTTON_COLOR_LINK_ACTIVE,
    colorErrorHover: BUTTON_COLOR_DANGER_HOVER,
    colorErrorActive: BUTTON_COLOR_DANGER_ACTIVE,
    borderRadius: BUTTON_BORDER_RADIUS,
    borderRadiusSM: BUTTON_BORDER_RADIUS,
    borderRadiusLG: BUTTON_BORDER_RADIUS,
    defaultColor: COLOR_TEXT,
    defaultBg: COLOR_BG_CONTAINER,
    defaultBorderColor: COLOR_BORDER,
    defaultHoverBg: COLOR_BG_CONTAINER,
    defaultHoverColor: BUTTON_COLOR_PRIMARY,
    defaultHoverBorderColor: BUTTON_COLOR_PRIMARY,
    defaultActiveBg: COLOR_BG_CONTAINER,
    defaultActiveColor: BUTTON_COLOR_PRIMARY_ACTIVE,
    defaultActiveBorderColor: BUTTON_COLOR_PRIMARY_ACTIVE,
    borderColorDisabled: COLOR_BORDER,
    primaryColor: '#FFFFFF',
    primaryShadow: 'none',
    defaultShadow: 'none',
    dangerShadow: 'none',
    textTextColor: BUTTON_COLOR_LINK,
    textTextHoverColor: BUTTON_COLOR_LINK_HOVER,
    textTextActiveColor: BUTTON_COLOR_LINK_ACTIVE,
    textHoverBg: 'transparent',
    linkHoverBg: 'transparent',
    colorError: COLOR_ERROR,
    colorErrorBorderHover: BUTTON_COLOR_DANGER_HOVER,
    colorErrorBg: COLOR_BG_ERROR,
    colorErrorBgFilledHover: BUTTON_COLOR_DANGER_HOVER,
    colorErrorBgActive: BUTTON_COLOR_DANGER_ACTIVE,
    contentFontSize: BUTTON_FONT_SIZE,
    contentFontSizeSM: BUTTON_FONT_SIZE,
    contentFontSizeLG: BUTTON_FONT_SIZE,
    paddingInline: 15,
    paddingInlineSM: 11,
    paddingInlineLG: 15,
    onlyIconSize: 16,
    onlyIconSizeSM: 16,
    onlyIconSizeLG: 16,
    groupBorderColor: BUTTON_COLOR_PRIMARY,
  },

  // ── Input ──────────────────────────────────────────────────────────────
  Input: {
    borderRadius: CONTROL_BORDER_RADIUS,
    borderRadiusLG: CONTROL_BORDER_RADIUS,
    colorBorder: COLOR_BORDER,
  },
  InputNumber: {
    borderRadius: CONTROL_BORDER_RADIUS,
  },

  // ── Select / Cascader / TreeSelect ─────────────────────────────────────
  Select: {
    borderRadius: CONTROL_BORDER_RADIUS,
    borderRadiusLG: CONTROL_BORDER_RADIUS,
  },
  Cascader: {
    borderRadius: CONTROL_BORDER_RADIUS,
  },
  TreeSelect: {
    borderRadius: CONTROL_BORDER_RADIUS,
  },

  // ── DatePicker / TimePicker ─────────────────────────────────────────────
  DatePicker: {
    borderRadius: CONTROL_BORDER_RADIUS,
    borderRadiusLG: CONTROL_BORDER_RADIUS,
  },

  // ── Card ───────────────────────────────────────────────────────────────
  Card: {
    borderRadius: CARD_BORDER_RADIUS,
    borderRadiusLG: CARD_BORDER_RADIUS,
    colorBorderSecondary: COLOR_BORDER,
  },

  // ── Table ──────────────────────────────────────────────────────────────
  Table: {
    borderRadius: SURFACE_BORDER_RADIUS,
    headerBg: COLOR_TABLE_HEADER_BG,
    headerColor: COLOR_TEXT_HEADING,
    headerSplitColor: COLOR_BORDER_SECONDARY,
    rowHoverBg: COLOR_BG_MODULE,
  },

  // ── Menu ───────────────────────────────────────────────────────────────
  Menu: {
    fontSize: FONT_SIZE_BASE,
    itemBorderRadius: BORDER_RADIUS,
    itemColor: COLOR_TEXT,
    itemSelectedColor: COLOR_PRIMARY_ACTIVE,
    itemHoverColor: COLOR_TEXT_HEADING,
    itemSelectedBg: BRAND_1,
    itemHoverBg: COLOR_BG_MODULE,
    itemActiveBg: BRAND_1,
    darkItemBg: 'transparent',
    darkItemColor: 'rgba(255,255,255,0.75)',
    darkItemSelectedColor: '#FFFFFF',
    darkItemHoverColor: '#FFFFFF',
    darkItemSelectedBg: 'transparent',
    darkItemHoverBg: 'transparent',
    darkSubMenuItemBg: 'transparent',
  },

  // ── Tabs ───────────────────────────────────────────────────────────────
  Tabs: {
    inkBarColor: TABS_ACTIVE_COLOR,
    itemColor: TABS_TEXT_COLOR,
    itemHoverColor: TABS_ACTIVE_COLOR,
    itemActiveColor: TABS_ACTIVE_COLOR,
    itemSelectedColor: TABS_ACTIVE_COLOR,
    horizontalItemGutter: 24,
    cardBg: TABS_BG_LIGHT,
    borderRadius: BORDER_RADIUS_XS,
  },

  // ── Tag ────────────────────────────────────────────────────────────────
  Tag: {
    borderRadius: TAG_BORDER_RADIUS,
    defaultBg: BRAND_1,
    defaultColor: COLOR_PRIMARY_ACTIVE,
  },

  // ── Badge ──────────────────────────────────────────────────────────────
  Badge: {
    colorBgContainer: COLOR_BG_CONTAINER,
  },

  // ── Alert ──────────────────────────────────────────────────────────────
  Alert: {
    borderRadius: BORDER_RADIUS_XS,
    borderRadiusLG: BORDER_RADIUS_XS,
    defaultPadding: '8px 12px',
    withDescriptionPadding: '16px 12px 12px 12px',
    fontSize: 14,
    fontSizeLG: 16,
    lineHeight: 1.5714285714285714, // 22/14
    lineHeightLG: 1.5, // 24/16
    withDescriptionIconSize: 16,
    ...({ closeIconSize: 12 } as Record<string, unknown>),
    colorSuccessBg: '#E6FFF1',
    colorSuccessBorder: '#00C078',
    colorSuccess: '#00C078',
    colorInfoBg: '#E6F4FF',
    colorInfoBorder: '#1874FF',
    colorInfo: '#1874FF',
    colorWarningBg: '#FFFAE6',
    colorWarningBorder: '#FFA000',
    colorWarning: '#FFA000',
    colorErrorBg: '#FFF1F0',
    colorErrorBorder: '#FF4D4F',
    colorError: '#FF4D4F',
    colorTextHeading: 'rgba(0, 0, 0, 0.85)',
    colorText: 'rgba(0, 0, 0, 0.65)',
    colorIconHover: 'rgba(0, 0, 0, 0.45)',
    ...({ closeTextColor: '#1874FF', closeTextColorHover: '#4096FF' } as Record<string, unknown>),
  },

  // ── Modal ──────────────────────────────────────────────────────────────
  Modal: {
    borderRadius: LAYER_BORDER_RADIUS,
  },

  // ── Drawer ─────────────────────────────────────────────────────────────
  Drawer: {
    borderRadius: LAYER_BORDER_RADIUS,
  },

  // ── Steps ──────────────────────────────────────────────────────────────
  Steps: {
    colorPrimary: STEPS_PRIMARY,
    colorText: STEPS_TEXT,
    colorTextDescription: STEPS_TEXT_SECONDARY,
    colorTextDisabled: STEPS_TEXT_DISABLED,
    colorSplit: STEPS_LINE,
    colorError: STEPS_ERROR,
    colorSuccess: STEPS_SUCCESS,
    iconSize: 32,
    iconSizeSM: 24,
    dotSize: 8,
    dotCurrentSize: 10,
    titleLineHeight: 22,
    descriptionMaxWidth: 220,
  },

  // ── Timeline ───────────────────────────────────────────────────────────
  Timeline: {
    tailColor: COLOR_BORDER,
  },

  // ── Progress ───────────────────────────────────────────────────────────
  Progress: {
    colorSuccess: COLOR_SUCCESS,
    remainingColor: COLOR_BORDER,
  },

  // ── Statistic ──────────────────────────────────────────────────────────
  Statistic: {
    colorTextHeading: COLOR_TEXT_SECONDARY,
  },

  // ── Form ───────────────────────────────────────────────────────────────
  Form: {
    labelColor: COLOR_TEXT_SECONDARY,
    labelFontSize: FONT_SIZE_SM,
  },

  // ── Descriptions ───────────────────────────────────────────────────────
  Descriptions: {
    labelBg: COLOR_BG_MODULE,
    colorText: COLOR_TEXT,
  },

  // ── Tooltip / Popover ──────────────────────────────────────────────────
  Tooltip: {
    colorBgSpotlight: COLOR_BG_SPOTLIGHT,
    colorTextLightSolid: '#FFFFFF',
    borderRadius: SURFACE_BORDER_RADIUS,
  },
  Popover: {
    borderRadiusLG: LAYER_BORDER_RADIUS,
  },

  // ── Pagination ─────────────────────────────────────────────────────────
  Pagination: {
    borderRadius: BORDER_RADIUS,
    itemActiveBg: COLOR_BG_CONTAINER,
    itemActiveColor: COLOR_PRIMARY,
  },

  // ── Collapse ───────────────────────────────────────────────────────────
  Collapse: {
    borderRadius: SURFACE_BORDER_RADIUS,
    headerBg: COLOR_BG_MODULE,
  },

  // ── Message / Notification ─────────────────────────────────────────────
  Message: {
    borderRadiusLG: SURFACE_BORDER_RADIUS,
  },
  Notification: {
    borderRadiusLG: SURFACE_BORDER_RADIUS,
  },

  // ── Upload ─────────────────────────────────────────────────────────────
  Upload: {
    colorPrimary: COLOR_PRIMARY,
  },

  // ── Switch ─────────────────────────────────────────────────────────────
  Switch: {
    colorPrimary: COLOR_PRIMARY,
  },

  // ── Checkbox ───────────────────────────────────────────────────────────
  Checkbox: {
    borderRadius: BORDER_RADIUS_XS,
    borderRadiusSM: BORDER_RADIUS_XS,
    colorPrimary: BUTTON_COLOR_PRIMARY,
    colorPrimaryHover: BUTTON_COLOR_PRIMARY,
  },

  // ── Slider ─────────────────────────────────────────────────────────────
  Slider: {
    colorPrimaryBorder: COLOR_PRIMARY_HOVER,
    colorPrimaryBorderHover: COLOR_PRIMARY,
  },

  // ── Rate ───────────────────────────────────────────────────────────────
  Rate: {
    starColor: COLOR_PRIMARY,
  },

  // ── Segmented ──────────────────────────────────────────────────────────
  Segmented: {
    borderRadius: CHOICE_CONTROL_BORDER_RADIUS,
    borderRadiusSM: BORDER_RADIUS_XS,
    borderRadiusXS: BORDER_RADIUS_XS,
    borderRadiusLG: CHOICE_CONTROL_BORDER_RADIUS,
    itemColor: TABS_TEXT_SECONDARY,
    itemSelectedBg: COLOR_BG_CONTAINER,
    itemSelectedColor: TABS_TEXT_STRONG,
    trackBg: TABS_SEGMENTED_BG,
    trackPadding: 3,
  },

  // ── Radio ──────────────────────────────────────────────────────────────
  Radio: {
    radioSize: 20,
    dotSize: 10,
    colorPrimary: TABS_ACTIVE_COLOR,
    colorPrimaryHover: TABS_ACTIVE_COLOR,
    colorBorder: TABS_BORDER_COLOR,
    colorText: TABS_TEXT_STRONG,
    colorTextDisabled: TABS_TEXT_DISABLED,
    buttonCheckedBg: TABS_ACTIVE_BG,
    buttonSolidCheckedColor: TABS_ACTIVE_TEXT_INVERSE,
  },

  // ── Breadcrumb ─────────────────────────────────────────────────────────
  Breadcrumb: {
    fontSize: FONT_SIZE_BASE,
    itemColor: COLOR_TEXT_SECONDARY,
    linkColor: COLOR_TEXT_SECONDARY,
    linkHoverColor: COLOR_TEXT_HEADING,
    lastItemColor: COLOR_TEXT_HEADING,
    separatorColor: COLOR_TEXT_SECONDARY,
    separatorMargin: 8,
  },

  // ── Anchor ─────────────────────────────────────────────────────────────
  Anchor: {
    colorPrimary: ANCHOR_ACTIVE,
    colorText: ANCHOR_TEXT,
    colorSplit: ANCHOR_LINE,
    linkPaddingBlock: 0,
    ...({ paddingInline: 18 } as Record<string, unknown>),
  },

  // ── Result ─────────────────────────────────────────────────────────────
  Result: {
    colorSuccess: COLOR_SUCCESS,
    colorWarning: COLOR_WARNING,
    colorError: COLOR_ERROR,
    colorInfo: COLOR_INFO,
  },

  // ── Skeleton ───────────────────────────────────────────────────────────
  Skeleton: {
    colorFill: COLOR_BG_BASE,
    colorFillContent: COLOR_BG_MODULE,
  },

  // ── Empty ──────────────────────────────────────────────────────────────
  Empty: {
    colorTextDisabled: COLOR_TEXT_DISABLED,
  },

  // ── Divider ────────────────────────────────────────────────────────────
  Divider: {
    colorSplit: COLOR_SPLIT,
    colorText: COLOR_TEXT_SECONDARY,
  },

  // ── Spin ───────────────────────────────────────────────────────────────
  Spin: {
    colorPrimary: COLOR_PRIMARY,
  },
} as const;
