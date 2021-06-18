import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import {COLOR, PADDING, setPadding} from 'bases/styles/Core';

export const MyLoading = () => {
  return <ActivityIndicator size="large" color={COLOR.TEXT.PRIMARY} style={styles.content} />;
};

const styles = StyleSheet.create({
  content: {
    ...setPadding(PADDING.p_0, PADDING.p_16, PADDING.p_0, PADDING.p_0)
  }
});
