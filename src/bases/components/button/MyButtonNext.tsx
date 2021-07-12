import {FONT_SIZE, PADDING, setPadding} from 'bases/styles/Core';
import React, {PureComponent} from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import {FontType, MyIcon} from '../icon/MyIcon';
import {MyText} from '../textview/MyText';

interface IProps extends TouchableOpacityProps {
  title: string;
  titleFontStyle?: 'Regular' | 'Medium' | 'Bold';
  titleStyle?: TextStyle;
  iconFontType: FontType;
  iconProps: IconProps;
  onPress?: () => void;
}

export default class MyButtonNext extends PureComponent<IProps> {
  render() {
    const {title, titleFontStyle, titleStyle, iconFontType, iconProps} = this.props;
    return (
      <TouchableOpacity style={styles.container} {...this.props}>
        <MyText
          myFontStyle={titleFontStyle ? titleFontStyle : 'Regular'}
          style={[styles.txtTitle, titleStyle]}>
          {title}
        </MyText>
        <MyIcon iconFontType={iconFontType} size={18} {...iconProps} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    ...setPadding(PADDING.p_16, PADDING.p_16, PADDING.p_16, PADDING.p_16),
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtTitle: {
    fontSize: FONT_SIZE.s_12
  }
});
