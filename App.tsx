import React, {Component} from 'react';
import {BackHandler, StyleSheet, ToastAndroid} from 'react-native';
import {Provider} from 'react-redux';
import store from 'views/app';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import {COLOR} from 'bases/styles/Core';
import {enableScreens} from 'react-native-screens';
// import {firebase} from '@react-native-firebase/analytics';
import Router from 'views/router/Router';
import RootLoading from 'bases/components/loading/RootLoading';

enableScreens();

interface IStates {
  validCloseWindow: boolean;
}

export default class App extends Component<{}, IStates> {
  state = {validCloseWindow: false};
  backAction = () => {
    if (this.state.validCloseWindow) {
      BackHandler.exitApp();
    }
    this.setState(
      {
        validCloseWindow: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            validCloseWindow: false
          });
        }, 3000);
        ToastAndroid.show('Nhấn một lần nữa để thoát ra. Tap again to exit', ToastAndroid.SHORT);
      }
    );
    return true;
  };

  async componentDidMount() {
    // await firebase.analytics().setAnalyticsCollectionEnabled(true);
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  componentWillUnmount() {
    // BackHandler.removeEventListener('hardwareBackPress', this.backAction);
  }

  render() {
    return (
      // <Provider store={store}>
      <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom', 'top']}>
        <StatusBar barStyle="dark-content" backgroundColor={COLOR.BG.WHITE} />
        <Router />
        <FlashMessage position="top" />
        <RootLoading />
      </SafeAreaView>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BG.WHITE
  }
});
