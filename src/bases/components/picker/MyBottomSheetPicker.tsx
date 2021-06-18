import React, {PureComponent} from 'react';
import {StyleSheet, Modal, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
import Utilities from 'utils/Utilities';
import {MyButton, MyButtonShadow} from '../button/MyButton';
import {MyView, MyViewShadow} from '../view/MyView';
import {MyText} from '../textview/MyText';

export interface IPropsButtonSheet {
  title: string;
  onPress?: () => void;
  isActive?: boolean;
}

interface IProps {
  title?: string;
  titleButtonCancel: string;

  arrayButton: IPropsButtonSheet[];
}

interface IStates {
  isVisible: boolean;
}

export default class MyBottomSheetPicker extends PureComponent<IProps, IStates> {
  state = {isVisible: false};

  onShow = () => {
    this.setState({
      isVisible: true
    });
  };

  onHide = () => {
    this.setState({
      isVisible: false
    });
  };

  render() {
    const {title, titleButtonCancel, arrayButton} = this.props;

    let _viewTitle = null;
    let styleContainerScroll = styles.containerScrollView;
    let styleScroll = styles.contentScrollView;
    if (title) {
      styleContainerScroll = styles.containerScrollView2;
      styleScroll = styles.contentScrollView2;
      _viewTitle = (
        <MyView transparent>
          <MyView style={styles.btnTitleAction}>
            <MyText myFontStyle="Regular" style={styles.title}>
              {title}
            </MyText>
          </MyView>
          <MyView style={styles.line} />
        </MyView>
      );
    }

    let _viewButton: any[] = [];
    for (let i = 0; i < arrayButton.length; i++) {
      const element = arrayButton[i];
      let styleActive = {};
      if (element.isActive) {
        styleActive = {color: COLOR.TEXT.NEGATIVE_BTN};
      }
      if (i === 0) {
        if (title) {
          _viewButton.push(
            <MyButton
              key={i}
              activeOpacity={1}
              style={styles.btnContentAction}
              onPress={element.onPress}>
              <MyText myFontStyle="Regular" style={[styles.textDelete, styleActive]}>
                {element.title}
              </MyText>
            </MyButton>
          );
        } else {
          _viewButton.push(
            <MyButton
              key={i}
              activeOpacity={1}
              style={styles.btnTitleAction}
              onPress={element.onPress}>
              <MyText myFontStyle="Regular" style={[styles.textDelete, styleActive]}>
                {element.title}
              </MyText>
            </MyButton>
          );
        }
      } else if (i === arrayButton.length - 1) {
        _viewButton.push(
          <MyView transparent key={i}>
            <MyView style={styles.line} />
            <MyButton activeOpacity={1} style={styles.btnDeleteAction} onPress={element.onPress}>
              <MyText myFontStyle="Regular" style={[styles.textDelete, styleActive]}>
                {element.title}
              </MyText>
            </MyButton>
          </MyView>
        );
      } else {
        _viewButton.push(
          <MyView transparent key={i}>
            <MyView style={styles.line} />
            <MyButton activeOpacity={1} style={styles.btnContentAction} onPress={element.onPress}>
              <MyText myFontStyle="Regular" style={[styles.textDelete, styleActive]}>
                {element.title}
              </MyText>
            </MyButton>
          </MyView>
        );
      }
    }

    const {isVisible} = this.state;

    return (
      <Modal
        visible={isVisible}
        transparent
        // supportedOrientations={['portrait', 'landscape']}
        animationType="slide"
        hardwareAccelerated
        onRequestClose={this.onHide}>
        <SafeAreaView edges={['left', 'bottom', 'right']} style={styles.container}>
          <MyButton style={styles.container} activeOpacity={1} onPress={this.onHide} transparent>
            <MyViewShadow transparent style={styles.modalContainer}>
              {_viewTitle}

              <MyView style={styleContainerScroll}>
                <ScrollView
                  style={styleScroll}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled">
                  {_viewButton}
                </ScrollView>
              </MyView>
              <MyButtonShadow activeOpacity={1} style={styles.btnClose} onPress={this.onHide}>
                <MyText myFontStyle="Bold" style={styles.textClose}>
                  {titleButtonCancel}
                </MyText>
              </MyButtonShadow>
            </MyViewShadow>
          </MyButton>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BG.BLACK_30
  },
  modalContainer: {
    flex: 1,
    width: Utilities.getWidthScreen(),
    justifyContent: 'flex-end',
    alignSelf: 'center',
    ...setPadding(PADDING.p_8, PADDING.p_8, PADDING.p_8, PADDING.p_8)
  },

  title: {
    fontSize: FONT_SIZE.s_18,
    color: COLOR.TEXT.PRIMARY
  },

  line: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLOR.TEXT.PRIMARY
  },

  btnTitleAction: {
    ...setRadius(RADIUS.r_12, RADIUS.r_12, RADIUS.r_0, RADIUS.r_0),
    justifyContent: 'center',
    alignItems: 'center',
    height: LAYOUT.l_50,
    backgroundColor: COLOR.BG.WHITE
  },

  btnContentAction: {
    ...setRadius(RADIUS.r_0, RADIUS.r_0, RADIUS.r_0, RADIUS.r_0),
    justifyContent: 'center',
    alignItems: 'center',
    height: LAYOUT.l_50,
    backgroundColor: COLOR.BG.WHITE
  },

  btnDeleteAction: {
    ...setRadius(RADIUS.r_0, RADIUS.r_0, RADIUS.r_12, RADIUS.r_12),
    justifyContent: 'center',
    alignItems: 'center',
    height: LAYOUT.l_50,
    backgroundColor: COLOR.BG.WHITE
  },

  textDelete: {
    fontSize: FONT_SIZE.s_18,
    textAlign: 'center',
    color: COLOR.TEXT.POSITIVE_BTN
  },

  btnClose: {
    ...setMargin(MARGIN.m_8, MARGIN.m_0, MARGIN.m_0, MARGIN.m_0),
    justifyContent: 'center',
    alignItems: 'center',
    ...setRadius(RADIUS.r_12, RADIUS.r_12, RADIUS.r_12, RADIUS.r_12),
    height: LAYOUT.l_50,
    backgroundColor: COLOR.BG.WHITE
  },

  textClose: {
    fontSize: FONT_SIZE.s_18,
    textAlign: 'center',
    color: COLOR.TEXT.POSITIVE_BTN
  },

  containerScrollView: {
    ...setRadius(RADIUS.r_12, RADIUS.r_12, RADIUS.r_12, RADIUS.r_12),
    backgroundColor: COLOR.BG.WHITE
    // maxHeight:
    //   (Utilities.getWidthScreen() / (LAYOUT.l_50 + StyleSheet.hairlineWidth) - 2) *
    //   (LAYOUT.l_50 + StyleSheet.hairlineWidth)
  },
  containerScrollView2: {
    ...setRadius(RADIUS.r_0, RADIUS.r_0, RADIUS.r_12, RADIUS.r_12),
    backgroundColor: COLOR.BG.WHITE
    // maxHeight:
    //   (Utilities.getWidthScreen() / (LAYOUT.l_50 + StyleSheet.hairlineWidth) - 3) *
    //   (LAYOUT.l_50 + StyleSheet.hairlineWidth)
  },
  contentScrollView: {
    ...setRadius(RADIUS.r_12, RADIUS.r_12, RADIUS.r_12, RADIUS.r_12)
  },
  contentScrollView2: {
    ...setRadius(RADIUS.r_0, RADIUS.r_0, RADIUS.r_12, RADIUS.r_12)
  }
});
