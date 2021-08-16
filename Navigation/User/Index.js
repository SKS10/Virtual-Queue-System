import React ,{useContext,useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../AuthProvider';
import auth from '@react-native-firebase/auth';
import StackScreen from '../StackScreen/Index';
import AuthStack from '../AuthStack';




const Stack = createStackNavigator();
const User = (props) => {
    const {user,setUser} = useContext(AuthContext);
    const {initializing,setInitializing} =useState(true);

    const onAuthStateChanged = (user)=>{
        setUser(user);
        if(initializing) setInitializing(false);

    }
    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    },[]);
    if(initializing) return null;
    return(
        <NavigationContainer>
            {user ? <StackScreen/> : <AuthStack/>}
          
               

       </NavigationContainer>
    );
};

export default User;