import {MyButtonIcon, MyImage, MyText, MyView, MyViewShadow} from 'bases/components';
import MyButtonNext from 'bases/components/button/MyButtonNext';
import {COLOR} from 'bases/styles/Core';
import React, {PureComponent} from 'react';
import {ScrollView} from 'react-native';
import MyNavigator from 'utils/MyNavigator';
import Utilities from 'utils/Utilities';
import {settingStyle} from './styles/Setting.Style';

export class Setting extends PureComponent {
  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={settingStyle.container}>
        <MyView style={settingStyle.container}>
          {/* avatar */}
          <MyViewShadow style={settingStyle.viewInfor}>
            <MyView style={settingStyle.viewAvatar}>
              <MyImage
                width={settingStyle.imgAvatar.width}
                height={settingStyle.imgAvatar.height}
                style={settingStyle.imgAvatar}
                source={{
                  uri: 'https://i.pinimg.com/564x/12/99/65/129965f644a37ba694f54a59038b8404.jpg'
                }}
              />
            </MyView>
            <MyText myFontStyle="Bold" style={settingStyle.txtUser}>
              Tiến Long
            </MyText>
            <MyText style={settingStyle.txtPhone}>0968829007</MyText>
            <MyText style={settingStyle.txtPhone}>Longtt.dev@gmail.com</MyText>
            {/* Scan */}
            <MyButtonIcon
              style={settingStyle.btnScan}
              iconFontType="MaterialCommunityIcons"
              iconProps={{
                name: 'credit-card-scan-outline',
                color: COLOR.TEXT.BLACK,
                size: 24
              }}
            />
            <MyButtonIcon
              style={settingStyle.btnQr}
              iconFontType="MaterialIcons"
              iconProps={{
                name: 'qr-code-2',
                color: COLOR.TEXT.BLACK,
                size: 24
              }}
            />
          </MyViewShadow>

          {/* nền background */}
          <MyView transparent style={settingStyle.viewBackground}>
            <MyImage
              style={settingStyle.imgBackground}
              width={Utilities.getWidthScreen()}
              height={Utilities.getWidthScreen() / 2.3}
              source={{
                uri: 'https://i.pinimg.com/564x/e7/66/e2/e766e2ee1a50a06850e13c0799f93dab.jpg'
              }}
            />
          </MyView>

          {/* Thông tin */}
          <MyViewShadow style={settingStyle.viewContainer}>
            <MyButtonNext
              // onPress={() => this.onPressCheckLogin('InforPerson')}
              title={'Thông tin cá nhân'}
              iconFontType="MaterialIcons"
              iconProps={{name: 'navigate-next', size: 26, color: COLOR.BG.GRAY}}
            />
            <MyView style={settingStyle.line} />
            <MyButtonNext
              onPress={() => MyNavigator.navigate('CreditCard')}
              title={'Chỉnh sửa thông tin thẻ'}
              iconFontType="MaterialIcons"
              iconProps={{name: 'navigate-next', size: 26, color: COLOR.BG.GRAY}}
            />
            <MyView style={settingStyle.line} />
            <MyButtonNext
              // onPress={() => this.onPressCheckLogin('InforPerson')}
              title={'Lịch sử'}
              iconFontType="MaterialIcons"
              iconProps={{name: 'navigate-next', size: 26, color: COLOR.BG.GRAY}}
            />
            <MyView style={settingStyle.line} />
            <MyButtonNext
              // onPress={() => this.onPressCheckLogin('InforPerson')}
              title={'Danh bạ'}
              iconFontType="MaterialIcons"
              iconProps={{name: 'navigate-next', size: 26, color: COLOR.BG.GRAY}}
            />
            <MyView style={settingStyle.line} />
            <MyButtonNext
              // onPress={() => this.onPressCheckLogin('InforPerson')}
              title={'Cài đặt'}
              iconFontType="MaterialIcons"
              iconProps={{name: 'navigate-next', size: 26, color: COLOR.BG.GRAY}}
            />
          </MyViewShadow>

          {/* cài đặt */}
          <MyViewShadow style={settingStyle.viewContainerSetting}>
            <MyButtonNext
              // onPress={() => this.onPressCheckLogin('InforPerson')}
              title={'Giới thiệu'}
              iconFontType="MaterialIcons"
              iconProps={{name: 'navigate-next', size: 26, color: COLOR.BG.GRAY}}
            />
            <MyView style={settingStyle.line} />
            <MyButtonNext
              // onPress={() => this.onPressCheckLogin('InforPerson')}
              title={'Liên hệ'}
              iconFontType="MaterialIcons"
              iconProps={{name: 'navigate-next', size: 26, color: COLOR.BG.GRAY}}
            />
            <MyView style={settingStyle.line} />
            <MyButtonNext
              // onPress={() => this.onPressCheckLogin('InforPerson')}
              title={'Đăng nhập'}
              iconFontType="MaterialIcons"
              iconProps={{name: 'navigate-next', size: 26, color: COLOR.BG.GRAY}}
            />
          </MyViewShadow>
        </MyView>
      </ScrollView>
    );
  }
}

export default Setting;
