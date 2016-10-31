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
                        <ul class="my-list1">
                            <li><i class="iconfont iconsizes">&#xe605;</i><b>收藏</b></li>
                            <li><i class="iconfont iconsizes">&#xe604;</i><b>浏览记录</b></li>
                        </ul>
                        <div class="my-hr"></div>
                        <div class="my-listone">
                            <b>银泰门店会员中心</b>
                            <i></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                        <div class="my-hr"></div>
                           <div class="my-listone">
                            <b>账号与安全</b>
                            <i></i>
                            <span class="iconfont"></span>
                        </div>
                        <div class="my-hr"></div>
                          <div class="my-listone" v-link="{path:'/map'}">
                            <b>银泰实体分布点（地图）</b>
                            <i></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                        <div class="my-hr"></div>
                        <div class="my-listone borderbuttom" v-if="datas!=null">
                            <b>优惠券</b>
                            <i><strong v-if="username!=null">{{datas.data.user.pointfrozen}}</strong></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                          <div class="my-listone borderbuttom" v-if="datas!=null">
                            <b>绑定手机</b>
                            <i><strong v-if="username!=null">{{datas.data.user.mobile}}</strong></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                             <div class="my-listone borderbuttom">
                            <b>设置支付密码</b>
                            <i></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                        <div class="my-listone ">
                            <b>地址管理</b>
                            <i></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                        <div class="my-hr"></div>
                         <div class="my-listone borderbuttom">
                            <b>消息中心</b>
                            <i></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                         <div class="my-listone ">
                            <b>客服电话</b>
                            <i><label>(8:00-24:00)</label><strong>400-119-1111</strong></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                        <div class="my-hr"></div>
                         <div class="my-listone">
                            <b>下载银泰网客户端</b>
                            <i></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                        <div class="my-hr"></div>
                         <div class="my-listone ">
                            <b>帮助中心</b>
                            <i></i>
                            <span class="iconfont">&#xe606;</span>
                        </div>
                        <div class="my-hr"></div>
                        <div v-if="username!=null" class="my-button">
                            <span>退出账户</span>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import common from "../utils/commonutil.js";
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
                        this.change();
                    }
                })
            }
        },
        methods: {
            change: function() {
                var that = this;
                this.$nextTick(function() {
                    common.isAllLoaded('.my', function() {
                        that.myscroll.refresh();
                    })
                })
            }
        }
    }
</script>