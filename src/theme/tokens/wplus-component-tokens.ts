/** W+ custom component tokens. */
import {
  BORDER_RADIUS,
  BUTTON_BORDER_RADIUS,
  BUTTON_FONT_SIZE,
  CHOICE_CONTROL_BORDER_RADIUS,
  CONTROL_BORDER_RADIUS,
  FONT_SIZE_BASE,
  FONT_SIZE_SM,
  ICON_SIZE_XL,
  LAYER_BORDER_RADIUS,
  SURFACE_BORDER_RADIUS,
  wplusSpacing,
} from './primitive-tokens';
import {
  BUTTON_COLOR_LINK,
  BUTTON_COLOR_LINK_ACTIVE,
  BUTTON_COLOR_LINK_HOVER,
  BUTTON_COLOR_PRIMARY,
  BUTTON_COLOR_SECONDARY_GOLD,
  COLOR_BG_MODULE,
  COLOR_BG_SPOTLIGHT,
  COLOR_PRIMARY,
  COLOR_TEXT_HEADING,
  COLOR_TEXT_SECONDARY,
  TABS_ACTIVE_COLOR,
  TABS_ACTIVE_TEXT_INVERSE,
  TABS_SEGMENTED_BG,
  TABS_TEXT_COLOR,
  TABS_TEXT_DISABLED,
  TABS_TEXT_STRONG,
} from './semantic-tokens';

export const wplusComponentTokens = {
  // ─── Button ────────────────────────────────────────────────────────────────
  button: {
    primary: {
      colorBg: BUTTON_COLOR_PRIMARY,
      colorText: '#FFFFFF',
      colorBorder: BUTTON_COLOR_PRIMARY,
    },
    secondary: {
      colorBg: '#FFFFFF',
      colorText: 'rgba(0, 0, 0, 0.85)',
      colorBorder: BUTTON_COLOR_SECONDARY_GOLD,
    },
    link: {
      colorText: BUTTON_COLOR_LINK,
      colorTextHover: BUTTON_COLOR_LINK_HOVER,
      colorTextActive: BUTTON_COLOR_LINK_ACTIVE,
    },
    danger: {
      colorBg: '#FF4D4F',
      colorText: '#FFFFFF',
      colorTextHover: '#FF7875',
      colorTextActive: '#D9363E',
    },
    size: {
      heightDefault: 32,
      heightSmall: 24,
      borderRadius: BUTTON_BORDER_RADIUS,
      fontSize: BUTTON_FONT_SIZE,
      iconSize: 16,
      paddingXDefault: 16,
      paddingXWide: 20,
    },
  },

  // ─── Tabs ──────────────────────────────────────────────────────────────────
  tabs: {
    layerGap: wplusSpacing.tabsLayerGap,
    toSearchGap: wplusSpacing.tabsToSearchGap,
    primary: {
      height: 48,
      fontSize: 16,
      lineHeight: 24,
      itemGap: 24,
      paddingY: 12,
      iconGap: 4,
      dividerColor: 'rgba(0, 0, 0, 0.15)',
      inkBarHeight: 2,
      activeColor: TABS_ACTIVE_COLOR,
      textColor: TABS_TEXT_STRONG,
      iconColor: TABS_TEXT_COLOR,
      disabledColor: TABS_TEXT_DISABLED,
    },
    secondary: {
      height: 32,
      itemGap: 4,
      fontSize: 14,
      lineHeight: 22,
      paddingX: 16,
      paddingY: 9,
      borderRadius: 2,
      iconGap: 4,
      activeBg: BUTTON_COLOR_SECONDARY_GOLD,
      activeTextColor: TABS_ACTIVE_TEXT_INVERSE,
      borderColor: 'rgba(0, 0, 0, 0.25)',
      textColor: TABS_TEXT_STRONG,
      hoverBorderColor: TABS_ACTIVE_COLOR,
      hoverTextColor: TABS_ACTIVE_COLOR,
    },
    tertiary: {
      height: 32,
      itemGap: 12,
      fontSize: 14,
      lineHeight: 22,
      paddingX: 12,
      paddingY: 5,
      borderRadius: 2,
      iconGap: 4,
      activeColor: TABS_ACTIVE_COLOR,
      activeBorderColor: TABS_ACTIVE_COLOR,
      borderColor: 'rgba(0, 0, 0, 0.25)',
      textColor: TABS_TEXT_STRONG,
    },
    segment: {
      outerHeight: 34,
      itemHeight: 28,
      itemGap: 2,
      outerBorderRadius: 4,
      itemBorderRadius: 2,
      bg: TABS_SEGMENTED_BG,
      fontSize: 14,
      lineHeight: 22,
      paddingX: 16,
      paddingY: 3,
      iconGap: 4,
      selectedBg: '#FFFFFF',
      selectedTextColor: TABS_TEXT_STRONG,
      textColor: TABS_TEXT_COLOR,
    },
  },

  // ─── SearchForm ────────────────────────────────────────────────────────────
  searchForm: {
    control: {
      height: wplusSpacing.searchControlHeight,
      borderRadius: 4,
    },
    label: {
      widthMin: 68,
      gap: wplusSpacing.searchLabelControlGap,
    },
    action: {
      buttonWidth: wplusSpacing.searchActionButtonWidth,
      gap: wplusSpacing.searchActionGap,
    },
    row: {
      gap: wplusSpacing.searchRowGap,
    },
    paddingX: wplusSpacing.searchPaddingX,
    paddingYCompact: wplusSpacing.searchPaddingYCompact,
    paddingYDefault: wplusSpacing.searchPaddingYDefault,
  },

  // ─── Table ─────────────────────────────────────────────────────────────────
  table: {
    header: {
      height: wplusSpacing.tableHeaderHeight,
      heightCompact: wplusSpacing.tableHeaderHeightCompact,
      bg: '#F1F2F7',
    },
    row: {
      single: wplusSpacing.tableRowHeightSingle,
      double: wplusSpacing.tableRowHeightDouble,
      compactSingle: wplusSpacing.tableRowHeightCompactSingle,
      compactDouble: wplusSpacing.tableRowHeightCompactDouble,
    },
    cell: {
      paddingX: wplusSpacing.tableCellPaddingX,
      paddingY: wplusSpacing.tableCellPaddingY,
    },
    gap: {
      statusDot: wplusSpacing.tableStatusDotGap,
      action: wplusSpacing.tableActionGap,
    },
  },

  // ─── Layout ────────────────────────────────────────────────────────────────
  layout: {
    topNavHeight: 64,
    sidebarWidth: 208,
    pageMargin: 20,
    pagePanelPadding: 20,
  },

  // ─── Pagination ────────────────────────────────────────────────────────────
  pagination: {
    itemSize: wplusSpacing.paginationItemSize,
    itemGap: wplusSpacing.paginationItemGap,
    tableToPaginationGap: wplusSpacing.tableToPaginationGap,
    rightGap: wplusSpacing.paginationRightGap,
    bottomGap: wplusSpacing.paginationBottomGap,
    standard: {
      height: 32,
      itemSize: 32,
      itemBorderRadius: 2,
      itemGap: 8,
      fontSize: FONT_SIZE_BASE,
      lineHeight: 22,
      itemBorderColor: 'rgba(0, 0, 0, 0.25)',
      textColor: 'rgba(0, 0, 0, 0.65)',
      activeTextColor: BUTTON_COLOR_PRIMARY,
      activeBorderColor: BUTTON_COLOR_PRIMARY,
      disabledIconColor: 'rgba(0, 0, 0, 0.15)',
      sizeChangerWidth: 82,
      quickJumperInputWidth: 48,
      quickJumperGap: 8,
    },
    mini: {
      height: 22,
      itemSize: 22,
      itemBorderRadius: 2,
      itemGap: 8,
      fontSize: FONT_SIZE_BASE,
      lineHeight: 22,
      prevNextBorder: 'none',
      sizeChangerHeight: 22,
      quickJumperInputHeight: 22,
      quickJumperGap: 4,
    },
    simple: {
      height: 24,
      inputWidth: 48,
      inputHeight: 24,
      itemGap: 8,
      prevNextSize: 22,
      iconSize: 16,
    },
  },

  // ─── Sidebar ───────────────────────────────────────────────────────────────
  sidebar: {
    menuItemHeight: 40,
    menuItemGap: 8,
    menuItemPaddingX: 16,
    menuItemPaddingY: 8,
  },

  // ─── Alert ─────────────────────────────────────────────────────────────────
  alert: {
    adjacentGap: wplusSpacing.alertAdjacentGap,
    paddingX: 12,
    paddingY: 8,
    iconGap: 8,
  },

  // ─── Form ──────────────────────────────────────────────────────────────────
  form: {
    control: {
      height: wplusSpacing.searchControlHeight,
      borderRadius: CONTROL_BORDER_RADIUS,
    },
    label: {
      widthMin: 80,
      fontSize: FONT_SIZE_SM,
      color: COLOR_TEXT_SECONDARY,
    },
    item: {
      gap: wplusSpacing.space16,
    },
  },

  // ─── Input ─────────────────────────────────────────────────────────────────
  input: {
    height: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
    paddingX: 11,
    fontSize: FONT_SIZE_BASE,
    addonBg: COLOR_BG_MODULE,
  },

  // ─── Select ────────────────────────────────────────────────────────────────
  select: {
    height: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
    optionHeight: 32,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── Modal ─────────────────────────────────────────────────────────────────
  modal: {
    header: {
      height: 48,
      paddingX: wplusSpacing.space24,
    },
    body: {
      paddingX: wplusSpacing.space24,
      paddingY: wplusSpacing.space20,
    },
    footer: {
      gap: wplusSpacing.space8,
      paddingX: wplusSpacing.space24,
      paddingY: wplusSpacing.space16,
    },
  },

  // ─── Checkbox ──────────────────────────────────────────────────────────────
  checkbox: {
    size: 16,
    borderRadius: CHOICE_CONTROL_BORDER_RADIUS,
    gap: 8,
  },

  // ─── Avatar ────────────────────────────────────────────────────────────────
  avatar: {
    sizeDefault: 32,
    sizeSmall: 24,
    sizeLarge: 40,
    borderRadius: BORDER_RADIUS,
  },

  // ─── Tooltip ───────────────────────────────────────────────────────────────
  tooltip: {
    maxWidth: 200,
    borderRadius: SURFACE_BORDER_RADIUS,
    bgColor: COLOR_BG_SPOTLIGHT,
  },

  // ─── Upload ────────────────────────────────────────────────────────────────
  upload: {
    area: {
      paddingX: wplusSpacing.space16,
      paddingY: wplusSpacing.space24,
      borderRadius: SURFACE_BORDER_RADIUS,
    },
    iconSize: ICON_SIZE_XL,
    thumbSize: 80,
  },

  // ─── Space ─────────────────────────────────────────────────────────────────
  space: {
    gapSmall: wplusSpacing.space8,
    gapMiddle: wplusSpacing.space16,
    gapLarge: wplusSpacing.space24,
  },

  // ─── DatePicker ────────────────────────────────────────────────────────────
  datePicker: {
    controlHeight: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── InputNumber ───────────────────────────────────────────────────────────
  inputNumber: {
    controlHeight: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
  },

  // ─── Radio ─────────────────────────────────────────────────────────────────
  radio: {
    radioSize: 20,
    dotSize: 10,
    gap: 8,
  },

  // ─── Rate ──────────────────────────────────────────────────────────────────
  rate: {
    starSize: 24,
    starGap: 4,
    starColor: COLOR_PRIMARY,
  },

  // ─── Slider ────────────────────────────────────────────────────────────────
  slider: {
    trackHeight: 12,
    handleSize: 14,
  },

  // ─── Switch ────────────────────────────────────────────────────────────────
  switch: {
    height: 22,
    width: 44,
  },

  // ─── Drawer ────────────────────────────────────────────────────────────────
  drawer: {
    paddingX: wplusSpacing.drawerPadding,
    sectionGap: wplusSpacing.drawerSectionGap,
    borderRadius: LAYER_BORDER_RADIUS,
  },

  // ─── Steps ─────────────────────────────────────────────────────────────────
  steps: {
    iconSize: 32,
    iconSizeSM: 24,
    dotSize: 8,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── Dropdown ──────────────────────────────────────────────────────────────
  dropdown: {
    borderRadius: BORDER_RADIUS,
  },

  // ─── Menu ──────────────────────────────────────────────────────────────────
  menu: {
    itemHeight: 44,
    itemGap: 4,
    borderRadius: BORDER_RADIUS,
  },

  // ─── Breadcrumb ────────────────────────────────────────────────────────────
  breadcrumb: {
    fontSize: FONT_SIZE_BASE,
    height: 22,
    lineHeight: 22,
    itemGap: 8,
    itemColor: COLOR_TEXT_SECONDARY,
    lastItemColor: COLOR_TEXT_HEADING,
    separatorColor: COLOR_TEXT_SECONDARY,
  },

  // ─── Anchor ────────────────────────────────────────────────────────────────
  anchor: {
    linkPaddingBlock: 0,
  },

  // ─── Segmented ─────────────────────────────────────────────────────────────
  segmented: {
    borderRadius: CHOICE_CONTROL_BORDER_RADIUS,
    trackPadding: 3,
  },

  // ─── Badge ─────────────────────────────────────────────────────────────────
  badge: {
    dotSize: 8,
    countHeight: 20,
    countPaddingX: 6,
    fontSize: FONT_SIZE_SM,
  },

  // ─── Collapse ──────────────────────────────────────────────────────────────
  collapse: {
    headerHeight: 48,
    headerPaddingX: wplusSpacing.space16,
    contentPaddingX: wplusSpacing.space16,
    contentPaddingY: wplusSpacing.space16,
    borderRadius: SURFACE_BORDER_RADIUS,
  },

  // ─── Descriptions ──────────────────────────────────────────────────────────
  descriptions: {
    labelWidth: 80,
    gap: wplusSpacing.space16,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── Empty ─────────────────────────────────────────────────────────────────
  empty: {
    iconSize: 64,
    gap: wplusSpacing.space16,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── List ──────────────────────────────────────────────────────────────────
  list: {
    itemHeight: 48,
    itemPaddingX: wplusSpacing.space16,
    headerFooterFontSize: FONT_SIZE_BASE,
  },

  // ─── Popover ───────────────────────────────────────────────────────────────
  popover: {
    maxWidth: 200,
    paddingX: wplusSpacing.space16,
    paddingY: wplusSpacing.space12,
    borderRadius: SURFACE_BORDER_RADIUS,
  },

  // ─── Statistic ─────────────────────────────────────────────────────────────
  statistic: {
    valueFontSize: 24,
    labelFontSize: FONT_SIZE_BASE,
    gap: wplusSpacing.space8,
  },

  // ─── Tag ───────────────────────────────────────────────────────────────────
  tag: {
    height: 24,
    borderRadius: BORDER_RADIUS,
    paddingX: wplusSpacing.space8,
    fontSize: FONT_SIZE_SM,
  },

  // ─── Timeline ──────────────────────────────────────────────────────────────
  timeline: {
    dotSize: 10,
    lineWidth: 2,
    contentGap: wplusSpacing.space12,
    paddingLeft: 24,
  },

  // ─── Tree ──────────────────────────────────────────────────────────────────
  tree: {
    nodeHeight: 36,
    indent: 24,
    borderRadius: BORDER_RADIUS,
  },

  // ─── Message ───────────────────────────────────────────────────────────────
  message: {
    top: 8,
    paddingX: 20,
    paddingY: 10,
    borderRadius: SURFACE_BORDER_RADIUS,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── Notification ──────────────────────────────────────────────────────────
  notification: {
    width: 384,
    paddingX: wplusSpacing.space24,
    paddingY: wplusSpacing.space16,
    borderRadius: SURFACE_BORDER_RADIUS,
    marginBottom: wplusSpacing.space16,
  },

  // ─── Popconfirm ────────────────────────────────────────────────────────────
  popconfirm: {
    maxWidth: 280,
    paddingX: wplusSpacing.space16,
    paddingY: wplusSpacing.space12,
    borderRadius: SURFACE_BORDER_RADIUS,
  },

  // ─── Progress ──────────────────────────────────────────────────────────────
  progress: {
    height: 8,
    borderRadius: BORDER_RADIUS,
    gap: wplusSpacing.space8,
    fontSize: FONT_SIZE_SM,
  },

  // ─── Result ────────────────────────────────────────────────────────────────
  result: {
    iconSize: 72,
    titleFontSize: 20,
    subtitleFontSize: FONT_SIZE_BASE,
    gap: wplusSpacing.space24,
  },

  // ─── Skeleton ──────────────────────────────────────────────────────────────
  skeleton: {
    paragraphHeight: 16,
    titleWidth: 200,
    borderRadius: BORDER_RADIUS,
    gap: wplusSpacing.space16,
  },

  // ─── Spin ──────────────────────────────────────────────────────────────────
  spin: {
    dotSize: 32,
    fontSize: FONT_SIZE_BASE,
    gap: wplusSpacing.space8,
  },

  // ─── AutoComplete ──────────────────────────────────────────────────────────
  autoComplete: {
    controlHeight: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── BackTop ───────────────────────────────────────────────────────────────
  backTop: {
    size: 40,
    right: 24,
    bottom: 80,
  },

  // ─── Calendar ──────────────────────────────────────────────────────────────
  calendar: {
    cellSize: 32,
    headerHeight: 44,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── Carousel ──────────────────────────────────────────────────────────────
  carousel: {
    dotWidth: 24,
    dotHeight: 4,
    dotGap: 8,
    dotBottom: 16,
  },

  // ─── Cascader ──────────────────────────────────────────────────────────────
  cascader: {
    controlHeight: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
    optionHeight: 32,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── Mentions ──────────────────────────────────────────────────────────────
  mentions: {
    controlHeight: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
    fontSize: FONT_SIZE_BASE,
    optionHeight: 32,
  },

  // ─── TimePicker ────────────────────────────────────────────────────────────
  timePicker: {
    controlHeight: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
    fontSize: FONT_SIZE_BASE,
  },

  // ─── Transfer ──────────────────────────────────────────────────────────────
  transfer: {
    headerHeight: 40,
    itemHeight: 36,
    columnWidth: 200,
    gap: wplusSpacing.space16,
  },

  // ─── TreeSelect ────────────────────────────────────────────────────────────
  treeSelect: {
    controlHeight: wplusSpacing.searchControlHeight,
    borderRadius: CONTROL_BORDER_RADIUS,
    nodeHeight: 36,
    fontSize: FONT_SIZE_BASE,
  },
} as const;

export const privateBankingComponentTokens = wplusComponentTokens;
