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
  console.log('payload===>>',payload,state);
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
});


export const getUserprofileLoading = (state) => ({
  ...state,
  getUserProfileLoading: true
});


export const getUserprofileSuccess = ( state,{ payload }) => {
  return({
  ...state,
  getUserList: payload,
  getUserProfileLoading: false
});
}

export const getUserprofileFailure = (state, { data }) => ({
  ...state,
  getUserProfileLoading: false,
  getUserProfileSuccess:''
});




export const getUserGallaryLoading = (state) => ({
  ...state,
  getUserGallaryLoading: true
});


export const getUserGallarySuccess = ( state,{ payload }) => {
  return({
  ...state,
  getGallaryList: payload,
  getUserGallaryLoading: false
});
}

export const getUserGallaryFailure = (state, { data }) => ({
  ...state,
  getUserGallaryLoading: false,
});




export const getUserVideoLoading = (state) => ({
  ...state,
  getUserVideoLoading: true
});


export const getUserVideoSuccess = ( state,{ payload }) => {
  return({
  ...state,
  getVideoList: payload,
  getUserVideoLoading: false
});
}

export const getUserVideoFailure = (state, { data }) => ({
  ...state,
  getUserVideoLoading: false,
});


export const getUserFilterLoading = (state) => ({
  ...state,
  getUserFilterLoading: true
});


export const getUserFilterSuccess = ( state,{ payload }) => {
  return({
  ...state,
  getUserFilterList: payload,
  getUserFilterLoading: false
});
}

export const getUserFilterFailure = (state, { data }) => ({
  ...state,
  getUserFilterLoading: false,
});



export const clearOtp=(state)=>({
  ...state,
  sentOtpSuccess:'',
  signupSucess:''
})


export const clearUpdateProfile = state => ({
  ...state,
  updateUserProfileSuccess: '',
});




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

  [CommonTypes.GET_USER_PROFILE_LOADING]: getUserprofileLoading,
  [CommonTypes.GET_USER_PROFILE_SUCCESS]: getUserprofileSuccess,
  [CommonTypes.GET_USER_PROFILE_FAILURE]: getUserprofileFailure,

  [CommonTypes.GET_USER_GALLARY_LOADING]: getUserGallaryLoading,
  [CommonTypes.GET_USER_GALLARY_SUCCESS]: getUserGallarySuccess,
  [CommonTypes.GET_USER_GALLARY_FAILURE]: getUserGallaryFailure,

  [CommonTypes.GET_USER_FILTER_LOADING]: getUserFilterLoading,
  [CommonTypes.GET_USER_FILTER_SUCCESS]: getUserFilterSuccess,
  [CommonTypes.GET_USER_FILTER_FAILURE]: getUserFilterFailure,

  [CommonTypes.GET_USER_VIDEO_LOADING]: getUserVideoLoading,
  [CommonTypes.GET_USER_VIDEO_SUCCESS]: getUserVideoSuccess,
  [CommonTypes.GET_USER_VIDEO_FAILURE]: getUserVideoFailure,

  [CommonTypes.USER_LOGIN_LOADING]: userLoginLoading,
  [CommonTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [CommonTypes.USER_LOGIN_FAILURE]: userLoginFailure,

  [CommonTypes.USER_REGISTRATION_LOADING]: userRegistrationLoading,
  [CommonTypes.USER_REGISTRATION_SUCCESS]: userRegistrationSuccess,
  [CommonTypes.USER_REGISTRATION_FAILURE]: userRegistrationFailure,

  [CommonTypes.CLEAR_OTP]: clearOtp,

  [CommonTypes.CLEAR_UPDATE_PROFILE]: clearUpdateProfile,
});
