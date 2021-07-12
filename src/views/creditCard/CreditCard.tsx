import {MyInput, MyText, MyView} from 'bases/components';
import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import {creditCardStyle} from './style/creditCard.Style';

interface IAppProps {}

interface IAppState {
  name: string;
  numberCard: string;
}

class CreditCard extends PureComponent<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      name: '',
      numberCard: ''
    };
  }
  onChangeNumberCard = (text: string) => {
    this.setState({
      numberCard: text
    });
  };
  onChangeName = (text: string) => {
    this.setState({
      name: text.toUpperCase()
    });
  };
  render() {
    const {name, numberCard} = this.state;
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={creditCardStyle.container}>
        <MyView style={creditCardStyle.viewCard}>
          <MyText>{numberCard}</MyText>
          <MyText>{name}</MyText>
        </MyView>
        <MyView style={creditCardStyle.viewInput}>
          <MyText>Số Tài Khoản</MyText>
          <MyInput
            value={numberCard}
            keyboardType={'number-pad'}
            onChangeText={this.onChangeNumberCard}
            style={creditCardStyle.inputNumber}
          />
          <MyText>Tên Tài Khoản</MyText>
          <MyInput
            value={name}
            onChangeText={this.onChangeName}
            style={creditCardStyle.inputNumber}
          />
        </MyView>
      </ScrollView>
    );
  }
}

export default CreditCard;
