// 这种写法要习惯
module.exports = app => {
    const mongoose = require("mongoose")
    // 使用 mongoose 链接数据库非常方便，链接的数据库里面即使没有dota2这个数据库会自动创建，有的花直接链接。
    mongoose.connect('mongodb://127.0.0.1:27017/dota2', {
        // 下面的参数必须带上
      useNewUrlParser: true
      // 数据库链接上后 就需要模型 同样新建/server/models/Category.js文件单独管理
    })
    // 安装 npm i require-all插件 引用分类和子分类等关联关系 就是把models文件夹下所有js文件引用了一遍
    require('require-all')(__dirname + '/../models')
  }