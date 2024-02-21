import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home';
import Cards from '../screens/Home/components/Cards'; // Importe os componentes que você deseja mostrar nas guias
import Overview from '../screens/Login';

import { NuBlog } from '~/common/components/NuBlog/NuBlog';
import TabBar from '~/common/components/TabBar/TabBar';
import Investments from '~/screens/Investments/inde';
import Shopping from '~/screens/Shopping';

export type RootStackParamList = {
  Login: undefined;
  PrivateRoutes: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const PrivateScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#121212',

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#fff',
        },
      }}
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        // @ts-ignore
        options={{ tabBarIcon: 'home' }}
      />
      <Tab.Screen
        name="Investments"
        component={Investments}
        // @ts-ignore
        options={{ tabBarIcon: 'dollar-sign' }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        // @ts-ignore
        options={{ tabBarIcon: 'shopping-bag' }}
      />
    </Tab.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Overview} />
        <Stack.Screen name="PrivateRoutes" component={PrivateScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
