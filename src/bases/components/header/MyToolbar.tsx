import React from 'react';
import {StyleSheet, TouchableOpacityProps, TextProps, TextStyle} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {IconProps} from 'react-native-vector-icons/Icon';

import {MyText} from 'bases/components/textview/MyText';

import {FontType, MyIcon} from 'bases/components/icon/MyIcon';
import {MyButtonIcon} from 'bases/components/button/MyButton';

import {COLOR, FONT_SIZE, LAYOUT, MARGIN, PADDING, setMargin, setPadding} from 'bases/styles/Core';
import MyNavigator from 'utils/MyNavigator';
import {MyView} from '../view/MyView';

interface IToolbarProps {
  isShowBtnLeft?: boolean;
  iconLeftFontType?: FontType;
  iconLeftProps?: IconProps;
  onPressLeft?: () => void;
  buttonLeftProps?: TouchableOpacityProps;

  title?: string;
  titleStyle?: TextStyle;
  titleProps?: TextProps;
  isLongTitle?: boolean;

  isShowIconTitle?: boolean;
  iconTitleFontType?: FontType;
  iconTitleProps?: IconProps;

  isShowBtnRight?: boolean;
  iconRightFontType?: FontType;
  iconRightProps?: IconProps;
  onPressRight?: () => void;
  buttonRightProps?: TouchableOpacityProps;
}

export const MyToolbarPrimary = (props: IToolbarProps) => {
  const {
    isShowBtnLeft,
    iconLeftFontType,
    iconLeftProps,

    onPressLeft,
    buttonLeftProps,

    title,
    titleStyle,
    titleProps,
    isLongTitle,

    isShowIconTitle,
    iconTitleFontType,
    iconTitleProps,

    isShowBtnRight,
    iconRightFontType,
    iconRightProps,

    onPressRight,
    buttonRightProps
  } = props;

  let _viewLeft = <MyView style={ToolbarCss.left} />;
  if (isShowBtnLeft) {
    let leftFontType = iconLeftFontType ? iconLeftFontType : 'SimpleLineIcons';
    let leftFontProps = iconLeftProps
      ? iconLeftProps
      : {name: 'menu', size: 26, color: COLOR.TEXT.WHITE};
    let pressLeft = onPressLeft ? onPressLeft : () => MyNavigator.goBack();
    _viewLeft = (
      <MyButtonIcon
        iconFontType={leftFontType}
        iconProps={leftFontProps}
        style={ToolbarCss.left}
        {...buttonLeftProps}
        onPress={pressLeft}
      />
    );
  }

  let _viewIconTitle = null;
  if (isShowIconTitle) {
    let titleFontType = iconTitleFontType ? iconTitleFontType : 'AntDesign';
    let titleFontProps = iconTitleProps
      ? iconTitleProps
      : {name: 'checkcircleo', size: 20, color: COLOR.TEXT.GREEN};
    _viewIconTitle = <MyIcon iconFontType={titleFontType} {...titleFontProps} />;
  }

  let _viewRight = null;
  if (!isLongTitle) {
    _viewRight = <MyView style={ToolbarCss.right} />;
  }
  if (isShowBtnRight) {
    let rightFontType = iconRightFontType ? iconRightFontType : 'AntDesign';
    let rightFontProps = iconRightProps
      ? iconRightProps
      : {name: 'filter', size: 26, color: COLOR.TEXT.WHITE};
    _viewRight = (
      <MyButtonIcon
        iconFontType={rightFontType}
        iconProps={rightFontProps}
        style={ToolbarCss.right}
        {...buttonRightProps}
        onPress={onPressRight}
      />
    );
  }
  return (
    <SafeAreaView style={ToolbarCss.container} edges={['top']}>
      <MyView style={ToolbarCss.content} transparent>
        {_viewLeft}

        <MyText
          {...titleProps}
          numberOfLines={2}
          style={[isLongTitle ? ToolbarCss.titleLong : ToolbarCss.title, titleStyle]}
          myFontStyle="Bold">
          {_viewIconTitle}
          {title}
        </MyText>

        {_viewRight}
      </MyView>
    </SafeAreaView>
  );
};

interface IToolbarTitle {
  iconLeftFontType: FontType;
  iconLeftProps: IconProps;

  title?: string;
  titleStyle?: TextStyle;
  titleProps?: TextProps;

  onPress?: () => void;
}

// export const MyToolbarTitle = (props: IToolbarTitle) => {
//   const {
//     iconLeftFontType,
//     iconLeftProps,

//     title,
//     titleStyle,
//     titleProps,

//     onPress
//   } = props;

//   return (
//     <SafeAreaView style={ToolbarCss.containerTitle} edges={['top']}>
//       <MyButton style={ToolbarCss.contentTitle} onPress={onPress}>
//         <MyIcon iconFontType={iconLeftFontType} {...iconLeftProps} />
//         <MyText
//           {...titleProps}
//           numberOfLines={1}
//           style={[ToolbarCss.titleSmall, titleStyle]}
//           myFontStyle="Regular">
//           {title}
//         </MyText>
//       </MyButton>
//     </SafeAreaView>
//   );
// };

// interface IToolbarSearchProps {
//   isShowBtnLeft?: boolean;
//   iconLeftFontType?: FontType;
//   iconLeftProps?: IconProps;
//   onPressLeft?: () => void;
//   buttonLeftProps?: TouchableOpacityProps;
// }

const ToolbarCss = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BG.BLACK,
    shadowColor: COLOR.BG.BLACK,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10
  },
  content: {
    height: LAYOUT.l_50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  left: {
    backgroundColor: COLOR.BG.BLACK,
    width: LAYOUT.l_56,
    height: LAYOUT.l_50,
    justifyContent: 'center',
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_12, PADDING.p_0)
  },
  title: {
    color: COLOR.TEXT.WHITE,
    flex: 1,
    fontSize: FONT_SIZE.s_18,
    textAlign: 'center'
  },
  titleLong: {
    flex: 1,
    fontSize: FONT_SIZE.s_18,
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_12, PADDING.p_0)
  },
  right: {
    backgroundColor: COLOR.BG.BLACK,
    width: LAYOUT.l_56,
    height: LAYOUT.l_50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_0, PADDING.p_12)
  },

  containerTitle: {
    backgroundColor: COLOR.BG.WHITE
  },
  contentTitle: {
    backgroundColor: COLOR.BG.WHITE,
    height: LAYOUT.l_30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_16, PADDING.p_16)
  },
  titleSmall: {
    fontSize: FONT_SIZE.s_12,
    textAlign: 'center',
    color: COLOR.TEXT.PRIMARY,
    ...setMargin(MARGIN.m_0, MARGIN.m_0, MARGIN.m_4, MARGIN.m_0)
  }
});
