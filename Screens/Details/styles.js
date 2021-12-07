import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: '90%',
        height: 5,
      },
    title: {
       fontSize: 30,
       fontWeight: 'bold',
       color: 'black',
       textAlign: 'center',



    },
       titleView: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      width: 150,
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin:10,
      width: 375,
    },
    edit: {
      borderColor: '#777',
      margin:10,
      width: 345,
    },

});

export default styles;