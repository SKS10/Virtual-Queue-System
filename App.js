/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import {StatusBar} from 'react-native';
 import Router from './Navigation/User/Index';
 import { AuthProvider } from './Navigation/AuthProvider';
 
 const App  = () => {
   return(
     <>
         <StatusBar barStyle="dark-content"/>
         <AuthProvider>
         <Router />
         </AuthProvider>
         
         
     
     </>
   );
   
   
 };
 
 
 export default App;