import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
// 引入新创建的分类创建页面 然后去修改写死的main.vue内容 
import CategoryEdit from './views/CategoryEdit.vue'
// 引入新创建的分类列表页面 然后去修改写死的CategoryList.vue内容 
import CategoryList from './views/CategoryList.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      // 添加子路由
      children: [
        {path: '/categories/create', component: CategoryEdit},
        {path: '/categories/list', component: CategoryList},

      ]
    },
    
  ]
})
