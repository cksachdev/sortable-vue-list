import Vue from 'vue'
import App from './App.vue'
import VueMousetrap from 'vue-mousetrap'

Vue.use(VueMousetrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
