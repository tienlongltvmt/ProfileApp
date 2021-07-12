import React, {Component} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const MainStack = createBottomTabNavigator();

import HomeScreen from 'views/home/Home';
import SettingScreen from 'views/setting/Setting';
import PersonScreen from 'views/person/Person';
import {COLOR, FONT_FAMILY, PADDING, setPadding} from 'bases/styles/Core';
import {SvgCss} from 'react-native-svg';
import Utilities from 'utils/Utilities';

export default class RouterBottomTab extends Component {
  render() {
    return (
      <MainStack.Navigator
        tabBarOptions={{
          activeTintColor: COLOR.TAB.ACTIVE,
          inactiveTintColor: COLOR.TAB.INACTIVE,
          showLabel: true,
          labelStyle: {
            fontFamily: FONT_FAMILY.Bold,
            ...setPadding(PADDING.p_4, PADDING.p_4, PADDING.p_0, PADDING.p_0)
          }
        }}>
        <MainStack.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            title: 'Trang chủ',
            tabBarIcon: ({color}) => <SvgCss xml={Utilities.getSvgTrangChu(color)} />
          }}
        />
        <MainStack.Screen
          name="Person"
          component={PersonScreen}
          options={{
            title: 'HomeTab',
            tabBarIcon: ({color}) => <SvgCss xml={Utilities.getSvgTrangChu(color)} />
          }}
        />
        <MainStack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: 'Cài đặt',
            tabBarIcon: ({color}) => <SvgCss xml={Utilities.getSvgTaiKhoan(color)} />
          }}
        />
      </MainStack.Navigator>
    );
  }
}
