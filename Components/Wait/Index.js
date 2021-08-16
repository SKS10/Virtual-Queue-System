import React from 'react';
import {View,Text,ImageBackground,Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Wait = (props) => {
    const navigation = useNavigation();
    return(
        <View style={{
            height:250,
            backgroundColor:"#a0abff",
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                <ImageBackground source={require('../../assets/images/Wait.jpg')}
                style={styles.image}>

                <Text style={styles.title}></Text>
                </ImageBackground>
          
        </View>
    );
};

export default Wait;