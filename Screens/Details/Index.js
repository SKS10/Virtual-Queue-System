import React,{useContext,useState} from 'react';
import {View,Text,TextInput, StatusBar, TouchableOpacity,Pressable} from 'react-native';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../Navigation/AuthProvider';
const Details =  () => {
  const {user,logout}= useContext(AuthContext);
  const [age,setAge]=useState(null);
  const [Vaccine,setVaccine]=useState(null);
  const [Condition,setCondition]=useState(null);
  const [Name,setName]=useState(null);
  const submitPost = async () => {
  firestore()
  .collection('posts')
  .add({
    UserNo:user.uid,
    NAME:Name,
    AGE: age,  
    AddTime: firestore.Timestamp.fromDate(new Date()),
    VACCINATION: Vaccine,
    CONDITION:Condition,

  })
  .then(()=> {
    console.log('Details added');
  })
  .catch(()=> {
    console.log('Details wrong')
  })
}
    return(
        <View>
        
     
        <Text style={styles.title}>ENTER PERSONAL DETAILS</Text>
        <Text  style={styles.edit} >FULL NAME</Text>
        <TextInput style={styles.input} value={Name}
          onChangeText={(content) => setName(content)}/> 
        <Text  style={styles.edit}  >AGE</Text>
        <TextInput style={styles.input} value={age}
          onChangeText={(content) => setAge(content)}/>
        <Text  style={styles.edit}   >VACINATION STATUS</Text>
        <TextInput style={styles.input}
        value={Vaccine}
        onChangeText={(content) => setVaccine(content)}
         placeholder='eg Partial/Fully'
          /> 
        <Text  style={styles.edit} >FEVER/COUGH AND COLD </Text>
        <TextInput style={styles.input} value={Condition}
          onChangeText={(content) => setCondition(content)}/> 
        <Pressable onPress={submitPost} style={{marginBottom: 20,backgroundColor: 'lightgrey',alignItems: 'center',height: 50,
                marginHorizontal: 20,borderRadius: 10}} >
                    <Text style={{fontSize: 20, color: 'black',fontWeight:'bold'}}>CONFIRM</Text>
                </Pressable>
             
      </View>

      
    );
};

export default Details;