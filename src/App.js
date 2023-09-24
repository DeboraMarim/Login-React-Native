import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import InitialPage from './screens/InitialPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen 
          name="Initial" 
          component={InitialPage} 
          options={{ title: 'Home' }} // Adicione esta linha
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
