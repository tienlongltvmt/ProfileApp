import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {PureComponent} from 'react';
import MyNavigator from 'utils/MyNavigator';
import Utilities from 'utils/Utilities';
import Splash from 'views/splash/Splash';
const RootStack = createStackNavigator();

let navigator: any;
let routeNameRef: any;
export class Router extends PureComponent {
  render() {
    return (
      <NavigationContainer
        ref={nav => {
          if (nav) {
            navigator = nav;
            MyNavigator.setNavigator(nav);
          }
        }}
        onReady={() => {
          routeNameRef = navigator.getCurrentRoute().name;
        }}
        onStateChange={() => {
          const previousRouteName = routeNameRef;
          const currentRouteName = navigator.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName) {
            Utilities.logAnalytics(`Screen_Of_${currentRouteName}`);
          }

          routeNameRef = currentRouteName;
          console.log(routeNameRef);
        }}>
        <RootStack.Navigator headerMode="screen" initialRouteName="Splash">
          <RootStack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Router;
