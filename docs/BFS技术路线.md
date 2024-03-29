# BFChain System

## 1. 三大支柱

1. 矩阵网络 [[mnet]]
  1. 直接网络发现
    1. 蓝牙发现
    2. NFC 通讯
    3. WIFI-Direct
  2. 间接网络发现
    1. DIHT
      > 类 DHT 技术
    2. LibP2P
      1. LibP2P-JS
      2. LibP2P-Native
  3. 握手协议
    > 只要使用统一握手协议，在任何一种通讯方式下皆可进行节点握手通讯，也称“间接网络发现下的握手”
  4. 网络通讯
    1. WebSocket
    2. WebRTC
    3. WebNFC (单工、半双工、全双工)
  5. 通讯协议
    1. 矩阵广播
    2. 定向广播
2. 只读分片技术 [[csrom]]
  1. 检查点技术 [[checkpoint]]
  2. 高阶区块链数据库 [[CnDB]]
    > 基于 [[checkpoint]] 作为底层技术构建现代化的数据
3. 被动计算 [[pcom]]
  1. 贡献算力
    > 用于 [[tpow]]

## 2.1 共识协议

1. 区块 block
  1. 锻造
2. 事件 transaction
3. 重放 replay
  1. 同步 sync
    > 同步是指区块链下载方案
    1. 第一同步原则
    2. 第二同步原则
4. 回滚 rollback
  > 只有在虚空中回滚完成，并验证过新链的正确性，才会触发真正意义上的回滚操作
  > 通知顶层停止业务，切换到新链，顶层业务执行回滚业务...

## 2.2 数据传输协议

1. [[Comlink]]
  > 模块互调协议，类似RPC，但是是针对一个设备内不同线程之间进行优化
2. [[ComProto]]
  > 资料动态序列化协议，用于替代JSON/YAML，主要用于设备内的动态格式的数据传输，如果可以，尽量选择ComModel
3. [[ComModel]]
  > 资料静态序列化协议，用于替代 Protobuf，具有惰性取值、高速读写的特性

## BFS 系统架构

1. 底层虚拟机 JSJ
2. 启动器 boot
3. 资源管理器 res
4. 注册表 meta
  1. 包管理器 pkgm
5. 插件调度 lib
  1. 安全与加密 crypto
  2. 时间器 time
  3. 网络 net
    1. 节点扫描 peerscan
      > 以特定需求对节点表进行扫描，搜寻所需数据
  4. 区块链数据库 cndb
  5. 应用数据库 db
  6. 网页渲染器 webviewRender
  7. 终端渲染器 terminalRender
  8. 引导渲染器 guideRender
6. 程序执行容器 exe

## BFChain 业务与功能

1. _移动节点开发手册与教程_
2. 多地址切换
3. 事件签名
4. 权益转换
  1. 离线权益（我的凭证）
  2. 批量转移器（工具箱）
  3. 新版收付款和转账
5. 红包功能
6. 网络节点
  > 展示 认证过的、全双工连接的 节点
  1. 流量统计与分析
    > 监听网络节点双工流量
    > 使用应用数据库进行数据保存和统计
  2. 移动节点互联
    > 使用直接与间接网络发现寻找移动节点并达成互联
  3. 贡献配置与控制
    > 监听节点之间区块链数据传输
    > 使用应用数据库进行数据保存和统计
    > 流控节点之间的数据传输
  4. 向移动节点同步数据
    > 节点分配可用资源（磁盘空间，网络流量）
    > 节点按?存储其它节点高频访问的数据
    > 节点自动释放低频访问的数据（同时保留自己相关的数据）
  5. 节点管理器（工具箱）
  6. 极速同步模式
    > 暂停运行其它功能业务，全速进行区块链数据同步
7. 我的关注
  1. 同步并验证关注的地址的数据
8. 受托锻造
  1. 上榜受托人与候选受托人名单
9. 自动投票
  1. 投票控制
10. 节点运行日志收集
11. 关键点启动
  1. 使用内置关键检查点快速到达节点可用状态
  2. 使用共识规则提取链上相关数据，以更新关键点
12. 分叉回滚
  1. 底层区块链回滚
  2. 业务功能回滚
13. 数据兼容列表
  > 软分叉的兼容性，如果有破坏性更新，那就不兼容
14. 用户分级
  > 在 meta 中定义并控制 应用的使用门槛
15. 帮助中心
  1. 帮助手册
  2. 用户引导
    > 提供界面元数据，使用 guideRender 进行渲染和交互
16. 升级服务
  > 基于生物链林官网
17. 见证合约
18. 多功能扫一扫
19. DAPPID
  1. 申请注册
  2. 交换事件
20. 工具箱
  1. 主界面
  2. 内嵌应用框架
  3. _工具箱开发手册与教程_
21. 注册受托人
22. 探险主界面
  > 替代支付界面
23. LNS
  1. 我的 LNS
  2. LNS 交换
  3. 冲浪市场
  4. 节点网站管理
  




































