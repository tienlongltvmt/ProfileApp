import {StackActions, CommonActions, DrawerActions, TabActions} from '@react-navigation/native';
import {SCREEN} from 'views/router/type';
import Utilities from './Utilities';

let rootNavigator: any;
let currentScene: string = '';

export default class MyNavigator {
  static setNavigator = (navigator: any) => {
    rootNavigator = navigator;
  };

  static getNavigator = () => rootNavigator;

  static setCurrentScreen = (screen: string) => {
    currentScene = screen;
  };

  static getCurrentScreen = () => {
    return currentScene;
  };

  static openDrawer = () => {
    if (rootNavigator) {
      rootNavigator.dispatch(DrawerActions.openDrawer());
    }
  };

  static closeDrawer = () => {
    if (rootNavigator) {
      rootNavigator.dispatch(DrawerActions.closeDrawer());
    }
  };

  static toggleDrawer = () => {
    if (rootNavigator) {
      rootNavigator.dispatch(DrawerActions.toggleDrawer());
    }
  };

  static replace = (name: SCREEN, params?: any) => {
    if (rootNavigator && name) {
      const action = StackActions.replace(name, params);
      rootNavigator.dispatch(action);
    }
  };

  /* next tab view  */
  static jump = (name: SCREEN, params?: any) => {
    if (rootNavigator && name) {
      const action = TabActions.jumpTo(name, params);
      rootNavigator.dispatch(action);
    }
  };

  /* reset, push only one  */
  static navigate = (name: SCREEN, params?: any) => {
    if (rootNavigator && name) {
      const action = CommonActions.navigate(name, params);
      rootNavigator.dispatch(action);
    }
  };

  static push = (name: SCREEN, params?: any) => {
    if (rootNavigator && name) {
      const action = StackActions.push(name, params);
      rootNavigator.dispatch(action);
    }
  };

  static pop = (count?: number | undefined) => {
    if (rootNavigator && rootNavigator.canGoBack()) {
      const action = count ? StackActions.pop(count) : StackActions.pop();
      rootNavigator.dispatch(action);
    }
  };

  static goBack = () => {
    if (rootNavigator && rootNavigator.canGoBack()) {
      const action = CommonActions.goBack();
      rootNavigator.dispatch(action);
    }
  };

  static popToTop = () => {
    if (rootNavigator && rootNavigator.canGoBack()) {
      const action = StackActions.popToTop();
      rootNavigator.dispatch(action);
    }
  };

  static popTo = (name: any) => {
    if (rootNavigator && rootNavigator.canGoBack()) {
      const state = rootNavigator.getRootState();
      if (state) {
        const arrRoute = state.routes;
        if (arrRoute && arrRoute.length > 0) {
          const indexScreen = arrRoute.findIndex((x: any) => x.name === name);
          if (indexScreen > -1) {
            let count = 0;
            count = arrRoute.length - 1 - indexScreen;
            if (count) {
              const action = StackActions.pop(count);
              rootNavigator.dispatch(action);
            } else {
              Utilities.log('Khong xac dinh duoc');
            }
          } else {
            Utilities.log(`Khong tim thay man hinh de "${name}" popTo trong Stack Navigation`);
          }
        } else {
          Utilities.log(`Khong tim thay "${name}" trong Stack Navigation`);
        }
      } else {
        Utilities.log(`Khong tim thay "${name}"`);
      }
    }
  };

  static refresh = (params: any) => {
    if (rootNavigator) {
      const state = rootNavigator.getRootState();
      if (state) {
        const arrRoute = state.routes;
        if (arrRoute && arrRoute.length > 0) {
          const currentScreen = arrRoute[arrRoute.length - 1];
          if (currentScreen) {
            const action = CommonActions.setParams(params);
            rootNavigator.dispatch(action);
          }
        }
      }
    }
  };

  static reset = (screen: SCREEN) => {
    if (rootNavigator) {
      rootNavigator.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: screen}]
        })
      );
    }
  };
}
