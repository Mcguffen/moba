# Node.js + Vue.js 全栈开发moba类手游手机端官网和管理后台
> 展示地址[moba.working.work](https:moba.working.work) 
> 持续更新中... 敬请关注

- [入门](#入门)
  - [项目介绍](#项目介绍)
  - [工具安装和环境搭建(nodejs,npm,mongodb,@vue/cli和nodemon)](#工具安装和环境搭建(nodejs,npm,mongodb,@vue/cli和nodemon))
  - [初始化项目](#初始化项目)
- [管理后台](#管理后台)
  - [基于Element UI的后台管理基础界面搭建](#基于ElementUI的后台管理基础界面搭建)
  - [创建分类 (多层级)](#创建分类(多层级))
  - [分类列表](#分类列表)
  - [修改分类](#修改分类)
  - [删除分类](#删除分类)
  - [通用 CRUD 接口](#通用CRUD接口)
  - [装备管理](#装备管理)
  - [装备管理](#装备管理)
  - [图片上传和文件管理 (multer)](#图片上传和文件管理(multer))
  - [英雄管理](#英雄管理)
  - [编辑英雄](#编辑英雄)
  - [装备的多选 (el-select, multiple)](#装备的多选(el-select,multiple))
  - [技能的编辑](#技能的编辑)
  - [文章管理](#文章管理)
  - [富文本编辑器 (quill)](#富文本编辑器 (quill))
  - [首页广告管理](#首页广告管理)
  - [管理员账号管理 (bcrypt)](#管理员账号管理(bcrypt))
  - [登录页面](#登录页面)
  - [登录接口 (jwt,jsonwebtoken)](#登录接口(jwt,jsonwebtoken))
  - [服务端登录校验](#服务端登录校验)
  - [客户端路由限制 (beforeEach, meta)](#客户端路由限制(beforeEach,meta))

- [移动端网站](#移动端网站)
  - [开发服务端接口](#开发服务端接口)
  - [考虑整体样式](#考虑整体样式)
  - [使用字体图标 (iconfont)](#使用字体图标 (iconfont))
  - [首页顶部轮播图片 (swiper)](#首页顶部轮播图片(swiper))
  - [考虑通用组件 (SFC)](#考虑通用组件(SFC))
  - [卡片组件](#卡片组件)
  - [菜单组件 (tab + swiper)](#菜单组件(tab+swiper))
  - [首页新闻资讯-数据录入(+后台bug修复)](首页新闻资讯-数据录入(+后台bug修复))
  - [首页新闻资讯-数据接口](首页新闻资讯-数据接口)
  - [首页新闻资讯-界面展示](首页新闻资讯-界面展示)
  - [首页英雄列表-提取官网数据](首页英雄列表-提取官网数据)
  - [首页英雄列表-录入数据](首页英雄列表-录入数据)
  - [首页英雄列表-界面展示](首页英雄列表-界面展示)
  - [新闻详情页](新闻详情页)
  - [新闻详情页-完善](新闻详情页-完善)
  - [英雄详情页-1-前端准备](英雄详情页-1-前端准备)
  - [英雄详情页-2-后台编辑](英雄详情页-2-后台编辑)
  - [英雄详情页-3-前端顶部](英雄详情页-3-前端顶部)
  - [英雄详情页-4-完善](英雄详情页-4-完善)
- [发布和部署 (阿里云)](#发布和部署(阿里云))
  - [生产环境编译](#生产环境编译)
  - [购买域名和服务器](#购买域名和服务器)
  - [域名解析](#域名解析)
  - [Nginx 安装和配置](#Nginx安装和配置)
  - [MongoDB数据库的安装和配置](#MongoDB数据库的安装和配置)
  - [git 安装配置ssh-key](#git安装配置ssh-key)
  - [Node.js安装配置淘宝镜像](#Node.js安装配置淘宝镜像)
  - [拉取代码,安装pm2并启动项目](#拉取代码，安装pm2并启动项目)
  - [配置 Nginx 的反向代理](#配置Nginx的反向代理)
- [进阶](#进阶)
  - [使用免费SSL证书启用HTTPS安全连接](#使用免费SSL证书启用HTTPS安全连接)
  - [使用阿里云OSS云存储存放上传文件](#使用阿里云OSS云存储存放上传文件)

## 入门
### 项目介绍
```

admin（后台管理页面）
  |
  |                                                      
server(后端，服务端)-----------  web(手机端页面)
  |
  |  
 DB 

``` 

### 工具安装和环境搭建(nodejs,npm,mongodb,@vue/cli和nodemon)
* 安装nodejs 

    官网下载
* 安装npm

    最好使用淘宝镜像 速度较快
* 安装数据库mongodb

    不要官网下载 
    步骤太繁琐 还是用brew install mongodb吧

* 全局安装 @vue/cli和nodemon
```
npm i  -g @vue/cli
npm i  -g nodemon
```
### 初始化项目
* 使用github创建一个项目
* 选nodejs
* 创建server项目文件夹
```
mkdir server
```
然后键入命令,初始化npm项目生成package.json文件夹
```
npm init -y 
```
package.json
```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
创建入口文件index.js
修改 package.json文件 自定义脚本s
```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "serve": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
安装nodemon(nodemon的意思是node+demon,demon是后端常驻进程的含义.)
```
npm i  -g nodemon
```
然后我们就可以用命令(在server文件下)启动server项目了
```
npm run serve
```


* 创建web项目文件夹（web是手机端页面，使用vue组件来构建的）

    命令行键入
```
vue create web
```
    选择默认选项
* 创建admin项目文件夹（和上面一样,admin后台管理页面也是用vue）

    命令行键入
```
vue create admin
```
    选择默认选项
## 管理后台

### 基于ElementUI的后台管理基础界面搭建


### 创建分类(多层级)
### 分类列表
### 修改分类
### 删除分类

### 通用CRUD接口

### 装备管理
### 图片上传和文件管理(multer)



### 英雄管理
### 编辑英雄
### 装备的多选(el-select,multiple)
### 技能的编辑

![gif](https://github.com/Mcguffen/moba/blob/master/md/%E8%8B%B1%E9%9B%84%E5%B1%9E%E6%80%A7%E7%BC%96%E8%BE%9###gif?raw=true)

### 文章管理
### 富文本编辑器(quill)

### 首页广告管理

### 管理员账号管理(bcrypt)
### 登录页面
### 登录接口(jwt,jsonwebtoken)
### 服务端登录校验
### 客户端路由限制(beforeEach,meta)

## 移动端网站

### 开发服务端接口
### 考虑整体样式
### 使用字体图标(iconfont)
### 首页顶部轮播图片(swiper)
### 考虑通用组件(SFC)
### 卡片组件
### 列表卡片组件 (list-card, nav, swiper)
### 首页新闻资讯-数据录入(+后台bug修复)
首页新闻资讯-数据接口
首页新闻资讯-界面展示
首页英雄列表-提取官网数据
首页英雄列表-录入数据
首页英雄列表-界面展示
新闻详情页
新闻详情页-完善
英雄详情页-1-前端准备
英雄详情页-2-后台编辑
英雄详情页-3-前端顶部
英雄详情页-4-完善

## 发布和部署(阿里云)

### 生产环境编译
### 购买域名和服务器
* 购买域名

* 购买服务器

### 域名解析
### Nginx安装和配置
### MongoDB数据库的安装和配置
### git安装配置ssh-key
### Node.js安装配置淘宝镜像
### 拉取代码,安装pm2并启动项目
### 配置Nginx的反向代理

## 进阶
### 使用免费SSL证书启用HTTPS安全连接
### 使用阿里云OSS云存储存放上传文件
