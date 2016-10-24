var indexheadtpl = require('./index-head.string');
var indexbannertpl = require('./index-banner.string');
var indextpl = require('./index.string'); //引入模版

import commonUtil from '../../utils/commonUtil';

commonUtil.render(indexheadtpl);
commonUtil.render(indexbannertpl);
commonUtil.render(indextpl); //插入模版

var Vue = require('../../libs/vue.js');

var Vueresouce = require('../../libs/vue-resource.min.js');
Vue.use(Vueresouce);
new Vue({
    el: '#football-container',
    data: {
        message: '',
        value: {}
    },
    ready: function() {
        this.$http.get('/mock/index.json')
            .then(
                (res) => {
                    if (res.data.isSuccessful) {
                        this.value = res.data;
                        console.log(this.value.data.bannerlist);
                    }
                }
            )
    },
    methods: {

    }
})
var swiper = new Swiper('.swiper-container', {
    autoplay: 1000,
    speed: 300
});