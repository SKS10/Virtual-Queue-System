import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

inputBox: {
    backgroundColor: '#b0b0b0',
    margin: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
},
timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
},
row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
},
iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
},
destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,


},


});

export default styles;