
import React from 'react';

import LoginScreen from './src/Screen/LoginScreen';
import { ColorsLogin } from './src/Utits/Vectors/ColorsLogin';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/Screen/RegisterScreen';
import MainScreen from './src/Screen/MainScreen';
 
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: ColorsLogin.white }}>
        <StatusBar backgroundColor={ColorsLogin.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown:false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}


