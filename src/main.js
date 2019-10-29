import Vue from "vue";
import './assets/public.less';
import router from './router';

import App from './App.vue'

new Vue({
    el:'#app',
    router,
    components:{App},
    template:'<App/>'
})