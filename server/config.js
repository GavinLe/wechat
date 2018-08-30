const CONF = {
  port: '5757',
  rootPathname: '/data/release/weapp',

  // 微信小程序 App ID
  appId: 'wx63c64dc43751faf7',

  // 微信小程序 App Secret
  appSecret: 'a69a008a525d0a2b6d6e012e68bd0da2',

  // 是否使用腾讯云代理登录小程序
  useQcloudLogin: true,

  /**
   * MySQL 配置，用来存储 session 和用户信息
   * 若使用了腾讯云微信小程序解决方案
   * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
   */
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: 'Xq_123456',
    char: 'utf8mb4'
  },

  cos: {
    /**
     * 地区简称
     * @查看 https://cloud.tencent.com/document/product/436/6224
     */
    region: 'ap-guangzhou',
    // Bucket 名称
    fileBucket: 'qcloudtest',
    // 文件夹
    uploadFolder: ''
  },
  // 其他配置 ...
  serverHost: 'iZj6c2l6rbipfhl6pf9qf1Z',
  tunnelServerUrl: 'https://tunnel.ws.qcloud.la',
  tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
  // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.qcloud.com/capi
  qcloudAppId: '1257200471',
  qcloudSecretId: 'AKIDDNUk4qwd7ZzMgxxKQUZsAPdmty5e7Cvb',
  qcloudSecretKey: 'wqMqJpJrOsAqai5gHKOWlowARsZPnA4y',

  // 微信登录态有效期
  wxLoginExpires: 7200,
  wxMessageToken: 'weixinmsgtoken'
}

module.exports = CONF
