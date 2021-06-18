import React, {Component, PureComponent} from 'react';
import {StyleSheet, Modal, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLOR, FONT_SIZE, LAYOUT, PADDING, RADIUS, setPadding, setRadius} from 'bases/styles/Core';
import {MyButton, MyIcon, MyText, MyView} from 'bases/components';
import {connect} from 'react-redux';
import {RootState} from 'views/app/redux/App.Reducer';
import {StorePerson} from 'models/ManagerSetting.Model';
import {ItemLineIndicator} from 'views/app/components/items';
import {IPersonalState} from 'views/personals/redux';

interface IPropsStore {
  isSelected: boolean;
  store: StorePerson;
  addStoreSelected: (store: StorePerson) => void;
}

class StoreItem extends Component<IPropsStore> {
  onSelectStore = () => {
    this.props.addStoreSelected(this.props.store);
  };

  render() {
    const {store, isSelected} = this.props;

    return (
      <MyButton onPress={this.onSelectStore} style={itemStoretyles.content}>
        <MyText myFontStyle="Regular" style={itemStoretyles.text}>
          {store.name}
        </MyText>
        <MyIcon
          name="check"
          iconFontType="AntDesign"
          size={22}
          color={isSelected ? COLOR.TEXT.BLUE : COLOR.TEXT.WHITE}
        />
      </MyButton>
    );
  }
}

interface IProps extends IPersonalState {
  onApDung: (arrStore: StorePerson[]) => void;
}

interface IStates {
  isVisible: boolean;
  arrStoreDaChon: StorePerson[];
  isApDung: boolean;
}

class MyStoreMultiplePicker extends PureComponent<IProps, IStates> {
  state = {isVisible: false, arrStoreDaChon: [], isApDung: true};

  onShow = (storeDaChon: StorePerson[]) => {
    const {infoPersonal} = this.props;

    if (storeDaChon.length === infoPersonal?.stores?.length) {
      let data: StorePerson[] = [{id: 0, name: 'Tất cả'}];
      data = data.concat(infoPersonal?.stores || []);

      this.setState({
        isVisible: true,
        arrStoreDaChon: data
      });
    } else {
      this.setState({
        isVisible: true,
        arrStoreDaChon: storeDaChon
      });
    }
  };

  onHide = () => {
    this.setState({
      isVisible: false
    });
  };

  onSelectStore = (store: StorePerson) => {
    const {infoPersonal} = this.props;
    const {arrStoreDaChon} = this.state;

    if (store?.id === 0) {
      let found = arrStoreDaChon.findIndex((x: StorePerson) => x?.id === store?.id);
      if (found > -1) {
        this.setState({
          arrStoreDaChon: [],
          isApDung: false
        });
      } else {
        let data: StorePerson[] = [{id: 0, name: 'Tất cả'}];
        data = data.concat(infoPersonal?.stores || []);

        this.setState({
          arrStoreDaChon: data,
          isApDung: true
        });
      }
    } else {
      let found = arrStoreDaChon.findIndex((x: StorePerson) => x?.id === store?.id);
      if (found > -1) {
        arrStoreDaChon.splice(found, 1);

        let foundAll = arrStoreDaChon.findIndex((x: StorePerson) => x?.id === 0);
        if (foundAll > -1) {
          arrStoreDaChon.splice(foundAll, 1);
        }
      } else {
        arrStoreDaChon.push(store);
        if (arrStoreDaChon.length === infoPersonal?.stores?.length) {
          arrStoreDaChon.unshift({id: 0, name: 'Tất cả'});
        }
      }
      this.setState({
        arrStoreDaChon: [...arrStoreDaChon],
        isApDung: arrStoreDaChon.length > 0
      });
    }
  };

  submit = () => {
    this.setState(
      {
        isVisible: false
      },
      () => {
        const {arrStoreDaChon} = this.state;
        let foundAll = arrStoreDaChon.findIndex((x: StorePerson) => x?.id === 0);
        if (foundAll > -1) {
          arrStoreDaChon.splice(foundAll, 1);
        }
        this.props.onApDung(arrStoreDaChon);
      }
    );
  };

  renderItem = ({item}: {item: StorePerson}) => {
    const {arrStoreDaChon} = this.state;
    let isSelected = false;
    if (arrStoreDaChon.findIndex((x: StorePerson) => x?.id === item?.id) > -1) {
      isSelected = true;
    }
    return <StoreItem isSelected={isSelected} store={item} addStoreSelected={this.onSelectStore} />;
    // return (
    //   <MyView transparent style={{height: 40}}>

    //   </MyView>
    // );
  };

  keyExtractor = (item: StorePerson) => {
    return item?.id?.toString();
  };

  renderItemSeparatorComponent = () => {
    return <ItemLineIndicator />;
  };

  render() {
    const {isVisible, isApDung} = this.state;
    const {infoPersonal} = this.props;

    let data: StorePerson[] = [{id: 0, name: 'Tất cả'}];
    data = data.concat(infoPersonal?.stores || []);

    return (
      <Modal
        visible={isVisible}
        transparent
        // supportedOrientations={['portrait', 'landscape']}
        animationType="slide"
        hardwareAccelerated
        onRequestClose={this.onHide}>
        {/* <SafeAreaView edges={['left', 'bottom', 'right']} style={styles.container}> */}
        <MyView style={styles.container2}>
          <MyButton
            style={styles.containerToolbar}
            transparent
            onPress={this.onHide}
            activeOpacity={1}
          />

          <MyView style={styles.content}>
            <MyButton style={styles.btnTitle} transparent onPress={this.onHide}>
              <MyText myFontStyle="Regular" style={styles.titleLeft}>
                {'Huỷ bỏ'}
              </MyText>
            </MyButton>
            <MyView style={styles.btnTitle2} transparent>
              <MyText myFontStyle="Bold" style={styles.title}>
                {'Chọn chi nhánh'}
              </MyText>
            </MyView>
            <MyButton
              style={styles.btnTitle}
              transparent
              onPress={this.submit}
              disabled={!isApDung}>
              <MyText
                myFontStyle="Regular"
                style={[
                  styles.titleRight,
                  {color: isApDung ? COLOR.TEXT.BLUE : COLOR.TEXT.SECONDARY}
                ]}>
                {'Áp dụng'}
              </MyText>
            </MyButton>
          </MyView>
          <MyView style={styles.line} />

          <FlatList
            style={styles.modalContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            extraData={data}
            initialNumToRender={10}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.renderItemSeparatorComponent}
          />
          <SafeAreaView edges={['left', 'bottom', 'right']} style={styles.container} />
        </MyView>
        {/* </SafeAreaView> */}
      </Modal>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  const {infoPersonal} = state.PersonalReducer;
  return {infoPersonal};
};

export default connect(mapStateToProps, null, null, {forwardRef: true})(MyStoreMultiplePicker);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BG.WHITE
  },
  container2: {
    flex: 1,
    backgroundColor: COLOR.BG.BLACK_30
  },
  containerToolbar: {
    height: LAYOUT.l_75
  },
  content: {
    ...setRadius(RADIUS.r_12, RADIUS.r_12, RADIUS.r_0, RADIUS.r_0),
    height: LAYOUT.l_46,
    backgroundColor: COLOR.BG.WHITE,
    flexDirection: 'row'
  },
  btnTitle: {
    flex: 1,
    height: '100%',
    justifyContent: 'center'
  },
  btnTitle2: {
    flex: 2,
    height: '100%',
    justifyContent: 'center'
  },
  titleLeft: {
    fontSize: FONT_SIZE.s_16,
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_16, PADDING.p_0),
    color: COLOR.TEXT.BLUE,
    textAlign: 'left'
  },
  title: {
    fontSize: FONT_SIZE.s_18,
    textAlign: 'center'
  },
  titleRight: {
    fontSize: FONT_SIZE.s_16,
    ...setPadding(PADDING.p_0, PADDING.p_0, PADDING.p_0, PADDING.p_16),
    color: COLOR.TEXT.BLUE,
    textAlign: 'right'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLOR.BG.WHITE
  },
  line: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLOR.TEXT.PRIMARY
  }
});

const itemStoretyles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: FONT_SIZE.s_16
  },
  content: {
    backgroundColor: COLOR.BG.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    ...setPadding(PADDING.p_14, PADDING.p_14, PADDING.p_16, PADDING.p_16)
  },
  content2: {
    backgroundColor: COLOR.BG.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    ...setPadding(PADDING.p_14, PADDING.p_14, PADDING.p_0, PADDING.p_16)
  }
});
