import React, {useContext, useState} from 'react';
import {View,Text,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../Navigation/AuthProvider';
const HomeSearch = (props) => {
    const navigation = useNavigation();
    const {logout} = useContext(AuthContext);

    return(
        <View>
          <Pressable onPress={()=> navigation.navigate('Queue')} style={{marginBottom: 20,backgroundColor: 'lightgrey',alignItems: 'center',height: 50,
                marginHorizontal: 20,borderRadius: 10}} >
                    <Text style={{fontSize: 20, color: 'black',fontWeight:'bold'}}>JOIN QUEUE</Text>
                </Pressable>
                <Pressable onPress={()=> navigation.navigate('Account')} style={{marginBottom: 20,backgroundColor: 'lightgrey',alignItems: 'center',height: 50,
                marginHorizontal: 20,borderRadius: 10}} >
                    <Text style={{fontSize: 20, color: 'black',fontWeight:'bold'}}>PROFILE</Text>
                </Pressable>
                <Pressable onPress={() => logout()} style={{marginBottom: 20,backgroundColor: 'lightgrey',alignItems: 'center',height: 50,
                marginHorizontal: 20,borderRadius: 10}} >
                    <Text style={{fontSize: 20, color: 'black',fontWeight:'bold'}}>LOGOUT</Text>
                </Pressable>
                
        </View>
    );
};

export default HomeSearch;