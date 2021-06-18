import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';

import {
  COLOR,
  MARGIN,
  PADDING,
  RADIUS,
  FONT_SIZE,
  setMargin,
  setPadding,
  setRadius,
  setPosition
} from 'bases/styles/Core';

import Utilities from 'utils/Utilities';

interface IState {
  isShow: boolean;
  textBody: string;
}

export default class RootLoading extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShow: false,
      textBody: '...'
    };
    Utilities.setHideRootLoading(this);
  }

  render() {
    const {isShow, textBody} = this.state;

    if (isShow) {
      return (
        <View style={styles.container}>
          <View style={styles.content}>
            <ActivityIndicator size="large" color={COLOR.TEXT.PRIMARY} />
            <Text style={styles.textBody}>{textBody}</Text>
          </View>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BG.BLACK_30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    ...setPosition(0, 0, 0, 0)
  },
  content: {
    ...setPadding(PADDING.p_32, PADDING.p_32, PADDING.p_32, PADDING.p_32),
    ...setRadius(RADIUS.r_16, RADIUS.r_16, RADIUS.r_16, RADIUS.r_16),
    backgroundColor: COLOR.BG.PRIMARY
  },
  textBody: {
    color: COLOR.TEXT.PRIMARY,
    fontSize: FONT_SIZE.s_14,
    ...setMargin(MARGIN.m_12, MARGIN.m_0, MARGIN.m_0, MARGIN.m_0)
  }
});
