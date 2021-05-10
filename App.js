
import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { bootstrap } from './src/bootstrap'
import { PostNavigator, BookedNavigator } from './src/Navigation/AppNavigation';
import { Ionicons } from '@expo/vector-icons'
import { THEME } from './src/theme';


const Tab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }


  return (
    <NavigationContainer>
      <Tab.Navigator
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
