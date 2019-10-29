/**
 * Created by Villen on 19/3/18.
 */
import Vue from'vue';
import Router from 'vue-router';

import Index from './view/index';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'Index',
            component: Index
        }
    ]
})