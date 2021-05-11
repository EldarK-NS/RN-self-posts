import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import { BookedScreen } from './../screens/BookedScreen';
import { AboutScreen } from './../screens/AboutScreen';
import { CreateScreen } from './../screens/CreateScreen';


const Stack = createStackNavigator()

export const PostNavigator = () => {

    const iconStar = 'star'
    const iconStarOutline = 'star-outline'
    return (
        <Stack.Navigator initialRouteName='My Blog'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
            }}>
            <Stack.Screen name='My Blog' component={MainScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Take photo'
                                iconName='camera'
                                onPress={() => console.log('photo')} />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Toggle Drawer'
                                iconName='menu'
                                onPress={() => navigation.toggleDrawer()} />
                        </HeaderButtons>
                    )
                })}
            />
            <Stack.Screen
                name='Post'
                component={PostScreen}
                options={({ route }) => ({
                    title: `Post from ${route.params.date}`,
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Take photo'
                                iconName={route.params.booked ? iconStar : iconStarOutline}
                                onPress={() => console.log('photo')} />
                        </HeaderButtons>
                    ),
                })
                } />
        </Stack.Navigator>
    )

}

export const BookedNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='My Blog'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
            }}>
            <Stack.Screen name='Favorite' component={BookedScreen}
                options={{
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Toggle Drawer'
                                iconName='menu'
                                onPress={() => console.log('menu')} />
                        </HeaderButtons>
                    )
                }}
            />
        </Stack.Navigator>
    )
}


const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="My Blog!">
            <Drawer.Screen name="My Blog!" component={MainScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Create" component={CreateScreen} />
        </Drawer.Navigator>
    );
}