import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from '@react-navigation/native';

import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeStackScreen";
import ContactScreen from "../screens/ContactStackScreen";
import InfoScreen from "../screens/InfoStackScreen";


const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
    const { color } = "red";
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#000',
                labelStyle: { fontSize: 12, color: 'white' },
                style: { backgroundColor: 'green' },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={ContactScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="online-prediction" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={InfoScreen}
                options={{
                    tabBarLabel: 'Contactanos',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="settings" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}