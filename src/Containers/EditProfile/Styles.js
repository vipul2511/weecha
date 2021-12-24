
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
    welcome:{
     fontFamily:'Roboto-Bold',
     fontSize:wp('5.5%')
    },
    welcomeSubtitle:{
        fontFamily:'AvenirLTStd-Book',
        fontSize:wp('3.3%'),
        color:'#9E9E9E'
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
        
    },
    radioBtn:{
        width:wp('50%'),
        marginTop:wp('4%'),
        marginLeft:wp('4%'),
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textInput:{
        marginLeft:wp('6%'),
        marginTop:hp('1%')
    },
    inputbox:{
        width:wp('90%'),
        borderColor:'#5B5B5B',
        borderBottomWidth:1
    },
    label:{
        color:'#5B5B5B',
        fontFamily:'AvenirLTStd-Book'
    }
  })
