const prerender = require('prerender');
const server = prerender({
    port: 3001,
    chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
});
// server.use((req, res, next) => {
//     console.log('use88888888888888');
//     next()
// })
server.start();

// 参考文档：https://juejin.im/post/6844903789661519886
// prerender测试方法
// curl http://localhost:3001/render\?url\=http://62.234.27.149/

// 插件方式
const fs = require('fs');
const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

app.use(require('prerender-node')
.set('prerenderServiceUrl', 'http://localhost:3001/')
);
const staticFileMiddleware = express.static('dist');
app.use(staticFileMiddleware);
// app.use(history({
//     index: '/dist/index.html'
// }));
// app.use(staticFileMiddleware);
app.get('*', function(req, res)  {
    res.setHeader('Content-Type', 'text/html')
    // res.send(fs.readFileSync(path.join(__dirname,'./dist/index.html')))
    res.sendFile(`${__dirname}/dist/index.html`)
})
app.listen(3002)

// curl -H 'User-agent:Googlebot' http://localhost:3002/http://localhost:3001

