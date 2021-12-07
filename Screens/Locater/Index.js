import React from 'react';
import {View,Text,FlatList} from 'react-native';
import Shops from '../../assets/data/Shops';
import Post from '../../Components/Post/index';
import {useNavigation} from '@react-navigation/native';
import{useRoute} from '@react-navigation/native';

const Locater = (props) => {
    const route =useRoute();
    const navigation = useNavigation();
    return(
        <View>
           <FlatList
           data={Shops}
           renderItem={({item})=><Post post={item}/>}
           />
        </View>
    );
};

export default Locater;