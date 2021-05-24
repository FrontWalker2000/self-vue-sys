# self-vue-sys

> 前端代码 ｜ <a href="https://github.com/FrontWalker2000/node-sys" alt="nodejs+mysql">服务端（nodejs）代码</a>

# 准备工作
> 需在本地安装 Node.js

## 功能 ##
- [x] Element UI
- [x] 登录
- [x] token
- [x] echarts
- [x] markdown
- [x] mysql
- [x] icon
- [x] table
## 安装步骤 ##
	https://github.com/FrontWalker2000/self-vue-sys.git  // 把项目下载到本地
	cd self-vue-sys   // 进入项目目录
	npm install       // 安装项目依赖，等待安装完成之后

## 本地开发 ##
	// 开启前端服务器，浏览器访问 http://localhost:8080，在根目录下执行下面命令
	npm run dev

## 连接服务端 ##
  > 进入config/env.js 配置通信地址

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build
