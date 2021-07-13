import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './globalFilters'
import store from './vuex'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
