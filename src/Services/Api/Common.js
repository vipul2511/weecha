import axios from 'axios';
const URL = 'http://18.134.80.247/v1/';
import {is, curryN, gte} from 'ramda';
import {StorageUtils} from '../../Helper/storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// var new_token = await AsyncStorage.getItem('@token');
// console.log('Token,', new_token);

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number);
  return (
    isNumber(min) &&
    isNumber(max) &&
    isNumber(value) &&
    gte(value, min) &&
    gte(max, value)
  );
});
const in200s = isWithin(200, 299);

const userApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWJjY2RhMGVkZmMxYTcxMmYwZDBhNjMiLCJpYXQiOjE2NDE5NjgzMzUsImV4cCI6MzQ0MTk2ODMzNX0.F20gtMw-8p55BBC7Nal_Gg6UcTf4yvqAkV522Q2ZlYw',
  },
});

function getLanguage(params) {
  console.log('ara', params);
  let url = 'language/list';

  // url += params.date ?`&date=${params.date}` : '';

  return userApiClient
    .get(url)
    .then(response => {
      console.log('sucess', response);
      if (in200s(response.status)) {
        return response['data']['data'];
      }
      return null;
    })
    .catch(error => {
      console.log('errsss', error);
      return null;
    });
}
function userRegistration(params) {
  // console.log('ara',params)
  let url = 'users/create';
  // url += params.date ?`&date=${params.date}` : '';

  return userApiClient
    .post(url, params.body)
    .then(response => {
      console.log('sucess of registration', response);
      if (in200s(response.status)) {
        return response['data'];
      }
      return null;
    })
    .catch(error => {
      console.log('err registration', error.response);
      return error.response.data;
    });
}
 function userLogin(params) {
console.log("USER LOGIN?>>>>>>>")
  let url = 'users/login';
  let body = {
    phone: params.phone,
    password: params.password,
  };
  console.log('photo', body);
  return userApiClient
    .post(url, body)
    .then(response => {
      console.log('sucess of login', response);
      if (in200s(response.status)) {
        return response['data'];
      }
      return null;
    })
    .catch(error => {
      console.log('err login', error.response);
      return error.response.data;
    });
}
function sentOtp(params) {
  console.log('send otp of service', params);
  let url = 'language/send_message';
  let body = {
    phone: params.phone,
  };
  return userApiClient
    .post(url, body)
    .then(response => {
      console.log('sucess of otp', response);
      if (in200s(response.status)) {
        return response['data']['otp'];
      }
      return null;
    })
    .catch(error => {
      console.log('err otp', error.response);
      return null;
    });
}

function updateUserProfile(params) {
  console.log('update profile service', params);
  let url = 'users/updateUserProfile';
  let body = {
    name: params.name,
    country: params.country,
    homeTown: params.homeTown,
    dateOfBirth: params.dateOfBirth,
    nick_name: params.nick_name,
    interests: params.interests,
    file: params.file,
    points: params.points,
  };
  return userApiClient
    .put(url, body)
    .then(response => {
      console.log('sucess of profile', response);
      if (in200s(response.status)) {
        return response['data'];
      }
      return null;
    })
    .catch(error => {
      console.log('err update user', error.response);
      return null;
    });
}

function getUserProfile() {
  console.log('get profile service====>');
  let url = 'users/profile';

  return userApiClient
    .get(url)
    .then(response => {
      console.log('sucess of profile', response);
      if (in200s(response.status)) {
        console.log('sucess of profile1234ß', response.data);
        return response['data'];
      }
      return null;
    })
    .catch(error => {
      console.log('err update user', error.response);
      return null;
    });
}

function getUserGallary() {
  console.log('get profile service====>', 1);
  let url = 'users/user_gallery/61bccda0edfc1a712f0d0a63';

  return userApiClient
    .get(url)
    .then(response => {
      console.log('get profile service====>', 2);

      if (in200s(response.status)) {
        console.log('get profile service====>', 3);

        console.log('Gallary Res===>', response.data);
        return response['data'];
      }
      return null;
    })
    .catch(error => {
      console.log('err gallary user', error.response);
      return null;
    });
}

function getUserVideo() {
  console.log('get profile service====>', 1);
  let url = 'users/user_video/61bccda0edfc1a712f0d0a63';

  return userApiClient
    .get(url)
    .then(response => {
      console.log('get profile service====>', 2);

      if (in200s(response.status)) {
        console.log('get profile service====>', 3);

        console.log('Gallary Res===>', response.data);
        return response['data'];
      }
      return null;
    })
    .catch(error => {
      console.log('err gallary user', error.response);
      return null;
    });
}

function getUserFilter() {
  console.log('get profile service====>', 1);
  let url =
    'users/user_filter_list?orderName=points&orderType=asc&lenght=10&search&start=0';

  return userApiClient
    .get(url)
    .then(response => {
      console.log('get profile service====>', 2);

      if (in200s(response.status)) {
        console.log('get profile service====>', 3);

        console.log('Gallary Res===>', response.data);
        return response['data'];
      }
      return null;
    })
    .catch(error => {
      console.log('err gallary user', error.response);
      return null;
    });
}

export const CommonService = {
  getLanguage,
  userRegistration,
  userLogin,
  sentOtp,
  updateUserProfile,
  getUserProfile,
  getUserGallary,
  getUserVideo,
  getUserFilter,
};
