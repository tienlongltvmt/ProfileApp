import {MyImage} from 'bases/components';
import React, {PureComponent} from 'react';
import {View} from 'react-native';
import MyNavigator from 'utils/MyNavigator';
import Utilities from 'utils/Utilities';

export class Splash extends PureComponent {
  timeOut: any = null;

  componentDidMount() {
    this.timeOut = setTimeout(() => {
      MyNavigator.replace('HomeRouter');
    }, 1000);
  }

  componentDidUpdate() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
  }
  render() {
    return (
      <View>
        <MyImage
          width={Utilities.getWidthScreen()}
          height={Utilities.getHeightScreen()}
          resizeMode={'contain'}
          source={{uri: 'https://i.pinimg.com/564x/bc/80/63/bc8063470e0adbcd6a799a2dee89c487.jpg'}}
        />
      </View>
    );
  }
}

export default Splash;
