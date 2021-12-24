/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CommonTypes } from './Actions'

export const getLanguageLoading = (state) => ({
  ...state,
  getLanguageLoading: true
});


export const getLanguageSuccess = ( state,{ payload }) => {
  return({
  ...state,
  getLanguageList: payload,
  getLanguageLoading: false
});
}

export const getLanguageFailure = (state, { payload }) => ({
  ...state,
  getLanguageLoading: false
});

export const userRegistrationLoading = (state) => ({
  ...state,
  userRegistrationLoading: true
});


export const userRegistrationSuccess = ( state,{ payload }) => {
  console.log('payload',payload,state);
  return({
  ...state,
  userRegistrationList: payload,
  userRegistrationLoading: false
});
}

export const userRegistrationFailure = (state, { data }) => ({
  ...state,
  userRegistrationLoading: false
});
export const userLoginLoading = (state) => ({
  ...state,
  userLoginLoading: true
});


export const userLoginSuccess = ( state,{ payload }) => {
  console.log('payload',payload,state);
  return({
  ...state,
  userLoginList: payload,
  userLoginLoading: false
});
}

export const userLoginFailure = (state, { data }) => ({
  ...state,
  userLoginLoading: false
});

export const sentOtpLoading = (state) => ({
  ...state,
  sentOtpLoading: true
});


export const sentOtpSuccess = ( state,{ payload }) => {
  return({
  ...state,
  sentOtpSuccess: payload,
  sentOtpLoading: false
});
}

export const sentOtpFailure = (state, { data }) => ({
  ...state,
  sentOtpLoading: false,
  sentOtpSuccess:''
});
export const updateUserprofileLoading = (state) => ({
  ...state,
  updateUserProfileLoading: true
});


export const updateUserprofileSuccess = ( state,{ payload }) => {
  return({
  ...state,
  updateUserProfileSuccess: payload,
  updateUserProfileLoading: false
});
}

export const updateUserprofileFailure = (state, { data }) => ({
  ...state,
  updateUserProfileLoading: false,
  updateUserProfileSuccess:''
});
export const clearOtp=(state)=>({
  ...state,
  sentOtpSuccess:'',
  signupSucess:''
})




export const reducer = createReducer(INITIAL_STATE, {


  [CommonTypes.GET_LANGUAGE_LOADING]: getLanguageLoading,
  [CommonTypes.GET_LANGUAGE_SUCCESS]: getLanguageSuccess,
  [CommonTypes.GET_LANGUAGE_FAILURE]: getLanguageFailure,

  [CommonTypes.SENT_OTP_LOADING]: sentOtpLoading,
  [CommonTypes.SENT_OTP_SUCCESS]: sentOtpSuccess,
  [CommonTypes.SENT_OTP_FAILURE]: sentOtpFailure,

  [CommonTypes.UPDATE_USER_PROFILE_LOADING]: updateUserprofileLoading,
  [CommonTypes.UPDATE_USER_PROFILE_SUCCESS]: updateUserprofileSuccess,
  [CommonTypes.UPDATE_USER_PROFILE_FAILURE]: updateUserprofileFailure,

  [CommonTypes.USER_LOGIN_LOADING]: userLoginLoading,
  [CommonTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [CommonTypes.USER_LOGIN_FAILURE]: userLoginFailure,

  [CommonTypes.USER_REGISTRATION_LOADING]: userRegistrationLoading,
  [CommonTypes.USER_REGISTRATION_SUCCESS]: userRegistrationSuccess,
  [CommonTypes.USER_REGISTRATION_FAILURE]: userRegistrationFailure,

  [CommonTypes.CLEAR_OTP]: clearOtp,



  
});
