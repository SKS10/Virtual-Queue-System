import React ,{useContext,useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../../Screens/Login/Index';
import SignupScreen from '../../Screens/SignIn/Index';
import HomeScreen from '../../Screens/HomeScreen/Index';
import Feed from '../../Screens/Feed/Index';
import Account from '../../Screens/Account/Index';
import Queue from '../../Screens/Queue/Index';
import Details from '../../Screens/Details/Index';
import  { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../BottomTab/Index';




const Stack = createStackNavigator();
const StackScreen= (props) => {
    return(
        
          
               <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                
               >
                   <Stack.Screen name={"HomeS"} component={BottomTab} options={{headerShown: false, }}/>
                   <Stack.Screen name={"Home"} component={HomeScreen} />
                   <Stack.Screen name={"Queue"} component={Queue} />
                   <Stack.Screen name={"Feed"} component={Feed} />
                   <Stack.Screen name={"Details"} component={Details}/>
                   <Stack.Screen name={"Account"} component={Account}/>
                   <Stack.Screen name={"SignupScreen"} component={SignupScreen}/>


               </Stack.Navigator>

       
    );
};

export default StackScreen;