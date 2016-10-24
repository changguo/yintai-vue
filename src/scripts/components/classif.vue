<template>
	<div class="classes">
		<section class="index-title">
			<section class="index-titlel">
				<img src="/images/newlogo.png" alt="">
			</section>
			<section class="index-titlec">
				<div>
					<img src="/images/search.png" alt="">
					<label for="">搜索商品or品牌</label>
				</div>
			</section>
			<section class="index-titler">
				<img src="/images/saoyisao.png" alt="">
			</section>
		</section>
		<section class="classesmain">
			<section class="classleft">
				<ul>
					<li v-bind:class="index==$index?'active':''" v-for="item in title" v-on:click="tabswiper($index)">
						{{item.name}}
					</li>
				</ul>
			</section>
			<section class="classright">
				<div class="rightswiper">
					<div class="swiper-wrapper">
						<div v-for="(index1,it) in title" class="swiper-slide" id="swiper-slide{{index1}}">
							<div class="rightswipermain">
								<div v-for="(index2,is) in datas" class="rightswipermian-list">
									<template v-if="is.data.id==it.id">
										<div class="right-list-title">
											<span>{{datas[index2].data.recommend.name}}</span>
										</div>
										<div class="right-Recommend">
											<div v-for="item in datas[index2].data.recommend.categoryrecommend">
												<img v-bind:src="item.imageurl" v-bind:alt="item.name">
												<span>{{item.name}}</span>
											</div>
										</div>
										<div class="right-list-title">
											<span>{{datas[index2].data.brand.name}}</span>
										</div>
										<div class="right-brand">
											<div v-for="item in datas[index2].data.brand.brandrecommend">
												<img v-bind:src="item.imageurl" v-bind:alt="item.name">
											</div>
										</div>
										<div class="right-list-title">
											<span>{{datas[index2].data.more.name}}</span>
										</div>
										<div class="right-more">
											<div v-for="item in datas[index2].data.more.morerecommend">
												<span>{{item.name}}</span>
											</div>
										</div>
									</template>
</div>
</div>
</div>
</div>
</div>
</section>
</section>
{{{loading}}}
</div>
</template>
<script>
    export default {
        data() {
            return {
                urls: '/mock/classifid=',
                //  urls: 'http://m.yintai.com/Services/Proxy.ashx?r=0.8222476592389412&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=',
                title: [{
                    "id": 88,
                    "name": "时尚名品"
                }, {
                    "id": 150,
                    "name": "潮流女装"
                }, {
                    "id": 257,
                    "name": "精品男装"
                }, {
                    "id": 245,
                    "name": "品质内衣"
                }, {
                    "id": 151,
                    "name": "护肤彩妆"
                }, {
                    "id": 2,
                    "name": "品质鞋靴"
                }, {
                    "id": 5,
                    "name": "时尚箱包"
                }, {
                    "id": 242,
                    "name": "运动户外"
                }, {
                    "id": 1,
                    "name": "珠宝饰品"
                }, {
                    "id": 3,
                    "name": "可爱婴童"
                }, {
                    "id": 4,
                    "name": "家居家纺"
                }],
                index: 0,
                datas: [],
                Isloads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                rightswiper: null,
                iscrolls: [null, null, null, null, null, null, null, null, null, null, null],
                loading: "",
                loadingvalue: '<div class="yo-loading"><i class="yo-ico"></i><span>加载中...</span></div>'

            }
        },
        ready() {
            var that = this;
            that.rightswiper = new Swiper('.rightswiper', {
                onSlideChangeStart: function(swiper) {
                    that.index = swiper.activeIndex;
                    if (!that.Isload(that.index)) {
                        that.loading = that.loadingvalue;
                        that.$http.get(that.urls + that.title[that.index].id + '.json').then(function(res) {
                            if (res.data.isSuccessful) {
                                that.loading = null;
                                that.datas.push(res.data);
                                that.Isloads[that.index] = 1;
                                that.change();
                            }
                        })
                    }
                }
            })
            for (var i in that.title) {
                var id = "#swiper-slide" + i;
                that.iscrolls[i] = new IScroll(id, {
                    scrollX: false,
                    scrollY: true
                })
            }
            this.loading = this.loadingvalue;
            this.$http.get(this.urls + this.title[0].id + '.json').then(function(res) {
                if (res.data.isSuccessful) {
                    this.loading = null;
                    that.datas.push(res.data);
                    that.Isloads[0] = 1;
                    that.change();
                    console.log(this.datas[0]);
                }
            })
        },
        methods: {
            change: function() {
                var that = this;
                this.$nextTick(function() {
                    for (var i in that.iscrolls) {
                        that.iscrolls[i].refresh();
                    }
                })
            },
            tabswiper: function(index) {
                var that = this;
                that.rightswiper.slideTo(index, 1000, false);
                console.log(index);
                that.index = index;
                if (!that.Isload(index)) {
                    that.loading = that.loadingvalue;
                    that.$http.get(that.urls + that.title[that.index].id + '.json').then(function(res) {
                        if (res.data.isSuccessful) {
                            that.loading = null;
                            that.datas.push(res.data);
                            that.Isloads[that.index] = 1;
                            that.change();
                        }
                    })
                }
            },
            Isload(index) {
                return this.Isloads[index] == 1 ? true : false;
            }
        }
    }
</script>