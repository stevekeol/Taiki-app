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
  Shopping
} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
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
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Rentals"
        component={Rentals}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />   
      
      <Stack.Screen
        name="Extras"
        component={Extras}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Agreement"
        component={Agreement}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />  

      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />  

      <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsSettings}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerShown: false}}
      />  

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> 

      <Stack.Screen
        name="Rental"
        component={Rental}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{headerShown: false}}
      />  

      <Stack.Screen
        name="Shopping"
        component={Shopping}
        options={{headerShown: false}}
      />        
    </Stack.Navigator>
  );
};
