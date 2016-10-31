<template>
	<div class="index-main">
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
		<div class="scrollcontainers">
			<div id="mainscroll" class="mainscroll">
				<div v-if="value.data">
					<!--轮播图-->
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="item in value.data.bannerlist">
								<img v-link="{path:'/login'}"  transition="expand" v-bind:src="item.imgurl" v-bind:alt="item.imgname">
							</div>
						</div>
					</div>
					<div class="main-allload" v-for="it in value.data.templatelist">
						<!--四个分类-->
						<template v-if="it.templatetype=='FuncAreaFourImg'">
							<div class="FuncAreaFourImg">
								<ul>
									<li v-for="item in it.items">
										<img v-bind:src="item.imgurl" alt=""><span>{{item.imgname}}</span>
									</li>
								</ul>
							</div>
						</template>
<!--粗分割-->
<template v-if="it.templatetype=='FloorSpace'">
							<div class="Oneimgs">
							</div>
						</template>
<!--每个的头部-->
<template v-if="it.templatetype=='OneImg'">
							<div class="FloorSpace2">
								<img class="title" v-bind:src="it.items[0].imgurl" alt="">
							</div>
						</template>
<!--横向列表-->
<template v-if="it.templatetype=='ProductSingleRow'">
							<div class="ProductSingleRow4" id="ProductSingleRow4">
									<ul style="width:{{widths+'px'}}">
									<li v-for="item in it.items">
										<span>{{item.extra.productdetail.prmotionlist[0].plabel}}</span>
										<img v-bind:height="item.height/2" v-bind:src="item.imgurl" alt="">
										<p>{{item.extra.productdetail.name}}</p>
										<b>￥{{item.extra.productdetail.price}}</b>
									</li>
								</ul>
							</div>
						</template>

<!--底部分割图片-->
<template v-if="it.templatetype=='FloorHead'">
							<div class="FloorSpace2">
								<img class="title" v-bind:src="it.items[0].imgurl" alt="">
							</div>
						</template>

<!--两张图片一行-->
<template v-if="it.templatetype=='TwoImgAverage'">
							<div class="OneImage5">
								<ul>
									<li v-for="item in it.items">
										<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
									</li>
								</ul>
							</div>
						</template>
<!--底部分割图片-->
<template v-if="it.templatetype=='FloorFoot'">
							<div class="Oneimgs">
							</div>
						</template>
<!--三张图片 1:2-->
<template v-if="it.templatetype=='ThreeImgLeftOne'">
							<div class="ThreeImgLeftOne12">
								<div class="ThreeImgLeftOne12one">
									<img v-bind:src="it.items[0].imgurl" v-bind:alt="it.items[0].imgname">
								</div>
								<div class="ThreeImgLeftOne12two">
									<img v-bind:src="it.items[1].imgurl " alt="">
									<img v-bind:src="it.items[2].imgurl" alt="">
								</div>
							</div>
						</template>
<!--三张图片1:1:1-->
<template v-if="it.templatetype=='ThreeImgAbreast'">
							<ul class="ThreeImgAbreast13">
								<li v-for="item in it.items">
									<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
								</li>
							</ul>
						</template>
<!--列表渲染两张-->
<template v-if="it.templatetype=='ProductDoubleColumn'">
							<div class="ProductDouble">
								<ul>
									<li v-for="item in it.items">
										<span>{{item.extra.productdetail.prmotionlist[0].plabel}}</span>
										<img v-bind:height="item.height/2" v-bind:src="item.imgurl" alt="">
										<p>{{item.extra.productdetail.name}}</p>
										<b>￥{{item.extra.productdetail.price}}</b>
									</li>
								</ul>
							</div>
						</template>
</div>
</div>
</div>
</div>
</div>
</template>
<script>
    import common from "../utils/commonUtil.js";
    export default {
        data() {
            return {
                widths: '1000',
                value: {},
                text: "",
                mySwiper: null,
                ProductSingleRow4icroll: null,
                mainscroll: null
            }
        },
        ready() {
            this.$http.get('/mock/index.json')
                .then(
                    (res) => {
                        if (res.data.isSuccessful) {
                            this.value = res.data;
                            this.change();
                            this.widths = res.data.data.templatelist[3].items.length * 110;
                        }

                    }
                )
        },
        methods: {
            change: function() {
                var that = this;
                this.$nextTick(function() {
                    common.isAllLoaded('.swiper-container', function() {
                        that.mySwiper = new Swiper('.swiper-container', {
                            autoplay: 1000, //可选选项，自动滑动
                            loop: true,
                        });
                    })
                    common.isAllLoaded('.main-allload', function() {
                        that.mainscroll = new IScroll('.mainscroll', {
                            scrollX: false,
                            scrollY: true,
                            mouseWheel: true,
                            click: true
                        });
                        common.isAllLoaded('.ProductSingleRow4', function() {
                            that.ProductSingleRow4icroll = new IScroll('.ProductSingleRow4', {
                                scrollX: true,
                                scrollY: false,
                                click: true
                            });
                        })
                    })
                })
            }
        }
    }
</script>