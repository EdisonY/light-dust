"use strict";

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from './store'
import api from './config'
import VueI18n from 'vue-i18n'
import './assets/css/reset.css'

Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(api)
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: navigator.language,
    messages: {
        'zh-CN': require('./common/lang/zh'),
        'en-US': require('./common/lang/en')
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Vuex,
  router,
  VueI18n,
  components: { App },
  template: '<App/>'
})
