import React from 'react';
import {View,Text} from 'react-native';
import Message from '../../Components/Message/Index';
import HomeSearch from '../../Components/HomeSearch/Index';
import HomeMap from '../../Components/HomeMap/Index';

const HomeScreen = (props) => {
    return(
        <View>
             <HomeMap/>
            <Message/>

            <HomeSearch />

        </View>
    );
};

export default HomeScreen;