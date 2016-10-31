<template>
	<div class="deal">
		<div class="deal-title">
			<div class="deal-title-top">
				<b></b>
				<h2>特卖</h2>
				<span>规则说明</span>
			</div>
			<div class="deal-title-bu">
				<ul>
					<li v-bind:class="index==$index?'active':''" v-for="it in tab" v-on:click="tabswiper($index)"><span>{{it.name}}</span></li>
				</ul>
			</div>
		</div>

		<div class="deal-main-scroll">
			<div class="deal-swiper" v-if="list.data">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="deal-main1">
							<div>
								<div class="deal-main-contain">
									<template v-for="item in list.data.activityinfo[0].activitylist">
										<div class="deallist">
											<span>{{item.discount}}</span>
											<img v-bind:src="item.imgurl" alt="item.name">
											<b>{{item.name}}</b>
											<i>剩<strong>4</strong>天</i>
										</div>
									</template>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="deal-main2">
							<div>
								<div class="deal-main-contain">
									<template v-for="item in list.data.activityinfo[0].activitylist">
										<div class="deallist">
											<span>{{item.discount}}</span>
											<img v-bind:src="item.imgurl" alt="item.name">
											<b>{{item.name}}</b>
											<i>剩<strong>4</strong>天</i>
										</div>
									</template>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="deal-main3">
							<div>
								<div class="deal-main-contain">
									<template v-for="item in list.data.activityinfo[0].activitylist">
										<div class="deallist">
											<span>{{item.discount}}</span>
											<img v-bind:src="item.imgurl" alt="item.name">
											<b>{{item.name}}</b>
											<i>剩<strong>4</strong>天</i>
										</div>
									</template>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="deal-main4">
							<div>
								<div class="deal-main-contain">
									<template v-for="item in list.data.activityinfo[0].activitylist">
										<div class="deallist">
											<span>{{item.discount}}</span>
											<img v-bind:src="item.imgurl" alt="item.name">
											<b>{{item.name}}</b>
											<i>剩<strong>4</strong>天</i>
										</div>
									</template>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-slide">
						<div class="deal-main5">
							<div>
								<div class="deal-main-contain">
									<template v-for="item in list.data.activityinfo[0].activitylist">
										<div class="deallist">
											<span>{{item.discount}}</span>
											<img v-bind:src="item.imgurl" alt="item.name">
											<b>{{item.name}}</b>
											<i>剩<strong>4</strong>天</i>
										</div>
									</template>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                number: 1,
                url: ['/mock/dealindex=1.json',
                    '/mock/dealindex=2.json',
                    '/mock/dealindex=3.json',
                    '/mock/dealindex=4.json',
                    '/mock/dealindex=5.json'
                ],
                list: {},
                index:1,
                tab:[{name:"推荐"},{name:"最新"},{name:"特卖爆推"},{name:"倒计时"},{name:"预告"}],
                mySwiper:null,
                dealMainscroll1:null,
                dealMainscroll2:null,
                dealMainscroll3:null,
                dealMainscroll4:null,
                dealMainscroll5:null

            }
        },
        ready() {
            this.$http.get('/mock/dealindex=1.json').
            then((res) => {
                if (res.data.isSuccessful) {
                    this.list = res.data;
                    this.change();
                }
            })
        },
        methods: {
            change: function() {
                this.$nextTick(function() {
                    this.dealMainscroll1 = new IScroll('.deal-main1', {
                        scrollX: false,
                        scrollY: true,
                        click:true
                    })
                     this.dealMainscroll2 = new IScroll('.deal-main2', {
                        scrollX: false,
                        scrollY: true,
                        click:true
                    })
                     this.dealMainscroll3 = new IScroll('.deal-main3', {
                        scrollX: false,
                        scrollY: true,
                        click:true
                    })
                     this.dealMainscroll4 = new IScroll('.deal-main4', {
                        scrollX: false,
                        scrollY: true,
                        click:true
                    })
                     this.dealMainscroll5 = new IScroll('.deal-main5', {
                        scrollX: false,
                        scrollY: true,
                        click:true
                    })
					var that = this;
                    this.mySwiper = new Swiper('.deal-swiper', {
                          onSlideChangeStart: function(swiper){
								that.index = swiper.activeIndex;
								}
                        })
                })
            },
            tabswiper:function(index){
                this.mySwiper.slideTo(index, 1000, false);
                console.log(index);
                this.index=index;
            }
        }
    }
</script>