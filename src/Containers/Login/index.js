import React,{useEffect,useState} from "react";
import {Text,View,Image,TouchableOpacity, ImageBackground,NativeModules} from 'react-native';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "react-native-responsive-screen";
import styles from './Styles';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  import { HelperService, onFacebookLogin } from "../../Services/Utils/HelperService";
  const { RNTwitterSignIn } = NativeModules
  const Constants = {
    //Dev Parse keys
    TWITTER_COMSUMER_KEY: "fvuncxtgPw2LeqRG0yk2QsvQZ",
    TWITTER_CONSUMER_SECRET: "bSYvdeWSYSplNkYamVFi8Hvl0100duGLHsOinlTSFA5L9BHEmD"
  }
const Login=(props)=>{
    const [userInfo, setUserInfo] = useState(null);
    const [gettingLoginStatus, setGettingLoginStatus] = useState(true);
     const [ isLoggedIn,setisLoggedIn]=useState(false);

     const _twitterSignIn = () => {
      RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
      RNTwitterSignIn.logIn()
        .then(loginData => {
          console.log('twitter data',loginData)
          props.navigation.navigate('Home')
          const { authToken, authTokenSecret } = loginData
          if (authToken && authTokenSecret) {
            setisLoggedIn(true)
          }
        })
        .catch(error => {
          HelperService.showToast({message:error})
          console.log('ss',error)
        }
      )
    }
    useEffect(() => {
    //     // Initial configuration

    //     // Check if user is already signed in
        _isSignedIn();
      }, []);
      const _isSignedIn = async () => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

        const isSignedIn = await GoogleSignin.isSignedIn();
        if (isSignedIn) {
          HelperService.showToast({message:'User is already signed in'});
          // props.navigation.navigate('Home')
          // Set User Info if user is already signed in
          _getCurrentUserInfo();
        } else {
          console.log('Please Login');
        }
        setGettingLoginStatus(false);
      };
      const _getCurrentUserInfo = async () => {
        try {
          let info = await GoogleSignin.signInSilently();
          props.navigation.navigate('Home')
          console.log('User Info --> ', info);
          
          setUserInfo(info);
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            alert('User has not signed in yet');
            console.log('User has not signed in yet');
          } else {
            alert("Unable to get user's info");
            console.log("Unable to get user's info");
          }
        }
      };
      const facebookLogin=()=>{
        onFacebookLogin()
			.then(async (data, token) => {
			// console.log('data of facebook',data);
      props.navigation.navigate('Home')
			})
			.catch((err) => {
				console.log("err onPressLogin", err);
			});
      }
      const _signIn = async () => {
        // It will prompt google Signin Widget
        try {
          await GoogleSignin.hasPlayServices({
            // Check if device has Google Play Services installed
            // Always resolves to true on iOS
            showPlayServicesUpdateDialog: true,
          });
          const userInfo = await GoogleSignin.signIn();
          console.log('User Info --> ', userInfo);
          props.navigation.navigate('Home')
          setUserInfo(userInfo);
        } catch (error) {
          console.log('Message', JSON.stringify(error));
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            alert('User Cancelled the Login Flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Signing In');
          } else if (
              error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
            ) {
            alert('Play Services Not Available or Outdated');
          } else {
            // alert(error.message);
          }
        }
      };
      const _signOut = async () => {
        setGettingLoginStatus(true);
        // Remove user session from the device.
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          // Removing user Info
          setUserInfo(null); 
        } catch (error) {
          console.error(error);
        }
        setGettingLoginStatus(false);
      };
    
    return(
        <View style={styles.Container}>
            <TouchableOpacity style={{justifyContent:'flex-end',alignItems:'flex-end',marginTop:hp('2%'),marginRight:wp('2%')}}>
                <Text style={{fontSize:wp('4.2%'),fontFamily:'AvenirLTStd-Book',fontWeight:'600'}}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.image}>
        <Image source={require('../../Assets/Images/Weecha-Logo.png')} style={[styles.logo,{resizeMode:"contain"}]} />
      </View>
      <View style={{flex:0.3}}>
       <View style={{justifyContent:'center',alignItems:'center'}}> 
           <TouchableOpacity onPress={facebookLogin} style={{backgroundColor:'#fff',width:wp('55%'),height:hp('6%'),elevation:3,flexDirection:'row',alignItems:'center',borderRadius:100,marginBottom:hp('1%')}}>
               <View style={{width:wp('10%'),marginLeft:wp('4%')}}>
               <Image source={require('../../Assets/Images/facebook_icon.png')} style={{width:wp('3%'),height:hp('3%'),resizeMode:'contain'}} />
               </View>
               <View style={{width:wp('30%'),justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:wp('4%')}}>Facebook</Text>
               </View>
               {/* <LoginButton
          readPermissions={['public_profile']}
          onLoginFinished={(error, result) => {
            if (error) {
              alert(error);
              console.log('Login has error: ' + result.error);
            } else if (result.isCancelled) {
              alert('Login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                console.log(data.accessToken.toString());
                const processRequest = new GraphRequest(
                  '/me?fields=name,picture.type(large)',
                  null,
                  getResponseInfo,
                );
                // Start the graph request.
                new GraphRequestManager()
                  .addRequest(processRequest).start();
              });
            }
          }}
          onLogoutFinished={onLogout}
        /> */}
           </TouchableOpacity>
           <TouchableOpacity onPress={_signIn} style={{backgroundColor:'#fff',width:wp('55%'),height:hp('6%'),elevation:3,flexDirection:'row',alignItems:'center',borderRadius:100,marginBottom:hp('1%')}}>
               <View style={{width:wp('10%'),marginLeft:wp('4%')}}>
               <Image source={require('../../Assets/Images/google_icon.png')} style={{width:wp('4.5%'),height:hp('4.5%'),resizeMode:'contain'}} />
               </View>
               <View style={{width:wp('30%'),justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:wp('4%')}}>Google </Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity style={{backgroundColor:'#fff',width:wp('55%'),height:hp('6%'),elevation:3,flexDirection:'row',alignItems:'center',borderRadius:100,marginBottom:hp('1%')}}>
               <View style={{width:wp('10%'),marginLeft:wp('4%')}}>
               <Image source={require('../../Assets/Images/Phone.png')} style={{width:wp('3%'),height:hp('3%'),resizeMode:'contain'}} />
               </View>
               <View style={{width:wp('30%'),justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:wp('4%')}}>Phone </Text>
               </View>
           </TouchableOpacity>
           <View style={{marginBottom:hp('1%')}}>
               <Text style={{fontSize:wp('4%')}}>or</Text>
           </View>
           <TouchableOpacity onPress={()=>{props.navigation.navigate('LoginPhone')}} style={{backgroundColor:'#518EF8',width:wp('55%'),height:hp('6%'),elevation:3,flexDirection:'row',alignItems:'center',borderRadius:100,marginBottom:hp('1%')}}>
               <View style={{width:wp('10%'),marginLeft:wp('4%')}}>
               {/* <Image source={require('../../Assets/Images/Phone.png')} style={{width:wp('3%'),height:hp('3%'),resizeMode:'contain'}} /> */}
               </View>
               <TouchableOpacity onPress={()=>{props.navigation.navigate('LoginPhone')}} style={{width:wp('30%'),justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontSize:wp('4%'),color:'#fff'}}>Login </Text>
               </TouchableOpacity>
           </TouchableOpacity>

           <View style={{flexDirection:'row',}}>
               <TouchableOpacity onPress={_twitterSignIn} style={{backgroundColor:'#55ACEE',width:wp('8%'),marginRight:wp('5%'),height:hp('4%'),justifyContent:'center',alignItems:'center',borderRadius:100}}>
                   <Image source={require('../../Assets/Images/Twitter.png')} style={{width:wp('5%'),height:hp('5%'),resizeMode:'contain'}} />
               </TouchableOpacity>
               <TouchableOpacity style={{width:wp('8%'),height:hp('4%'),marginRight:wp('3%'),justifyContent:'center',alignItems:'center',borderRadius:100}}>
                   <Image source={require('../../Assets/Images/Vector.png')} style={{width:wp('8%'),height:hp('8%'),resizeMode:'contain'}} />
               </TouchableOpacity>
               <TouchableOpacity style={{width:wp('8%'),height:hp('4%'),marginLeft:wp('3%'),justifyContent:'center',alignItems:'center',borderRadius:100}}>
                   <Image source={require('../../Assets/Images/apple_logo.png')} style={{width:wp('8%'),height:hp('8%'),resizeMode:'contain'}} />
               </TouchableOpacity>
           </View>
           <View style={{marginTop:hp('2%')}}>
               <Text style={{fontFamily:'AvenirLTStd-Book'}}>Powered by <Text style={{fontFamily:'AvenirLTStd-Black'}} >Weecha! </Text></Text>
           </View>
           
           
       </View>
       <View style={{marginTop:hp('4%')}} >
               <Image source={require('../../Assets/Images/person-2.png')} style={{width:wp('70%'),height:hp('23%'),resizeMode:'contain',position:'absolute',zIndex:1,alignSelf:'center'}} />
           </View>
      </View>
      <View style={{bottom:0,position:'absolute',width:'100%'}}>
               <ImageBackground source={require('../../Assets/Images/Footer.png')} style={{width:'100%',height:hp('10%')}} >
                <View style={{justifyContent:'flex-end',alignItems:'center',height:'100%',bottom:hp('.5%')}}>
               <Text style={{color:'#FFFFFF',fontSize:wp('3.3%'),fontFamily:'AvenirLTStd-Book'}} >Login means you agree to<Text style={{color:'#FFFFFF',fontSize:wp('3.3%'),fontFamily:'AvenirLTStd-Black',fontWeight:'800'}}> Terms of Use, Privacy Policy</Text></Text>
               </View>
               </ImageBackground>
           </View>
        </View>
    )
}
export default Login;