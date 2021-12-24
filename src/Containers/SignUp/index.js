import React,{useEffect, useState} from "react";
import {Text,View,TouchableOpacity, TextInput,Image, ScrollView} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import {connect} from "react-redux";
import CommonActions from '../../Store/Common/Actions';
const Signup=(props)=>{
    const [phone,setPhone]=useState('');
    const [confirmPassword,setconfirmPassword]=useState('');
    const [password,setPassword]=useState('');
    const [otp,setOtp]=useState('');
    const [Inputotp,setInputotp]=useState('');
    // useEffect(()=>{

    // },[])
   const sendOtpCode=()=>{
      props.sentOtp({phone:"+91"+phone})
      setInputotp('')
    }
    useEffect(()=>{
     console.log('otp',props.sentOtpSuccess);
     setOtp(props.sentOtpSuccess);
    },[props.sentOtpSuccess])

    useEffect(()=>{
        if(props.signupSucess){
            props.clearotp()
            props.navigation.navigate('welcomeScreen')
        }
        
     console.log('sucess signup',props.signupSucess)
    },[props.signupSucess])

    const signupbtn=()=>{
        if(password!=""){
            if(confirmPassword!=''){
        if(password==confirmPassword){
            if(otp==Inputotp){
            let body={
                phone:"+91"+phone,
                password:password,
                confirm_password:confirmPassword
            }
            props.userRegistration({body})
            // props.navigation.naviagte('welcomeScreen')
            // props.navigation.navigate('welcomeScreen')
        }else{
            alert('Please enter a correct OTP');
        }
        }else{
            alert('Confirm password is wrong')
        }
    }else{
        alert('Please enter a password')
    }
}
      
    }
    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView>
            <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{margin:'3%',marginTop:hp('4%'),flexDirection:'row',}}>
                <AntDesign name="arrowleft" size={20} color={"black"} />
                <View style={{marginLeft:wp('2%')}}>
                <Text style={{fontSize:wp('3.9%')}} >Sign up</Text>
                </View>
            </TouchableOpacity>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('10%')}}>
             <View style={{width:wp('90%'),height:hp('8%'),backgroundColor:'#E8E6F6',borderRadius:100,flexDirection:'row'}}>
                 <View style={{width:wp('20%'),justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                  <Text>+91  </Text>
                  <Text>| </Text>
                 </View>
                 <TextInput value={phone} onChangeText={(text)=>{setPhone(text)}} keyboardType={"phone-pad"} style={{width:wp('60%')}} maxLength={10} placeholder={"Phone number"} placeholderTextColor={"#5B5B5B"} />
             </View>
             <View style={{width:wp('90%'),height:hp('8%'),backgroundColor:'#E8E6F6',justifyContent:'center',alignItems:'center',paddingLeft:20,borderRadius:100,flexDirection:'row',marginTop:hp('3%')}}>
                 <View style={{width:wp('53%'),justifyContent:'center'}}>
                 <TextInput value={Inputotp} onChangeText={(text)=>{setInputotp(text)}} placeholder={"Verification Code"} placeholderTextColor={"#5B5B5B"} />
                 </View>
                 <TouchableOpacity onPress={sendOtpCode}>
                 <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#6C56F1', '#F329F8']} style={{width:wp('30%'),height:hp('7%'),borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',fontSize:wp('4%')}}>{!props.sentOtpSuccess?'Send':'Re-send'}</Text>
                    </LinearGradient>
                    </TouchableOpacity>
             </View>
             <View style={{width:wp('90%'),height:hp('8%'),backgroundColor:'#E8E6F6',paddingLeft:20,borderRadius:100,flexDirection:'row',marginTop:hp('3%')}}>
                 <TextInput value={password} onChangeText={(text)=>{setPassword(text)}} style={{width:wp('80%')}} placeholder={"Password"} placeholderTextColor={"#5B5B5B"} />
             </View>
             <View style={{width:wp('90%'),height:hp('8%'),backgroundColor:'#E8E6F6',paddingLeft:20,borderRadius:100,flexDirection:'row',marginTop:hp('3%')}}>
                 <TextInput value={confirmPassword} onChangeText={(text)=>{setconfirmPassword(text)}} style={{width:wp('80%')}}  placeholder={"Confirm Password"} placeholderTextColor={"#5B5B5B"} />
             </View>
                <TouchableOpacity style={{marginTop:hp('4%')}} onPress={()=>{signupbtn()}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#6C56F1', '#F329F8']} style={{width:wp('79%'),height:hp('7%'),borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#fff',fontSize:wp('4%')}}>Sign up</Text>

                    </LinearGradient>
                </TouchableOpacity>
            

             </View>
             </ScrollView>
        </View>
    )
}
const mapStateToProps = (state) => ({
    sentOtpLoading: state.common.sentOtpLoading,
    sentOtpSuccess:state.common.sentOtpSuccess,
    signupSucess:state.common.userRegistrationList,
    signupLoader:state.common.userRegistrationLoading,
    sentOtpSuccess:state.common.sentOtpSuccess
  });
  
  const mapDispatchToProps = (dispatch) =>  ({
    sentOtp: (params) => {dispatch(CommonActions.sentOtp(params))},
    userRegistration: (params) => {dispatch(CommonActions.userRegistration(params))},
    clearotp: () => {dispatch(CommonActions.clearOtp())},
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup) ;
// export default ;