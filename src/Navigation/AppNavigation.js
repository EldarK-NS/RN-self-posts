import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { BookedScreen } from './../screens/BookedScreen';
import { CreateScreen } from './../screens/CreateScreen';
import { AboutScreen } from './../screens/AboutScreen';


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
                                onPress={() => navigation.navigate('Create')} />
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
        <Stack.Navigator initialRouteName='Favorite'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
            }}>
            <Stack.Screen name='Favorite' component={BookedScreen}
                options={({ navigation }) => ({
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
        </Stack.Navigator>
    )
}
export const CreateNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Create'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
            }}>
            <Stack.Screen name='CREATE NEW POST' component={CreateScreen}
                options={({ navigation }) => ({
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
        </Stack.Navigator>
    )
}
export const AboutNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='About'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
            }}>
            <Stack.Screen name='ABOUT PROJECT' component={AboutScreen}
                options={({ navigation }) => ({
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
        </Stack.Navigator>
    )
}


