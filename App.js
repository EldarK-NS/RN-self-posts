
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';
import { bootstrap } from './src/bootstrap'
import { Ionicons } from '@expo/vector-icons'
import { THEME } from './src/theme';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './src/Navigation/TabNavigator';
import { CreateNavigator, AboutNavigator } from './src/Navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './src/store/index';


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
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: THEME.MAIN_COLOR,
            itemStyle: { marginVertical: 10 },
            labelStyle: {
              fontFamily: 'open-bold'
            }
          }}>
          <Drawer.Screen name="My Blog!" component={TabNavigator}
            options={{
              drawerLabel: 'MAIN',
              drawerIcon: () => (<Ionicons name='star' size={15} />)
            }} />
          <Drawer.Screen name="About" component={AboutNavigator}
            options={{
              drawerLabel: 'ABOUT US'
            }}
          />
          <Drawer.Screen name="Create" component={CreateNavigator}
            options={{
              drawerLabel: 'CREATE POST'
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


