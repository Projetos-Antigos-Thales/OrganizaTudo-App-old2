import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './paginas/Login';
import NotasOffline from './paginas/NotasOffline';
import NotasOnline from './paginas/NotasOnline';
import Perfil from './paginas/Pefil';

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="NotasOnline" component={NotasOnline} />
            <Stack.Screen name="NotasOffline" component={NotasOffline} />
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
    );
}
