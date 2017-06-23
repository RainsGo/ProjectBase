import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引用模板
import Index from '@/components/index.vue'
import Page1 from '@/components/test/page1.vue'
import Page2 from '@/components/test/page2.vue'
import Page3 from '@/components/test/page3.vue'
import Page4 from '@/components/test/page4.vue'
import NotFound from '@/components/error/notFound.vue'

// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/page1',
            component: Page1
        },
        {
            path: '/page2',
            component: Page2
        },
        {
            path: '/page3',
            component: Page3
        },
        {
            path: '/page4',
            component: Page4
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})
