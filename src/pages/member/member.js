import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [{
    path:'/',
    components:require('./componnents/member.vue')
},{
    path:'/address',
    components:require('./componnents/address.vue'),
    children:[{
        path:'',
        redirect:'all'
    },{
        path:'all',
        components:require('./componnents/all.vue')
    },{
        path:'from',
        components:require('./componnents/from.vue')
    }]
}];

// 创建vue-router实例
let router = new Router({
    routes
})

// 根组件的注入
new Vue({
    el:"#app",
    router
})