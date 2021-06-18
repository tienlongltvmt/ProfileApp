import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  FlatList,
  FlatListProps
} from 'react-native';
import {MyIcon} from '../icon/MyIcon';
import {PADDING, FONT_SIZE} from 'bases/styles/Core';

export interface AppProps {
  style?: object | Array<any>;
  Data: Array<string>;
  defaultValue?: string;
  renderRow: (item: any, index: number, indexHighlight: number) => void;
  isRenderItem: boolean;
  dropdownStyle?: object | Array<any>;
  textStyle?: object | Array<any>;
  propsFlatList?: FlatListProps<any>;
}

export interface AppState {
  showDropdown: boolean;
  value: string;
  indexHighlight: number;
}

export default class Dropdown extends React.Component<AppProps, AppState> {
  _button: any;
  _buttonFrame: any;

  constructor(props: AppProps) {
    super(props);
    this._button = null;
    this._buttonFrame = null;
    this.state = {
      showDropdown: false,
      value: props.defaultValue || props.Data[0] || '',
      indexHighlight: 0
    };
  }
  _updatePosition(callback: any) {
    if (this._button && this._button.measure) {
      this._button.measure((fx: any, fy: any, width: any, height: any, px: any, py: any) => {
        this._buttonFrame = {x: px, y: py, w: width, h: height};
        callback && callback();
      });
    }
  }
  _calcPosition() {
    const {dropdownStyle, style} = this.props;

    const dimensions = Dimensions.get('window');
    const windowWidth = dimensions.width;
    const windowHeight = dimensions.height;

    const dropdownHeight =
      (dropdownStyle && StyleSheet.flatten(dropdownStyle).height) ||
      StyleSheet.flatten(styles.dropdown).height;

    const bottomSpace = windowHeight - this._buttonFrame.y - this._buttonFrame.h;
    const rightSpace = windowWidth - this._buttonFrame.x;
    const showInBottom = bottomSpace >= dropdownHeight || bottomSpace >= this._buttonFrame.y;
    const showInLeft = rightSpace >= this._buttonFrame.x;

    const positionStyle: any = {
      height: dropdownHeight,
      top: showInBottom
        ? this._buttonFrame.y + this._buttonFrame.h
        : Math.max(0, this._buttonFrame.y - dropdownHeight)
    };

    if (showInLeft) {
      positionStyle.left = this._buttonFrame.x;
    } else {
      const dropdownWidth =
        (dropdownStyle && StyleSheet.flatten(dropdownStyle).width) ||
        (style && StyleSheet.flatten(style).width) ||
        -1;
      if (dropdownWidth !== -1) {
        positionStyle.width = dropdownWidth;
      }
      positionStyle.right = rightSpace - this._buttonFrame.w;
    }
    return positionStyle;
  }
  show() {
    if (this.props.Data.length > 1) {
      this._updatePosition(() => {
        this.setState({
          showDropdown: true
        });
      });
    }
  }
  chooseValue = (value: string, indexHighlight: number) => {
    this.setState({
      showDropdown: false,
      value: value,
      indexHighlight
    });
  };
  hide() {
    this.setState({
      showDropdown: false
    });
  }
  _renderButton() {
    const {textStyle, Data} = this.props;
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            const {showDropdown} = this.state;
            if (showDropdown) {
              return this.hide();
            }
            return this.show();
          }}
          style={styles.btnDropdown}
          ref={ref => {
            this._button = ref;
          }}>
          <View style={styles.viewDropdown}>
            <Text style={[styles.buttonText, textStyle]} numberOfLines={1}>
              {this.state.value}
            </Text>
          </View>
          <MyIcon name="caretdown" iconFontType="AntDesign" size={18} color={'black'} />
        </TouchableOpacity>
      </>
    );
  }

  _renderModal() {
    const {showDropdown} = this.state;
    const {dropdownStyle} = this.props;
    if (showDropdown && this._buttonFrame) {
      const frameStyle = this._calcPosition();
      return (
        <Modal
          animationType={'fade'}
          visible={true}
          transparent={true}
          supportedOrientations={[
            'portrait',
            'portrait-upside-down',
            'landscape',
            'landscape-left',
            'landscape-right'
          ]}>
          <TouchableWithoutFeedback
            disabled={!showDropdown}
            onPress={() => {
              this.hide();
            }}>
            <View style={styles.modal}>
              <View style={[styles.dropdown, dropdownStyle, frameStyle]}>
                {this._renderDropdown()}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
    }
  }
  _renderRow = ({item, index}: {item: any; index: number}) => {
    const {renderRow, isRenderItem} = this.props;
    if (isRenderItem) {
      return renderRow(item, index, this.state.indexHighlight);
    }
    return (
      <TouchableOpacity>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  _renderDropdown() {
    const {Data, propsFlatList} = this.props;
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={Data}
        extraData={Data}
        {...propsFlatList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderRow}
      />
    );
  }

  public render() {
    return (
      <View {...this.props}>
        {this._renderButton()}
        {this._renderModal()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modal: {
    flexGrow: 1
  },
  dropdown: {
    position: 'absolute',
    height: (33 + StyleSheet.hairlineWidth) * 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    borderRadius: 2,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  btnDropdown: {
    flexDirection: 'row',
    paddingHorizontal: PADDING.p_8,
    paddingBottom: PADDING.p_8
  },
  viewDropdown: {
    flex: 1,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: FONT_SIZE.s_16
  }
});
