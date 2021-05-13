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
import { useDispatch, useSelector } from 'react-redux';
import { toggleBooked } from '../store/actions/post'

const Stack = createStackNavigator()

export const PostNavigator = () => {
    const state = useSelector(state => state.post.allPosts)
    const icon = (data, route) => {
        const post = data.find(d => d.id === route)
        if (post.booked) {
            return 'star'
        } else {
            return 'star-outline'
        }
    }

    const dispatch = useDispatch()
    return (
        <Stack.Navigator initialRouteName='My Blog'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
            }}>
            <Stack.Screen name='My Blog!' component={MainScreen}
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
                                iconName={icon(state, route.params.postId)}
                                onPress={() => {
                                    const post = state.find(d => d.id === route.params.postId)
                                    dispatch(toggleBooked(post))
                                }} />
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


