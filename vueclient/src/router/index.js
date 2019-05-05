import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Nav',
            component: Nav
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
