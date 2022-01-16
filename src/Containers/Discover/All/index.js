import {statusCodes} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AllBoys from './AllBoys';
import AllGirls from './AllGirls';
import {connect} from 'react-redux';
import CommonActions from '../../../Store/Common/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

let filterdata = null;

const data = [
  {
    id: 1,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 2,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 3,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 4,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 5,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 6,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 7,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 8,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 9,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
  {
    id: 10,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo.png'),
  },
];

const index = props => {
  const getFilter = async () => {
    let a = await props.getUserFilter();
    console.log(a, 'Profile Response');
  };
  useEffect(() => {
    console.log('Calllllll===>');
    getFilter();
    //  console.log('props',JSON.stringify(props.getLanguageList));
  }, []);

  useEffect(async() => {


    filterdata = props.getUserFilterList?.user?.data;
    console.log('Filter Dataa==>', JSON.stringify(filterdata));
    setGender(await AsyncStorage.getItem("gender"))
    // setLanguageData(props.getLanguageList)
  }, [props.getUserFilterList]);

  const [gender, setGender] = React.useState('');


  return (
    <View>
      {gender === 'male' ? (
        <AllGirls {...props} data={props.getUserFilterList?.user?.data} />
      ) : (
        <AllBoys {...props} data={props.getUserFilterList?.user?.data} />
      )}
    </View>
  );
};

// export default index

const mapStateToProps = state => ({
  getUserFilterLoading: state.common.getUserFilterLoading,
  getUserFilterList: state.common.getUserFilterList,
});

const mapDispatchToProps = dispatch => ({
  getUserFilter: () => {
    dispatch(CommonActions.getUserFilter());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
