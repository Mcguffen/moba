// 后端的常用模块 需要我们 去安装 express@next mongoose cors
const express = require("express")

const app = express()
// 客户端加密 防篡改
app.set('secret', 'i2u34y12oi3u4y8')
// 解决跨域问题
app.use(require('cors')())
// 必须使用下面的中间件 /server/routes/admin/index.js中的const model = await Category.create(req.body)才能使用 
app.use(express.json())
// 静态文件托管 在nodejs里面 使用下面的 可以将莫个文件下的文件静态文件托管 
app.use('/uploads', express.static(__dirname + '/uploads'))

app.use('/admin', express.static(__dirname + '/admin'))

app.use('/', express.static(__dirname + '/web'))

// 同样的 和路由地址管理一样 我们单独讲这个数据库单独放在/plugins/db文件下 方法和之前routes一样 数据库链接上后 就需要模型
require('./plugins/db')(app)
// 引用路由文件下./routes/admin的函数使用他，然后传给他app参数，意思就是调用函数传参数给他，那么路由文件下的函数就可以使用外部的app啦
require('./routes/admin')(app)

require('./routes/web')(app)

// 监听3000端口 分类路由需要我们单独写在一个文件routes下，按前后台分，这么方便管理。
app.listen(3000, () => {
  console.log('http://localhost:3000');
});