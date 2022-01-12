import React, { useEffect, useState } from 'react'
import {View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import moment from 'moment'
import { createThumbnail } from 'react-native-create-thumbnail';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Message = (props) => {

    const [thumbnailVideo, setThumbnailVideo] = useState('')

    useEffect(() => {
       if(props.item.body.video.toString().length > 0){
        createThumbnail({
            url: props.item.body.video,
            timeStamp: 1000,
        })
        .then(res => setThumbnailVideo(res.path))
        .catch(e => console.log(e))
       }
    }, [props.item])
const renderDate = () => {
    if(props.index != props.messages.length-1){
        if(moment(props.messages[props.index].createdAt).format("DD/MM/YYYY") == moment(props.messages[props.index+1].createdAt).format("DD/MM/YYYY"))
        return <Text></Text>
    }
        return (
            <View style={[{alignSelf:'center', width: '100%', marginBottom: 10}, props.index == props?.messages.length-1?{marginTop: 10}:{}]}>
            <Text style={{fontFamily: 'Mulish-Regular', fontSize: 12, color: 'rgba(0,0,0, 0.4)',textAlign:'center', width: '100%'}}>{moment(props.messages[props.index].createdAt).calendar(null, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY'
})}</Text>
            </View>
            )
    
}
    console.log(props.item, "ITEM")
    return (
        <View style={[{width: '100%', paddingHorizontal:10, paddingBottom: 10 }, props.userId===props?.item.sentBy?{alignItems: 'flex-end'}:{alignItems: 'flex-start'}]}>
            {renderDate()}
            <View style={[{maxWidth: wp('70%'), padding: wp('3%'), 
            }, props.userId===props?.item.sentBy?{borderTopRightRadius: wp('5%'), borderTopLeftRadius: wp('5%'), borderBottomLeftRadius: wp('5%'), backgroundColor: 'rgba(0, 45, 227, 1)'}:{
                borderTopRightRadius: wp('5%'), borderTopLeftRadius: wp('5%'), borderBottomRightRadius: wp('5%'), backgroundColor: 'white'
            }]}>
                {props.item.body.image.toString().length> 0 && 
                <TouchableOpacity activeOpacity={0.8}>
                    <ImageBackground imageStyle={{borderRadius: wp('1%')}} source={props.item.body?.image} style={{marginBottom: 5, width: wp('60%'), height: 150}} />
                </TouchableOpacity>}
                {props.item.body.video.toString().length> 0 && 
                <TouchableOpacity activeOpacity={0.8}>
                    <ImageBackground imageStyle={{borderRadius: wp('1%')}} source={{uri: thumbnailVideo}} style={{alignItems: 'center', justifyContent: 'center', marginBottom: 5, width: wp('60%'), height: 150}}>
                        <Icon
                        name={"play"}
                        size={30}
                        color={'black'}
                        solid
                        style={{elevation: 4}}
                        />
                    </ImageBackground>
                </TouchableOpacity>}
                {props.item.body.text.length> 0 && <Text style={[{ fontFamily: 'Mulish-Regular', fontSize: 14}, props.userId===props?.item.sentBy?{color:'white'}:{color:'rgba(15, 24, 40, 1)'}]}>{props.item.body.text}</Text>}
                <View style={[{flexDirection: 'row', alignItems: 'center', marginTop: hp('0.8%')}, props.userId===props?.item.sentBy?{alignSelf: 'flex-end',}:{alignSelf: 'flex-start',}]}>
                <Text style={[{ fontFamily: 'Lato-Regular', fontSize: 10}, props.userId===props?.item.sentBy?{color:'white'}:{color:'rgba(173, 181, 189, 1)'}]}>{moment(props.item.createdAt).format('hh:mm')}</Text>
                {props.item?.read && props.item.sentBy===props.userId?<><View style={{height: 2, width: 2, backgroundColor: 'white', borderRadius: 100, marginHorizontal: 2}} />
                <Text style={{ fontFamily: 'Lato-Regular', fontSize: 10, color: 'white'}}>{props.item.read?"Read":''}</Text></>:null}
                </View>
            </View>
        </View>
    )

}
export default Message;