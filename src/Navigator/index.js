import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Containers/Splash';
import Language from "../Containers/Language";
import Login from "../Containers/Login";
import LoginPhone from "../Containers/Registration";
import Signup from "../Containers/SignUp";
import welcomeScreen from "../Containers/WelcomeScreen"
import EditProfile from "../Containers/EditProfile";
import InterestScreen from "../Containers/Interest";
import SearchFriend from "../Containers/SearchFriend";
import Home from "../Containers/Home";
const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Language"
          component={Language}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="LoginPhone"
          component={LoginPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="welcomeScreen"
          component={welcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InterestScreen"
          component={InterestScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SearchFriend"
          component={SearchFriend}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
