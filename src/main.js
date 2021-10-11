import Vue from 'vue'
import App from './App.vue'
import SvgIcon from "./components/SvgIcon"

Vue.use(SvgIcon);
// import 'assets/css/app.scss'
Vue.config.productionTip = false

Vue.component('SvgIcon', require('./components/SvgIcon.vue').default);

new Vue({
  render: h => h(App),
}).$mount('#app')
