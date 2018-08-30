module.exports = {
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    pass: '123456',
    db: 'cAuth',
    char: 'utf8mb4'
  },
  serverHost: 'localhost',
  tunnelServerUrl: 'https://tunnel.ws.qcloud.la',
  tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
  // 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.qcloud.com/capi
  qcloudAppId: '1257200471',
  qcloudSecretId: 'AKIDDNUk4qwd7ZzMgxxKQUZsAPdmty5e7Cvb',
  qcloudSecretKey: 'wqMqJpJrOsAqai5gHKOWlowARsZPnA4y',
  wxMessageToken: 'wxmsgtoken'
}