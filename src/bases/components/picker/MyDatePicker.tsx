import React, {PureComponent} from 'react';
import {StyleSheet, Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import DatePicker from 'react-native-date-picker';

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
import {MyViewShadow, MyView} from '../view/MyView';
import {MyText} from '../textview/MyText';

const PADDING_TOP = Utilities.getStatusBarHeight() || LAYOUT.l_30;

interface IProps {
  title: string;

  titleButtonChange: string;
  titleButtonCancel: string;
  value?: Date | string;
  onChangeDate: (date: Date) => void;
  mode?: 'date' | 'time' | 'datetime';
  maximumDate?: Date;
}

interface IStates {
  isVisible: boolean;
  date: Date | string;
}

export default class MyDatePicker extends PureComponent<IProps, IStates> {
  state = {
    date: new Date(),
    isVisible: false
  };

  onShow = () => {
    const {value} = this.props;
    if (value) {
      this.setState({
        isVisible: true,
        date: value
      });
    } else {
      this.setState({
        isVisible: true,
        date: new Date()
      });
    }
  };

  onHide = () => {
    this.setState({
      isVisible: false
    });
  };

  onChange = () => {
    this.onHide();
    this.props.onChangeDate(this.state.date);
  };

  render() {
    const {title, titleButtonChange, titleButtonCancel, mode, maximumDate} = this.props;

    const {isVisible, date} = this.state;
    return (
      <Modal
        visible={isVisible}
        transparent
        supportedOrientations={['portrait', 'landscape']}
        animationType="slide"
        hardwareAccelerated
        onRequestClose={this.onHide}>
        <SafeAreaView edges={['left', 'bottom', 'right']} style={styles.container}>
          <MyButton style={styles.container} activeOpacity={1} onPress={this.onHide} transparent>
            <MyViewShadow transparent style={styles.modalContainer}>
              <MyView style={styles.content}>
                <MyText myFontStyle="Regular" style={styles.title}>
                  {title}
                </MyText>
              </MyView>
              <MyView style={styles.line} />
              <DatePicker
                locale="vi"
                mode={mode ? mode : 'date'}
                androidVariant="iosClone"
                date={date}
                style={styles.datePicker}
                textColor={COLOR.TEXT.BLACK}
                fadeToColor={COLOR.BG.WHITE}
                onDateChange={dateValue => this.setState({date: dateValue})}
                maximumDate={maximumDate ? maximumDate : undefined}
              />
              <MyView style={styles.line} />
              <MyButton activeOpacity={1} style={styles.btnDeleteAction} onPress={this.onChange}>
                <MyText myFontStyle="Bold" style={styles.textDelete}>
                  {titleButtonChange}
                </MyText>
              </MyButton>

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
    width: Utilities.getWidthScreen() - PADDING.p_16,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    ...setPadding(PADDING.p_8, PADDING.p_8, PADDING.p_8, PADDING.p_8)
  },

  content: {
    ...setRadius(RADIUS.r_12, RADIUS.r_12, RADIUS.r_0, RADIUS.r_0),
    height: LAYOUT.l_46,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BG.WHITE
  },
  title: {
    fontSize: FONT_SIZE.s_14,
    color: COLOR.TEXT.PRIMARY
  },
  datePicker: {
    width: Utilities.getWidthScreen() - PADDING.p_16 * 2,
    height:
      Utilities.getWidthScreen() -
      PADDING.p_8 * 3 -
      LAYOUT.l_46 * 3 -
      StyleSheet.hairlineWidth * 2 -
      PADDING_TOP,
    backgroundColor: COLOR.BG.WHITE
  },

  line: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLOR.TEXT.PRIMARY
  },

  btnAction: {
    marginTop: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    height: LAYOUT.l_46
  },
  textAction: {
    ...setMargin(MARGIN.m_0, MARGIN.m_0, MARGIN.m_16, MARGIN.m_16),
    fontSize: FONT_SIZE.s_14,
    textAlign: 'center',
    color: COLOR.TEXT.POSITIVE_BTN
  },

  btnDeleteAction: {
    ...setRadius(RADIUS.r_0, RADIUS.r_0, RADIUS.r_12, RADIUS.r_12),
    justifyContent: 'center',
    alignItems: 'center',
    height: LAYOUT.l_46,
    backgroundColor: COLOR.BG.WHITE
  },
  textDelete: {
    fontSize: FONT_SIZE.s_14,
    textAlign: 'center',
    color: COLOR.TEXT.POSITIVE_BTN
  },

  btnClose: {
    ...setMargin(MARGIN.m_8, MARGIN.m_0, MARGIN.m_0, MARGIN.m_0),
    justifyContent: 'center',
    alignItems: 'center',
    ...setRadius(RADIUS.r_12, RADIUS.r_12, RADIUS.r_12, RADIUS.r_12),
    height: LAYOUT.l_46,
    backgroundColor: COLOR.BG.WHITE
  },
  textClose: {
    fontSize: FONT_SIZE.s_14,
    textAlign: 'center',
    color: COLOR.TEXT.NEGATIVE_BTN
  }
});
