import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import VideoCall from '../../Assets/Icons/VideoCall.svg'
import AudioCall from '../../Assets/Icons/AudioCall.svg'
import TextMessage from '../../Assets/Icons/TextMessage.svg'
import Diamonds from '../../Assets/Icons/diamonds.svg'
import India from '../../Assets/Icons/india.svg'

const Card = (props) => {
    return (
        <View style={{height: hp('76%'), width: wp('100%'), zIndex: 2, borderBottomLeftRadius: wp('5%'), borderBottomRightRadius: wp('5%'), overflow: 'hidden', elevation: 0.3}}>
            <Image source={require('../../Assets/Images/photo.png')} style={{height: '100%', width: '100%'}} resizeMode='cover'/>
            <View style={{height: '25%', width: '25%', backgroundColor: 'rgba(0,0,0,0.4)', borderWidth: 2, borderColor: 'white', 
                        position: 'absolute', right: '5%', top: '2%', borderRadius: 10, overflow: 'hidden'}}>
                <Image source={require('../../Assets/Images/photo.png')} style={{height: '100%', width: '100%'}} resizeMode='cover'/>
                <Text style={{position: 'absolute', left: '10%', top: '2%', fontFamily: 'Roboto', fontWeight: 'bold', fontStyle: 'italic', 
                            color:'white'}}>Live</Text>
            </View>
            <View style={{width: '100%', alignSelf: 'baseline', position: 'absolute', bottom: 0, zIndex: 2, backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <TouchableOpacity onPress={() => props.navigation.navigate('ViewProfile', {details: props.data })} style={{marginLeft: 20, marginTop: 10,}}><Text style={{fontFamily: 'Gilroy-Bold', fontSize: 26, color: 'white', 
                                    alignSelf: 'baseline'}}>{props.data.name}, {props.data.age}</Text></TouchableOpacity>
                <View style={{flexDirection: 'row', alignSelf: 'baseline', marginLeft: 20, marginTop: 5, height: 25, alignItems: 'center' }}>
                    <Diamonds width={"28"} height={"28"} /><Text style={{fontFamily: 'Gilroy-Bold', fontSize: 20, color: 'white', 
                                                                     alignSelf: 'baseline', marginLeft: 5}}>{props.data.rate}/min</Text></View>
                <View style={{flexDirection: 'row', alignSelf: 'baseline', marginLeft: 20, marginTop: 5, height: 25, alignItems: 'center' }}>
                    <India width={"28"} height={"28"} /><Text style={{fontFamily: 'Gilroy-Bold', fontSize: 20, color: 'white', 
                                                            alignSelf: 'baseline', marginLeft: 5}}>{props.data.country}</Text></View>
                <View style={{marginVertical: 5, height: 70, flexDirection: 'row', alignItems: 'center', width: '60%', alignSelf: 'center', 
                    justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('VideoCall')}>
                            <VideoCall height={"64"} width={"64"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                            <AudioCall height={"80"} width={"80"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Chat')} >
                            <TextMessage height={"64"} width={"64"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Card
