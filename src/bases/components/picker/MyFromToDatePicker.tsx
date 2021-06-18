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
import {MyButton} from '../button/MyButton';
import {MyView} from '../view/MyView';
import {MyText} from '../textview/MyText';
import {ScrollView} from 'react-native-gesture-handler';
import {IDateRange} from 'views/app';

interface IProps {
  onApDung: (dateRange: IDateRange) => void;
  mode?: 'date' | 'time' | 'datetime';
}

interface IStates {
  isVisible: boolean;
  stateBtn: number;
  dateRange: IDateRange;
  isApDung: boolean;
}

export default class MyFromToDatePicker extends PureComponent<IProps, IStates> {
  state = {isVisible: false, stateBtn: 0, dateRange: {dateFrom: '', dateTo: ''}, isApDung: true};

  onPressApDung = () => {
    this.setState(
      {
        isVisible: false,
        stateBtn: 0,
        isApDung: true
      },
      () => {
        this.props.onApDung(this.state.dateRange);
      }
    );
  };

  onShow = (dateRange: IDateRange) => {
    this.setState({
      isVisible: true,
      dateRange: dateRange
    });
  };

  onHide = () => {
    this.setState({
      isVisible: false,
      stateBtn: 0,
      isApDung: true
    });
  };

  onPressFrom = () => {
    this.setState({
      stateBtn: 1
    });
  };

  onPressTo = () => {
    this.setState({
      stateBtn: 2
    });
  };

  changeDateFrom = (date: Date) => {
    let isApDung: boolean = true;
    if (date > new Date(this.state.dateRange?.dateTo)) {
      isApDung = false;
    }

    this.setState({
      dateRange: {
        dateFrom: Utilities.convertTimeByFormat(date, 'MM/DD/YYYY'),
        dateTo: this.state.dateRange?.dateTo
      },
      isApDung: isApDung
    });
  };

  changeDateTo = (date: Date) => {
    let isApDung: boolean = true;
    if (date < new Date(this.state.dateRange?.dateFrom)) {
      isApDung = false;
    }

    this.setState({
      dateRange: {
        dateFrom: this.state.dateRange?.dateFrom,
        dateTo: Utilities.convertTimeByFormat(date, 'MM/DD/YYYY')
      },
      isApDung: isApDung
    });
  };

  render() {
    const {isVisible, stateBtn, dateRange, isApDung} = this.state;
    const {mode} = this.props;

    return (
      <Modal
        visible={isVisible}
        transparent
        // supportedOrientations={['portrait', 'landscape']}
        animationType="slide"
        hardwareAccelerated
        onRequestClose={this.onHide}>
        <SafeAreaView edges={['left', 'bottom', 'right']} style={styles.container}>
          <MyView style={styles.container} transparent>
            <MyView style={styles.containerToolbar} transparent />

            <MyView style={styles.content}>
              <MyButton style={styles.btnTitle} transparent onPress={this.onHide}>
                <MyText myFontStyle="Regular" style={styles.titleLeft}>
                  {'Huỷ bỏ'}
                </MyText>
              </MyButton>
              <MyView style={styles.btnTitle} transparent>
                <MyText myFontStyle="Bold" style={styles.title}>
                  {'Tuỳ chọn'}
                </MyText>
              </MyView>
              <MyButton
                style={styles.btnTitle}
                transparent
                onPress={this.onPressApDung}
                disabled={!isApDung}>
                <MyText
                  myFontStyle="Regular"
                  style={[
                    styles.titleRight,
                    {color: isApDung ? COLOR.TEXT.BLUE : COLOR.TEXT.SECONDARY}
                  ]}>
                  {'Áp dụng'}
                </MyText>
              </MyButton>
            </MyView>
            <MyView style={styles.line} />

            <ScrollView
              style={styles.modalContainer}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              <MyText style={styles.titleTime}>{'Chọn khoảng thời gian'}</MyText>

              <MyButton onPress={this.onPressFrom} style={styles.viewTime}>
                <MyText myFontStyle="Regular" style={styles.textDate}>
                  {'Từ'}
                </MyText>
                <MyText
                  myFontStyle="Regular"
                  style={stateBtn === 1 ? styles.textDateColor : styles.textDate}>
                  {dateRange?.dateFrom
                    ? Utilities.convertTimeByFormat(dateRange?.dateFrom, 'DD/MM/YYYY')
                    : 'Chọn ngày'}
                </MyText>
              </MyButton>
              <MyView style={styles.line} />

              {stateBtn === 1 ? (
                <MyView transparent style={styles.datePicker}>
                  <DatePicker
                    locale="vi"
                    mode={mode ? mode : 'date'}
                    androidVariant="iosClone"
                    date={dateRange?.dateFrom ? new Date(dateRange?.dateFrom) : new Date()}
                    style={styles.datePicker}
                    textColor={COLOR.TEXT.BLACK}
                    fadeToColor={COLOR.BG.WHITE}
                    onDateChange={this.changeDateFrom}
                  />
                  <MyView style={styles.line} />
                </MyView>
              ) : null}

              <MyButton onPress={this.onPressTo} style={styles.viewTime}>
                <MyText myFontStyle="Regular" style={styles.textDate}>
                  {'Đến'}
                </MyText>
                <MyText
                  myFontStyle="Regular"
                  style={stateBtn === 2 ? styles.textDateColor : styles.textDate}>
                  {dateRange?.dateTo
                    ? Utilities.convertTimeByFormat(dateRange?.dateTo, 'DD/MM/YYYY')
                    : 'Chọn ngày'}
                </MyText>
              </MyButton>
              <MyView style={styles.line} />

              {stateBtn === 2 ? (
                <MyView transparent style={styles.datePicker}>
                  <DatePicker
                    locale="vi"
                    mode={mode ? mode : 'date'}
                    androidVariant="iosClone"
                    date={dateRange?.dateTo ? new Date(dateRange?.dateTo) : new Date()}
                    style={styles.datePicker}
                    textColor={COLOR.TEXT.BLACK}
                    fadeToColor={COLOR.BG.WHITE}
                    onDateChange={this.changeDateTo}
                  />
                  <MyView style={styles.line} />
                </MyView>
              ) : null}
            </ScrollView>
          </MyView>
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
  containerToolbar: {
    height: LAYOUT.l_75
  },

  content: {
    ...setRadius(RADIUS.r_12, RADIUS.r_12, RADIUS.r_0, RADIUS.r_0),
    height: LAYOUT.l_46,
    backgroundColor: COLOR.BG.WHITE,
    flexDirection: 'row'
  },
  btnTitle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center'
  },
  titleLeft: {
    fontSize: FONT_SIZE.s_16,
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_16, PADDING.p_0),
    color: COLOR.TEXT.BLUE,
    textAlign: 'left'
  },
  title: {
    fontSize: FONT_SIZE.s_18,
    textAlign: 'center'
  },
  titleRight: {
    fontSize: FONT_SIZE.s_16,
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_0, PADDING.p_16),
    color: COLOR.TEXT.BLUE,
    textAlign: 'right'
  },

  modalContainer: {
    flex: 1,
    backgroundColor: COLOR.BG.SECONDARY
  },
  titleTime: {
    ...setMargin(MARGIN.m_12, MARGIN.m_10, MARGIN.m_16, MARGIN.m_0)
  },
  viewTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...setPadding(PADDING.p_14, PADDING.p_14, PADDING.p_16, PADDING.p_16),
    backgroundColor: COLOR.BG.WHITE
  },
  textDate: {
    fontSize: FONT_SIZE.s_16
  },
  textDateColor: {
    fontSize: FONT_SIZE.s_16,
    color: COLOR.TEXT.BLUE
  },
  datePicker: {
    width: Utilities.getWidthScreen(),
    backgroundColor: COLOR.BG.WHITE
  },

  line: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLOR.TEXT.PRIMARY
  }
});
