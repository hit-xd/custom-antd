import type { ThemeConfig } from 'antd';

/** Ant Design component tokens for W+. */
import {
  BORDER_RADIUS,
  BORDER_RADIUS_XS,
  BOX_SHADOW_DEFAULT,
  BRAND_1,
  BRAND_2,
  BUTTON_BORDER_RADIUS,
  BUTTON_FONT_SIZE,
  CARD_BORDER_RADIUS,
  CHOICE_CONTROL_BORDER_RADIUS,
  CONTROL_BORDER_RADIUS,
  FONT_SIZE_BASE,
  FONT_SIZE_LG,
  FONT_SIZE_SM,
  ICON_SIZE_LG,
  ICON_SIZE_MD,
  ICON_SIZE_SM,
  LAYER_BORDER_RADIUS,
  SURFACE_BORDER_RADIUS,
  TAG_BORDER_RADIUS,
  wplusSpacing,
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
  BUTTON_COLOR_SECONDARY_GOLD,
  COLOR_BG_BASE,
  COLOR_BG_CONTAINER,
  COLOR_BG_ERROR,
  COLOR_BG_MODULE,
  COLOR_BG_SPOTLIGHT,
  COLOR_BORDER,
  COLOR_BORDER_SECONDARY,
  COLOR_PRIMARY,
  COLOR_PRIMARY_ACTIVE,
  COLOR_PRIMARY_HOVER,
  COLOR_TABLE_HEADER_BG,
  COLOR_TEXT,
  COLOR_TEXT_DISABLED,
  COLOR_TEXT_HEADING,
  COLOR_TEXT_SECONDARY,
  STEPS_PRIMARY,
  STEPS_TEXT_SECONDARY,
  TABS_ACTIVE_BG,
  TABS_ACTIVE_COLOR,
  TABS_ACTIVE_TEXT_INVERSE,
  TABS_BG_LIGHT,
  TABS_SEGMENTED_BG,
  TABS_TEXT_COLOR,
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
    colorLinkHover: BUTTON_COLOR_LINK_HOVER,
    colorLinkActive: BUTTON_COLOR_LINK_ACTIVE,
    colorErrorHover: BUTTON_COLOR_DANGER_HOVER,
    colorErrorActive: BUTTON_COLOR_DANGER_ACTIVE,
    borderRadius: BUTTON_BORDER_RADIUS,
    borderRadiusLG: BUTTON_BORDER_RADIUS,
    defaultBorderColor: BUTTON_COLOR_SECONDARY_GOLD,
    defaultHoverColor: BUTTON_COLOR_PRIMARY,
    defaultHoverBorderColor: BUTTON_COLOR_PRIMARY,
    defaultActiveColor: BUTTON_COLOR_PRIMARY_ACTIVE,
    defaultActiveBorderColor: BUTTON_COLOR_PRIMARY_ACTIVE,
    primaryShadow: 'none',
    defaultShadow: 'none',
    dangerShadow: 'none',
    textTextColor: BUTTON_COLOR_LINK,
    textTextHoverColor: BUTTON_COLOR_LINK_HOVER,
    textTextActiveColor: BUTTON_COLOR_LINK_ACTIVE,
    textHoverBg: 'transparent',
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
    borderRadiusLG: CONTROL_BORDER_RADIUS,
    addonBg: COLOR_BG_MODULE,
    paddingInline: 11,
    paddingInlineSM: 7,
    paddingInlineLG: 11,
  },
  InputNumber: {
    controlWidth: 90,
    handleWidth: 22,
    handleFontSize: FONT_SIZE_SM,
    handleVisible: 'auto',
    handleBg: COLOR_BG_CONTAINER,
    handleActiveBg: COLOR_BG_MODULE,
    handleHoverColor: COLOR_PRIMARY,
    handleBorderColor: COLOR_BORDER,
    filledHandleBg: COLOR_BG_MODULE,
  },

  // ── Select / Cascader / TreeSelect ─────────────────────────────────────
  Select: {
    borderRadiusLG: CONTROL_BORDER_RADIUS,
    optionSelectedBg: BRAND_1,
    optionSelectedFontWeight: 400,
    optionActiveBg: COLOR_BG_MODULE,
    activeOutlineColor: BRAND_2,
    multipleItemBg: COLOR_BG_MODULE,
    multipleItemBorderColor: COLOR_BORDER_SECONDARY,
    multipleSelectorBgDisabled: COLOR_BG_MODULE,
    multipleItemBorderColorDisabled: COLOR_BORDER_SECONDARY,
  },
  Cascader: {
    controlWidth: 184,
    controlItemWidth: 112,
    dropdownHeight: 180,
    optionSelectedBg: BRAND_1,
    optionSelectedColor: COLOR_TEXT,
    optionSelectedFontWeight: 400,
    optionPadding: '5px 12px',
    menuPadding: 4,
  },
  TreeSelect: {
    titleHeight: 36,
    indentSize: 24,
    nodeHoverBg: COLOR_BG_MODULE,
    nodeSelectedBg: BRAND_1,
  },

  // ── DatePicker / TimePicker ─────────────────────────────────────────────
  DatePicker: {
    borderRadiusLG: CONTROL_BORDER_RADIUS,
    cellHeight: 32,
    cellWidth: 36,
    textHeight: 40,
    withoutTimeCellHeight: 66,
    timeColumnHeight: 224,
    timeCellHeight: 28,
    cellActiveWithRangeBg: BRAND_1,
    cellHoverWithRangeBg: COLOR_BG_MODULE,
    cellRangeBorderColor: BRAND_1,
    activeBorderColor: COLOR_PRIMARY,
    hoverBorderColor: COLOR_PRIMARY_HOVER,
    activeShadow: '0 0 0 2px rgba(197, 162, 103, 0.12)',
  },

  // ── Card ───────────────────────────────────────────────────────────────
  Card: {
    borderRadius: CARD_BORDER_RADIUS,
    borderRadiusLG: CARD_BORDER_RADIUS,
    colorBorderSecondary: COLOR_BORDER,
    headerBg: COLOR_BG_CONTAINER,
    headerFontSize: FONT_SIZE_LG,
    headerFontSizeSM: FONT_SIZE_BASE,
    headerHeight: 48,
    headerHeightSM: 36,
    bodyPadding: wplusSpacing.space24,
    bodyPaddingSM: wplusSpacing.space16,
    headerPadding: wplusSpacing.space24,
    headerPaddingSM: wplusSpacing.space16,
    actionsBg: COLOR_BG_CONTAINER,
    actionsLiMargin: '12px 0',
    tabsMarginBottom: -17,
    extraColor: COLOR_TEXT_SECONDARY,
  },

  // ── Table ──────────────────────────────────────────────────────────────
  Table: {
    borderRadius: SURFACE_BORDER_RADIUS,
    headerBg: COLOR_TABLE_HEADER_BG,
    headerColor: COLOR_TEXT_HEADING,
    headerSortActiveBg: COLOR_TABLE_HEADER_BG,
    headerSortHoverBg: COLOR_BG_MODULE,
    bodySortBg: COLOR_BG_MODULE,
    rowHoverBg: COLOR_BG_MODULE,
    rowSelectedBg: BRAND_1,
    rowSelectedHoverBg: BRAND_2,
    rowExpandedBg: COLOR_BG_MODULE,
    headerBorderRadius: SURFACE_BORDER_RADIUS,
    footerBg: COLOR_BG_MODULE,
    footerColor: COLOR_TEXT,
    cellPaddingBlock: wplusSpacing.tableCellPaddingY,
    cellPaddingInline: wplusSpacing.tableCellPaddingX,
    cellPaddingBlockMD: 8,
    cellPaddingInlineMD: wplusSpacing.tableCellPaddingX,
    cellPaddingBlockSM: 6,
    cellPaddingInlineSM: 8,
    cellFontSizeSM: FONT_SIZE_SM,
    fixedHeaderSortActiveBg: COLOR_TABLE_HEADER_BG,
    headerFilterHoverBg: COLOR_BG_MODULE,
    selectionColumnWidth: 48,
    stickyScrollBarBg: 'rgba(0, 0, 0, 0.25)',
  },

  // ── Menu ───────────────────────────────────────────────────────────────
  Menu: {
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
    horizontalMargin: '0 0 16px 0',
    horizontalItemMargin: '0',
    horizontalItemMarginRTL: '0',
    horizontalItemPadding: '12px 0',
    horizontalItemPaddingSM: '8px 0',
    horizontalItemPaddingLG: '12px 0',
    verticalItemPadding: '8px 24px',
    verticalItemMargin: '0 0 16px 0',
    cardBg: TABS_BG_LIGHT,
    cardHeight: 40,
    cardHeightSM: 32,
    cardHeightLG: 48,
    cardPadding: '9px 16px',
    cardPaddingSM: '5px 16px',
    cardPaddingLG: '13px 16px',
    cardGutter: 4,
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
    dotSize: 8,
    indicatorHeight: 20,
    indicatorHeightSM: 14,
    textFontSize: FONT_SIZE_SM,
    textFontSizeSM: FONT_SIZE_SM,
    statusSize: 6,
  },

  // ── Avatar ─────────────────────────────────────────────────────────────
  Avatar: {
    containerSize: 32,
    containerSizeSM: 24,
    containerSizeLG: 40,
    textFontSize: FONT_SIZE_BASE,
    textFontSizeSM: FONT_SIZE_SM,
    textFontSizeLG: FONT_SIZE_LG,
    iconFontSize: ICON_SIZE_MD,
    iconFontSizeSM: ICON_SIZE_SM,
    iconFontSizeLG: ICON_SIZE_LG,
    groupSpace: 4,
    groupOverlapping: -8,
    groupBorderColor: COLOR_BG_CONTAINER,
  },

  // ── Layout ─────────────────────────────────────────────────────────────
  Layout: {
    headerBg: '#050816',
    headerPadding: '0 24px',
    headerColor: '#FFFFFF',
    footerPadding: '24px 50px',
    siderBg: '#050816',
    triggerBg: '#050816',
    triggerColor: '#FFFFFF',
  },

  // ── Alert ──────────────────────────────────────────────────────────────
  Alert: {
    borderRadius: BORDER_RADIUS_XS,
    borderRadiusLG: BORDER_RADIUS_XS,
    defaultPadding: '8px 12px',
    withDescriptionPadding: '16px 12px 12px 12px',
    // lineHeight: 1.5714285714285714, // 22/14
    lineHeightLG: 1.5, // 24/16
    withDescriptionIconSize: 16,
    ...({ closeIconSize: 12 } as Record<string, unknown>),
    colorSuccessBg: '#E6FFF1',
    colorSuccessBorder: '#00C078',
    colorInfoBg: '#E6F4FF',
    colorInfoBorder: '#1874FF',
    colorWarningBg: '#FFFAE6',
    colorWarningBorder: '#FFA000',
    colorErrorBg: '#FFF1F0',
    colorErrorBorder: '#FF4D4F',
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
    footerPaddingBlock: 10,
    footerPaddingInline: wplusSpacing.drawerPadding,
  },

  // ── Steps ──────────────────────────────────────────────────────────────
  Steps: {
    colorPrimary: STEPS_PRIMARY,
    colorTextDescription: STEPS_TEXT_SECONDARY,
    iconSize: 32,
    iconSizeSM: 24,
    dotSize: 8,
    dotCurrentSize: 10,
    titleLineHeight: 32,
    descriptionMaxWidth: 220,
  },

  // ── Timeline ───────────────────────────────────────────────────────────
  Timeline: {
    tailColor: COLOR_BORDER,
    tailWidth: 2,
    dotBorderWidth: 2,
    dotBg: COLOR_BG_CONTAINER,
    itemPaddingBottom: wplusSpacing.space20,
  },

  // ── Progress ───────────────────────────────────────────────────────────
  Progress: {
    defaultColor: COLOR_PRIMARY,
    remainingColor: COLOR_BORDER,
    lineBorderRadius: BORDER_RADIUS,
  },

  // ── Statistic ──────────────────────────────────────────────────────────
  Statistic: {
    colorTextHeading: COLOR_TEXT_SECONDARY,
  },

  // ── Form ───────────────────────────────────────────────────────────────
  Form: {
    labelColor: COLOR_TEXT_SECONDARY,
    // labelFontSize: FONT_SIZE_SM,
    // labelHeight: 32,
    itemMarginBottom: wplusSpacing.space16,
    inlineItemMarginBottom: 0,
    verticalLabelPadding: '0 0 8px',
    verticalLabelMargin: 0,
  },

  // ── Descriptions ───────────────────────────────────────────────────────
  Descriptions: {
    labelBg: COLOR_BG_MODULE,
  },

  // ── Tooltip / Popover ──────────────────────────────────────────────────
  Tooltip: {
    colorBgSpotlight: COLOR_BG_SPOTLIGHT,
    borderRadius: SURFACE_BORDER_RADIUS,
  },
  Popover: {
    titleMinWidth: 177,
  },

  // ── Pagination ─────────────────────────────────────────────────────────
  Pagination: {
    itemSizeSM: 22,
    itemActiveBgDisabled: COLOR_BG_MODULE,
  },

  // ── Collapse ───────────────────────────────────────────────────────────
  Collapse: {
    borderRadius: SURFACE_BORDER_RADIUS,
    headerBg: COLOR_BG_MODULE,
  },

  // ── Message / Notification ─────────────────────────────────────────────
  Message: {
    borderRadiusLG: SURFACE_BORDER_RADIUS,
    contentPadding: '10px 20px',
  },
  Notification: {
    borderRadiusLG: SURFACE_BORDER_RADIUS,
    width: 384,
  },

  Popconfirm: {
    borderRadiusLG: SURFACE_BORDER_RADIUS,
  },

  // ── Upload ─────────────────────────────────────────────────────────────
  Upload: {
    actionsColor: COLOR_TEXT_SECONDARY,
    pictureCardSize: 80,
  },

  // ── Switch ─────────────────────────────────────────────────────────────
  Switch: {
    trackHeight: 22,
    trackHeightSM: 16,
    trackMinWidth: 44,
    trackMinWidthSM: 28,
    trackPadding: 2,
    handleBg: COLOR_BG_CONTAINER,
    handleShadow: BOX_SHADOW_DEFAULT,
    handleSize: 18,
    handleSizeSM: 12,
    innerMinMargin: 9,
    innerMaxMargin: 24,
    innerMinMarginSM: 6,
    innerMaxMarginSM: 18,
  },

  // ── Checkbox ───────────────────────────────────────────────────────────
  Checkbox: {
    colorPrimary: BUTTON_COLOR_PRIMARY,
    colorPrimaryHover: BUTTON_COLOR_PRIMARY,
  },

  // ── Slider ─────────────────────────────────────────────────────────────
  Slider: {
    colorPrimaryBorder: COLOR_PRIMARY_HOVER,
    colorPrimaryBorderHover: COLOR_PRIMARY,
    controlSize: 12,
    railSize: 4,
    handleSize: 14,
    handleSizeHover: 16,
    handleLineWidth: 2,
    handleLineWidthHover: 2,
    dotSize: 8,
    railBg: COLOR_BG_MODULE,
    railHoverBg: COLOR_BORDER_SECONDARY,
    trackBg: COLOR_PRIMARY,
    trackHoverBg: COLOR_PRIMARY_HOVER,
    handleColor: COLOR_PRIMARY,
    handleActiveColor: COLOR_PRIMARY_ACTIVE,
    handleActiveOutlineColor: BRAND_2,
    handleColorDisabled: COLOR_TEXT_DISABLED,
    dotBorderColor: COLOR_BORDER,
    dotActiveBorderColor: COLOR_PRIMARY,
    trackBgDisabled: COLOR_BORDER_SECONDARY,
  },

  // ── Rate ───────────────────────────────────────────────────────────────
  Rate: {
    starColor: COLOR_PRIMARY,
  },

  // ── Segmented ──────────────────────────────────────────────────────────
  Segmented: {
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
    colorText: TABS_TEXT_STRONG,
    buttonCheckedBg: TABS_ACTIVE_BG,
    buttonSolidCheckedColor: TABS_ACTIVE_TEXT_INVERSE,
  },

  // ── Breadcrumb ─────────────────────────────────────────────────────────
  Breadcrumb: {
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
    titleFontSize: 20,
  },

  // ── Skeleton ───────────────────────────────────────────────────────────
  Skeleton: {
    gradientFromColor: COLOR_BG_MODULE,
    gradientToColor: COLOR_BG_BASE,
    titleHeight: 16,
    blockRadius: BORDER_RADIUS,
    paragraphMarginTop: wplusSpacing.space16,
    paragraphLiHeight: 16,
  },

  // ── List / Tree ───────────────────────────────────────────────────────
  List: {
    itemPadding: `12px ${wplusSpacing.space16}px`,
    itemPaddingSM: `8px ${wplusSpacing.space16}px`,
    itemPaddingLG: `16px ${wplusSpacing.space24}px`,
  },
  Tree: {
    titleHeight: 36,
    indentSize: 24,
    nodeHoverBg: COLOR_BG_MODULE,
    nodeSelectedBg: BRAND_1,
    nodeHoverColor: COLOR_TEXT_HEADING,
    nodeSelectedColor: COLOR_PRIMARY_ACTIVE,
  },

  // ── Divider ────────────────────────────────────────────────────────────
  Divider: {
    textPaddingInline: wplusSpacing.space16,
    orientationMargin: 0.05,
    verticalMarginInline: wplusSpacing.space8,
  },

  // ── Calendar ───────────────────────────────────────────────────────────
  Calendar: {
    yearControlWidth: 80,
    monthControlWidth: 70,
    miniContentHeight: 256,
    itemActiveBg: BRAND_1,
  },

  // ── Carousel ───────────────────────────────────────────────────────────
  Carousel: {
    dotWidth: 24,
    dotHeight: 4,
    dotGap: 8,
    dotOffset: 16,
    dotActiveWidth: 24,
    arrowSize: 16,
    arrowOffset: 8,
  },

  // ── Transfer ───────────────────────────────────────────────────────────
  Transfer: {
    listWidth: 200,
    listWidthLG: 250,
    listHeight: 200,
    itemHeight: 36,
    itemPaddingBlock: 7,
    headerHeight: 40,
  },
} as const satisfies NonNullable<ThemeConfig['components']>;
