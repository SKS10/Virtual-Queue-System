import React, {useState,useEffect} from 'react';
import {View,Text,Pressable,FlatList} from 'react-native';
import{useRoute} from '@react-navigation/native';
import WaitingScreen from '../../Components/WaitingScreen/Index';
import firestore, { firebase } from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
const CurrentQueue = (props) => {
  var Random=Math.floor(Math.random()*100)+1;
    const route =useRoute();
  
    const [loading,setLoading]=useState(true);
    const [users,setUsers]=useState([]);
    const [posts,setPosts]=useState([]);


        
    
    const navigation = useNavigation();
    return(
        //<View style={{display:'flex', justifyContent:'space-between'}}>
        <View style={{justifyContent:'space-between',height: '100%'}}>
            <View>
            <WaitingScreen/>
            <View>
                
                    
                    
                </View>
               
        </View>
      
      
        <View>
        <Text style={{     fontSize: 30,
       fontWeight: 'bold',
       color: 'black',
       textAlign: 'center',}}>WAIT FOR YOUR TURN</Text> 
        <View>
        <Text style={{     fontSize: 30,
       fontWeight: 'bold',
       color: 'black',
       textAlign: 'center',}}>THANK YOU!</Text> 
         <Text style={{     fontSize: 30,
       fontWeight: 'bold',
       color: 'black',
       textAlign: 'center',}}>TOKEN NUMBER :{Random}</Text> 
       
       

                </View>
          
        <Pressable onPress={()=> navigation.navigate('Home')} style={{marginBottom: 20,backgroundColor: 'lightgrey',alignItems: 'center',height: 50,
                marginHorizontal: 20,borderRadius: 10}} >
                    <Text style={{fontSize: 20, color: 'black',fontWeight:'bold'}}>HOME</Text>
                </Pressable>
        </View>  
        </View>
        
        
        
    );
};

export default CurrentQueue;