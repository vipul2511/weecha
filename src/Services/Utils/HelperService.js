import {Toast} from 'native-base';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-async-storage/async-storage';
function showToast({
  message = '',
  buttonText = 'Okay',
  duration = 1000,
  position = 'bottom',
  style = '',
}) {
  if (Platform.OS == 'android') {
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  } else {
    Toast.show({
      text: message,
      buttonText: buttonText,
      duration: duration,
      position: position,
      style: style,
    });
  }
}

export const onFacebookLogin = () =>
  new Promise((resolve, reject) => {
    // For facebook web login
    if (Platform.OS === 'android') {
      LoginManager.setLoginBehavior('web_only');
    }
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      async function (result) {
        console.log('result>>>>', result);
        if (result.isCancelled) {
          reject('Login cancelled');
        } else {
          const data = await AccessToken.getCurrentAccessToken();
          const fbAccessToken = data.accessToken;
          await AsyncStorage.setItem('facebookToken', fbAccessToken);
          await AsyncStorage.setItem('facebookUserId', data.userID);
          const PROFILE_REQUEST_PARAMS = {
            fields: {
              string:
                'id, email,picture.width(200).height(200),name,gender,location{location{city,state,region,country}},birthday,friends',
            },
          };
          const profileRequest = new GraphRequest(
            '/me',
            {fbAccessToken, parameters: PROFILE_REQUEST_PARAMS},
            (error, user) => {
              if (error) {
                reject('Something went wrong please try again');
              } else {
                // this.setState({userInfo: user});
                resolve(user);
              }
            },
          );
          new GraphRequestManager().addRequest(profileRequest).start();
        }
      },
      function (error) {
        reject('Login fail with error:asdasdasdas ' + error);
      },
    );
  });

export const HelperService = {
  showToast,
  onFacebookLogin,
};

export const returntoken = async () => {
  try {
    var token = await AsyncStorage.getItem('token');
    console.log('tokenHelper', token);
    return JSON.stringify(token);
  } catch (e) {
    // saving error
  }
};
