<template>
	<div class="my">
		<div class="my-title">
			<h2>我的银泰</h2>
		</div>
		<div class="my-main">
			<div class="my-scroll">
				<div class="my-scrolls">
					<div class="my-main-title">
						<div class="my-notlogo" v-if="username==null">
							<h2>欢迎来到银泰</h2>
							<button>登录/注册</button>
						</div>
						<div class="my-logo" v-else>
							<div v-if="datas!=null">
								<div class="my-logotop">
									<b></b>
									<img src="http://r.ytrss.com/mobile/img/user-head.png" alt="">
									<span>{{datas.data.user.class}}</span>
								</div>
								<span class="user">{{datas.data.user.name}}</span>
							</div>
						</div>
					</div>
					<div class="my-mains">
						<ul v-if="datas!=null" class="my-logolist">
							<li><span><b>{{datas.data.user.point}}</b><i>积分</i></span></li>
							<li><span><b>{{datas.data.user.coin}}.00</b><i>银元</i></span></li>
							<li><span><b>{{datas.data.user.money}}.00</b><i>余额</i></span></li>
							<li><span><b>{{datas.data.user.ytcard}}.00</b><i>银泰卡</i></span></li>
						</ul>
						<div class="my-hr"></div>
						<ul  class="my-logolist">
							<li><span><b class="iconfont iconsizes">&#xe600;</b><i>全部订单</i></span></li>
							<li><span><b class="iconfont iconsizes">&#xe603;</b><i>待支付</i></span></li>
							<li><span><b class="iconfont iconsizes">&#xe601;</b><i>待收货</i></span></li>
							<li><span><b class="iconfont iconsizes">&#xe602;</b><i>退换货</i></span></li>
						</ul>
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
                username: "chrischen",
                myscroll: null,
                datas: null,
            }
        },
        ready() {
            this.myscroll = new IScroll('.my-scroll', {
                scrollX: false,
                scrollY: true,
                click: true
            });
            if (this.username) {
                this.$http.get('/mock/my.json?username=' + this.username).then(function(res) {
                    if (res.data.isSuccessful) {
                        this.datas = res.data;
                        console.log(this.datas);
                    }
                })
            }
        },
        methods: {
            change: function() {
                this.$nextTick(function() {
                    this.myscroll.refresh();
                })
            }
        }
    }
</script>