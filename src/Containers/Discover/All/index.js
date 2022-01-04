import { statusCodes } from '@react-native-google-signin/google-signin'
import React from 'react'
import { View, Text } from 'react-native'
import AllBoys from './AllBoys'
import AllGirls from './AllGirls'
const data = [
    {
        id: 1, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 2, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 3, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 4, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 5, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 6, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 7, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 8, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 9, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    },
    {
        id: 10, name: 'Aleena Gates', age: 23, country: 'England', rate: 8000, image: require('../../../Assets/Images/photo.png')
    }
]

const index = (props) => {
    const [gender, setGender] = React.useState('male')
    return (
        <View>
            {gender === 'male'? <AllGirls {...props} data={data}/>:<AllBoys {...props} data={data} />}
        </View>
    )
}

export default index
