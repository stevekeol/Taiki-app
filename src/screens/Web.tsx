import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const Web = (obj: Object) => {

  return (
    // 此处webview的内容，距离顶部状态栏的距离，写死了
    <View style={{ flex: 1, marginTop: -20 }}>
      <WebView
        source={{uri: obj?.route?.params?.uri}}
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default Web;
