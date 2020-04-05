import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const routers = [
    // {
    //     path:'/',
    //     redirect:'/orderList'
    // },
    // {
    //     path: '/orderList',
    //     name: 'orderList',
    //     component: (resolve) => {
    //         require(['../views/orderRequirement/orderList.vue'], resolve);
    //     }
    // },
    {
        path:'*',  // 匹配路由，当手动输入地址栏中的路由没有时，统一跳转到指定component
        component: (resolve) => require(['../views/error.vue'], resolve),
    }
]

const router = new Router({
    mode: 'history',
    routes: routers
})

// router.beforeEach( async (to,from,next) => {
//     next();
// })

export default router
