import Utilities from 'utils/Utilities';

/**
 * Color
 * @public
 */
const COLOR = {
  BG: {
    RED_PRIMARY: '#ad2a30',
    PRIMARY: '#FFFFFF',
    SECONDARY: '#F2F2F2',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    BLACK_10: 'rgba(0,0,0,0.1)',
    BLACK_30: 'rgba(0,0,0,0.3)',
    BLACK_TOOLBAR: '#262A2E',
    RED: '#FF4646',
    PINK: '#FFE2E2',
    GRAY: '#707070',
    LIGHT_GRAY: '#EEEEEE'
  },
  TEXT: {
    PRIMARY: '#000000',
    SECONDARY: '#B4B4B4',
    GRAY: '#707070',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    DA_CAM: '#FF8B36',
    VANG_CAM: '#F29423',
    RED: '#FF4646',
    BLUE: '#3383F0',
    GREEN: '#0ABC3A',
    POSITIVE_BTN: '#007ff9',
    NEGATIVE_BTN: '#ff3b30'
  },
  TAB: {
    RED: '#FF4646',
    INACTIVE: '#CFCFCF'
  },
  BUTTON: {
    RED: '#FF4646',
    WHITE: '#FFFFFF'
  },
  SWITCH: {
    PLACEHOLDER: '#CCCCCC',
    GREEN: '#0ABC3A',
    GREEN_LIGHT: '#aed581'
  }
};

/**
 * Font size
 * @public
 */
const FONT_SIZE = {
  s_8: 8,
  s_9: 9,
  s_10: 10,
  s_11: 11,
  s_12: 12,
  s_14: 14,
  s_16: 16,
  s_18: 18,
  s_20: 20,
  s_22: 22,
  s_24: 24,
  s_26: 26,
  s_28: 28,
  s_30: 30
};

export type TYPE_OF_FONT = 'Regular' | 'Medium' | 'Bold';

/**
 * Font family
 * @public
 */
const FONT_FAMILY = {
  Bold: 'Roboto-Bold',
  Medium: 'Roboto-Medium',
  Regular: 'Roboto-Regular'
};

/**
 * Padding
 * @public
 */
const PADDING = {
  p_0: 0,
  p_2: 2,
  p_4: 4,
  p_6: 6,
  p_8: 8,
  p_10: 10,
  p_11: 11,
  p_12: 12,
  p_14: 13,
  p_15: 15,
  p_16: 16,
  p_18: 18,
  p_20: 20,
  p_24: 24,
  p_26: 26,
  p_30: 30,
  p_32: 32,
  p_48: 48,
  p_64: 64
};

/**
 * Margin
 * @public
 */
const MARGIN = {
  m_0: 0,
  m_1: 1,
  m_2: 2,
  m_4: 4,
  m_5: 5,
  m_6: 6,
  m_8: 8,
  m_10: 10,
  m_12: 12,
  m_14: 13,
  m_16: 16,
  m_20: 20,
  m_22: 22,
  m_24: 24,
  m_25: 25,
  m_26: 26,
  m_28: 28,
  m_30: 30,
  m_32: 32,
  m_40: 40,
  m_48: 48,
  m_50: 50,
  m_52: 52,
  m_60: 60,
  m_64: 64
};

/**
 * Border radius
 * @public
 */
const RADIUS = {
  r_0: 0,
  r_2: 2,
  r_4: 4,
  r_6: 6,
  r_8: 8,
  r_10: 10,
  r_12: 12,
  r_14: 14,
  r_15: 15,
  r_16: 16,
  r_20: 20,
  r_24: 24,
  r_32: 32,
  r_50: 50
};

/**
 * Line height
 * @public
 */
const LINE_HEIGHT = {
  l_1: 1,
  l_10: 10,
  l_20: 20,
  l_30: 30,
  l_40: 40,
  l_50: 50
};

/**
 * Width Height size
 * @public
 */
const LAYOUT = {
  l_1: 1,
  l_5: 5,
  l_8: 8,
  l_10: 10,
  l_12: 12,
  l_14: 14,
  l_15: 15,
  l_16: 16,
  l_18: 18,
  l_20: 20,
  l_24: 24,
  l_29: 29,
  l_30: 30,
  l_32: 32,
  l_34: 34,
  l_38: 38,
  l_40: 40,
  l_46: 46,
  l_48: 48,
  l_50: 50,
  l_52: 52,
  l_56: 56,
  l_60: 60,
  l_64: 64,
  l_70: 70,
  l_75: 75,
  l_88: 88,
  l_135: 135,
  l_140: 140,
  l_174: 174,
  l_213: 213,
  l_248: 248,
  l_250: 250,
  l_255: 255
};

export const setPosition = (top = 0, bottom = 0, left = 0, right = 0) => {
  return {
    top: top,
    bottom: bottom,
    left: left,
    right: right
  };
};

export const setMargin = (top = 0, bottom = 0, left = 0, right = 0) => {
  return {
    marginTop: Utilities.getResolutionByWidth(top),
    marginBottom: Utilities.getResolutionByWidth(bottom),
    marginLeft: Utilities.getResolutionByWidth(left),
    marginRight: Utilities.getResolutionByWidth(right)
  };
};

export const setPadding = (top = 0, bottom = 0, left = 0, right = 0) => {
  return {
    paddingTop: Utilities.getResolutionByWidth(top),
    paddingBottom: Utilities.getResolutionByWidth(bottom),
    paddingLeft: Utilities.getResolutionByWidth(left),
    paddingRight: Utilities.getResolutionByWidth(right)
  };
};

export const setRadius = (topLeft = 0, topRight = 0, bottomLeft = 0, bottomRight = 0) => {
  return {
    borderTopLeftRadius: topLeft,
    borderTopStartRadius: topLeft,

    borderTopRightRadius: topRight,
    borderTopEndRadius: topRight,

    borderBottomLeftRadius: bottomLeft,
    borderBottomStartRadius: bottomLeft,

    borderBottomRightRadius: bottomRight,
    borderBottomEndRadius: bottomRight
  };
};

export const ArrayColor = [
  '#1e90ff',
  '#9acd32',
  '#ffd700',
  '#dc143c',
  '#9932cc',
  '#008b8b',
  '#483d8b',
  '#ff8c00',
  '#ee82ee',
  '#a52a2a',
  '#deb887',
  '#6a5acd',
  '#5f9ea0',
  '#e9967a',
  '#6495ed',
  '#f0f8ff',
  '#0000ff',
  '#8a2be2',
  '#00ffff',
  '#00008b',
  '#00bfff',
  '#faebd7',
  '#00ffff',
  '#7fffd4',
  '#f0ffff',
  '#f5f5dc',
  '#ffe4c4',
  '#000000',
  '#ffebcd',
  '#b8860b',
  '#a9a9a9',
  '#006400',
  '#bdb76b',
  '#8b008b',
  '#8fbc8f',
  '#2f4f4f',
  '#00ced1',
  '#9400d3',
  '#ff1493',
  '#696969',
  '#b22222',
  '#fffaf0',
  '#228b22',
  '#ff00ff',
  '#dcdcdc',
  '#f8f8ff',
  '#daa520',
  '#808080',
  '#008000',
  '#adff2f',
  '#808080',
  '#f0fff0',
  '#ff69b4',
  '#cd5c5c',
  '#4b0082',
  '#fffff0',
  '#f0e68c',
  '#e6e6fa',
  '#7fff00',
  '#d2691e',
  '#ff7f50',
  '#556b2f',
  '#8b0000',
  '#fff0f5',
  '#7cfc00',
  '#fffacd',
  '#add8e6',
  '#f08080',
  '#e0ffff',
  '#fafad2',
  '#d3d3d3',
  '#90ee90',
  '#d3d3d3',
  '#ffb6c1',
  '#ffa07a',
  '#20b2aa',
  '#87cefa',
  '#778899',
  '#b0c4de',
  '#ffffe0',
  '#00ff00',
  '#32cd32',
  '#faf0e6',
  '#ff00ff',
  '#800000',
  '#66cdaa',
  '#0000cd',
  '#ba55d3',
  '#9370db',
  '#3cb371',
  '#7b68ee',
  '#00fa9a',
  '#48d1cc',
  '#c71585',
  '#191970',
  '#f5fffa',
  '#ffe4e1',
  '#ffe4b5',
  '#ffdead',
  '#000080',
  '#fdf5e6',
  '#808000',
  '#6b8e23',
  '#ffa500',
  '#ff4500',
  '#da70d6',
  '#eee8aa',
  '#98fb98',
  '#afeeee',
  '#db7093',
  '#ffefd5',
  '#ffdab9',
  '#cd853f',
  '#ffc0cb',
  '#dda0dd',
  '#b0e0e6',
  '#800080',
  '#663399',
  '#ff0000',
  '#bc8f8f',
  '#4169e1',
  '#8b4513',
  '#fa8072',
  '#f4a460',
  '#2e8b57',
  '#fff5ee',
  '#a0522d',
  '#c0c0c0',
  '#87ceeb',
  '#708090',
  '#fffafa',
  '#00ff7f',
  '#4682b4',
  '#d2b48c',
  '#008080',
  '#d8bfd8',
  '#ff6347',
  '#40e0d0',
  '#fff8dc',
  '#f5deb3',
  '#ffffff',
  '#f5f5f5',
  '#ffff00'
];

export {COLOR, MARGIN, PADDING, FONT_SIZE, FONT_FAMILY, LINE_HEIGHT, RADIUS, LAYOUT};
