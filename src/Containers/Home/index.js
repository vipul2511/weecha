import React, { useEffect,useState } from 'react';
import { View, Text, Image, StatusBar,FlatList, BackHandler,TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home=(props)=>{
    const isFocused=useIsFocused()
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
    
        return () => {
          BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
        };
      }, [backButtonHandler]);
      function backButtonHandler() {
        if (isFocused) {
          BackHandler.exitApp();
          return true;
        }
      }
      useEffect(()=>{
        storeData();
      },[])
      const storeData = async () => {
        try {
          await AsyncStorage.setItem('@is_login', JSON.stringify(true))
        } catch (e) {
          // saving error
        }
      }
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Home Screen</Text>
        </View>
    )
}
export default Home;