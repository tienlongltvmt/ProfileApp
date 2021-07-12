import {MyImage} from 'bases/components';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import Utilities from 'utils/Utilities';

export class Person extends PureComponent {
  render() {
    return (
      <View>
        <MyImage
          width={Utilities.getWidthScreen()}
          height={Utilities.getHeightScreen()}
          resizeMode={'contain'}
          source={{uri: 'https://i.pinimg.com/564x/8a/03/4f/8a034f47250dddddeb7637e0d8b9262b.jpg'}}
        />
        <Text> https://i.pinimg.com/564x/8a/03/4f/8a034f47250dddddeb7637e0d8b9262b.jpg </Text>
      </View>
    );
  }
}

export default Person;
