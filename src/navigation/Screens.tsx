import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Home, 
  Components, 
  Articles, 
  Rentals,
  Profile, 
  Settings,
  Register, 
  Extras,
  About,
  Agreement,
  Chat,
  Notifications,
  NotificationsSettings,
  Privacy,
  Login,
  Rental,
  Booking,
  Pro, 
  Shopping,
  Web,
  BlockTree,
  DApp
} from '../screens';
import { useScreenOptions, useTranslation } from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const { t } = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    // 页面栈的导航器（screenOptions就包含了所有页面顶部通用的Header栏）
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        // 这个name是路由的名字
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Rentals"
        component={Rentals}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: t('navigation.home')}}
      />   
      
      <Stack.Screen
        name="Extras"
        component={Extras}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="About"
        component={About}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Agreement"
        component={Agreement}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: '加密聊天', 
          // @TODO 不显示Header
          headerShown: false
        }}
      />  

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{title: t('navigation.home')}}
      />  

      <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsSettings}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerShown: false}}
      />  

      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: t('navigation.home')}}
      /> 

      <Stack.Screen
        name="Rental"
        component={Rental}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{title: t('navigation.home')}}
      />  

      <Stack.Screen
        name="Shopping"
        component={Shopping}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="BlockTree"
        component={BlockTree}
        options={{title: '精选区块链项目'}}
      />      

      <Stack.Screen
        name="Web"
        component={Web}
        options={{
          title: '精选区块链项目', 
          // @TODO 此处有bug，当不显示Header时，顶部的任务栏也没有高度了(即时间，网络那一栏)
          headerShown: false 
        }}
      />
      <Stack.Screen
        name="DApp"
        component={DApp}
        options={{title: 'DApp Center'}}
      />
    </Stack.Navigator>
  );
};
