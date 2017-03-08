// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import localforage from 'localforage'
import WebFont from 'webfontloader'

sync(store, router)
Vue.config.productionTip = false

/**
 * Bootstrap
 */
window.preferenceStore = localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: 'topnews',
  version: 1.0,
  storeName: 'preference',
  description: 'Top News For Dev Data'
})

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}

WebFont.load({
  google: {
    families: ['Roboto:400,500,700']
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
