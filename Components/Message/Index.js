import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';
const Message = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Travel Only if neccessary</Text>
            <Text style={styles.title}>Maintain Proper Social Distance</Text>
            <Text style={styles.title}>Wear Masks and use Hand Sanitizers</Text>
        </View>
    );
};

export default Message;
