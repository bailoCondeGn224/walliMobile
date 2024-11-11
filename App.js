
import React from 'react';

import LoginScreen from './src/Screen/LoginScreen';
import { ColorsLogin } from './src/Utits/Vectors/ColorsLogin';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/Screen/RegisterScreen';
import MainScreen from './src/Screen/MainScreen';
import ProductScreen from './src/Screen/ProductScreen';
import DescribeScreen from './src/Component/DescribeScreen';
 
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
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="DescribeScreen" component={DescribeScreen} />

      </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}


