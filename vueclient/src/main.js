"use strict";

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import iView from 'iview'
import router from './router'
import Vuex from './store'
import api from './config'
import './assets/css/reset.css'
import 'iview/dist/styles/iview.css';


Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(api)
Vue.use(VueI18n)
Vue.use(iView)

const i18n = new VueI18n({
    //locale: navigator.language,
    locale:'en-US',
    messages: {
        'zh-CN': require('./common/lang/zh'),
        'en-US': require('./common/lang/en')
    }
})

const app = new Vue({ i18n })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Vuex,
  router,
  i18n,
  iView,
  components: { App },
  template: '<App/>'
}).$mount('#app')
