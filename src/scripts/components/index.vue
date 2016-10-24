<template>
   <div class="index-body">
     <div class="index-container">
       <router-view></router-view>
     </div>
     <div class="index-footer">
        <ul>
           <li v-for="tab in tablist"
           v-bind:class="cur==$index?'active':''"
           v-on:click="changebar($index)"
           v-link="{path:tab.path}"
           >
             <img v-bind:src="cur==$index?tab.imgchangeurl:tab.imgurl" alt="">
             <span>{{tab.name}}</span>
           </li>
        </ul>
     </div>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                cur: 0,
                tablist: [{
                    path: '/',
                    imgurl: '/images/tabar_index.png',
                    imgchangeurl: '/images/tabar_index_s.png',
                    name: "首页"
                }, {
                    path: '/deal',
                    imgurl: '/images/tabar_temai.png',
                    imgchangeurl: '/images/tabar_temai_s.png',
                    name: "特卖"
                }, {
                    path: '/classif',
                    imgurl: '/images/tabar_list.png',
                    imgchangeurl: '/images/tabar_list_s.png',
                    name: "分类"
                }, {
                    path: '/shoppingcat',
                    imgurl: '/images/tabar_gouwuche.png',
                    imgchangeurl: '/images/tabar_gouwuche_s.png',
                    name: "购物车"
                }, {
                    path: '/my',
                    imgurl: '/images/tabar_wode.png',
                    imgchangeurl: '/images/tabar_wode_s.png',
                    name: "我的银泰"
                }, ]
            }
        },
        methods: {
            changebar(i) {
                this.cur = i;
            }
        }
    }
</script>