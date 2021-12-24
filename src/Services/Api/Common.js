import axios from 'axios';
const URL = 'http://18.134.80.247/v1/';
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number)
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
  })
  const in200s = isWithin(200, 299)

  const userApiClient = axios.create({
    /**
     * Import the config from the App/Config/index.js file
     */
    baseURL: URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })

  function getLanguage(params) {
     console.log('ara',params)
    let url = "language/list";
    
    // url += params.date ?`&date=${params.date}` : '';
    
    return userApiClient.get(url).then((response) => {
      console.log('sucess',response)
      if (in200s(response.status)) {
        return response['data']['data'];
      }
      return null
    }).catch(error => {  
        console.log('err',error)
      return null
    });
  }
  function userRegistration(params) {
    // console.log('ara',params)
   let url = "users/create";
   // url += params.date ?`&date=${params.date}` : '';
   
   return userApiClient.post(url,params.body).then((response) => {
     console.log('sucess of registration',response)
     if (in200s(response.status)) {
       return response['data'];
     }
     return null
   }).catch(error => {  
       console.log('err registration',error.response)
     return error.response.data
   });
 }
 function userLogin(params) {
   
 let url = "users/login";
 let body={
  phone:params.phone,
  password:params.password
 }
 console.log('photo',body);
 return userApiClient.post(url,body).then((response) => {
   console.log('sucess of login',response)
   if (in200s(response.status)) {
     return response['data'];
   }
   return null
 }).catch(error => {  
     console.log('err login',error.response)
   return error.response.data
 });
}
function sentOtp(params) {
  console.log('send otp of service',params);
  let url = "language/send_message";
  let body={
    phone:params.phone
  }
  return userApiClient.post(url,body).then((response) => {
    console.log('sucess of otp',response)
    if (in200s(response.status)) {
      return response['data']['otp'];
    }
    return null
  }).catch(error => {  
      console.log('err otp',error.response)
    return null
  });
 }

 function updateUserProfile(params) {
  console.log('update profile service',params);
  let url = "users/updateUserProfile";
 
  return userApiClient.put(url,params.body).then((response) => {
    console.log('sucess of profile',response)
    if (in200s(response.status)) {
      return response['data']['user'];
    }
    return null
  }).catch(error => {  
      console.log('err update user',error.response)
    return null
  });
 }
  export const CommonService = {
    getLanguage,
    userRegistration,
    userLogin,
    sentOtp,
    updateUserProfile
  }
