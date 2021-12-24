import {Alert} from 'react-native'
import _ from 'lodash';
import { call, put, select, take } from 'redux-saga/effects';
import { CommonService } from '../Services/Api/Common';
import CommonActions from '../Store/Common/Actions';
import {HelperService} from "../Services/Utils/HelperService"

export function* getLanguage( payload ) {
     console.log('saga',payload);
	yield put(CommonActions.getLanguageLoading());
	
	try {
       
		let data = yield call(CommonService.getLanguage, payload);
		if (data) {
            console.log('saga try',data);
			yield put(CommonActions.getLanguageSuccess(data));
		} else {
			yield put(CommonActions.getLanguageFailure());
		}
	} catch (error) {
        console.log('saga error',error);
		yield put(CommonActions.getLanguageFailure());
	}
}

export function* sentOtp( {payload} ) {
    console.log('saga otp',payload);
   yield put(CommonActions.sentOtpLoading());
   
   try {
      
       let data = yield call(CommonService.sentOtp, payload);
       if (data) {
           console.log('saga try otp',data);
           yield put(CommonActions.sentOtpSuccess(data));
           HelperService.showToast({ message: 'Otp send' });

       } else {

           yield put(CommonActions.sentOtpFailure());
       }
   } catch (error) {
       console.log('saga error otp',error);
       yield put(CommonActions.sentOtpFailure());
   }
}
export function* userLogin({payload }) {
    console.log('saga userLogin',payload);
   yield put(CommonActions.userLoginLoading());
   
   try {
      
       let data = yield call(CommonService.userLogin, payload);
       if (data&&data.code==201) {
           yield put(CommonActions.userLoginSuccess(data));
       } else {
           yield put(CommonActions.userLoginFailure());
           HelperService.showToast({ message: data?.message });
       }
   } catch (error) {
       console.log('saga error userLogin',error);
       yield put(CommonActions.userLoginFailure());
       HelperService.showToast({ message: 'Something went wrong' });
   }
}
export function* userRegistration({payload} ) {
    console.log('saga userRegistration',payload);
   yield put(CommonActions.userRegistrationLoading());
   
   try {
      
       let data = yield call(CommonService.userRegistration, payload);
       if (data&&data.code==201) {
           console.log('saga try userRegistration',data);
           yield put(CommonActions.userRegistrationSuccess(data));
       } else {
        console.log('saga try else',data);
        HelperService.showToast({ message: data?.message });
           yield put(CommonActions.userRegistrationFailure());
       }
   } catch (error) {
       console.log('saga error userRegistration',error);
       HelperService.showToast({ message: error?.message });
       yield put(CommonActions.userRegistrationFailure());
   }
}
export function* updateUserProfile({payload} ) {
    console.log('saga updateUserProfile',payload);
   yield put(CommonActions.updateUserProfileLoading());
   
   try {
      
       let data = yield call(CommonService.updateUserProfile, payload);
       if (data&&data.code==200) {
           console.log('saga try updateUserProfile',data);
           yield put(CommonActions.updateUserProfileSuccess(data));
       } else {
        console.log('saga try else',data);
        // HelperService.showToast({ message: data?.message });
           yield put(CommonActions.updateUserProfileFailure());
       }
   } catch (error) {
       console.log('saga error userRegistration',error);
    //    HelperService.showToast({ message: error?.message });
       yield put(CommonActions.updateUserProfileFailure());
   }
}
