import '../styles/usage/page/index.scss';

// require('./views/index/index.js');

import index from './components/index.vue';
import deal from './components/deal.vue';
import main from './components/main.vue';
import classif from './components/classif.vue';
import my from './components/my.vue';
import shoppingcat from './components/shoppingcat.vue';

import Vue from './libs/vue.js';
import VueRouter from './libs/vue-router.js';
import Vueresourece from './libs/Vue-resource.min.js';

Vue.use(VueRouter);
Vue.use(Vueresourece);

var router = new VueRouter();

var App = Vue.extend({});

router.map({
    '/': {
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
    }
})
router.start(App, 'body');