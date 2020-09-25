const prerender = require('prerender');
const server = prerender({
    port: 3001
});
server.start();
// 参考文档：https://juejin.im/post/6844903789661519886
// prerender测试方法
// curl http://localhost:3001/render\?url\=http://62.234.27.149/
