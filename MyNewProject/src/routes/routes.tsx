import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/HomeScreen';
import Detail from '../screens/Detail/DetailScreen';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <NavigationContainer>
        <App.Navigator screenOptions={{ headerShown: false }}>
            <App.Screen name="Home" component={Home} />
            <App.Screen name="Detail" component={Detail} />
        </App.Navigator>
    </NavigationContainer>
);




export default AppRoutes;