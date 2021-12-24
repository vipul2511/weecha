import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
    useEffect(()=>{
        let timer1 = setTimeout(async() => {
         const asynData=  await AsyncStorage.getItem('@is_login');
           console.log('await',asynData);
           if(asynData){
            navigation.navigate('Home');
           }else{
        navigation.navigate('Language');
           }
           
          }, 2000);
    
          return () => {
            clearTimeout(timer1);
          };
    },[])

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1.4, y: 0}} colors={['#0A13E4', '#D833F3']} style={styles.Container}>
      <StatusBar backgroundColor="#0A13E4" barStyle="light-content" />
      <View style={styles.image}>
        <Image source={require('../../Assets/Images/Weecha-Logo.png')} style={[styles.logo,{resizeMode:"contain"}]} />
      </View>
    </LinearGradient>
  )
}
export default SplashScreen;