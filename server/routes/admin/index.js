// 后台路由文件  下面是个小技巧 odule.exports = 导出一个函数 这个函数接收一个app对象作为参数，这样我们在函数里面就可以使用外部传过来的app，去server文件下的index.js文件中
module.exports = app => {
    // 引用 安装的后端框架express
    const express = require('express')
    // express的一个子路由 当我需要使用子路由的时候我们就是用他，因为我要用子路由来定义增删改查
    const router = express.Router()
    // 使用/server/models/category.js文件导出的模型
    const Category = require('../../models/Category')

  // 获取创建分类的接口
    // 使用router的post方法向接口地址/categories 发送数据 那么就需要数据库 mongodb，以及mongoose这个操作数据库的驱动 去/server/index.js中去
    router.post('/categories', async (req, res) => {
        // 使用模型创建数据Category.create（）参数也就是数据来源是客户端发来的表单提交数据req.body 要想使用 还得去/server/index.js添加一个中间件
      const model = await Category.create(req.body)
      // 把客户端发来的表单数据进过模型加工后返回给客户端 至此后端分类接口已经完成，下面就去后台管理页面的前端的/admin/views/CategoryEdit.vue中的save方法中发起请求
      res.send(model)
    })
      
    // 获取分类列表的接口
      // 使用router的get方法向接口地址/categories 请求数据 那么就需要数据库 mongodb，以及mongoose这个操作数据库的驱动 去/server/index.js中去
      router.get('/categories', async (req, res) => {
        // 使用模型创建数据Category.find（）参数也就是数据来源是客户端发来的表单提交数据 要想使用 还得去/server/index.js添加一个中间件
      const items = await Category.find().limit(10)
      // 把客户端发来的表单数据进过模型加工后返回给客户端 至此后端分类接口已经完成，下面就去后台管理页面的前端的/admin/views/CategoryList.vue中的save方法中发起请求
      res.send(items)
    })

    // 因为外部server/index.js文件引用了我们的函数并传参数app回来，所以我们可以使用app了 将子路由挂在上去
    app.use('/admin/api', router)
  }