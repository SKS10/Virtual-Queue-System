import React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';
import HomeScreen from '../../Screens/HomeScreen/Index';
import Feed from '../../Screens/Feed/Index';
import Details from '../../Screens/Details/Index';
import Account from '../../Screens/Account/Index';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../../Screens/Login/Index';
const Tab=createBottomTabNavigator();
const BottomTab = (props) => {
   
    return(
       
           <Tab.Navigator tabBarOptions={{
               activeTintColor: 'black',
           }}>
                 <Tab.Screen name={"Home"} 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="user-o" size={25} color={color}/>

                    )

                    
                }} />
                 <Tab.Screen name={"Account"}  component={Account}
           
                
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="heart-o" size={25} color={color}/>

                    )
               
                    
                }}  />

            
                <Tab.Screen name={"Details"}  component={Details}
           
                
           options={{
               tabBarIcon: ({color}) => (
                   <FontAwesome name="users" size={25} color={color}/>

               )
          
               
           }}  />
              
           </Tab.Navigator>
       
    );
};

export default BottomTab;