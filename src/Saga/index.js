import {takeEvery, put, delay,takeLatest ,call, all, fork} from 'redux-saga/effects';
import { CommonTypes } from '../Store/Common/Actions';
import { networkSaga, offlineActionTypes } from 'react-native-offline';

// import wording from './wording.saga';
import {
  getLanguage,
  sentOtp,
  userLogin,
  userRegistration,
  updateUserProfile
} from './CommonSaga';
export default function* root() {
  yield all([
    takeLatest(CommonTypes.GET_LANGUAGE,getLanguage),
    takeLatest(CommonTypes.SENT_OTP,sentOtp),
    takeLatest(CommonTypes.USER_LOGIN,userLogin),
    takeLatest(CommonTypes.USER_REGISTRATION,userRegistration),
    takeLatest(CommonTypes.UPDATE_USER_PROFILE,updateUserProfile),


  ])
}
