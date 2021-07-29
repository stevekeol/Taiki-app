import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Block from './Block';
import Image from './Image';
import Text from './Text';
import {IProduct} from '../constants/types';
import {IProProfile} from '../constants/BlockTree/@types';
import {useTheme, useTranslation} from '../hooks/';

const Product = (profile: IProProfile) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {assets, colors, sizes} = useTheme();

  const isHorizontal = false;
  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;

  return (
    <Block
      card
      flex={0}
      row={isHorizontal}
      marginBottom={sizes.sm}
      width={isHorizontal ? CARD_WIDTH * 2 + sizes.sm : CARD_WIDTH}>
      <Image
        resizeMode="cover"
        source={{uri: profile.logo}}
        style={{
          height: isHorizontal ? 114 : 110,
          width: !isHorizontal ? '100%' : sizes.width / 2.435,
        }}
      />
      <Block
        paddingTop={sizes.s}
        justify="space-between"
        paddingLeft={isHorizontal ? sizes.sm : 0}
        paddingBottom={isHorizontal ? sizes.s : 0}>
        <Text p marginBottom={sizes.s}>
          {profile.bio}
        </Text>
        <TouchableOpacity>
          <Block row flex={0} align="center">
            <Text
              p
              color={colors.link}
              semibold
              size={sizes.linkSize}
              onPress={
                () => {
                  navigation.navigate('Web', { uri: profile.web });
                }
              }
              marginRight={sizes.s}>
              {profile.name}
            </Text>
            <Image source={assets.arrow} color={colors.link} />
          </Block>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Product;

// {"navigation": 
//   {
//     "addListener": [Function addListener], 
//     "canGoBack": [Function canGoBack], 
//     "closeDrawer": [Function anonymous], 
//     "dangerouslyGetParent": [Function dangerouslyGetParent], 
//     "dangerouslyGetState": [Function anonymous], 
//     "dispatch": [Function dispatch], "goBack": [Function anonymous], 
//     "isFocused": [Function isFocused], "jumpTo": [Function anonymous], 
//     "navigate": [Function anonymous], "openDrawer": [Function anonymous], 
//     "pop": [Function anonymous], "popToTop": [Function anonymous], 
//     "push": [Function anonymous], "removeListener": [Function removeListener], 
//     "replace": [Function anonymous], "reset": [Function anonymous], 
//     "setOptions": [Function setOptions], "setParams": [Function anonymous], 
//     "toggleDrawer": [Function anonymous]
//    }, 
//     "route": {"key": "Web-WL7j344aAnOSx7rw9Ma1N", "name": "Web", "params": {"uri": "https://www.baidu.com"}
//   }
// }


// {
//   "addListener": [Function addListener], "canGoBack": [Function canGoBack], 
//   "closeDrawer": [Function anonymous], "dangerouslyGetParent": [Function dangerouslyGetParent], 
//   "dangerouslyGetState": [Function anonymous], "dispatch": [Function dispatch], 
//   "goBack": [Function anonymous], "isFocused": [Function isFocused], 
//   "jumpTo": [Function anonymous], "navigate": [Function anonymous], 
//   "openDrawer": [Function anonymous], "pop": [Function anonymous], 
//   "popToTop": [Function anonymous], "push": [Function anonymous], 
//   "removeListener": [Function removeListener], "replace": [Function anonymous], 
//   "reset": [Function anonymous], "setOptions": [Function setOptions], 
//   "setParams": [Function anonymous], "toggleDrawer": [Function anonymous]
// }