import React, { useEffect,useState } from 'react';
import { View, Text, Image, StatusBar,FlatList, TouchableOpacity,BackHandler } from 'react-native';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import {connect} from "react-redux";
import CommonActions from '../../Store/Common/Actions';
import {HelperService} from "../../Services/Utils/HelperService"
import { useIsFocused } from '@react-navigation/native';
const Language = (props) => {
  const isFocused=useIsFocused()

  const [LanguageData,setLanguageData]=useState([{id:0,name:'English'},{id:1,name:'Español'},{id:2,name:'Français'},{id:3,name:'Japanese'},{id:4,name:'Hindi'}]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [indexval,setindexval]=useState(0);
  useEffect(()=>{
   props.getlanguage();
  },[])
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
  const languageRender=({item,index})=>{
      return(
          <View key={index}>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'flex-start',width:wp('50%'),marginTop:hp('2%')}}>
                <TouchableOpacity onPress={()=>{ setindexval(index)
        setToggleCheckBox(!toggleCheckBox)}} style={{width:wp('20%'),justifyContent:'center',alignItems:'center'}}>
               <CheckBox
    disabled={false}
    value={toggleCheckBox?indexval==index?true:false:false}
    tintColors={{ true: '#A8A8A8', false: '#A8A8A8' }}
    onValueChange={(newValue) => {
        setindexval(index)
        setToggleCheckBox(newValue)}}
  />
  </TouchableOpacity>
  <View style={{width:wp('30%'),justifyContent:'flex-start',alignItems:'flex-start',marginTop:hp('1%')}}>
              <Text style={styles.langText}>{item.name}</Text>
              </View>
              </View>
          </View>
      )
  }
  useEffect(()=>{
    console.log('props',JSON.stringify(props.getLanguageList));
    setLanguageData(props.getLanguageList)
  },[props.getLanguageList])
  const submitbtn=()=>{
    if(toggleCheckBox==false&&indexval==0){
     HelperService.showToast({message:'Select any one language'})
    }else{
      props.navigation.navigate('Login')
    }
   
  }
  return (
    <LinearGradient start={{x: 1.6, y: 0}} end={{x: 0, y: 1}} colors={['#0A13E4', '#D833F3']} style={styles.Container}>
    <StatusBar backgroundColor="#0A13E4" barStyle="light-content" />
    <View style={styles.image}>
    <View style={{position:'absolute',top:hp('2%')}}>
      <Image source={require('../../Assets/Images/bg-3.png')} style={[styles.heartImg,{resizeMode:"contain"}]} />
      </View>
      <Image source={require('../../Assets/Images/tree.png')} style={[styles.tree,{resizeMode:"contain"}]} />
      <View style={{position:'absolute'}}>
      <Image source={require('../../Assets/Images/person1.png')} style={[styles.person1,{resizeMode:"contain"}]} />
      </View>
    </View>
    <View style={{flex:0.5}}>
      <FlatList
      data={LanguageData}
      keyExtractor={(item,index) => index}
       renderItem={languageRender}
       />
       {LanguageData&&LanguageData.length>0?<View style={{justifyContent:'center',alignItems:'center',marginBottom:hp('3%')}}>
       <TouchableOpacity onPress={()=>{submitbtn()}} style={{width:wp('30%'),height:hp('5%'),backgroundColor:'#fff',borderRadius:100,justifyContent:'center',alignItems:'center'}}>
           <Text style={{fontFamily:'AvenirLTStd-Book'}} >Continue</Text>
       </TouchableOpacity>
       </View>:null}
    </View>

  </LinearGradient>
  )
}
const mapStateToProps = (state) => ({
  languageLoader: state.common.languageLoader,
  getLanguageList:state.common.getLanguageList,

});

const mapDispatchToProps = (dispatch) =>  ({
  getlanguage: () => {dispatch(CommonActions.getLanguage())},
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language) ;