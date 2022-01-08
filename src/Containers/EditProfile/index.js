import React from 'react'
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
const EditProfile = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar
                backgroundColor="transparent"
                translucent={true}
                />
            <ScrollView>
                <View style={{marginTop: 40, width: wp('92%'), alignSelf: 'center', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{justifyContent: 'center'}}><FontAwesome5 name={'arrow-left'} color={"#000"} size={20} /></TouchableOpacity>
                <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 22, color: '#000', marginLeft: 10}}>
                    Edit Profile</Text>
                </View>
                <View style={{width: wp('92%'), alignSelf: 'center',}}>
                <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 13, color: 'rgba(0, 0, 0, 0.3)',}}>
                long established fact that a reader long</Text>
                </View>

                <View style={{marginTop: 20, backgroundColor: 'rgba(242, 242, 242, 1)',width: wp('92%'), alignSelf: 'center', alignItems: 'center', borderRadius: 4, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>
                    <View style={{width: 40, alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome5 name={"camera"} color={"#000"} size={30} solid />
                    </View>
                    <View style={{flex: 1, marginLeft: 10,}}>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16, color: '#000',}}>
                    Avatar</Text>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 10, color: 'rgba(0, 0, 0, 0.3)',}}>
                    long established fact that a reader long</Text>
                    </View>
                    <View style={{width: 20}}>
                        <FontAwesome5 name={"chevron-right"} size={20} color={"#000"} solid />
                    </View>
                </View>
                <View style={{marginTop: 15, backgroundColor: 'rgba(242, 242, 242, 1)',width: wp('92%'), alignSelf: 'center', alignItems: 'center', borderRadius: 4, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>

                    <View style={{flex: 1, marginLeft: 10,}}>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 12, color: 'rgba(91, 91, 91, 1)',}}>
                    Name</Text>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16, color: 'rgba(0, 0, 0, 1)',}}>
                    weechaprofile</Text>
                    </View>
                </View>
                <View style={{marginTop: 10, backgroundColor: 'rgba(242, 242, 242, 1)',width: wp('92%'), alignSelf: 'center', alignItems: 'center', borderRadius: 4, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>

                    <View style={{flex: 1, marginLeft: 10,}}>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 12, color: 'rgba(91, 91, 91, 1)',}}>
                    Gender</Text>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16, color: 'rgba(0, 0, 0, 1)',}}>
                    Female</Text>
                    </View>
                </View>
                <View style={{marginTop: 10, backgroundColor: 'rgba(242, 242, 242, 1)',width: wp('92%'), alignSelf: 'center', alignItems: 'center', borderRadius: 4, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>

                    <View style={{flex: 1, marginLeft: 10,}}>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 12, color: 'rgba(91, 91, 91, 1)',}}>
                    Home Country</Text>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16, color: 'rgba(0, 0, 0, 1)',}}>
                    India</Text>
                    </View>
                </View>
                <View style={{marginTop: 10, backgroundColor: 'rgba(242, 242, 242, 1)',width: wp('92%'), alignSelf: 'center', alignItems: 'center', borderRadius: 4, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>

                    <View style={{flex: 1, marginLeft: 10,}}>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 12, color: 'rgba(91, 91, 91, 1)',}}>
                    DOB</Text>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16, color: 'rgba(0, 0, 0, 1)',}}>
                    12/12/1995</Text>
                    </View>
                </View>
                <View style={{marginTop: 10, backgroundColor: 'rgba(242, 242, 242, 1)',width: wp('92%'), alignSelf: 'center', alignItems: 'center', borderRadius: 4, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>

                    <View style={{flex: 1, marginHorizontal: 10,}}>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 12, color: 'rgba(91, 91, 91, 1)',}}>
                    About</Text>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16, color: 'rgba(0, 0, 0, 1)',}}>
                    long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that</Text>
                    </View>
                </View>
                <View style={{marginTop: 10,width: wp('92%'), alignSelf: 'center',}}>
                <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16, color: 'rgba(0,0,0, 1)',}}>
                    Album Images</Text>
                    <Text style={{marginTop: 5,fontFamily: 'Gilroy-Medium', fontSize: 12, color: 'rgba(91, 91, 91, 1)',}}>
                    Upload your best selfies to attract more users </Text>
                </View>
                <View style={{marginTop: 10,width: wp('92%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{justifyContent: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#000', borderStyle: 'dashed', width: (wp('92%')/3) - 20, height: (wp('92%')/3) - 20, }}>
                <View style={{position: 'absolute', alignSelf: 'center', height: 2, backgroundColor: '#000',  width: '30%'}} />
                <View style={{position: 'absolute', alignSelf: 'center', height: '30%', backgroundColor: '#000',  width: 2}} />
                </View>
                <View style={{justifyContent: 'center',borderRadius: 10, borderWidth: 1, borderColor: '#000', borderStyle: 'dashed', width: (wp('92%')/3) - 20, height: (wp('92%')/3) - 20, }}>
                <View style={{position: 'absolute', alignSelf: 'center', height: 2, backgroundColor: '#000',  width: '30%'}} />
                <View style={{position: 'absolute', alignSelf: 'center', height: '30%', backgroundColor: '#000',  width: 2}} />
                </View>
                <View style={{justifyContent: 'center',borderRadius: 10, borderWidth: 1, borderColor: '#000', borderStyle: 'dashed', width: (wp('92%')/3) - 20, height: (wp('92%')/3) - 20, }}>
                <View style={{position: 'absolute', alignSelf: 'center', height: 2, backgroundColor: '#000',  width: '30%'}} />
                <View style={{position: 'absolute', alignSelf: 'center', height: '30%', backgroundColor: '#000',  width: 2}} />
                </View>
                </View>
                <View style={{marginTop: 3,width: wp('92%'), alignSelf: 'center'}}>
                <Text style={{marginTop: 5,fontFamily: 'Gilroy', fontSize: 12, color: 'rgba(0,0,0, 1)',}}>
                *3 pictures are mandatory  </Text>
                </View>
                <View style={{marginTop: 10, backgroundColor: 'rgba(242, 242, 242, 1)',width: wp('92%'), alignSelf: 'center', alignItems: 'center', borderRadius: 4, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 15 }}>

                    <View style={{flex: 1, marginLeft: 10,}}>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 16, color: 'rgba(91, 91, 91, 1)',}}>
                    Facetime Verification</Text>
                    <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 10, color: 'rgba(0, 0, 0, 1)',}}>
                    long established fact that a reader</Text>
                    <View style={{flexDirection: 'row', position: 'absolute', right: 0, top: -19}}>
                    <Image source={require('../../Assets/Images/LeftArrows.png')} resizeMode='contain' style={{height: 70, width: 70}} />
                    <Image source={require('../../Assets/Images/RightArrows.png')} resizeMode='contain' style={{height: 70, width: 70}} />
                    </View>
                    </View>
                </View>
                <LinearGradient colors={['rgba(72, 101, 255, 1)','rgba(249, 70, 253, 1)']} style={{borderRadius: 5, marginVertical: 20, alignItems: 'center', justifyContent: 'center', height: 50, alignSelf: 'center', width: wp('92%')}}>
                <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 20, color: 'rgba(255,255,255, 1)',}}>
                    Submit</Text>
                </LinearGradient>
            </ScrollView>
        </View>
    )
}

export default EditProfile
