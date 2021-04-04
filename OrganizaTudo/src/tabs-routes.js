import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import NotasOffline from './paginas/NotasOffline';
import NotasOnline from './paginas/NotasOnline';
import Perfil from './paginas/Pefil';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = focused ? 'person' : 'sticky-note';
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
            tabBarOptions={{
                activeTintColor: '#35C0ED',
                inactiveTintColor: 'gray',
            }}
        >

            <Tab.Screen name="NotasOffline" component={NotasOffline} />
            <Tab.Screen name="NotasOnline" component={NotasOnline} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}
