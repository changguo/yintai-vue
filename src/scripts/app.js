import '../styles/usage/page/index.scss';

// require('./views/index/index.js');

import index from './components/index.vue';
import deal from './components/deal.vue';
import main from './components/main.vue';
import classif from './components/classif.vue';
import my from './components/my.vue';
import shoppingcat from './components/shoppingcat.vue';
import shoppinglist from './components/shoppinglist.vue';
import map from './components/map.vue';
import login from './components/login.vue';
import splash from './components/splash.vue';


import VueRouter from './libs/vue-router.js';
import Vueresourece from './libs/Vue-resource.min.js';

import store from './vuex/store';


var App = Vue.extend({
    store: store
});
Vue.use(VueRouter);
Vue.use(Vueresourece);
//在根组件加入 store，让它的子组件和 store 连接


var router = new VueRouter();


router.map({
    '/': {
        component: splash
    },
    '/index': {
        component: index,
        subRoutes: {
            '/': {
                component: main
            },
            '/deal': {
                component: deal
            },
            '/classif': {
                component: classif
            },
            'shoppingcat': {
                component: shoppingcat
            },
            'my': {
                component: my
            }
        }
    },
    '/shoppinglist': {
        component: shoppinglist
    },
    '/map': {
        component: map
    },
    '/login': {
        component: login
    }
})
router.start(App, 'body');