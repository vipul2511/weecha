
import React,{useEffect} from 'react'
import {Provider} from "react-redux";
import AppStack from './Navigator'
import {store} from "./Store";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const App = () => {
  // React.useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: '729136298231-n4nkq1cb4rp9kd69c7ij84n60eev1fqu.apps.googleusercontent.com',
  //     offlineAccess: false,
  //   });
  // }, [])
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:'541184542830-87aouhtnn7rgubdvk8nd4m39v57ba4ro.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  return(
  <>

      <Provider store={store} >
        <AppStack />
      </Provider>
  </>
  )
  }

export default App
