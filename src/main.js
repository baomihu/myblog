// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://wd1182543348jfzvtq.wilddogio.com'

Vue.config.productionTip = false
//自定义指令
// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).slice(2, 8);
//   }
// })
Vue.directive('theme', {
  bind(el,binding,vnode) {
    if(binding.value == 'wide') {
      el.style.maxWidth = '1260px';
    }else if(binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }

    if(binding.arg == 'column') {
      el.style.background = '#6677cc';
      el.style.padding = '20px';
    }
  }
})
//自定义过滤器
// Vue.filter("to-uppercase", function (value) {
//   return value.toUpperCase();
// })
Vue.filter('snippet', function (value) {
  return value.slice(0,100) + '...';
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
