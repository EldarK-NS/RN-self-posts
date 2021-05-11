
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PostNavigator, BookedNavigator } from '../../src/Navigation/AppNavigation';
import { Ionicons } from '@expo/vector-icons'
import { THEME } from '../../src/theme';


const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: THEME.MAIN_COLOR }}
            shifting={true}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'All Posts') {
                        iconName = focused ? 'albums' : 'albums-outline';
                    } else if (route.name === 'Favorite') {
                        iconName = focused ? 'star' : 'star-outline';
                    }
                    return <Ionicons name={iconName} size={25} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: THEME.MAIN_COLOR,
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='All Posts' component={PostNavigator} />
            <Tab.Screen name="Favorite" component={BookedNavigator} />
        </Tab.Navigator>
    );
}


