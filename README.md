# self-vue-sys
> 目前版本属于简易版，适合初学者，大佬请绕道；目前每周正以10次commit，完善加强。

> 前端代码 ｜ <a href="https://github.com/FrontWalker2000/node-sys" alt="nodejs+mysql">服务端（nodejs）代码</a>
# 视频教程
<a href="https://www.zhisheji.com/yuanchuang/1568437.html" target="_blank" alt="nodejs+mysql">初识self-vue-sys（1期）</a> |
<a href="https://www.zhisheji.com/yuanchuang/1571418.html" target="_blank" alt="nodejs+mysql">全局插件编写01（plugin）</a> |
<a href="https://www.zhisheji.com/yuanchuang/1571418.html" target="_blank" alt="nodejs+mysql">全局插件编写02（plugin）</a>
# 展示

<img width="80%" src="https://raw.githubusercontent.com/FrontWalker2000/self-vue-sys/master/src/assets/images/dis_2.jpg">
<br/>
<img width="80%" src="https://raw.githubusercontent.com/FrontWalker2000/self-vue-sys/master/src/assets/images/dis_1.jpg">
<img width="80%" src="https://raw.githubusercontent.com/FrontWalker2000/self-vue-sys/master/src/assets/images/self-vue-sys.png">

# 准备工作
> 需在本地安装 Node.js

## 功能 ##
- [x] Element UI
- [x] 登录
- [x] token
- [x] echarts
- [x] markdown
- [x] mysql
- [x] plugin
  - [x] toast
  - [x] props
  - [x] model
  - [x] message
  - [x] tip
- [x] 组件
  - [x] icon
  - [x] btn
  - [x] table
  - [x] upload
  - [x] edit
  - [x] swipe
  - [x] citySelect
  - [x] tab

- [x] 主题色
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
