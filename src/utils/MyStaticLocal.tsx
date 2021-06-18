import {ITokenModel, PersonalModel} from 'models/Personal.Model';

export default class MyStaticLocal {
  static user: PersonalModel | undefined;
  static userToken: ITokenModel;

  static getUserToken(): ITokenModel {
    return MyStaticLocal.userToken;
  }

  static setUserToken(token: ITokenModel) {
    MyStaticLocal.userToken = token;
  }
  static getUser(): PersonalModel | undefined {
    return MyStaticLocal.user;
  }

  static setUser(userNew?: PersonalModel) {
    MyStaticLocal.user = userNew;
  }
}
