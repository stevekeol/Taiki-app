import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text, ProjectProfile} from '../components/';

const Home = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending, blockTree} = useData();
  const [products, setProducts] = useState(following);
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  console.log('======')
  console.log(blockTree);
  console.log(blockTree[1]);


  const handleProducts = useCallback(
    (tab: number) => {
      setTab(tab);
      setProducts(tab === 0 ? following : trending);
    },
    [following, trending, setTab, setProducts],
  );

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} />
      </Block>

      {/* toggle products list */}
      <Block
        row
        flex={0}
        align="center"
        justify="center"
        color={colors.card}
        paddingBottom={sizes.sm}
      >
        <Button onPress={() => handleProducts(0)}>
          <Block row align="center">
            <Block
              flex={0}
              radius={6}
              align="center"
              justify="center"
              marginRight={sizes.s}
              width={sizes.socialIconSize}
              height={sizes.socialIconSize}
              gradient={gradients?.[tab === 0 ? 'primary' : 'secondary']}>
              <Image source={assets.extras} color={colors.white} radius={0} />
            </Block>
            <Text p font={fonts?.[tab === 0 ? 'medium' : 'normal']}>
              {t('home.following')}
            </Text>
          </Block>
        </Button>
        <Block
          gray
          flex={0}
          width={1}
          marginHorizontal={sizes.sm}
          height={sizes.socialIconSize}
        />
          <Button onPress={() => handleProducts(1)}>
            <Block row align="center">
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                marginRight={sizes.s}
                width={sizes.socialIconSize}
                height={sizes.socialIconSize}
                gradient={gradients?.[tab === 1 ? 'primary' : 'secondary']}>
                <Image
                  radius={0}
                  color={colors.white}
                  source={assets.documentation}
                />
              </Block>
              <Text p font={fonts?.[tab === 1 ? 'medium' : 'normal']}>
                {t('home.trending')}
              </Text>
            </Block>
          </Button>
        </Block>

        {/* products list */}
        <Block
          scroll
          paddingHorizontal={sizes.padding}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: sizes.l}}>
          <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
            {blockTree.map((project) => (
              <ProjectProfile {...project} key={`card-${project?.name}`} />
            ))}
          </Block>
        </Block> 
      </Block>
  );
};

export default Home;
              // <ProjectProfile 
              // name={'zhangjie'} 
              // logo={'https://img.block123.com/nav/images/ed999010-f1fb-51c1-b48e-c0979f4c1c78_T1Xvz0P.jpg?imageView2/0/w/128/format/jpg/'} 
              // key={`123`}
              // bio={'test'} />
          // {products?.map((product) => (
          //     <Product {...product} key={`card-${product?.id}`} />
          //   ))}
