const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  // 外号 
  title: { type: String },
  // 这个英雄属于什么类型 有可能多个类型哦 比如肉盾 先手
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  // 得分 
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number },
  },
  // 技能
  skills: [{
    icon: { type: String },
    name: { type: String },
    description: { type: String },
    tips: { type: String },
  }],
  // 顺风装备推荐
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  // 逆风装备推荐
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],
  // 使用技巧
  usageTips: { type: String },
  // 对线技巧
  battleTips: { type: String },
  // 打团思路
  teamTips: { type: String },
  // 搭档，配合阵容
  partners: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    description: { type: String },
  }],
})

module.exports = mongoose.model('Hero', schema)
