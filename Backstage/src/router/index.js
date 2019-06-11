import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Deploy from '@/components/deploy'
import Wifi from '@/components/wifi'
import Video from '@/components/video'
import Error from '@/components/error'
import Common from '@/components/common'

Vue.use(Router)

// const Login = () => import(/* webpackChunkName: "login" */ '@/components/login');
// const Deploy = () => import(/* webpackChunkName: "deploy" */ '@/components/deploy');

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: (resolve)=>require(['@/components/login'],resolve)
        },
        {
            path: '/deploy',
            name: 'deploy',
            component: (resolve)=>require(['@/components/deploy'],resolve),
            children:[
                {
                    path: 'wifi',
                    name: 'wifi',
                    component: (resolve)=>require(['@/components/wifi'],resolve)
                },
                {
                    path: 'video',
                    name: 'video',
                    component: (resolve)=>require(['@/components/video'],resolve)
                },
                {
                    path: 'common',
                    name: 'common',
                    component: (resolve)=>require(['@/components/common'],resolve)
                }                                
            ]
        },
        {
            path: "*",
            name: "error",
            component: (resolve)=>require(['@/components/error'],resolve)
        }
    ]
})

router.beforeEach((to,form,next) => {
    console.log(to,form)
    if(to.path != '/'){
        if(sessionStorage.token != undefined){
            next()
        }else{
            next({name:'login',params:{reload:1}})
        }
    }else if(to.path == '/' && sessionStorage.token != undefined){
        next('/deploy/common')
    }else{
        next()
    }
})

export default router

