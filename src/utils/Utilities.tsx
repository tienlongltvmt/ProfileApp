import {Platform, Dimensions, PixelRatio, StatusBar} from 'react-native';

import moment from 'moment';
import {showMessage} from 'react-native-flash-message';
import {DATE_TIME_LIST, LIST_GENDER, ORDER_STATUS, TYPE_MESSAGE_RESPONSE} from 'common/Constants';
import {IDateRange} from 'views/app';
import MyStaticLocal from './MyStaticLocal';

const {width, height} = Dimensions.get('screen');
const sizeOfWidth = 375;
const sizeOfHeight = 812;

let rootLoadingContext: any = null;

const imageDefault = require('../assets/images/imgDefault.png');

export default class Utilities {
  static showToast(
    title: string,
    message?: string,
    type: 'none' | 'default' | 'info' | 'success' | 'danger' | 'warning' = 'default',
    duration = 1850
  ) {
    showMessage({
      message: title,
      description: message,
      type: type,
      duration: duration
    });
  }

  static convertLinkImage(url?: string, size?: string) {
    try {
      if (!url) return imageDefault;
      if (
        url.startsWith('http://cdn-thumb-image') ||
        url.startsWith('https://cdn-thumb-image') ||
        url.startsWith('cdn-thumb-image.lep.vn') ||
        url.startsWith('cdn-thumb-image.lep.vn')
      ) {
        if (
          url.endsWith('.png') ||
          url.endsWith('.PNG') ||
          url.endsWith('.jpg') ||
          url.endsWith('.JPG') ||
          url.endsWith('.jpeg') ||
          url.endsWith('.JPEG') ||
          url.endsWith('.gif') ||
          url.endsWith('.GIF')
        ) {
          const arrUrls = String(url).split('.');
          let urlMix = '';

          urlMix = arrUrls.slice(0, arrUrls.length - 1).join('.');
          urlMix += size + '.' + arrUrls[arrUrls.length - 1];
          return {uri: urlMix};
        }
        return {uri: url};
      }
      return {uri: url};
    } catch (error) {
      return imageDefault;
    }
  }

  /* 
    sizeOfItemDesign - kich thuoc chieu rong cua view can tinh toan
    sizeOfWidth - kich thuoc man hinh theo thiet ke theo chieu rong (Width)
  */
  static getResolutionByWidth = (sizeOfItemDesign: any) =>
    (sizeOfItemDesign / sizeOfWidth) * Utilities.getWidthScreen();

  /* 
    sizeOfItemDesign - kich thuoc chieu cao cua view can tinh toan
    sizeOfHeight - kich thuoc man hinh thiet ke theo chieu cao (Height)
  */
  static getResolutionByHeight = (sizeOfItemDesign: any) =>
    (sizeOfItemDesign / sizeOfHeight) * Utilities.getHeightScreen();

  static isAndroid = () => {
    return Platform.OS === 'android';
  };

  static isIphoneX() {
    const dim = Dimensions.get('window');

    return (
      Platform.OS === 'ios' &&
      (dim.height === 812 || dim.width === 812 || dim.height === 896 || dim.width === 896)
    );
  }

  static log(log: any) {
    if (__DEV__) {
      // console.log(log);
      const Reactotron = require('reactotron-react-native');
      Reactotron.default.log(log);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async logAnalytics(eventName: string) {
    // if (!__DEV__) {
    //     await analytics().logEvent(eventName);
    // }
  }

  static logException(nameComponent: any, error: any) {
    if (__DEV__) {
      console.log(`${nameComponent}.js`, error);
      Utilities.log(` | ${nameComponent}.js | ${String(error)} | ${String(JSON.stringify(error))}`);
    } else {
      //   crashlytics().recordError(
      //       error,
      //       `${'v. | '}${nameComponent}.js | ${String(error)} | ${String(JSON.stringify(error))}`
      //   );
    }
  }

  static getWidthScreen(isPixel?: any) {
    if (width < height) {
      if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(width);
      return width;
    }
    if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(height);
    return height;
  }

  static getHeightScreen(isPixel?: any) {
    if (width < height) {
      if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(height);
      return height;
    }
    if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(width);
    return width;
  }

  static getKeyboardType(type: any) {
    switch (type) {
      case 'text':
        return 'default';

      case 'int':
        return 'number-pad';

      case 'float':
        return 'numeric';

      default:
        return 'default';
    }
  }

  /**
   ** isInt: tạo ra số hay không
   ** maxInt: số lớn nhất có thể được tạo
   *
   */
  static randomNumber(isInt?: boolean, maxInt?: number) {
    if (isInt) {
      if (maxInt) {
        return Math.floor(Math.random() * Math.floor(maxInt));
      } else {
        return Math.floor(Math.random() * Math.floor(10000));
      }
    } else {
      return Math.random().toString(16).substring(2, 10);
    }
  }

  static convertTimeByFormat(date?: any, format?: string, isFromNow?: boolean) {
    try {
      let dateTmp: Date;
      let time = '';
      if (!date) return '';
      if (typeof date === 'number') {
        const currentTimeMili = Date.now();
        const currentTimeMiliStr = (currentTimeMili / 1000).toFixed(0);
        if (String(date).length <= String(currentTimeMiliStr).length) {
          dateTmp = new Date(date * 1000);
          time = moment(dateTmp).format(format);
        }
      }
      /* convert time unix */
      // if (typeof date === 'number') {
      //   if (date < 0) {
      //     return moment.unix(date).format(format);
      //   }
      //   return moment(new Date(date * 1000)).format(format);
      // }
      if (!date || String(date).toLowerCase().includes('invalid')) {
        time = '';
      }

      const formartTmp = format || 'DD/MM/YYYY HH:mm';
      dateTmp = new Date(date);
      time = moment(dateTmp).format(formartTmp);
      if (isFromNow) {
        // qua 1 nam thi hien thi day du ngay gio
        // if (new Date().getTime() - dateTmp.getTime() >= 31622400000) {
        //   return time;
        // }
        time = moment(dateTmp).fromNow();
      }
      return time;
    } catch (error) {
      return '';
    }
  }

  static setHideRootLoading(context: any) {
    rootLoadingContext = context;
  }
  static currencyFormat(num: number) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' đ';
  }
  static currencyFormatNumber(num?: number) {
    if (num) {
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return 0;
  }
  static showHideRootLoading(isShow: boolean, textBody?: string) {
    try {
      if (rootLoadingContext && isShow === false && rootLoadingContext.state.isShow === false)
        return;
      if (rootLoadingContext && isShow === true && rootLoadingContext.state.isShow === true) return;

      rootLoadingContext.setState({
        isShow,
        textBody: textBody || '...'
      });
    } catch (error) {
      Utilities.logException('showHideRootLoading', error);
    }
  }

  static setPaymentMethodContent = (method: number) => {
    let paymentContent = 'Tiền Mặt';
    if (method === 4) {
      paymentContent = 'ATM';
    } else if (method === 3) {
      paymentContent = 'Chuyển khoản';
    }
    return paymentContent;
  };

  static setStatusOrderContent = (type: string, status: string) => {
    let statusOrderContent = 'Không xác định';
    const index = ORDER_STATUS.findIndex(x => x.type === type);
    if (index > -1) {
      const indexOfStatus = ORDER_STATUS[index].list.findIndex(x => x.id === status);
      if (indexOfStatus > -1) {
        statusOrderContent = ORDER_STATUS[index].list[indexOfStatus].name;
      }
    }
    return statusOrderContent;
  };

  static setTimeFilterText = (
    idSelected: string | null,
    minTime: string | null,
    maxTime: string | null
  ) => {
    let content = 'Toàn thời gian';
    if (idSelected) {
      const index = DATE_TIME_LIST.findIndex(x => x.id === idSelected);
      if (index > -1) {
        content = DATE_TIME_LIST[index].name;
      } else {
        let minTimeTextV = '';
        let maxTimeTextV = '';
        if (minTime) {
          minTimeTextV = Utilities.convertTimeByFormat(minTime, 'DD/MM/YYYY');
        }
        if (maxTime) {
          maxTimeTextV = Utilities.convertTimeByFormat(maxTime, 'DD/MM/YYYY');
        }
        content = minTimeTextV + ' - ' + maxTimeTextV;
      }
    } else {
      let minTimeTextV = '';
      let maxTimeTextV = '';
      if (minTime) {
        minTimeTextV = Utilities.convertTimeByFormat(minTime, 'DD/MM/YYYY');
      }
      if (maxTime) {
        maxTimeTextV = Utilities.convertTimeByFormat(maxTime, 'DD/MM/YYYY');
      }
      content = minTimeTextV + ' - ' + maxTimeTextV;
    }
    return content;
  };

  static setMessageContent = (id: string) => {
    let content = '';
    const findMess = TYPE_MESSAGE_RESPONSE.find(x => x.id === id);
    if (findMess) {
      content = findMess.value;
    }
    return content;
  };

  static setGender = (id: string) => {
    let content = '';
    const findGender = LIST_GENDER.find(x => x.code === id);
    if (findGender) {
      content = findGender.name;
    }
    return content;
  };

  static setStatusPayment = (id: string) => {
    let content = 'Hoàn thành';
    if (id === 'completed') {
      content = 'Hoàn thành';
    }
    return content;
  };

  static getDateFilter(
    typeDate:
      | 'TOAN_THOI_GIAN'
      | 'HOM_NAY'
      | 'HOM_QUA'
      | 'TUAN_NAY'
      | 'TUAN_TRUOC'
      | 'THANG_NAY'
      | 'THANG_TRUOC'
      | 'NAM_NAY'
      | 'NAM_TRUOC'
  ): IDateRange {
    let formatOnServer = 'MM/DD/YYYY';
    let filterOfDate: IDateRange = {};
    let dateNow = new Date();
    switch (typeDate) {
      case 'TOAN_THOI_GIAN':
        const allTimeTo = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());

        filterOfDate = {
          dateFrom: moment(0).format(formatOnServer),
          dateTo: moment(allTimeTo).format(formatOnServer)
        };
        break;
      case 'HOM_NAY':
        const today = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());

        filterOfDate = {
          dateFrom: moment(today).format(formatOnServer),
          dateTo: moment(today).format(formatOnServer)
        };
        break;

      case 'HOM_QUA':
        const yesterday = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth(),
          dateNow.getDate() - 1
        );
        filterOfDate = {
          dateFrom: moment(yesterday).format(formatOnServer),
          dateTo: moment(yesterday).format(formatOnServer)
        };
        break;

      case 'TUAN_NAY':
        const thisWeek = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 1
        );

        filterOfDate = {
          dateFrom: moment(
            new Date(thisWeek.setDate(thisWeek.getDate() - thisWeek.getDay() + 1))
          ).format(formatOnServer),
          dateTo: moment(
            new Date(thisWeek.setDate(thisWeek.getDate() - thisWeek.getDay() + 7))
          ).format(formatOnServer)
        };

        break;

      case 'TUAN_TRUOC':
        const lastWeek = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 7
        );

        filterOfDate = {
          dateFrom: moment(
            new Date(lastWeek.setDate(lastWeek.getDate() - lastWeek.getDay() + 1))
          ).format(formatOnServer),
          dateTo: moment(
            new Date(lastWeek.setDate(lastWeek.getDate() - lastWeek.getDay() + 7))
          ).format(formatOnServer)
        };

        break;

      case 'THANG_NAY':
        const thisMonth = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());

        filterOfDate = {
          dateFrom: moment(new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1)).format(
            formatOnServer
          ),
          dateTo: moment(new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0)).format(
            formatOnServer
          )
        };
        break;

      case 'THANG_TRUOC':
        const lastMonth = new Date(
          dateNow.getFullYear(),
          dateNow.getMonth() - 1,
          dateNow.getDate()
        );
        filterOfDate = {
          dateFrom: moment(new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1)).format(
            formatOnServer
          ),
          dateTo: moment(new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0)).format(
            formatOnServer
          )
        };

        break;
      case 'NAM_NAY':
        const thisYear = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        filterOfDate = {
          dateFrom: moment(new Date(thisYear.getFullYear(), 0, 1)).format(formatOnServer),
          dateTo: moment(new Date(thisYear.getFullYear() + 1, 0, 0)).format(formatOnServer)
        };

        break;
      case 'NAM_TRUOC':
        const lastYear = new Date(dateNow.getFullYear() - 1, dateNow.getMonth(), dateNow.getDate());
        filterOfDate = {
          dateFrom: moment(new Date(lastYear.getFullYear(), 0, 1)).format(formatOnServer),
          dateTo: moment(new Date(lastYear.getFullYear() + 1, 0, 0)).format(formatOnServer)
        };

        break;

      default:
        const defaultDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());

        filterOfDate = {
          dateFrom: moment(defaultDate).format(formatOnServer),
          dateTo: moment(defaultDate).format(formatOnServer)
        };
        break;
    }

    return filterOfDate;
  }
  static getImageLogo = (widthLogo: number, heightLogo: number) => {
    const logo = `<svg xmlns="http://www.w3.org/2000/svg" width=${widthLogo} height=${heightLogo} viewBox="0 0 80 120">
    <path id="Path_22777" data-name="Path 22777" d="M100.3,75.442l-.2-.156a.607.607,0,0,1-.1-.88,28.359,28.359,0,0,0,3.457-5.93q1.555-3.647,2.629-6.994a1.078,1.078,0,0,1,1.452-.662l4.89,2.093a1.06,1.06,0,0,1,.406,1.658,66.706,66.706,0,0,1-5.982,6.122,48.866,48.866,0,0,1-5.832,4.776A.629.629,0,0,1,100.3,75.442ZM88.234,87.608q2.815-4.186,7.04-4.187a7.215,7.215,0,0,1,6.543,4.023,15.061,15.061,0,0,1,1.988,9.032q-6.3,2.053-18.967,1.724A21.9,21.9,0,0,1,88.234,87.608ZM73.148,56.5q.166-6.65.331-9.688l-1.5.082a17.712,17.712,0,0,0-7.127,6.576q.253,6.007.261,11.979V99.274l.5,7.718,2.283-.537a1.107,1.107,0,0,0,.516-.279,16.134,16.134,0,0,0,4.764-8.44c-.067-1.8-.108-3.635-.108-5.522V61.263Zm28.685,62.412c-.476.036-.95.056-1.425.056a14.509,14.509,0,0,1-11.595-5.008q-4.806-5.335-4.058-14.367H112q1.075-8.291-3.313-13.136-4.06-4.515-11.6-4.515a20.153,20.153,0,0,0-14.743,5.992A21.265,21.265,0,0,0,76.059,103.7q0,8.867,5.632,14.45,5.548,5.337,14.163,5.336a21.785,21.785,0,0,0,5.979-.805Zm30.513,22.531q-3.561,5.254-8.945,5.254a10.589,10.589,0,0,1-9.11-4.843v-25.7q4.305-5.007,10.021-5.009a9.716,9.716,0,0,1,8.532,4.844q3.063,4.763,3.064,12.233Q135.908,136.19,132.347,141.444ZM139.8,111.4a14.781,14.781,0,0,0-11.1-4.762,16.206,16.206,0,0,0-8.365,2.463,30.73,30.73,0,0,0-6.047,5.255l-.5-7.717-2.124.5a17.764,17.764,0,0,0-5.621,5.1q.283,4.411.29,9.179v30.952l-.083,4.762q-.167,6.65-.33,9.688l2.268-.125a19.668,19.668,0,0,0,6.455-4.329q-.355-7.117-.358-14.184v-.657a75.043,75.043,0,0,0,7.869.657,22.258,22.258,0,0,0,22.693-22.823Q144.853,116.652,139.8,111.4Z" transform="translate(-64.853 -46.813)" fill="#ad2a30"/>
  </svg>
    `;

    return logo;
  };
  static getHeaderRequest = () => {
    const {access_token} = MyStaticLocal.getUserToken();
    return {
      Authorization: 'Bearer ' + access_token
    };
  };

  static getArrHourInDay() {
    let arrHour: string[] = [];
    for (let index = 1; index <= 24; index++) {
      if (index < 10) {
        arrHour.push('0' + index.toString());
      } else {
        arrHour.push(index.toString());
      }
    }
    return arrHour;
  }

  static addDays(date: Date, days: number) {
    const newDate = date;
    date.setDate(date.getDate() + days);
    return newDate;
  }

  static getArrDateBetweenDate(startDate: number, endDate: number) {
    try {
      const dates: string[] = [];

      const now = new Date();
      const endDateTime = new Date(endDate);

      let currentDate = new Date(startDate);

      while (currentDate <= endDateTime && currentDate <= now) {
        dates.push(this.convertTimeByFormat(currentDate, 'DD/MM/YYYY'));
        currentDate = this.addDays(currentDate, 1);
      }
      return dates;
    } catch (error) {
      return [];
    }
  }

  static getArrMonthBetweenDate(startDate: number, endDate: number) {
    try {
      const now = new Date().getTime();
      let startDate1 = Utilities.convertTimeByFormat(startDate, 'YYYY-MM-DD');
      let endDate1 =
        endDate <= now
          ? Utilities.convertTimeByFormat(endDate, 'YYYY-MM-DD')
          : Utilities.convertTimeByFormat(now, 'YYYY-MM-DD');

      let start: string[] = startDate1.split('-');
      let end: string[] = endDate1.split('-');

      let startYear = parseInt(start[0], 10);
      let endYear = parseInt(end[0], 10);

      let months = [];

      for (let i = startYear; i <= endYear; i++) {
        let endMonth = i !== endYear ? 11 : parseInt(end[1], 10) - 1;
        let startMon = i === startYear ? parseInt(start[1], 10) - 1 : 0;
        for (let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
          let month = j + 1;
          let displayMonth = month < 10 ? '0' + month : month;
          months.push([displayMonth, i].join(':'));
        }
      }
      return months;
    } catch (error) {
      return [];
    }
  }

  static getArrYearBetweenDate(startDate: number, endDate: number) {
    const now = new Date().getFullYear();
    const start = new Date(startDate).getFullYear();
    const end = new Date(endDate).getFullYear();

    const endTmp = end <= now ? end : now;

    let years: string[] = [];

    for (let index = start; index <= endTmp; index++) {
      years.push(index.toString());
    }
    return years;
  }
  static getStatusBarHeight(): number {
    if (Platform.OS === 'android') {
      return StatusBar.currentHeight || Utilities.getResolutionByHeight(30);
    } else {
      return Utilities.getResolutionByHeight(30);
    }
  }

  static convertCurrency(mony: number) {
    const currentMony = mony.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    if (currentMony.length > 12) {
      const sliceMony = currentMony.slice(0, currentMony.length - 9);
      return sliceMony + ' Tỷ';
    } else if (currentMony.length > 8) {
      const sliceMony = currentMony.slice(0, currentMony.length - 5);
      return sliceMony + ' Triệu';
    }
    return currentMony;
  }
  static convertCount(count: number) {
    const currentCount = count.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return currentCount;
  }
  static returnColorBangChuCai(character: string) {
    let mapColorCharacter: any = {
      '1': '#1e90ff',
      '2': '#008b8b',
      '3': '#483d8b',
      '4': '#6a5acd',
      '5': '#5f9ea0',
      '6': '#6495ed',
      '7': '#0000ff',
      '8': '#8a2be2',
      '9': '#00008b',
      A: '#00bfff',
      Ă: '#000000',
      Â: '#006400',
      B: '#8b008b',
      C: '#2f4f4f',
      D: '#00ced1',
      Đ: '#696969',
      E: '#228b22',
      Ê: '#4b0082',
      G: '#556b2f',
      H: '#8b0000',
      I: '#20b2aa',
      K: '#778899',
      L: '#800000',
      M: '#66cdaa',
      N: '#0000cd',
      O: '#3cb371',
      Ô: '#7b68ee',
      Ơ: '#6b8e23',
      P: '#800080',
      Q: '#663399',
      R: '#4169e1',
      S: '#2e8b57',
      T: '#a0522d',
      U: '#c0c0c0',
      Ư: '#87ceeb',
      V: '#708090',
      X: '#4682b4',
      Y: '#008080'
    };

    let uper = String(character).toUpperCase();
    if (mapColorCharacter[uper]) {
      return mapColorCharacter[uper];
    }
    return '#1e90ff';
  }
}
