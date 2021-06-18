import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';

import {RADIUS, setRadius} from 'bases/styles/Core';

interface IProps extends FastImageProps {
  width: number;
  height: number;
  children?: any | null;
}

export const MyImage = (props: IProps) => {
  const {children, style, width, height} = props;

  return (
    <FastImage
      resizeMode="cover"
      {...props}
      style={[styles.image, style, {width: width, height: height}]}>
      {children}
    </FastImage>
  );
};

const styles = StyleSheet.create({
  image: {
    ...setRadius(RADIUS.r_16, RADIUS.r_16, RADIUS.r_16, RADIUS.r_16)
  }
});
