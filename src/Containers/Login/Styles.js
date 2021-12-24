
import { StyleSheet, Dimensions } from 'react-native'
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    Container: {
     flex:1,
     backgroundColor:'#E8F8F5'
    },
    image:{
         flex:0.3,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:wp('45%'),
        height:hp('25%'),
        
    },
    tree:{
        width:wp('90%'),
        height:hp('25%'),
        
    },
    langText:{
    fontFamily:'AvenirLTStd-Book',
    },
    person1:{
        width:wp('90%'),
        height:hp('29%'),
        marginBottom:hp('3%')
    },
    heartImg:{
        width:wp('12%'),
        height:hp('15%'),  
        
    }
  })
