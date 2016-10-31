<template>
	<div class="Splash">
		<div class="swiper-splash">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in list">
					<img v-bind:src="item.imgurl">
                    <div v-if="$index!=4" class="swiper-pagination"></div>
                    <div v-if="$index==4" class="splash-button">
                         <input v-link="{path:'/index'}" transition="texts" type="button" value="立即体验">
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import common from '../utils/commonUtil.js';
    export default {
        data() {
            return {
                list:[
                {imgurl:'/images/2016-10-11_142136.png'},
                {imgurl:'/images/2016-10-11_142218.png'},
                {imgurl:'/images/2016-10-11_142240.png'},
                {imgurl:'/images/2016-10-11_142257.png'},
                {imgurl:'/images/2016-10-11_142313.png'},
                ]
            }
        },
        ready(){
            common.isAllLoaded('.Splash',function(){
                var swiper = new Swiper('.swiper-splash',{
                    pagination : '.swiper-pagination',
                    paginationType : 'bullets',
                })
            })
        }
    }
</script>