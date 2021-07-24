import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import {IProProfile} from '../constants/BlockTree/@types';

const Web = ({logo, name, bio, href}: IProProfile) => {
  return (
    // 此处webview的内容，距离顶部状态栏的距离，写死了
    <View style={{ flex: 1, marginTop: -20 }}>
      <WebView
        source={{uri: 'https://defi.network'}}
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default Web;
