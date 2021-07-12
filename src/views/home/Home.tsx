import {MyImage} from 'bases/components';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import Utilities from 'utils/Utilities';

export class Home extends PureComponent {
  render() {
    return (
      <View>
        <MyImage
          width={Utilities.getWidthScreen()}
          height={Utilities.getHeightScreen()}
          resizeMode={'contain'}
          source={{uri: 'https://i.pinimg.com/564x/70/b1/5e/70b15ea5ca22568e218c47fe525e7723.jpg'}}
        />
        <Text> https://i.pinimg.com/564x/70/b1/5e/70b15ea5ca22568e218c47fe525e7723.jpg </Text>
      </View>
    );
  }
}

export default Home;
