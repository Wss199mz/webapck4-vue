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
});
