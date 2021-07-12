import {
  COLOR,
  FONT_SIZE,
  LAYOUT,
  MARGIN,
  PADDING,
  RADIUS,
  setMargin,
  setPadding,
  setRadius
} from 'bases/styles/Core';
import {StyleSheet} from 'react-native';

export const settingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BG.LIGHT_GRAY
  },
  viewInfor: {
    // flexDirection: 'row',
    ...setMargin(MARGIN.m_16, MARGIN.m_16, MARGIN.m_16, MARGIN.m_16),
    justifyContent: 'center',
    alignItems: 'center',
    ...setRadius(RADIUS.r_8, RADIUS.r_8, RADIUS.r_8, RADIUS.r_8),
    ...setPadding(PADDING.p_16, PADDING.p_16, PADDING.p_0, PADDING.p_0),
    zIndex: 1
  },
  imgAvatar: {
    width: LAYOUT.l_80,
    height: LAYOUT.l_80,
    backgroundColor: COLOR.BG.WHITE,
    ...setRadius(RADIUS.r_50, RADIUS.r_50, RADIUS.r_50, RADIUS.r_50)
  },
  txtUser: {
    fontSize: FONT_SIZE.s_16,
    ...setMargin(MARGIN.m_8, MARGIN.m_0, MARGIN.m_0, MARGIN.m_0)
  },
  txtPhone: {
    ...setMargin(MARGIN.m_4, MARGIN.m_0, MARGIN.m_0, MARGIN.m_0)
  },
  viewAvatar: {
    ...setPadding(PADDING.p_6, PADDING.p_6, PADDING.p_6, PADDING.p_6),
    ...setRadius(RADIUS.r_50, RADIUS.r_50, RADIUS.r_50, RADIUS.r_50),
    backgroundColor: COLOR.BG.LIGHT_GRAY
  },
  viewContainer: {
    ...setMargin(MARGIN.m_0, MARGIN.m_0, MARGIN.m_16, MARGIN.m_16),
    ...setRadius(RADIUS.r_8, RADIUS.r_8, RADIUS.r_8, RADIUS.r_8)
  },
  viewContainerSetting: {
    ...setMargin(MARGIN.m_16, MARGIN.m_0, MARGIN.m_16, MARGIN.m_16),
    ...setRadius(RADIUS.r_8, RADIUS.r_8, RADIUS.r_8, RADIUS.r_8)
  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLOR.TEXT.SECONDARY,
    ...setMargin(MARGIN.m_0, MARGIN.m_0, MARGIN.m_16, MARGIN.m_16)
  },
  viewBackground: {
    position: 'absolute',
    top: 0,
    zIndex: 0
  },
  imgBackground: {
    ...setRadius(RADIUS.r_0, RADIUS.r_0, RADIUS.r_10, RADIUS.r_10)
  },
  btnScan: {
    position: 'absolute',
    top: 12,
    right: 16
  },
  btnQr: {
    position: 'absolute',
    top: 12,
    left: 16
  }
});
