// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import axios from "./api_config"
import api from "./api_config/api.js"
import App from './App'
import  { ToastPlugin } from 'vux';
import './utils/init';

import './components/index';
import './assets/css/base.css';
import './assets/css/common.css';


FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.axios = axios;
Vue.prototype.api = api;

Vue.use(ToastPlugin);

Vue.mixin({
  methods: {
    jumpTo(url, isReplace = false) {
      if (isReplace) {
        this.$router.replace(url);
      } else {
        this.$router.push(url);
      }
    },
    formatDate(value, format = 'yyyy-MM-dd') {
      if (!value) {
        return '';
      }
      const date = new Date(value);
      return date.format(format);
    },
    formatRate(value, decimal = 2) { // 小数转百分比如果使用乘法，会有问题，例如0.29 * 100
      const list = value.toString().split('.');
      list[1] = (list[1] || '').padEnd(decimal, '0');
      let intPart = +`${+list[0] || ''}${list[1].slice(0, 2)}`;
      const percentage = `${intPart}${decimal > 2 ? '.' : ''}${list[1].slice(2)}%`;
      return percentage;
    },
  },
});

Vue.filter('formatDate', (value, format = 'yyyy-MM-dd') => {
  const date = new Date(value);
  return date.format(format);
});

/* eslint-disable no-new */
const vue = new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app-box');

export default vue;
