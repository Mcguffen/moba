<template>
  <div class="about">
    <!-- 根据有无id来判断是编辑还是新建类 -->
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
      <!--  添加分类表单 横向布局用label-width="120px"  点击保存按钮的时候为了阻止提交跳转页面使用@submit.native.prevent="save"-->
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <!--  双向绑定数据 -->
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id"
            :label="item.name" :value="item._id">
          </el-option>
        </el-select>

      </el-form-item>
      <el-form-item label="名称">
        <!--  双向绑定数据 -->
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <!--  添加提交按钮 -->
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  // 接收router.js传来的id 这样可以和路由解偶
  props: {
    id: {}
  },
    // 使用对象model给input输入框绑定数据
  data(){
    return {
      model: {},
      parents: []
    }
  },
  // 请求一个接口，提交表单数据。所以需要安装axios，新建一个http.js
  methods: {
    // 新建 修改分类
    async save(){
      let res
      if (this.id) {
        res = await this.$http.put(`categories/${this.id}`, this.model)
      } else {
      // this.$http拿来就用 当然我们要先去写接口，所以需要去server端来写接口，完成后端接口后，下面就是发送数据到后端接口
        let res = await this.$http.post('categories', this.model)
      }

      // 发送完数据 跳转到分类列表/categories/list
      this.$router.push('/categories/list')
      // 同时跳转的后提示个信息 
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    // 获取分类列表下具体id对应的分类详情页
    async fetch(){
      const res = await this.$http.get(`categories/${this.id}`)
      this.model = res.data
      },
    // 获取分类列表
    async fetchParents(){
      const res = await this.$http.get(`categories`)
      this.parents = res.data
      },

    },
    // 在有id属性的页面自动执行获取所有属性
  created(){
    this.fetchParents()
    this.id && this.fetch()
   }
  
}
</script>