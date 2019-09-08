const merge = require('webpack-merge');
const path = require('path');
const proxyServer = 'http://localhost:8081'
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    stats: 'errors-only',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    proxy: {
      '/api/': {
        target: proxyServer,
        changeOrigin: true,
        autoRewrite: true
      },
    },
    // before(approuter) {
    //   approuter.get('/api/seller', (req, res) => {
    //     res.json({
    //       // 这里是你的json内容
    //       errno: 0,
    //       data: seller
    //     })
    //   })
    // } // mock接口
  },
})
// module.exports = new Promise((resolve, reject) => {
//   portfinder.basePort = process.env.PORT || devWebpackConfig.devServer.port
//   portfinder.getPort((err, port) => {
//     if (err) {
//       reject(err)
//     } else {
//       // publish the new Port, necessary for e2e tests
//       process.env.PORT = port
//       // add port to devServer config
//       devWebpackConfig.devServer.port = port
//
//       // Add FriendlyErrorsPlugin
//       devWebpackConfig.plugins.push(
//         new FriendlyErrorsPlugin({
//           compilationSuccessInfo: {
//             messages: [`Your application is running here: http://0.0.0.0:${port}`]
//           },
//           onErrors: createNotifierCallback() || undefined
//         })
//       )
//
//       resolve(devWebpackConfig)
//     }
//   })
// })
