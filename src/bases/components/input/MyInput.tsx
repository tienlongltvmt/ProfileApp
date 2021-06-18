import React, {PureComponent} from 'react';
import {StyleProp, StyleSheet, TextInput, TextInputProps, ViewStyle} from 'react-native';

import {MyText} from 'bases/components/textview/MyText';
import {MyView} from 'bases/components/view/MyView';
import {
  COLOR,
  FONT_SIZE,
  LAYOUT,
  MARGIN,
  PADDING,
  RADIUS,
  setMargin,
  setPadding,
  setRadius,
  TYPE_OF_FONT
} from 'bases/styles/Core';
import {TextInputMask, TextInputMaskProps} from 'react-native-masked-text';
import {PRICE_MASK} from 'common/Constants';

interface IProps extends TextInputProps {
  label?: any | null;
  inputRef?: React.Ref<any>;
  myFontStyle?: 'Regular' | 'Medium' | 'Bold';
  containerStyle?: StyleProp<ViewStyle>;
}

export class MyInput extends PureComponent<IProps> {
  render() {
    const {label, inputRef, myFontStyle, containerStyle} = this.props;
    let textStyle = {};
    if (myFontStyle) {
      switch (myFontStyle) {
        case 'Bold':
          textStyle = {
            fontWeight: 'bold'
          };
          break;
        case 'Medium':
          textStyle = {
            fontWeight: '500'
          };
          break;
        default:
          textStyle = {
            fontWeight: 'normal'
          };
          break;
      }
    } else {
      textStyle = {
        fontWeight: 'normal'
      };
    }
    const labelView = label ? <MyText style={[styles.label, textStyle]}>{label}</MyText> : null;
    return (
      <MyView style={containerStyle}>
        {labelView}
        <TextInput
          placeholderTextColor={COLOR.TEXT.SECONDARY}
          {...this.props}
          placeholder={this.props.placeholder ? this.props.placeholder : 'Nhập...'}
          focusable={false}
          autoCorrect={false}
          allowFontScaling={false}
          ref={inputRef}
          style={[styles.input, this.props.style, textStyle]}
        />
      </MyView>
    );
  }
}

interface IPropsInputMask extends Partial<TextInputMaskProps> {
  label?: any | null;
  inputRef?: React.Ref<any>;
  containerStyle?: StyleProp<ViewStyle>;

  currency?: 'VND' | 'USD';
  myFontStyle?: TYPE_OF_FONT;
  value?: string;
  onTextCallback: (text: string) => void;
}
/**
 ** TextSize default '14'
 ** myFontStyle default 'Regular'
 ** currency default 'VND'
 */

export class MyInputPriceMask extends React.PureComponent<IPropsInputMask> {
  state = {text: this.props.value};

  convertTextMaskToString = (text: string) => {
    if (this.props.currency && this.props.currency !== 'VND') {
      let temp = text.replace(/[$.]+/g, '');
      return temp.replace(/[$,]+/g, '.');
    }
    return text.replace(/[$,]+/g, '');
  };

  render() {
    const {currency, label, inputRef, myFontStyle, containerStyle, style, onTextCallback} =
      this.props;

    let option = PRICE_MASK.INPUT.HIDE;
    if (currency) {
      if (currency !== 'VND') {
        option = PRICE_MASK.INPUT[currency];
      } else {
        option = PRICE_MASK.INPUT.VND;
      }
    }

    let textStyle = {};
    if (myFontStyle) {
      switch (myFontStyle) {
        case 'Bold':
          textStyle = {
            fontWeight: 'bold'
          };
          break;
        case 'Medium':
          textStyle = {
            fontWeight: '500'
          };
          break;
        default:
          textStyle = {
            fontWeight: 'normal'
          };
          break;
      }
    } else {
      textStyle = {
        fontWeight: 'normal'
      };
    }
    const labelView = label ? <MyText style={[styles.label, textStyle]}>{label}</MyText> : null;
    return (
      <MyView style={containerStyle}>
        {labelView}
        <TextInputMask
          placeholderTextColor={COLOR.TEXT.SECONDARY}
          focusable={false}
          autoCorrect={false}
          allowFontScaling={false}
          {...this.props}
          ref={inputRef}
          style={[styles.input, style, textStyle]}
          type={'money'}
          value={this.props.value ? this.props.value : this.state.text}
          onChangeText={text => {
            this.setState({text}, () => {
              onTextCallback(this.convertTextMaskToString(text));
            });
          }}
          options={option}
        />
      </MyView>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: FONT_SIZE.s_14,
    ...setMargin(MARGIN.m_0, MARGIN.m_6, MARGIN.m_0, MARGIN.m_0)
  },
  input: {
    color: COLOR.TEXT.PRIMARY,
    fontSize: FONT_SIZE.s_14,
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_10, PADDING.p_10),
    minHeight: LAYOUT.l_38,
    ...setRadius(RADIUS.r_6, RADIUS.r_6, RADIUS.r_6, RADIUS.r_6)
  },
  inputMask: {
    ...setPadding(PADDING.p_10, PADDING.p_10, PADDING.p_16, PADDING.p_16),
    backgroundColor: COLOR.BG.WHITE,
    color: COLOR.TEXT.BLACK
  }
});
