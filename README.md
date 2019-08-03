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
  - [富文本编辑器 (quill)](#富文本编辑器(quill))
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
***
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
***
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
```JavaScript
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
```JavaScript
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
***
## 管理后台
```
cd admin 
npm run serve
```
效果如下

   ![image](https://github.com/Mcguffen/moba/blob/master/md/vue%E9%A6%96%E9%A1%B5.jpg?raw=true)


   ![image](https://github.com/Mcguffen/moba/blob/master/md/npm%20run%20serve.jpg?raw=true)


***

### 基于ElementUI的后台管理基础界面搭建
* 安装插件ElementUI
```
cd admin
vue add elenment
```
 
![image](https://github.com/Mcguffen/moba/blob/master/md/%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6element.jpg?raw=true)


![image](https://github.com/Mcguffen/moba/blob/master/md/%E6%88%90%E5%8A%9F%E5%AE%89%E8%A3%85element%E6%8F%92%E4%BB%B6.jpg?raw=true)

页面效果如下

![image](https://github.com/Mcguffen/moba/blob/master/md/%E6%88%90%E5%8A%9F%E5%AE%89%E8%A3%85element%E6%8F%92%E4%BB%B61.jpg?raw=true)

我们还需要安装一个路由 不然页面没法跳转

* 安装路由
```
vue add router
```
效果如下
 
   ![image](https://github.com/Mcguffen/moba/blob/master/md/%E6%88%90%E5%8A%9F%E5%AE%89%E8%A3%85router.jpg?raw=true)


   ![gif](https://github.com/Mcguffen/moba/blob/master/md/router%E6%95%88%E6%9E%9C.gif?raw=true)

* 进入elementUI的官网

https://element.eleme.cn/#/zh-CN/component/container

直接复制模版代码到admin/src/views下的Main.vue(自己创建)
需要自己创建 
```JavaScript
<template></template>
```

然后将我们官网复制的代码中的
```JavaScript
<el-container></el-container>
```
部分放入
```JavaScript
<template></template>
```
Main.vue
```JavaScript
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

   ![image](https://github.com/Mcguffen/moba/blob/master/md/%E4%BF%AE%E6%94%B9App.vue%E5%90%8E%E6%95%88%E6%9E%9C.jpg?raw=true)


* 修改router.js
router.js
```JavaScript
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
引入Main.vue到路由router.js
```JavaScript
import Main from './views/Main.vue'
```
Main代替Home
Main.vue
```JavaScript
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
效果如下

![image](https://github.com/Mcguffen/moba/blob/master/md/Main.vue%E5%BC%95%E5%85%A5router.js.jpg?raw=true)

* 修改App.vue
App.vue
```JavaScript
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
```JavaScript
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
</style>

```
效果如下

   ![image](https://github.com/Mcguffen/moba/blob/master/md/%E4%BF%AE%E6%94%B9App.vue%E5%90%8E%E6%95%88%E6%9E%9C.jpg?raw=true)

* 修改样式 去掉边距 
```JavaScript
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
效果如下
   ![gif](https://github.com/Mcguffen/moba/blob/master/md/%E5%8E%BB%E8%BE%B9%E8%B7%9D.jpg?raw=true)

* 修改Main.vue模版的样式
```
<el-container style="height: 500px; border: 1px solid #eee">
```
改成
```
<el-container style="height: 100vh;">
```

   ![gif](https://github.com/Mcguffen/moba/blob/master/md/%E4%BF%AE%E6%94%B9Main.vue%E6%A8%A1%E7%89%88%E9%BB%98%E8%AE%A4%E6%A0%B7%E5%BC%8F.jpg?raw=true)

100vh表示屏幕的高度，直接撑满屏幕。
主界面初始化完成


***

### 创建分类(多层级)
* 修改管理后台界面 admin/src/views/Main.vue
Main.vue
```JavaScript
<template>
    <el-container style="height: 100vh;">
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
改成
```JavaScript
<template>
    <el-container style="height: 100vh;">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="1-1">新建分类</el-menu-item>
          <el-menu-item index="1-2">分类列表</el-menu-item>
        </el-menu-item-group>
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
效果如下

   ![image](https://github.com/Mcguffen/moba/blob/master/md/%E4%BF%AE%E6%94%B9%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0%E9%A1%B5%E9%9D%A2-%E6%96%B0%E5%BB%BA%E5%88%86%E7%B1%BB%E5%92%8C%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8.jpg?raw=true)

但是，点击侧边栏的新建分类和分类列表后没反应,需要加router对应下面的index进行页面跳转
```JavaScript
 <el-menu router :default-openeds="['1', '3']">
```
修改后
```JavaScript
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="1-1">新建分类</el-menu-item>
          <el-menu-item index="1-2">分类列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
```
此时点击才页面跳到对应的index的页面
分类添加router后效果如下（注意地址栏变化）

   ![gif](https://github.com/Mcguffen/moba/blob/master/md/%E5%88%86%E7%B1%BB%E6%B7%BB%E5%8A%A0router.gif?raw=true)

我们最好修改index对应的地址 最好见名知意
* 修改路由地址
```JavaScript
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">新建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
```
地址是跳转了，但是页面还没写。我们去写新建分类和分类列表的页面。
* 创建新建分类和分类列表的页面
/admin/src/views/CategoriesEdit.vue

CategoriesEdit.vue
```JavaScript
<template>
    <div class="about">
        <h1>新建分类</h1>
    </div>
</template>

```
* 到admin/src/router.js引入CategoriesEdit.vue页面
router.js
```JavaScript
import CategoriesEdit from './views/CategoriesEdit.vue'
```
* 我们需要改变一下Main.vue 我们希望点击新建分类的时候不是整个页面改变而是右边内容改变
Main.vue
```JavaScript
<template>
    <el-container style="height: 100vh;">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">新建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
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
```
我们把
```JavaScript
<el-table></el-table>
```
内容
换成路由容器
```JavaScript
<router-view></router-view>
```

```JavaScript
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
                <router-view></router-view>
            </el-main>
        </el-container>
```
这样我们去router.js添加子路由
* 添加子路由
router.js
```JavaScript
import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CategoriesEdit from './views/CategoriesEdit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        { path: '/categories/create', component: CategoriesEdit }
    ]
    },
  ]
})

```
同理 分类列表 也是这么做
下面我来完善下新建分类页面 添加一个input输入框
CategoriesEdit.vue
```JavaScript
<template>
    <div class="about">
        <h1>新建分类</h1>
        <el-form>
            <el-form-item label="名称">
                <el-input>
                </el-input>
            </el-form-item>
        </el-form>

    </div>
</template>
```
效果如图

   ![gif](https://github.com/Mcguffen/moba/blob/master/md/%E5%AE%8C%E5%96%84CategoriesEdit.vue%E9%A1%B5%E9%9D%A2.jpg?raw=true)

* 添加button提交按钮
```JavaScript
<template>
    <div class="about">
        <h1>新建分类</h1>
        <el-form>
            <el-form-item label="名称">
                <el-input>
                </el-input>
            </el-form-item>
            <el-form-item>
                <!--  native-type="submit" 原生按钮为提交-->
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
```
效果如图
   ![gif](https://github.com/Mcguffen/moba/blob/master/md/%E6%B7%BB%E5%8A%A0button%E6%8F%90%E4%BA%A4%E6%8C%89%E9%92%AE.jpg?raw=true)

如果希望表单是横向布局
* 表单横向布局 

添加下面代码
```JavaScript
<el-form label-width="120px">
```
CategoriesEdit.vue
```JavaScript
<template>
    <div class="about">
        <h1>新建分类</h1>
        <el-form label-width="120px">
            <el-form-item label="名称">
                <el-input>
                </el-input>
            </el-form-item>
            <el-form-item>
                <!--  native-type="submit" 原生按钮为提交-->
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

```
效果如图

   ![image](https://github.com/Mcguffen/moba/blob/master/md/%E6%A8%AA%E5%90%91%E5%B8%83%E5%B1%80.jpg?raw=true)

* input标签绑定数据
script
```JavaScript
<script>
export default {
    data(){
        return {
            model:{}
        }
    }
}
</script>
```
input标签 添加如下代码
```JavaScript
                <el-input v-model="model.name">
                </el-input>
```
CategoriesEdit.vue
```JavaScript
<template>
    <div class="about">
        <h1>新建分类</h1>
        <el-form label-width="120px">
            <el-form-item label="名称">
                <el-input v-model="model.name">
                </el-input>
            </el-form-item>
            <el-form-item>
                <!--  native-type="submit" 原生按钮为提交-->
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
    data(){
        return {
            model:{}
        }
    }
}
</script>

```
input双向数据绑定效果如图:

  ![gif](https://github.com/Mcguffen/moba/blob/master/md/input%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.gif?raw=true)

* 点击保存 实现submit提交事件

el-form表单添加 @submit事件
```
<el-form label-width="120px"  @submit.native.prevent="save">
```
save()
```JavaScript
<script>
export default {
    data(){
        return {
            model:{}
        }
    },
    methods:{
        save(){
            //请求接口，提交数据
            
        }
    }
}
</script>
```
* 请求接口 需要安装axios

```
cd admin
npm i axios
```

* 创建http.js,单独一个http.js文件引入axios,并导出供main.js使用
/admin/src/http.js
```JavaScript
import axios from 'axios'

// 创建实例
const http = axios.create({
    // 将接口放入统一一个路径去
    baseURL : "http://localhost:3000/admin/api"
})

// 导出文件
export default http
```

* main.js引入http
admin/src/main.js
```JavaScript
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

// 引入http
import http from './http'
// 加载到vue实例属性上
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```
这么挂载 Vue属性的好处在于 任何需要http的时候 只要this.http就可以使用
比如save()方法 为了请求接口 提交数据 就可以使用

* save()使用http
admin/src/CategoriesEdit.vue
```JavaScript
<script>
export default {
    data(){
        return {
            model:{}
        }
    },
    methods:{
        save(){
        //请求接口，提交数据 请求方法用post()
            this.$http.post()
        }
    }
}
</script>
```
下面就要写接口了
写接口就要去服务端 server

* 创建分类服务端
```JavaScript
cd server
npm run serve
```

* 安装必要的模块 express@next(下一个版本) mongoose(操作数据库) cors（解决跨域）
```JavaScript
npm i express@next mongoose cors
```
然后完成 server/index.js
* 完成后端分类接口
index.js
```JavaScript
const express = require("express") // 引入安装的express 模块

// 创建express实例
const app = express()

// 监听3000端口 回调函数执行
app.listen(3000,()=>{
    console.log("http://localhost:3000")
});
```
然后我们运行发现
```
npm run serve
```
接下来去完成分类相关路由,因为我们路由很多,我们不在index.js里面写，单独一个文件写.
* 分类相关的路由 

创建routes/admin/index.js文件夹
```JavaScript
cd server
touch routes
cd routes
touch admin
cd admin 
touch index.js
```
表示后端路由
routes/admin/index.js
index.js
```JavaScript
// 这个函数接受一个app 对象 
module.export = app => {

}
```
这个路由的使用方法就是在server/index.js引入
```JavaScript
// 引入路由 并传app对象 这样在server/routes/admin里面就有一个app可以用
require("./routes/admin")(app)
```
server/index.js
```JavaScript
const express = require("express") // 引入安装的express 模块

// 创建express实例
const app = express()

// 引入路由 并传app对象 这样在server/routes/admin里面就有一个app可以用
require("./routes/admin")(app)

// 监听3000端口 回调函数执行
app.listen(3000,()=>{
    console.log("http://localhost:3000")
});
```
然后 
我们回到
server/routes/admin/index.js
```JavaScript
// 这个函数接受一个app 对象 
module.export = app => {
    const express = require("express")
    // express子路由 有增删改查的很多东西
    const router = express.Router()
    // post方法
    router.post("categories",async(req,res)=>{
        //把数据存进去 需要用到数据库
    })
    // 然后挂载到下面的路由地址上
    app.use("/admin/api",router)
}
```
因为post方法是提交数据到数据库 
* 引入数据库 单独文件夹 /server/plugins
```JavaScript
cd server
touch plugins
cd pliugins
touch db.js
```
db.js
```JavaScript
// 这种写法要习惯 下面就是数据库插件的写法
module.exports = app => {
    const mongoose = require("mongoose")
    // 使用 mongoose 链接数据库非常方便，链接的数据库里面即使没有moba这个数据库会自动创建，有的花直接链接。
    mongoose.connect('mongodb://127.0.0.1:27017/moba', {
        // 下面的参数必须带上
      useNewUrlParser: true
      // 数据库链接上后 就需要模型 同样新建/server/models/Category.js文件单独管理
    })
  }
```
数据库插件完成之后,需要数据模型
* 创建数据模型
```JavaScript
cd server
touch models
cd models
touch Category.js
```
Category.js
```JavaScript
// 数据库链接上后 就需要模型
const mongoose = require('mongoose')
// schema定义模型的字段又那些
const schema = new mongoose.Schema({
    // 定义字段
  name: { type: String },
})
// 导出模型供/server/routes/admin/index.js使用
module.exports = mongoose.model('Category', schema)
```
这样模型就创建好了 Category是mongoose的模型 哪里需要就引用
```JavaScript
    // 引用Category.js这个模型
    const Category = require("../../models/Category")
```
所以回到/server/routes/admin/index.js
index.js
```JavaScript
// 这个函数接受一个app 对象 
module.exports = app => {
    const express = require("express")
    // express子路由 有增删改查的很多东西
    const router = express.Router()
    // 引用Category.js这个模型
    const Category = require("../../models/Category")
    // post方法
    router.post("categories",async(req,res)=>{

    })
    // 然后挂载到下面的路由地址上
    app.use("/admin/api",router)
}
```
模型引用后,我们去创建数据
* 模型引用后,我们去创建数据。
```JavaScript
    // post方法
    router.post("categories",async(req,res)=>{
        //把数据存进去 需要用到数据库 
        // 创建数据 数据来源是客户端提交来的数据 async和await配套使用
        await Category.create(req.body)
        // 发信息给客户端 表示数据提交完成
        res.send(model)
    })
```
所以回到/server/routes/admin/index.js
index.js
```JavaScript
// 这个函数接受一个app 对象 
module.exports = app => {
    const express = require("express")
    // express子路由 有增删改查的很多东西
    const router = express.Router()
    // 引用Category.js这个模型
    const Category = require("../../models/Category")
    // post方法
    router.post("categories",async(req,res)=>{
        //把数据存进去 需要用到数据库
        // 创建数据 数据来源是客户端提交来的数据 async和await配套使用
        await Category.create(req.body)
        // 发信息给客户端 表示数据提交完成
        res.send(model)
    })
    // 然后挂载到下面的路由地址上
    app.use("/admin/api",router)
}
```
要想接受客服端发来的req.body还需要去server/index.js去引用express.json和cors(跨域)
* 引用之前安装的模块express.json和cors
```JavaScript
app.use(require("cors")())
// 加一个中间件 json
app.use(express.json())
```
回到server/index.js引用
```JavaScript
cd server/index.js
```
index.js
```JavaScript
const express = require("express") // 引入安装的express 模块

// 创建express实例
const app = express()
// 解决跨域问题
app.use(require("cors")())
// 加一个中间件 json
app.use(express.json())
// 引入路由 并传app对象 这样在server/routes/admin里面就有一个app可以用
require("./routes/admin/index")(app)
require("./plugins/db")(app)

// 监听3000端口 回调函数执行
app.listen(3000,()=>{
    console.log("http://localhost:3000")
});
```

至此分类接口已经完成 /admin/api/categories

下面去前端发起接口请求.

* 前端发起分类接口请求
```JavaScript
cd admin/src/views/CategoriesEdit.vue
```
CategoriesEdit.vue
```JavaScript
<script>
export default {
    data(){
        return {
            model:{}
        }
    },
    methods:{
        save(){
            //请求接口，提交数据 请求方法用post()
            this.$http.post()
        }
    }
}
</script>

```
我们接发起请求
```JavaScript
<script>
export default {
    data(){
        return {
            model:{}
        }
    },
    methods:{
        async save(){
            //请求接口，提交数据 请求方法用post()
            const res = await this.$http.post("categories",this.model)
        }
    }
}
</script>

```
这种异步回调用同步的方式写 就用async加awiat 
平常都用.then（） 
一般前端发了请求得到回应后,我们跳转到新的页面.比如这
创建分类页面发送求情后 自动挑战到分类列表页面

* 跳转分类列表页面

```JavaScript
            // 跳转到分类列表页面
            this.$router.push("/categories/list")

```

跳转成功后,提示成功消息
```JavaScript
            // 提示成功消息 elementui 提供的方法
            this.$message({
                type:'success',
                message:'保存成功啦!'
            })
```
下面我们就试试
效果如下

![image](https://github.com/Mcguffen/moba/blob/master/md/%E4%BF%9D%E5%AD%98%E6%88%90%E5%8A%9F.gif?raw=true)

我们的分类分两级  
比如    （1级）  新闻资讯
（2级） 热门 新闻 公告 活动 赛事
***

### 分类列表
* 创建分类列表页面
/admin/src/views/CategoriesList.vue

CategoriesList.vue
```JavaScript

```
***

### 修改分类
***

### 删除分类
***

### 通用CRUD接口
***

### 装备管理
***
### 图片上传和文件管理(multer)
***



### 英雄管理
***
### 编辑英雄
***
### 装备的多选(el-select,multiple)
***
### 技能的编辑

![gif](https://github.com/Mcguffen/moba/blob/master/md/%E8%8B%B1%E9%9B%84%E5%B1%9E%E6%80%A7%E7%BC%96%E8%BE%9###gif?raw=true)
***
### 文章管理
***
### 富文本编辑器(quill)
***

### 首页广告管理
***

### 管理员账号管理(bcrypt)
***
### 登录页面
***
### 登录接口(jwt,jsonwebtoken)
***
### 服务端登录校验
***
### 客户端路由限制(beforeEach,meta)
***

## 移动端网站
***

### 开发服务端接口
***
### 考虑整体样式
***
### 使用字体图标(iconfont)
***
### 首页顶部轮播图片(swiper)
***
### 考虑通用组件(SFC)
***
### 卡片组件
***
### 列表卡片组件 (list-card, nav, swiper)
***
### 首页新闻资讯-数据录入(+后台bug修复)
***
### 首页新闻资讯-数据接口
***
### 首页新闻资讯-界面展示
***
### 首页英雄列表-提取官网数据
***
### 首页英雄列表-录入数据
***
### 首页英雄列表-界面展示
***
### 新闻详情页
***
### 新闻详情页-完善
***
### 英雄详情页-1-前端准备
***
### 英雄详情页-2-后台编辑
***
### 英雄详情页-3-前端顶部
***
### 英雄详情页-4-完善
***

## 发布和部署(阿里云)
***
### 生产环境编译
***
### 购买域名和服务器
* 购买域名

* 购买服务器
***
### 域名解析
***
### Nginx安装和配置
* 为什么要安装nginx?
nginx是web服务器,部署服务器不像我们本地开发，开个端口,服务器统一使用80默认端口.
因为一台服务器可能部署很多域名.所以需要一个统一的80接口，域名可以分1级 2级来区别不同.
* 安装Nginx
看看安装没安装（第一次肯定没有，需要下面命令更新后才能看到）
然后更新下软件安装包管理程序(ubuntu 是 apt centos是yum mac是homebrew brew)，安装nginx
```
apt show nginx
apt update
apt show nginx
apt install nginx -y
```
安装完成后，我们的域名和ip就可以访问了 效果如下：

![image](https://github.com/Mcguffen/moba/blob/master/md/nginx%E5%AE%89%E8%A3%85%E5%AE%8C%E6%88%90%20.jpg?raw=true)

***

***
### MongoDB数据库的安装和配置

* 安装mongodb
```
apt show mongodb
apt update
apt install  -y mongodb-server
```
***
### git安装配置ssh-key
* 安装git
主要为了方便从github下拉代码,便于部署。
```JavaScipt
apt install -y git
```
* 配置ssh-key
主要为了从github下拉代码方便,一路回车就好.会生成一个key.然后我们复制key放到线上去。
它是一个公钥.
```JavaScipt
ssh-keygen
cat /root/.ssh/id_rsa.pub
```
然后复制公钥内容到github上配置，设置中找到配置公钥的地方 如图

![image](https://github.com/Mcguffen/moba/blob/master/md/%E9%85%8D%E7%BD%AE%E5%85%AC%E9%92%A5.jpg?raw=true)

![image](https://github.com/Mcguffen/moba/blob/master/md/ssh%20keys.jpg?raw=true)
完成


***
### Node.js安装配置淘宝镜像
* 配置淘宝镜像
```JavaScript
npm config set registry https://registry.npm.taobao.org 
npm info underscore // 验证是否成功配置
```
* 安装node并配置淘宝镜像（速度快）
```JavaScript
apt install -y nodejs
apt install -y npm
nodejs -v
npm -v
```
版本比较低 我们安装一个nodejs的包管理工具 n
* 安装一个升级node的版本的 包管理工具 当然可以随便切换版本 n
```JavaScript
npm i -g n
n latest // 安装最新的node版本 需要退出重新进来就可以看到node是最近版本
```
* 安装一个npm镜像地址切换工具 nrm(可以不装 因为前面我们已经用taobao镜像地址了够用)
```JavaScript
https://www.cnblogs.com/sghy/p/6840925.html

```



***
### 拉取代码,安装pm2并启动项目
* 上传代码到github或者码云(国内速度快)
* 下拉代码
安装完nginx会生成文件夹 /var/www/html 也可以自己创建一个文件夹
根目录下创建/data目录
```
mkdir /data
cd /data
git clone 项目地址
cd /moba
cd /server
npm i
npm i pm2 -g
pm2 start index.js --name(避免重复名字)
pm2 list
pm2 logs index
```
***
### 配置Nginx的反向代理
* 反向代理就是 别人访问我们的服务器 我的nginx服务器 访问nodejs服务器（比如3000端口）
* 在vscode安装插件 romote-ssh
因为在服务器中用命令行 或者 ssh链接到服务器的命令行 操作很麻烦 因为要改很多配置
所以安装这个vscode插件 romote-ssh
安装后 vscode编辑器就多来一个 图标 我们就可以向管理本地的文件一样 管理服务器文件
w
***

## 进阶
***
### 使用免费SSL证书启用HTTPS安全连接
***
### 使用阿里云OSS云存储存放上传文件
***
