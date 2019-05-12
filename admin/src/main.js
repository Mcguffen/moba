import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

// 引入模块  下面可以挂载到Vue上去 以后用更方便
import http from './http'
// 加载到Vue实例原型上去后 都可以使用this.$http来调用http模块 我们回到CategoryEdit.vue中的method中现学现卖
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
