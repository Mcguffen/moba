// 数据库链接上后 就需要模型
const mongoose = require('mongoose')
// schema定义模型的字段又那些
const schema = new mongoose.Schema({
  name: { type: String },
  // 分类关联模型
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
})
// 导出模型供/server/routes/admin/index.js使用
module.exports = mongoose.model('Category', schema)