import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import styles from './styles';

const HomeMap = (props) => {
    return(
        <View style={{
            height:300,
            backgroundColor:"#a0abff",
            justifyContent: 'center',
            alignItems: 'center',
            }}>
                <ImageBackground source={require('../../assets/images/CityM.jpg')}
                style={styles.image}>

                <Text style={styles.title}>WELCOME</Text>
                </ImageBackground>
        </View>
    );
};

export default HomeMap;