import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Tabs from './tabs-routes';
import Login from './paginas/Login';

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="Tabs" component={Tabs}
                options={{
                    headerShown: true,
                    headerTitleStyle: {
                        alignSelf: 'center'
                    },
                    title: 'ORGANIZATUDO',
                    headerLeft: () => (
                        <View />
                    ), headerRight: () => (
                        <View />
                    )
                }}
            />
        </Stack.Navigator>
    );
}
