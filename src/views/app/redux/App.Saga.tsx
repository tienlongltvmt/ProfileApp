import {all} from 'redux-saga/effects';

export function* allSagas() {
  yield all([
    // fork(watchGetListVoucher),
  ]);
}
