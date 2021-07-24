import React, {useCallback, useState} from 'react';
// import {useNavigation} from '@react-navigation/core';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Switch, Text} from '../components/';

const Web = () => {
  // const navigation = useNavigation();
  // const {isDark, handleIsDark} = useData();
  // const {t, locale, setLocale} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();

  // const isEN = locale.includes('en');
  
  return (
    // 此处webview的内容，距离顶部状态栏的距离，写死了
    <View style={{ flex: 1, marginTop: -20 }}>
      <WebView
        source={{uri: 'https://github.com/stevekeol'}}
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default Web;
