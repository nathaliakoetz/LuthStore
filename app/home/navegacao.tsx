import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from '../home/home'; // Página inicial (index.tsx)
import productListScreen from './productListScreen'; // Tela de produtos (productListScreen.tsx)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Produtos" component={productListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
