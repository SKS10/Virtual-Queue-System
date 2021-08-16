import React, {useState} from 'react';
import {View,Text, Pressable,TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = (props) => {
    const [adults,setAdults]=useState(0);
    const [children,setChildren]=useState(0);
  

    const navigation =useNavigation();
    
    
    
    return(
        <View style={{justifyContent: 'space-between',height: '100%'}}>
            <View>
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Adults</Text>
                    <Text style={{color: '#8d8d8d'}}>Ages 18+</Text>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Pressable onPress={() => setAdults(Math.max(0,adults-1))}
                    style={styles.button} >
                        <Text style={{fontSize:20,color:'#474747'}}>-</Text>

                    </Pressable>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

                    <Pressable onPress={() => setAdults(adults+1)}
                    style={styles.button} >
                        <Text style={{fontSize:20,color:'#474747'}}>+</Text>

                    </Pressable>
                </View>
        
            </View>
            
            <View style={styles.row}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>Children</Text>
                    <Text style={{color: '#8d8d8d'}}>Below 18</Text>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Pressable onPress={() => setChildren(Math.max(0,children-1))}
                    style={styles.button} >
                        <Text style={{fontSize:20,color:'#474747'}}>-</Text>

                    </Pressable>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

                    <Pressable onPress={() => setChildren(children+1)}
                    style={styles.button} >
                        <Text style={{fontSize:20,color:'#474747'}}>+</Text>

                    </Pressable>
                </View>
               
            </View>
            <View>
            <Text  style={styles.edit} >Person With Disabilities(Please Specify)</Text>
        <TextInput style={styles.input} ></TextInput> 
            </View>
            </View>
            <View>
            
            </View>
            <View>

                
            <Pressable onPress={()=> navigation.navigate('Feed',{itemId:adults,otherParam:children})} style={{marginBottom: 20,backgroundColor: 'lightgrey',alignItems: 'center',height: 50,
                marginHorizontal: 20,borderRadius: 10}} >
                    <Text style={{fontSize: 20, color: 'black',fontWeight:'bold'}}>CONFIRM</Text>
                </Pressable>
            </View>  
        </View>
    );
};

export default GuestsScreen;