/**!
 * Demos - app.js
 *
 * Authors:
 *  Berwin <liubowen.niubi@gmail.com>
 */

var app = require('koa')();
var logger = require('koa-logger');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var route = require('./route/index.js');
var config = require('./config/index.js');

// 注册中间件
app.use(logger());
app.use(serve(__dirname + '/public'));
app.use(bodyParser());
app.use(route.routes());

if (!module.parent) {
  var server = app.listen(config.port, function () {
    console.info(`Demos listening on port ${config.port}`);
    console.info(`God bless love....`);
    console.info(`You can debug your app with http://127.0.0.1:${config.port}`);
    console.info('');
  });
}

module.exports = config;