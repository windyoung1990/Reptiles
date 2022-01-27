# Reptiles
## 项目描述
通过prerender 以及 中间件prerender-node，构建预渲染服务，主要功能是识别单页面爬虫请求，返回渲染后的html，增加SEO效果
## 注意
* 确保已经安装了chrome浏览器
## [参考文档](https://juejin.im/post/6844903789661519886)

## 测试方法
``` linux
curl http://localhost:3001/render\?url\=http://62.234.27.149/
```