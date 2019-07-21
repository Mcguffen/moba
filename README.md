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

admin（后台管理页面vue）
  |
  |                                                      
server(后端，服务端)-----------  web(手机端页面vue)
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

  ![image](https://github.com/Mcguffen/moba/blob/master/md/%E5%88%9B%E5%BB%BAgithub%E9%A1%B9%E7%9B%AE.jpg?raw=true)

* 选node
ignore选择node 这是一个过滤的条件 意思就是忽略一些不必要的文件上传
* 选MIT协议
LICENSE 是一个协议 相当于一个权限吧 防伪

* 创建server项目文件夹
```
mkdir server
cd server
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
然后我们就可以用命令，启动server项目了
```
npm run serve
```


* 创建web项目文件夹（web是手机端页面，使用vue组件来构建的）

    命令行键入
```
vue create web
```
选择默认选项

  ![image](https://github.com/Mcguffen/moba/blob/master/md/%E9%80%89%E6%8B%A9%E9%BB%98%E8%AE%A4%E9%80%89%E9%A1%B9.jpg?raw=true)

成功安装提示

  ![image](https://github.com/Mcguffen/moba/blob/master/md/%E6%88%90%E5%8A%9F%E5%88%9D%E5%A7%8B%E5%8C%96web%E9%A1%B9%E7%9B%AE.jpg?raw=true)



项目自动生成目录和文件如下：

  ![image](https://github.com/Mcguffen/moba/blob/master/md/web%E9%A1%B9%E7%9B%AE%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E7%9B%AE%E5%BD%95%E5%92%8C%E6%96%87%E4%BB%B6.jpg?raw=true)

* 创建admin项目文件夹（和上面创建方法一样,admin后台管理页面也是用vue）

    命令行键入
```
vue create admin
```
    选择默认选项
## 管理后台
```
cd admin 
npm run serve
```
效果如下


### 基于ElementUI的后台管理基础界面搭建
* 安装插件ElementUI
```
cd admin
vue add elenment
```
我们还需要安装一个路由 不然页面没法跳转

* 安装路由
```
vue add router
```
效果如下
* 进入官网

https://element.eleme.cn/#/zh-CN/component/container

直接复制模版代码到admin/src/views下的Main.vue(自己创建)
需要自己创建 
```
<template></template>
```

然后将我们官网复制的代码中的
```
<el-container></el-container>
```
部分放入
```
<template></template>
```
Main.vue
```
<template>
    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
效果如下：


* 修改router.js
router.js
```
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

```
引入Main.vue
```
import Main from './views/Main.vue'
```
Main代替Home
Main.vue
```
import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
  ]
})

```
效果

* 修改App.vue
App.vue
```
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
删除我们不需要的链接和样式
修改后
App.vue
```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
</style>

```
效果


* 修改样式 去掉边距 
```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html,body{
  margin: 0;
  padding: 0;
}
</style>

```
效果

* 修改Main.vue模版的样式
```
<el-container style="height: 500px; border: 1px solid #eee">
```
改成
```
<el-container style="height: 100vh;">
```
100vh表示屏幕的高度，直接撑满屏幕。
主界面初始化完成


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
