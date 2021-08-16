
import React from 'react';
import {View,Text, Pressable} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
const CustomDrawer= (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor: 'black', padding: 15}}>
                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                    <View style={{backgroundColor: '#cacaca',width: 50, height: 50,borderRadius: 25,marginRight: 10}} />
                <View>
                  <Text style={{color: 'white', fontSize: 24}}>Cristiano Ronaldo</Text>  
                </View>
            </View>
                
            <Pressable onPress={()=>{console.warn('Purchase history')}}>
                    <Text style={{color: 'white'}}>Purchase history</Text>
                </Pressable>

            <Pressable onPress={()=>{console.warn('Notifications')}}>
                    <Text style={{color: 'white',paddingVertical: 5}}>Notifications</Text>
                </Pressable>


                <Pressable onPress={()=>{console.warn('Contact us')}}>
                    <Text style={{color: 'white', paddingVertical: 5}}>Contact us</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;