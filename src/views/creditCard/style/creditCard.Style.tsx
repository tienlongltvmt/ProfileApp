import {
  LAYOUT,
  MARGIN,
  setMargin,
  RADIUS,
  setRadius,
  COLOR,
  setPadding,
  PADDING
} from 'bases/styles/Core';
import {StyleSheet} from 'react-native';

export const creditCardStyle = StyleSheet.create({
  container: {
    flex: 1
  },
  viewCard: {
    height: LAYOUT.l_182,
    ...setMargin(MARGIN.m_16, MARGIN.m_16, MARGIN.m_16, MARGIN.m_16),
    ...setRadius(RADIUS.r_8, RADIUS.r_8, RADIUS.r_8, RADIUS.r_8),
    backgroundColor: COLOR.TEXT.BLUE
  },
  viewInput: {
    ...setRadius(RADIUS.r_8, RADIUS.r_8, RADIUS.r_8, RADIUS.r_8),
    ...setMargin(MARGIN.m_16, MARGIN.m_16, MARGIN.m_16, MARGIN.m_16),
    ...setPadding(PADDING.p_10, PADDING.p_10, PADDING.p_10, PADDING.p_10)
  },
  inputNumber: {
    borderWidth: 1,
    ...setMargin(MARGIN.m_10, MARGIN.m_10, MARGIN.m_0, MARGIN.m_0)
  }
});
