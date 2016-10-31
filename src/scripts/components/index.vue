<template>
   <div class="index-body">
     <div class="index-container">
       <router-view></router-view>
     </div>
     <div class="index-footer">
        <ul>
           <li v-for="tab in tablist"
           v-bind:class="tabIndex==$index?'active':''"
           v-on:click="changebar($index)"
           v-link="{path:tab.path}"
           >
             <img v-bind:src="tabIndex==$index?tab.imgchangeurl:tab.imgurl" alt="">
             <span>{{tab.name}}</span>
           </li>
        </ul>
     </div>
   </div>
</template>

<script>
    import {
        tabChanger
    } from '../vuex/actions';
    import {
        getTabindex
    } from '../vuex/getters';
    export default {
        vuex: {
            actions: {
                change: tabChanger
            },
            getters: {
                tabIndex: getTabindex
            }
        },
        data() {
            return {
                cur: 0,
                tablist: [{
                    path: '/index',
                    imgurl: '/images/tabar_index.png',
                    imgchangeurl: '/images/tabar_index_s.png',
                    name: "首页"
                }, {
                    path: '/index/deal',
                    imgurl: '/images/tabar_temai.png',
                    imgchangeurl: '/images/tabar_temai_s.png',
                    name: "特卖"
                }, {
                    path: '/index/classif',
                    imgurl: '/images/tabar_list.png',
                    imgchangeurl: '/images/tabar_list_s.png',
                    name: "分类"
                }, {
                    path: '/index/shoppingcat',
                    imgurl: '/images/tabar_gouwuche.png',
                    imgchangeurl: '/images/tabar_gouwuche_s.png',
                    name: "购物车"
                }, {
                    path: '/index/my',
                    imgurl: '/images/tabar_wode.png',
                    imgchangeurl: '/images/tabar_wode_s.png',
                    name: "我的银泰"
                }, ]
            }
        },
        methods: {
            changebar(index) {
                this.change(index);
            }
        }
    }
</script>