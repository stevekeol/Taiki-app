import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
  BlockTree
} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    // 页面栈的导航器
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
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
        options={{title: t('navigation.home')}}
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
        options={{title: '精选区块链项目'}}
      />               
    </Stack.Navigator>
  );
};
