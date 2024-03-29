/** 抓取页面 - demo */
const profiles = document.querySelectorAll(".item-list .item");
let results = [];
for(let i = 0; i < profiles.length; i++) {
  results.push({
    logo: profiles[i].querySelector(".item-nav img").src,
    name: profiles[i].querySelector(".item-nav .name-bio-container .name").innerHTML,
    bio:  profiles[i].querySelector(".item-nav .name-bio-container .bio").innerHTML,
    href: profiles[i].querySelector("a").href    
  })
}
console.log(results);

/** 基础设施 - 标签索引 */
/** 基础设施 - 标签索引 */
const profiles = document.querySelectorAll(".tag-list a");
let results = [];
for(let i = 0; i < profiles.length; i++) {
  results.push({
    name: profiles[i].innerHTML,
    href: profiles[i].href
  })
}
console.log(results);

/** 基础设施 - 匿名隐私 */
/** 基础设施 - 数据存储 */
/** 基础设施 - 加密货币 */
/** 基础设施 - 跨链 */
/** 基础设施 - 市场预测 */
/** 基础设施 - 基础设施 */
/** 基础设施 - 协议 */
/** 基础设施 - 以太坊 */
/** 基础设施 - 金融 */
/** 基础设施 - 身份验证 */

/** 应用 - 稳定币 */
/** 应用 - 电商 */
/** 应用 - 数据服务 */
/** 应用 - 文化娱乐 */
/** 应用 - Matic */
/** 应用 - 非同质化代币 */
/** 应用 - 游戏 */
/** 应用 - 以太坊 */
/** 应用 - 社交通讯 */
/** 应用 - 内容版权 */

/** 创业项目 - 以太坊 */
/** 创业项目 - Substrate */
/** 创业项目 - Defi */
/** 创业项目 - DAO */
/** 创业项目 - PoS */
/** 创业项目 - Lab */
/** 创业项目 - 企业服务 */
/** 创业项目 - 组织 */
/** 创业项目 - 金融 */
/** 创业项目 - 安全 */

/** 资产管理 - 手机钱包 */
/** 资产管理 - 流动性挖矿 */
/** 资产管理 - 以太坊 */
/** 资产管理 - 衍生品 */
/** 资产管理 - 信用借贷 */
/** 资产管理 - Defi */
/** 资产管理 - 去中心化交易平台 */
/** 资产管理 - 交易平台 */
/** 资产管理 - 支付 */
/** 资产管理 - 币安智能链 */

/** 工具查询 - 以太坊 */
/** 工具查询 - 应用列表 */
/** 工具查询 - Defi */
/** 工具查询 - Substrate */
/** 工具查询 - 基金 */
/** 工具查询 - 投资 */
/** 工具查询 - 数据分析 */
/** 工具查询 - 开发 */
/** 工具查询 - 行情 */
/** 工具查询 - 区块查询 */

const profiles = document.querySelectorAll(".tags-list li");
let results = [];
for(let i = 0; i < profiles.length; i++) {
  const tags = [];
  const tagsHtmls = profiles[i].querySelectorAll(".right-item .nav-tags a");
  for(let j = 1; j < tagsHtmls.length; j++) {
    tags.push(tagsHtmls[j].innerHTML);
  }

  results.push({
    logo: profiles[i].querySelector("a img").src,
    name: profiles[i].querySelector(".right-item .name-wrapper").innerHTML,
    bio:  profiles[i].querySelector(".right-item .desc-wrapper").innerHTML,
    href: profiles[i].querySelector(".right-item a").href,
    tags
  })
}
console.log(results);

/** 打开页面，然后抓取页面的相关字段 */
/**
 * 脚本简介: 爬取给定urls对应页面中相关区块链项目的profiles
 * 1. 将控制台的内容原样输出到文件: `node index.js > E:/BlockSpider/NFTs.js`
 * 2. 详见BlockSpider项目
 */

const fs = require("fs");
const Crawler = require('crawler');

/**种子数据 */
const origins = [];

const selector = new Map()
  .set('logo', '.category-nav-short-info-wrapper .left-item img')
  .set('name', '.category-nav-short-info-wrapper .right-item .nav-name')
  .set('bio', '.category-nav-short-info-wrapper .right-item .bio-wrapper')
  .set('tags', '.category-nav-short-info-wrapper .right-item .tags-wrapper a')
  .set('desc', '.nav-detail-content-container .nav-detail-desc-wrapper .desc-content p')
  .set('web', '.nav-detail-content-container .sidebar .web-site-wrapper .web-site a')
  .set('social', '.nav-detail-content-container .sidebar .nav-social .social-list a')

let result = [];
let count = 0;


const hrefs = origins.map(page => page.href);

const spider = new Crawler({
  maxConnections: 10,
  // rateLimit: 1000, // maxConnections 被设置为1(tasks的间隔最小为1000ms)
  callback: (error, res, done) => {
    if (error) {
      console.log(error);
    } else {
      const $ = res.$;
      const href = res.request.href;
      const logo = $(selector.get('logo')).attr("src").split("?")[0];
      const name = $(selector.get('name')).text();
      const bio  = $(selector.get('bio')).text();
      const web  = $(selector.get('web')).attr("href");
      const tags = $(selector.get('tags')).text().trim().replace(/\n\n/g, " ").split(" ");
      const desc = $(selector.get('desc')).text();

      const social = {};
      $(selector.get('social')).each((index, element) => {
        const name = $('i', element).attr("class").split("-")[1];
        const url = $('i', element).parent().attr("href").split("?")[0];
        social[name] = url;
      })

      const socialItem = {
        href,
        logo,
        name,
        bio,
        web,
        tags,
        desc,
        social
      };
      
      console.log(socialItem);
      console.log(',');

    }
    done();
  }
});

hrefs.forEach(href => {
  spider.queue(href)
})

spider.queue(hrefs);


/**
 * 去重脚本: node index.js > result.js
 */
const nfts = [];


let map = new Map();

nfts.forEach(nft => {
  if(!map.get(nft.name)) {
    map.set(nft.name, true);
    console.log(nft);
    console.log(',');
  }
})
