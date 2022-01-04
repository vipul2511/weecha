import React from 'react'
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import VideoCall from '../../Assets/Icons/VideoCall.svg'
import AudioCall from '../../Assets/Icons/AudioCall.svg'
import TextMessage from '../../Assets/Icons/TextMessage.svg'
import Diamonds from '../../Assets/Icons/diamonds.svg'
import Country from '../../Assets/Icons/india.svg'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CrownIcon from '../../Assets/Icons/crown.svg'
import CallMiniIcon from '../../Assets/Icons/CallMini.svg'
import VideoCallMiniIcon from '../../Assets/Icons/VideoCallMini.svg'
import MessageMiniIcon from '../../Assets/Icons/MessageMini.svg'
import FemaleIcon from '../../Assets/Icons/female.svg'
const ProfileView = (props) => {
    const [view, setView] = React.useState(0)
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                />
                <ScrollView>
            <ImageBackground source={require('../../Assets/Images/photo.png')} style={{height: hp('40%')}}>
               <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                  <TouchableOpacity onPress={() => props.navigation.goBack()} style={{position: 'absolute',  left: wp('6%')}}><FontAwesome5Icon name={'chevron-left'} color={"#fff"} size={20} /></TouchableOpacity>
                  <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 24, color: '#fff', alignSelf: 'center',}}>
                    Profile</Text>
               </View>
                <View style={{position: 'absolute', height: '15%', width: '100%', bottom: 0, backgroundColor: 'white', 
                // borderTopLeftRadius: hp('20%'),        borderTopRightRadius: hp('20%')
            }} >
                <View style={{position: 'absolute', top: '-50%', transform: [{translateY: -10}], height: 70, flexDirection: 'row', alignItems: 'center', width: '60%', alignSelf: 'center', 
                    justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('VideoCall')}>
                    <Image source={require('../../Assets/Icons/VideoCall.png')} style={{width: wp('15%'), height: wp('15%')}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image source={require('../../Assets/Icons/Call_1.png')} style={{width: wp('22%'), height: wp('22%')}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
                    <Image source={require('../../Assets/Icons/Message.png')} style={{width: wp('15%'), height: wp('15%')}} />
                    </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>
            <View style={{width: '100%', alignSelf: 'baseline', }}>
                <View style={{marginLeft: 20, marginTop: 5,}}><Text style={{fontFamily: 'Gilroy-Bold', fontSize: 25, color: 'rgba(240, 54, 80, 1)', 
                                    alignSelf: 'baseline'}}>{props.route.params.details.name}, {props.route.params.details.age}</Text></View>
                <View style={{flexDirection: 'row', alignSelf: 'baseline', marginLeft: 20, marginTop: 5, height: 18, alignItems: 'center' }}>
                <Country width={"18"} height={"18"} />
                <View style={{flexDirection: 'row', height: 16, alignItems: 'center', backgroundColor: 'rgba(243, 41, 101, 1)', paddingHorizontal: 5, marginLeft: 5, paddingVertical: 1, borderRadius: 10}}>
                    <CrownIcon />
                    <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 12, color: '#fff', alignSelf: 'baseline', marginLeft: 5}}>
                        98
                    </Text>
                </View>
                <View style={{flexDirection: 'row', height: 16, alignItems: 'center', backgroundColor: 'rgba(79, 125, 242, 1)', paddingHorizontal: 5, marginLeft: 5, paddingVertical: 1, borderRadius: 10}}>
                    <FemaleIcon />
                    <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 12, color: '#fff', alignSelf: 'baseline', marginLeft: 5}}>
                        23
                    </Text>
                </View>
                {/* <Diamonds width={"18"} height={"18"} /> */}
                </View>
                {/* <View style={{flexDirection: 'row', alignSelf: 'baseline', marginLeft: 20, marginTop: 5, height: 18, alignItems: 'center' }}>
                    <India width={"18"} height={"18"} /><Text style={{fontFamily: 'Gilroy-Bold', fontSize: 12, color: '#000', 
                                                            alignSelf: 'baseline', marginLeft: 5}}>{props.route.params.details.country}</Text></View> */}
                {/* <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 14, color: '#000', alignSelf: 'baseline', marginLeft: 20, marginTop: 20}}>
                    About Me</Text> */}
                <Text style={{fontFamily: 'Gilroy-Regular', lineHeight: 18, fontSize: 12, color: '#000', alignSelf: 'baseline', marginHorizontal: 20, marginTop: 5}}>
                I really like dancing. Dancing is a part of my life. Do you
                want to dance with me? I will teach you to dance, you
                will not regret doing it. See You tomorrow !</Text>
                <View style={{height: 1, marginVertical: 10, width: '100%', backgroundColor: 'rgba(0,0,0,0.05)'}} />
                <View>
                    <Text style={{fontFamily: 'Gilroy-SemiBold', fontSize: 16, color: 'rgba(243, 41, 101, 1)', marginLeft: 20, marginBottom: 10}}>Prices</Text>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
                        <TouchableOpacity style={{flexDirection: 'row',}}>
                           <MessageMiniIcon />
                           <Text style={{fontSize: 16, fontFamily: 'Gilroy-Medium', marginLeft: 5}}>4000/min</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row',}}>
                            <CallMiniIcon />
                            <Text style={{fontSize: 16, fontFamily: 'Gilroy-Medium', marginLeft: 5}}>4000/min</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flexDirection: 'row',}}>
                            <VideoCallMiniIcon />
                            <Text style={{fontSize: 16, fontFamily: 'Gilroy-Medium', marginLeft: 5}}>4000/min</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{height: 1, marginVertical: 10, width: '100%', backgroundColor: 'rgba(0,0,0,0.05)'}} />
                <View>
                    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
                        <View>
                            <Text style={{alignSelf: 'center', fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#FF9A42',}}>1200</Text>
                            <Text style={{alignSelf: 'center', fontFamily: 'Gilroy-Regular', fontSize: 18, color: '#000',}}>Followers</Text>
                        </View>
                        <View>
                            <Text style={{alignSelf: 'center', fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#FF9A42',}}>1200</Text>
                            <Text style={{alignSelf: 'center', fontFamily: 'Gilroy-Regular', fontSize: 18, color: '#000',}}>Following</Text>
                        </View>
                        <View>
                            <Text style={{alignSelf: 'center', fontFamily: 'Gilroy-Bold', fontSize: 18, color: '#FF9A42',}}>4.4M</Text>
                            <Text style={{alignSelf: 'center', fontFamily: 'Gilroy-Regular', fontSize: 18, color: '#000',}}>Gift</Text>
                        </View>
                    </View>
                </View>
                <View style={{height: 1, marginTop: 10, width: '100%', backgroundColor: 'rgba(0,0,0,0.05)'}} />
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 15}}>
                <TouchableOpacity onPress={() => setView(0)}><Text style={[{fontFamily: 'Gilroy-SemiBold', fontSize: 14, 
                                                            alignSelf: 'baseline', }, view === 0?{color: 'rgba(243, 41, 101, 1)'}: {color: '#000'}]}>Gallery</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setView(1)} style={{marginLeft: 20}}><Text style={[{fontFamily: 'Gilroy-SemiBold', fontSize: 14,  
                                                            alignSelf: 'baseline', }, view === 1?{color: 'rgba(243, 41, 101, 1)'}: {color: '#000'}]}>Video</Text></TouchableOpacity>
            </View>
            {view === 0 && <View>
            <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20, justifyContent: 'space-evenly', flex: 1}}>
            <View style={{overflow: 'hidden', borderRadius: 10}}><Image source={require('../../Assets/Images/photo.png')} style={{width: wp('43%'), height: wp('50%')}} /></View>
            <View style={{overflow: 'hidden', borderRadius: 10}}><Image source={require('../../Assets/Images/photo.png')} style={{width: wp('43%'), height:wp('50%')}} /></View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, marginHorizontal: 20, justifyContent: 'space-evenly'}}>
            <View style={{overflow: 'hidden', borderRadius: 10}}><Image source={require('../../Assets/Images/photo.png')} style={{width: wp('27%'), height: wp('25%')}} /></View>
            <View style={{overflow: 'hidden', borderRadius: 10}}><Image source={require('../../Assets/Images/photo.png')} style={{width: wp('27%'), height: wp('25%')}} /></View>
            <View style={{overflow: 'hidden', borderRadius: 10}}><Image source={require('../../Assets/Images/photo.png')} style={{width: wp('27%'), height: wp('25%')}} /></View>
            </View>
            </View>}

           {view === 1 && <View>
            <View style={{flexDirection: 'row', marginTop: 15, marginHorizontal: 20, marginBottom: 10, justifyContent: 'space-evenly', flex: 1}}>
            <View style={{overflow: 'hidden', borderRadius: 10}}><Image source={require('../../Assets/Images/photo.png')} style={{width: wp('43%'), height: wp('50%')}} /></View>
            <View style={{overflow: 'hidden', borderRadius: 10}}><Image source={require('../../Assets/Images/photo.png')} style={{width: wp('43%'), height:wp('50%')}} /></View>
            </View>
            </View>}
            </ScrollView>
        </View>
    )
}

export default ProfileView
