import {statusCodes} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AllBoys from './AllBoys';
import AllGirls from './AllGirls';
import {connect} from 'react-redux';
import CommonActions from '../../../Store/Common/Actions';
let filterdata = null;

const data = [
  {
    id: 1,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(1).jpg'),
  },
  {
    id: 2,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(2).jpg'),
  },
  {
    id: 3,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(3).jpg'),
  },
  {
    id: 4,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(4).jpg'),
  },
  {
    id: 5,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(5).jpg'),
  },
  {
    id: 6,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(6).jpg'),
  },
  {
    id: 7,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(7).jpg'),
  },
  {
    id: 8,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(8).jpg'),
  },
  {
    id: 9,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(9).jpg'),
  },
  {
    id: 10,
    name: 'Aleena Gates',
    age: 23,
    country: 'England',
    rate: 8000,
    image: require('../../../Assets/Images/photo(10).jpg'),
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

  useEffect(() => {
    filterdata = props.getUserFilterList?.user?.data;
    console.log('Filter Dataa==>', JSON.stringify(filterdata));
    // setLanguageData(props.getLanguageList)
  }, [props.getUserFilterList]);

  const [gender, setGender] = React.useState('male');
  return (
    <View>
      {gender === 'male' ? (
        <AllGirls {...props} 
        // data={props.getUserFilterList?.user?.data} 
        data={data}
        />
      ) : (
        <AllBoys {...props} 
        data={data}
        // data={props.getUserFilterList?.user?.data} 
        />
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
