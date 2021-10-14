import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StackHeaderTitleProps, CardStyleInterpolators } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

import { useData, useTheme, useTranslation } from '../hooks/';
import { Block, Button, Image, Text } from '../components/';

export default () => {
  const { t } = useTranslation();
  const { user } = useData();
  const navigation = useNavigation();
  const { icons, colors, gradients, sizes } = useTheme();

  /**
   * @TODO
   * 定制页面框架顶部的菜单栏
   */
  const menu = {
    headerStyle: {elevation: 0},
    headerTitleAlign: 'left',
    headerTitleContainerStyle: {marginLeft: -sizes.sm},
    headerLeftContainerStyle: {paddingLeft: sizes.s},
    headerRightContainerStyle: {paddingRight: sizes.s},
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    /**
     * @TODO
     * 定制菜单栏title
     */
    headerTitle: ({children}: StackHeaderTitleProps) => (
      <Text p>{children}</Text>
    ),
    /**
     * @TODO
     * 定制菜单栏的抽屉展开符
     */    
    headerLeft: () => (
      <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image source={icons.menu} radius={0} color={colors.icon} />
      </Button>
    ),
    /**
     * @TODO
     * 定制菜单栏右边的功能扩展/功能常驻按钮
     */    
    headerRight: () => (
      <Block row flex={0} align="center" marginRight={sizes.padding}>
        <TouchableOpacity
          style={{marginRight: -sizes.xs}}
          onPress={() =>
            navigation.navigate('Screens', {
              screen: 'About',
            })} >
          <Image 
            source={icons.dot} 
            radius={0} 
            color={colors.icon} 
            width={20}
            height={20} />
          <Block
            flex={0}
            right={0}
            width={sizes.s}
            height={sizes.s}
            radius={sizes.xs}
            position="absolute"
            gradient={gradients?.primary}
          />
        </TouchableOpacity>
        {/*<TouchableOpacity
          onPress={() =>
            navigation.navigate('Screens', {
              screen: 'Pro',
            })
          }>
          <Image source={icons.basket} radius={0} color={colors.icon} />
          <Block
            flex={0}
            padding={0}
            justify="center"
            position="absolute"
            top={-sizes.s}
            right={-sizes.s}
            width={sizes.sm}
            height={sizes.sm}
            radius={sizes.sm / 2}
            gradient={gradients?.primary}>
            <Text white center bold size={10} lineHeight={10} paddingTop={3}>
              3
            </Text>
          </Block>
        </TouchableOpacity>*/}
      </Block>
    ),
  } as StackHeaderOptions;

  const options = {
    stack: menu,
    components: {
      ...menu,
      headerTitle: () => (
        <Text p white>
          {t('navigation.components')}
        </Text>
      ),
      headerRight: () => null,
      headerLeft: () => (
        <Button
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image source={icons.menu} radius={0} color={colors.white} />
        </Button>
      ),
    },
    pro: {
      ...menu,
      headerTransparent: true,
      headerTitle: () => (
        <Text p white semibold>
          {t('pro.title')}
        </Text>
      ),
      headerRight: () => null,
      headerLeft: () => (
        <Button
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Image source={icons.menu} radius={0} color={colors.white} />
        </Button>
      ),
    },
    back: {
      ...menu,
      headerRight: () => null,
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()}>
          <Image
            radius={0}
            width={10}
            height={18}
            color={colors.icon}
            source={icons.arrow}
            transform={[{rotate: '180deg'}]}
          />
        </Button>
      ),
    },
    profile: {
      ...menu,
      /**
       * @TODO
       * 需要定制页面框架顶部的功能入口时，着力点
       */
      headerRight: () => (
        <Block row flex={0} align="center" marginRight={sizes.padding}>
          <TouchableOpacity
            style={{marginRight: sizes.sm}}
            onPress={() =>
              navigation.navigate('Screens', {
                screen: 'Notifications',
              })
            }>
            <Image source={icons.bell} radius={0} color={colors.icon} />
            <Block
              flex={0}
              right={0}
              width={sizes.s}
              height={sizes.s}
              radius={sizes.xs}
              position="absolute"
              gradient={gradients?.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(
                DrawerActions.jumpTo('Screens', {screen: 'About'}),
              )
            }>
            <Image
              radius={6}
              width={24}
              height={24}
              source={{uri: user.avatar}}
            />
          </TouchableOpacity>
        </Block>
      ),
    },
  };

  return options;
};
