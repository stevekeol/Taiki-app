import React, {useCallback, useState} from 'react';
import {Linking} from 'react-native';
import Constants from 'expo-constants';

import {useTheme, useTranslation, useData} from '../hooks/';
import {Block, Button, Text, Product, Image} from '../components/';

const About = () => {
  const {t} = useTranslation();
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);  
  const {assets, colors, fonts, gradients, sizes} = useTheme();

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
    <Block
      scroll
      padding={sizes.padding}
      contentContainerStyle={{paddingBottom: sizes.padding * 1.5}}>
      <Block card flex={0} padding={sizes.sm} marginBottom={sizes.sm}>
        <Text p semibold marginBottom={sizes.sm}>
          {t('common.about')}
          <Text primary semibold>
            {`  ${t('app.fullname')}`}
          </Text>
        </Text>
        <Text align="justify" marginBottom={sizes.sm}>
          💋  端对端加密的去中心化社交, 让交流回归到更朴素自然的状态
        </Text>
      </Block>

      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          {products?.map((product) => (
            <Product {...product} key={`card-${product?.id}`} />
          ))}
        </Block>
      </Block>      
    </Block>
  );
};

export default About;
