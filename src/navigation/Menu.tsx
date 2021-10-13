import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, Animated, Linking, StyleSheet} from 'react-native';

/**
 * @TODO 需要将抽屉栏改为底部栏时的着力点
 */
import {
  useIsDrawerOpen,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Screens from './Screens';
import {Block, Text, Switch, Button, Image} from '../components';
import {useData, useTheme, useTranslation} from '../hooks';

import { ContainerEngine } from '../customModule';

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const {colors} = useTheme();
  const isDrawerOpen = useIsDrawerOpen();
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{scale: scale}],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: 'hidden',
          borderColor: colors.card,
          borderWidth: isDrawerOpen ? 1 : 0,
        },
      ])}>
      {/* 所有的screen */}
      <Screens />
    </Animated.View>
  );
};

/* custom drawer menu */
const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  const {navigation} = props;
  const {t} = useTranslation();
  const {isDark, handleIsDark} = useData();
  const [active, setActive] = useState('Home');
  const {assets, colors, gradients, sizes} = useTheme();
  const labelColor = colors.text;

  const handleNavigation = useCallback(
    (to) => {
      setActive(to);
      navigation.navigate(to);
    },
    [navigation, setActive],
  );

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  // 在小程序容器引擎中 打开某个小程序
  const openApplet = () => ContainerEngine.openApplet();

  // screen list for Drawer menu
  const screens = [
    {name: t('screens.projects'),       to: 'BlockTree',  icon: assets.components},
    {name: t('screens.home'),           to: 'Home',       icon: assets.home},
    {name: t('screens.chat'),           to: 'Chat',       icon: assets.chat},
    {name: t('screens.about'),          to: 'About',      icon: assets.more},
    // {name: t('screens.components'),  to: 'Components', icon: assets.components},
    // {name: t('screens.articles'),    to: 'Articles',   icon: assets.document},
    // {name: t('screens.rental'),      to: 'Rentals',    icon: assets.rental},
    // {name: t('screens.profile'),     to: 'Profile',    icon: assets.profile},
    // {name: t('screens.settings'),    to: 'Settings',   icon: assets.settings},
    // {name: t('screens.register'),    to: 'Register',   icon: assets.register},
    // {name: t('screens.extra'),       to: 'Extras',     icon: assets.star},
    // {name: t('screens.agreement'),   to: 'Agreement',  icon: assets.star},
    // {name: t('screens.privacy'),     to: 'Privacy',    icon: assets.star},
    // {name: t('screens.login'),       to: 'Login',      icon: assets.star},
    // {name: t('screens.rental'),      to: 'Rental',     icon: assets.star},
    // {name: t('screens.booking'),     to: 'Booking',    icon: assets.star},
    // {name: t('screens.pro'),         to: 'Pro',        icon: assets.star},
    // {name: t('screens.shopping'),    to: 'Shopping',   icon: assets.star},
    // {name: t('screens.notifications'), to: 'Notifications', icon: assets.star},
    // {name: t('screens.notificationsSettings'), to: 'NotificationsSettings', icon: assets.star}
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{paddingBottom: sizes.padding}}
    >
      <Block paddingHorizontal={sizes.padding}>
        <Block flex={0} row align="center" marginBottom={sizes.l}>
          <Image
            radius={0}
            width={33}
            height={33}
            color={colors.text}
            source={assets.logo}
            marginRight={sizes.sm}
          />
          <Block>
            <Text size={16} semibold>
              {t('app.name')}
            </Text>
            <Text size={12} semibold>
              {t('app.native')}
            </Text>
          </Block>
        </Block>

      {/* 临时: 进入小程序容器引擎 */}
        <Button
          row
          justify="flex-start"
          marginBottom={sizes.s}
          key={`menu-screen-containerEngine`}
          onPress={() => openApplet()}>
          <Block
            flex={0}
            radius={6}
            align="center"
            justify="center"
            width={sizes.md}
            height={sizes.md}
            marginRight={sizes.s}
            gradient={gradients['primary']}>
            <Image
              radius={0}
              width={14}
              height={14}
              source={assets.more}
              color={colors['white']}
            />
          </Block>
          <Text p semibold={true} color={labelColor}>
            {t('screens.containerEngine')}
          </Text>
        </Button>        

        {screens?.map((screen, index) => {
          const isActive = active === screen.to;
          return (
            <Button
              row
              justify="flex-start"
              marginBottom={sizes.s}
              key={`menu-screen-${screen.name}-${index}`}
              onPress={() => handleNavigation(screen.to)}>
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                width={sizes.md}
                height={sizes.md}
                marginRight={sizes.s}
                gradient={gradients[isActive ? 'primary' : 'white']}>
                <Image
                  radius={0}
                  width={14}
                  height={14}
                  source={screen.icon}
                  color={colors[isActive ? 'white' : 'black']}
                />
              </Block>
              <Text p semibold={isActive} color={labelColor}>
                {screen.name}
              </Text>
            </Button>
          );
        })}

        <Block
          flex={0}
          height={1}
          marginRight={sizes.md}
          marginVertical={sizes.sm}
          gradient={gradients.menu}
        />
          <Text semibold transform="uppercase" opacity={0.5}>
            {t('menu.reference')}
          </Text>
          <Button
            row
            justify="flex-start"
            marginTop={sizes.sm}
            marginBottom={sizes.s}
            onPress={() =>
              handleWebLink('https://github.com/stevekeol')
            }>
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              width={sizes.md}
              height={sizes.md}
              marginRight={sizes.s}
              gradient={gradients.white}>
              <Image
                radius={0}
                width={14}
                height={14}
                color={colors.black}
                source={assets.documentation}
              />
            </Block>
            <Text p color={labelColor}>
              {t('menu.author')}
            </Text>
          </Button>
          <Block row justify="space-between" marginTop={sizes.sm}>
            <Text color={labelColor}>{t('darkMode')}</Text>
            <Switch
              checked={isDark}
              onPress={(checked) => {
                handleIsDark(checked);
                Alert.alert(t('upgrade.title'), t('upgrade.alert'));
              }}
            />
          </Block>
        </Block>
    </DrawerContentScrollView>
  );
};

/* drawer menu navigation */
export default () => {
  const {gradients} = useTheme();

  return (
    <Block gradient={gradients.light}>
      {/*Drawer栏的导航器*/}
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        // props是从哪儿传进来的?
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{
          flex: 1,
          width: '60%',
          borderRightWidth: 0,
          backgroundColor: 'transparent',
        }}>
        {/* 此处认真感受 Drawer栏的导航 & Stack页面的导航间的关系 */}
        <Drawer.Screen name="Screens" component={ScreensStack} />
      </Drawer.Navigator>
    </Block>
  );
};
