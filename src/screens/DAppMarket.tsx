import React, {useCallback,useState} from 'react';
import {Linking} from 'react-native';
import Constants from 'expo-constants';

import {useTheme, useTranslation, useData} from '../hooks/';
import {Block, Button, Text} from '../components/';

const About = () => {
  const {t} = useTranslation();
  const {gradients, sizes} = useTheme();
  // const {following, trending} = useData();
  // const [products, setProducts] = useState(following);

  const handleWebLink = useCallback((url) => Linking.openURL(url), []);

  const references = [
    {
      name: "Bcoin",
      desc: "JS版的BTC客户端"
    },{
      name: "Wept/Hera",
      desc: "JAVA版的小程序容器引擎"
    }, {
      name: "status",
      desc: "TS版的端对端加密聊天工具"
    }, {
      name: "dogeHouse",
      desc: "TS版的P2P语音视频工具"
    }, {
      name: "BlockSpider",
      desc: "自己手撸的全网区块链项目爬虫"
    }
  ];

  return (
    // <Block
    //   scroll
    //   padding={sizes.padding}
    //   contentContainerStyle={{paddingBottom: sizes.padding * 1.5}}>
    //   <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
    //     <Text p semibold marginBottom={sizes.sm}>
    //       {t('common.about')}
    //       <Text primary semibold>
    //         {`  ${t('app.fullname')}`}
    //       </Text>
    //     </Text>
    //     <Text align="justify" marginBottom={sizes.sm}>
    //       💋  端对端加密的去中心化社交, 让交流回归到更朴素自然的状态
    //     </Text>
    //     <Text align="justify" marginBottom={sizes.sm}>
    //       🌊  移动端全节点, 作为公链生态层为上层的应用（智能合约/小程序等）提供共识，存储，通信等基础设施功能
    //     </Text>
    //     <Text align="justify" marginBottom={sizes.sm}>
    //       🍓  小程序/智能合约的解释执行VM, 让 @Taiki 以开放的姿态欢迎第三方应用
    //     </Text>
    //     <Text align="justify" marginBottom={sizes.sm}>
    //       ❄️  安全的语音视频工具
    //     </Text>                             
    //     <Text align="justify" marginBottom={sizes.sm}>
    //       🍇  精选的区块链项目集锦, 可快速触达源码、白皮书、多社区，让开发者和终端用户
    //     </Text>
    //     <Text align="justify" marginBottom={sizes.sm}>
    //       👋🏻  醒醒，以上纯属虚构 !!!
    //     </Text> 
    //     <Text align="justify" marginBottom={sizes.sm}>
    //       🍋  真实情况是 正在以 🐌 的速度踩坑中...
    //     </Text>
    //   </Block>

    // </Block>
  );
};

export default About;


  {/*      <Block
          scroll
          paddingHorizontal={sizes.padding}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: sizes.l}}>
          <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
            {products?.map((product) => (
              <Product {...product} key={`card-${product?.id}`} />
            ))}
          </Block>
        </Block>   */}       