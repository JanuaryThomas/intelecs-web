import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import router from "./router";
import 'material-icons/iconfont/material-icons.css'
import 'vuesax/dist/vuesax.css'
import './assets/css/style.css'
import './assets/scss/main.scss'
import './assets/css/iconfont.css'


let colors = {
  primary: '#4285F4',
  success: '#28C76F',
  danger: '#DB4437',
  warning: '#F4B400',
  dark: '#000'
}
Vue.config.productionTip = false
Vue.use(Vuesax, {theme: {colors}})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
