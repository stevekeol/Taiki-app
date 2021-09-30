//------------------------静态页面版本--------------------------

// import dayjs from 'dayjs';
// import {Platform, StyleSheet} from 'react-native';
// import React, {useCallback, useState} from 'react';
// import {
//   GiftedChat,
//   Composer,
//   Bubble,
//   InputToolbar,
// } from 'react-native-gifted-chat';

// import {Block, Button, Image, Text} from '../components/';
// import {useData, useTheme, useTranslation} from '../hooks/';
// import {MESSSAGES} from '../constants/mocks';

// const Chat = () => {
//   const {user} = useData();
//   const {t, locale} = useTranslation();
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState(MESSSAGES);
//   const {assets, colors, gradients, sizes} = useTheme();

//   const handleSend = useCallback(
//     (messages = []) => {
//       setMessages((state) => GiftedChat.append(state, messages));
//       setMessage('');
//     },
//     [setMessages, setMessage],
//   );

//   return (
//     <Block paddingHorizontal={sizes.s}>
//       <GiftedChat
//         alignTop
//         text={message}
//         showUserAvatar
//         locale={locale}
//         renderAvatarOnTop
//         messages={messages}
//         bottomOffset={-sizes.m}
//         placeholder={t('common.message')}
//         onSend={(messages) => handleSend(messages)}
//         user={{_id: user.id, name: user?.name, avatar: user?.avatar}}
//         onInputTextChanged={(text) => setMessage(text)}
//         renderActions={() => (
//           <Button>
//             <Image source={assets.image} radius={0} color={colors.icon} />
//           </Button>
//         )}
//         renderComposer={(props) => (
//           <Composer
//             {...props}
//             textInputStyle={{
//               marginLeft: 0,
//               color: colors.input,
//               paddingTop: Platform.OS === 'android' ? 0 : sizes.s,
//             }}
//           />
//         )}
//         renderInputToolbar={(props) => (
//           <InputToolbar
//             {...props}
//             optionTintColor={String(colors.input)}
//             containerStyle={{
//               paddingTop: 0,
//               marginTop: 0,
//               marginBottom: sizes.sm,
//               borderColor: colors.gray,
//               borderRadius: sizes.inputRadius,
//               borderWidth: StyleSheet.hairlineWidth,
//               backgroundColor: 'transparent',
//             }}
//             renderSend={({text}) => {
//               if (text?.length === 0) {
//                 return null;
//               }

//               return (
//                 <Button
//                   gradient={gradients.primary}
//                   onPress={() =>
//                     handleSend([
//                       {
//                         _id: dayjs().unix(),
//                         text,
//                         createdAt: dayjs().subtract(1, 'm').toDate(),
//                         user: {
//                           _id: user.id,
//                           name: user.name,
//                           avatar: user.avatar,
//                         },
//                       },
//                     ])
//                   }>
//                   <Text
//                     semibold
//                     marginHorizontal={sizes.m}
//                     transform="uppercase">
//                     {t('common.send')}
//                   </Text>
//                 </Button>
//               );
//             }}
//           />
//         )}
//         renderBubble={(props) => (
//           <Bubble
//             {...props}
//             wrapperStyle={{
//               left: {backgroundColor: 'transparent'},
//               right: {backgroundColor: 'transparent'},
//             }}
//           />
//         )}
//         renderTime={(props) => (
//           <Text size={12}>
//             {dayjs(props?.currentMessage?.createdAt).format('HH:mm A')}
//           </Text>
//         )}
//         renderMessageText={(props) => {
//           const isMine = props?.currentMessage?.user?._id === user?.id;
//           return (
//             <Block card flex={0} black={isMine}>
//               <Text white={isMine}>{props?.currentMessage?.text}</Text>
//             </Block>
//           );
//         }}
//       />
//     </Block>
//   );
// };

// export default Chat;

//-----------------------------reaminated这个地方还没解决---------------------------------

// import React, {useEffect, useState} from 'react';
// import {StyleSheet, View} from 'react-native';
// import {StreamChat} from 'stream-chat';
// import {
//   Channel,
//   Chat,
//   MessageInput,
//   MessageList,
//   OverlayProvider as ChatOverlayProvider,
// } from 'stream-chat-react-native';
// import {
//   SafeAreaProvider,
//   SafeAreaView,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// const userToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9uIn0.eRVjxLvd4aqCEHY_JRa97g6k7WpHEhxL7Z4K4yTot1c';

// const user = {
//   id: 'ron',
// };

// const chatClient = StreamChat.getInstance('q95x9hkbyd6p');
// const connectUserPromise = chatClient.connectUser(user, userToken);

// const channel = chatClient.channel('messaging', 'channel_id');

// const ChannelScreen = () => {
//   const {bottom} = useSafeAreaInsets();

//   return (
//     <ChatOverlayProvider bottomInset={bottom} topInset={0}>
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           {/* Setting keyboardVerticalOffset as 0, since we don't have any header yet */}
//           <Channel channel={channel} keyboardVerticalOffset={0}>
//             <View style={StyleSheet.absoluteFill}>
//               <MessageList />
//               <MessageInput />
//             </View>
//           </Channel>
//         </Chat>
//       </SafeAreaView>
//     </ChatOverlayProvider>
//   );
// };

// export default function App() {
//   const [ready, setReady] = useState();

//   useEffect(() => {
//     const initChat = async () => {
//       await connectUserPromise;
//       await channel.watch();
//       setReady(true);
//     };

//     initChat();
//   }, []);

//   if (!ready) {
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       <ChannelScreen channel={channel} />
//     </SafeAreaProvider>
//   );
// }

//-----------------------------RN聊天界面版--------------------------------

// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { StreamChat } from 'stream-chat';
// import { Channel, Chat, MessageInput, MessageList, OverlayProvider as ChatOverlayProvider } from 'stream-chat-react-native';
// import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

// const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9uIn0.eRVjxLvd4aqCEHY_JRa97g6k7WpHEhxL7Z4K4yTot1c';
// const user = { id: 'ron' };
// const chatClient = StreamChat.getInstance('q95x9hkbyd6p');

// const connectUserPromise = chatClient.connectUser(user, userToken);
// const channel = chatClient.channel('messaging', 'channel_id');

// const ChannelScreen = () => {
//   const { bottom } = useSafeAreaInsets();

//   return (
//     <ChatOverlayProvider bottomInset={bottom} topInset={0}>
//       <SafeAreaView>
//         <Chat client={chatClient}>
//           {/* Setting keyboardVerticalOffset as 0, since we don't have any header yet */}
//           <Channel channel={channel} keyboardVerticalOffset={0}>
//             <View style={StyleSheet.absoluteFill}>
//               <MessageList />
//               <MessageInput />
//             </View>
//           </Channel>
//         </Chat>
//       </SafeAreaView>
//     </ChatOverlayProvider>
//   );
// };


// export default function App() {
//   const [ready, setReady] = useState();

//   useEffect(() => {
//     const initChat = async () => {
//       await connectUserPromise;
//       await channel.watch();
//       setReady(true);
//     };

//     initChat();
//   }, []);

//   if (!ready) {
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       <ChannelScreen channel={channel} />
//     </SafeAreaProvider>
//   );
// }


import React, { useContext, useEffect, useMemo, useState } from 'react';
import { LogBox, SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, useHeaderHeight } from '@react-navigation/stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StreamChat } from 'stream-chat';
import {
  Channel,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  OverlayProvider,
  useAttachmentPickerContext,
} from 'stream-chat-react-native';

LogBox.ignoreAllLogs(true);

const chatClient = StreamChat.getInstance('q95x9hkbyd6p');
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9uIn0.eRVjxLvd4aqCEHY_JRa97g6k7WpHEhxL7Z4K4yTot1c';
const user = { id: 'ron', name: 'stevekeol', image: 'https://getstream.io/random_png/?id=ron&name=stevekeol' };

const filters = {
  members: { $in: ['ron'] },
  type: 'messaging',
};

const sort = { last_message_at: -1 };

const ChannelListScreen = ({ navigation }) => {
  const { setChannel } = useContext(AppContext);

  const memoizedFilters = useMemo(() => filters, []);

  return (
    <Chat client={chatClient}>
      <View style={StyleSheet.absoluteFill}>
        <ChannelList
          filters={memoizedFilters}
          onSelect={(channel) => {
            setChannel(channel);
            navigation.navigate('Channel');
          }}
          sort={sort}
        />
      </View>
    </Chat>
  );
};

const ChannelScreen = ({ navigation }) => {
  const { channel } = useContext(AppContext);
  const headerHeight = useHeaderHeight();
  const { setTopInset } = useAttachmentPickerContext();

  useEffect(() => {
    setTopInset(headerHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerHeight]);

  return (
    <SafeAreaView>
      <Chat client={chatClient} theme='messaging light'>
        <Channel channel={channel} keyboardVerticalOffset={0}>
          <View style={StyleSheet.absoluteFill}>
            <MessageList />
            <MessageInput />
          </View>
        </Channel>
      </Chat>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const AppContext = React.createContext();

const App = () => {
  const { bottom } = useSafeAreaInsets();

  const [channel, setChannel] = useState();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    const setupClient = async () => {
      await chatClient.connectUser(user, userToken);

      setClientReady(true);
    };

    setupClient();
  }, []);

  return (
      <AppContext.Provider value={{ channel, setChannel }}>
        <OverlayProvider bottomInset={bottom}>
          {clientReady && (
            <Stack.Navigator
              initialRouteName='ChannelList'
              screenOptions={{
                headerTitleStyle: { alignSelf: 'center', fontWeight: 'bold' },
              }}
            >
              <Stack.Screen
                component={ChannelScreen}
                name='Channel'
                options={() => ({
                  headerBackTitle: 'Back',
                  headerRight: () => <></>,
                  headerTitle: channel?.data?.name,
                })}
              />
              <Stack.Screen component={ChannelListScreen} name='ChannelList' options={{ headerTitle: 'Channel List' }} />
            </Stack.Navigator>
          )}
        </OverlayProvider>
      </AppContext.Provider>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};