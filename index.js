const prerender = require('prerender');
const server = prerender({
    port: 3001
});
server.start();
// prerender测试方法
// curl http://localhost:3000/render\?url\=http://62.234.27.149/
