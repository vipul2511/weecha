// import * as React from 'react';
// import {View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import WalletScreen from "../Containers/Wallet/WalletScreen";
// import {Image} from "react-native";
// import styles from './styles';
// import Home from '../Containers/Home';
// import Settings from '../Containers/Settings';
// const Tab = createBottomTabNavigator();

// const TabNav = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let icon;

//                     switch (route.name) {
//                         case 'Home': icon = focused ? require('../Assets/Images/HomeIconActive.png') : require('../Assets/Images/HomeIcon.png'); break;
//                         case 'Data points': icon = focused ? require('../Assets/Images/DataPointsIconActive.png') : require('../Assets/Images/DataPointsIcon.png'); break;
//                         case 'Dapps': icon = focused ? require('../Assets/Images/DappsIconActive.png') : require('../Assets/Images/DappsIcon.png'); break;
//                         case 'NFT (soon)': icon = focused ? require('../Assets/Images/NFTIconActive.png') : require('../Assets/Images/NFTIcon.png'); break;
//                         case 'Settings': icon = focused ? require('../Assets/Images/SettingsIconActive.png') : require('../Assets/Images/SettingIcon.png'); break;
//                     }

//                     return <Image
//                         style={styles.navIcon}
//                         source={icon}
//                     />
//                 },
//                 tabBarStyle: styles.tabBar,
//                 tabBarLabelStyle: styles.tabBarText,
//                 tabBarActiveTintColor: '#FFFFFF',
//                 tabBarInactiveTintColor: '#5E6272',
//             })}
//         >
//             <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
//             <Tab.Screen name="Data points" component={WalletScreen} options={{headerShown: false}}/>
//             <Tab.Screen name="Dapps" component={WalletScreen} options={{headerShown: false}}/>
//             <Tab.Screen name="NFT (soon)" component={WalletScreen} options={{headerShown: false}}/>
//             <Tab.Screen name="Settings" component={WalletScreen} options={{headerShown: false}}/>

//         </Tab.Navigator>
//     );
// };

// export default TabNav;
