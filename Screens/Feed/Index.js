import React, {useState} from 'react';
import {View,Text,Pressable,StyleSheet,TextInput} from 'react-native';
import{useRoute} from '@react-navigation/native';
import Wait from '../../Components/Wait/Index';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
const Feed = (props) => {
    var Random=Math.floor(Math.random()*100)+1;
    const route =useRoute();
    const { itemId, otherParam } = route.params;
    const [number,setNumber]=useState(0);
    const [children,setChildren]=useState(0);
    
    const tokenData= async () => {
        firestore()
        .collection('TokenNumber')
        .add({
       line:Random,
          
      
        })
        .then(()=> {
          console.log('Details added');
        })
        .catch(()=> {
          console.log('Details wrong')
        })
      }
     

    
    const navigation = useNavigation();
    return(
        //<View style={{display:'flex', justifyContent:'space-between'}}>
        <View style={{justifyContent:'space-between',height: '100%'}}>
            <View>
            <Wait/>
            <View>
                    <Text style={{fontWeight: 'bold'}}></Text>
                    
                </View>
        </View>
      
        <View>
        <View>
                    <Text style={{fontSize: 20,fontWeight: 'bold'}}>   ADULTS {itemId}</Text>
                    <Text style={{fontSize: 20,fontWeight: 'bold'}}>   CHILDREN {otherParam}</Text>
                    <Text style={{fontSize: 20,fontWeight: 'bold'}}>   ESTIMATED WAITING  {(otherParam*5)+(itemId*10)} mins</Text>
                    
                </View>
        <Pressable onPress={()=> navigation.navigate('Queue')} style={{marginBottom: 20,backgroundColor: 'lightgrey',alignItems: 'center',height: 50,
                marginHorizontal: 20,borderRadius: 10}} >
                    <Text style={{fontSize: 20, color: 'black',fontWeight:'bold'}}>EDIT</Text>
                </Pressable>
               
                <Pressable onPress={()=> navigation.navigate('CurrentQueue',{Oneparam:itemId,Secondparam:otherParam,Thirdparam:Random})} style={{marginBottom: 20,backgroundColor: 'lightgrey',alignItems: 'center',height: 50,
                marginHorizontal: 20,borderRadius: 10}} >
                    <Text style={{fontSize: 20, color: 'black',fontWeight:'bold'}}>CONFIRM</Text>
                </Pressable>
        </View>  
        </View>
        
        
        
    );
};

export default Feed;


