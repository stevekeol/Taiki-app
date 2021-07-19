/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';

// import type { Node } from 'react';

import { ContainerEngine } from './customModule';

// // 自定义原生模块
// setTimeout(() => {
//   ToastExample.show('Taiki@JieGe', ToastExample.SHORT); // customModule
// }, 1000)

// 小程序容器引擎的初始化
ContainerEngine.init();

// 需要时，载入并运行某个小程序
// setTimeout(() => ContainerEngine.openApplet(), 3000)

export default function App() {
  return (
    <DataProvider>
      <AppNavigation />
    </DataProvider>
  );
}