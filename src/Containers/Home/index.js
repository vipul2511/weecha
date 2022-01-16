import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  BackHandler,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  YellowBox,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FilterIcon from '../../Assets/Icons/filter.svg';
import Card from './Card';
import Swiper from 'react-native-deck-swiper';
import {StorageUtils} from '../../Helper/storage';
import {call} from 'redux-saga/effects';
import {returntoken} from '../../Services/Utils/HelperService';
// import { PanGestureHandler } from 'react-native-gesture-handler';
// import * as Animatable from 'react-native-animatable';
// import Animated, {runOnJS,
//   useDerivedValue, Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
// import { SafeAreaView } from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
const data = [
  {
    id: 1,
    name: 'Jessica Parker',
    age: 29,
    rate: 4000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(1).jpg'),
  },
  {
    id: 2,
    name: 'Parker',
    age: 21,
    rate: 1000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(2).jpg'),
  },
  {
    id: 3,
    name: 'Jessica',
    age: 22,
    rate: 5000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(3).jpg'),
  },
  {
    id: 4,
    name: 'Alexa',
    age: 20,
    rate: 3000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(4).jpg'),
  },
  {
    id: 5,
    name: 'Marry',
    age: 23,
    rate: 8000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(5).jpg'),
  },
  {
    id: 6,
    name: 'Elena',
    age: 27,
    rate: 8000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(6).jpg'),
  },
  {
    id: 7,
    name: 'Robby',
    age: 22,
    rate: 8000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(7).jpg'),
  },
  {
    id: 8,
    name: 'Tina',
    age: 28,
    rate: 8000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(8).jpg'),
  },
  {
    id: 9,
    name: 'Ayesha',
    age: 21,
    rate: 8000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(9).jpg'),
  },
  {
    id: 10,
    name: 'Joey',
    age: 23,
    rate: 8000,
    country: 'England',
    imageUrl: require('../../Assets/Images/photo(10).jpg'),
  },
];
const Home = props => {
  // const phi = (1 + Math.sqrt(5)) / 2;
  // const w = width - 32;
  // const h = w * phi
  // const alpha = Math.PI / 12
  // const A = h*Math.sin(alpha) + w*Math.cos(alpha)
  // const X = useSharedValue(0);
  // const Y = useSharedValue(0);
  // const indexShared = useSharedValue(0)
  // const indd = useRef(0)
  // const [indx, setIndx] = useState(0)
  // const [cardOpacity, setCardOpacity] = useState(1)
  //   const changeIndd = () => {
  //     console.log(indx, indexShared.value)
  //     if(indexShared.value<0) {

  //     }else {
  //       if(indexShared.value > 0 && indexShared.value < data.length){
  //         setIndx(indexShared.value)
  //         setTimeout(() => {
  //           X.value = withTiming(0)
  //         }, 300)
  //       }

  //     }

  //   }
  //   const animatedGestureHandler = useAnimatedGestureHandler({
  //     onActive: (e) => {
  //       console.log(e, "EVENT")
  //         X.value = e.translationX,
  //         Y.value = e.translationY
  //     },
  //     onEnd: () => {
  //         console.log(X.value)

  //         X.value = withTiming(0)
  //           Y.value = withTiming(0)
  //           if(indexShared.value < data.length-1) {
  //             if(X.value > 50 || X.value < -50) {
  //               if(X.value>0) {

  //                 X.value = withTiming(1.5*width)
  //               }
  //               indexShared.value = indexShared.value + 1
  //              }
  //           }

  //     }
  //   })
  //   useDerivedValue(() => {
  //     runOnJS(changeIndd)(indexShared.value);
  //   });
  // useEffect(() => {

  // console.log("CURRENT")
  // }, [indd.current])
  //   const AnimatedStyles = {
  //     swipeable: useAnimatedStyle(() => {
  //       return {
  //         transform: [
  //           {rotateZ: `${interpolate(X.value, [-width, width], [-alpha, alpha, Extrapolate.CLAMP])} rad`},
  //         {translateX: X.value},
  //         {translateY: interpolate(Y.value, [-200, 200], [-100, 100, Extrapolate.CLAMP])}
  //       ]
  //       }
  //     })
  //   }

  const isFocused = useIsFocused();

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

  useEffect(() => {
    storeData();
    returntoken();
  }, []);
  useEffect(() => {
    StatusBar.setHidden(false);
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      console.log('MOUNTED');
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@is_login', JSON.stringify(true));
    } catch (e) {
      // saving error
    }
  };

  const [backgroundText, setbackgroundText] = useState('');
  return (
    <>
      <StatusBar backgroundColor={'#F46186'} />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            height: '13%',
            width: '100%',
            alignItems: 'center',
            backgroundColor: '#F46186',
          }}>
          <View style={{flexDirection: 'row', position: 'absolute', bottom: 0}}>
            <View
              style={{
                width: wp('20%'),
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <FontAwesome5Icon
                name={'chevron-left'}
                color={'white'}
                size={20}
                solid
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginBottom: '3%',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: wp('5.2%'),
                  fontFamily: 'Gilroy-Bold',
                  color: 'white',
                }}>
                Discover
              </Text>
              <Text
                style={{
                  fontSize: wp('3.7%'),
                  fontFamily: 'Gilroy-Bold',
                  color: 'rgba(0,0,0,0.3)',
                }}>
                Chicago
              </Text>
            </View>
            <View
              style={{
                width: wp('18%'),
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <FilterIcon width={wp('7%')} height={wp('7%')} fill="white" />
            </View>
          </View>
        </View>
        <View style={{height: '76%'}}>
          {/* <PanGestureHandler style={{position: 'absolute'}} onGestureEvent={animatedGestureHandler}>
          <Animated.View style={AnimatedStyles.swipeable}>
          <Animatable.View transition={"opacity"} style={{opacity: cardOpacity}}>
            <Card indx={indx} data={data} {...props} />
          </Animatable.View>
          </Animated.View>
          </PanGestureHandler> */}
          <View
            style={[
              {
                position: 'absolute',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              },
              backgroundText.length > 0 ? {zIndex: 2} : {zIndex: 0},
            ]}>
            <Text>{backgroundText}</Text>
          </View>
          <Swiper
            // ref={swiper => {
            //   this.swiper = swiper
            // }}
            onSwiped={() => console.log('Swiped')}
            onSwipedLeft={() => console.log('Swiped')}
            onSwipedRight={() => console.log('Swiped')}
            onSwipedTop={() => console.log('Swiped')}
            onSwipedBottom={() => console.log('Swiped')}
            onSwipedAll={() => setbackgroundText("You're done for today!")}
            // onTapCard={this.swipeLeft}
            cards={data}
            cardIndex={0}
            cardVerticalMargin={0}
            // infinite={true}
            renderCard={card => <Card data={card} {...props} />}
            // onSwipedAll={this.onSwipedAllCards}
            stackSize={2}
            stackSeparation={0}
            cardHorizontalMargin={0}
            containerStyle={{height: '100%'}}
            backgroundColor="#fff"
            // overlayLabels={{

            //   left: {
            //     title: 'NOPE',
            //     style: {
            //       label: {
            //         backgroundColor: 'black',
            //         borderColor: 'black',
            //         color: 'white',
            //         borderWidth: 1
            //       },
            //       wrapper: {
            //         flexDirection: 'column',
            //         alignItems: 'flex-end',
            //         justifyContent: 'flex-start',
            //         marginTop: 30,
            //         marginLeft: -30
            //       }
            //     }
            //   },
            //   right: {
            //     title: 'LIKE',
            //     style: {
            //       label: {
            //         backgroundColor: 'black',
            //         borderColor: 'black',
            //         color: 'white',
            //         borderWidth: 1
            //       },
            //       wrapper: {
            //         flexDirection: 'column',
            //         alignItems: 'flex-start',
            //         justifyContent: 'flex-start',
            //         marginTop: 30,
            //         marginLeft: 30
            //       }
            //     }
            //   }}}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
          />
        </View>
      </View>
    </>
  );
};
export default Home;
