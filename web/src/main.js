// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引用ui组件 bootstrap-vue
import BootstrapVue from 'bootstrap-vue'

// 引用ui组件 iview
import iView from 'iview'

// 引用App主入口
import App from './App.vue'

// 引用路由配置文件
import router from './router'

// 引入vuex
// import store from './store'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 引入iView样式
import 'iview/dist/styles/iview.css'

Vue.use(BootstrapVue)
Vue.use(iView)

new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App)
})
