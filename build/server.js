const express = require('express')
const webpack = require('webpack')
const middle = require('webpack-dev-middleware')
const app = express()
const appData = require('../db.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings
const apiRoutes = express.Router()
const config = require('./webpack.dev.js');
const comiler = webpack(config)
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.use(middle(comiler))
apiRoutes.get('/api/seller',(req,res)=> {
  res.json({
    errno:0,
    data:seller
  })
})
apiRoutes.get('/api/goods',(req,res)=> {
  res.json({
    errno:0,
    data:goods
  })
})
apiRoutes.get('/api/ratings',(req,res)=> {
  res.json({
    errno:0,
    data:ratings
  })
})
app.use('/',apiRoutes)
app.listen(8081,()=> {
  console.log( 'mock data is Running' )
})
