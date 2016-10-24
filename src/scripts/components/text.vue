	<div class="FuncAreaFourImg">
							<ul>
								<li v-for="item in value.data.templatelist[0].items">
									<img v-bind:src="item.imgurl" alt=""><span>{{item.imgname}}</span>
								</li>
							</ul>
						</div>
						<div class="Oneimg">
							<img v-bind:src="value.data.templatelist[4].items[0].imgurl" alt="">
						</div>

						<!--爆款专区-->
						<div class="FloorSpace2">
							<img class="title" v-bind:src="value.data.templatelist[2].items[0].imgurl" alt="">
						</div>
						<div class="ProductSingleRow4" id="ProductSingleRow4">
							<ul>
								<li v-for="item in value.data.templatelist[3].items">
									<span>{{item.extra.productdetail.prmotionlist[0].plabel}}</span>
									<img v-bind:height="item.height/2" v-bind:src="item.imgurl" alt="">
									<p>{{item.extra.productdetail.name}}</p>
									<b>￥{{item.extra.productdetail.price}}</b>
								</li>
							</ul>
						</div>

						<!--分割线-->
						<div class="Oneimgs">

						</div>

						<!--本周推荐-->
						<div class="FloorSpace2">
							<img class="title" v-bind:src="value.data.templatelist[5].items[0].imgurl" alt="">
						</div>
						<div class="OneImage5">
							<ul>
								<li v-for="item in value.data.templatelist[6].items">
									<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
								</li>
							</ul>
						</div>
						<div class="OneImage5">
							<ul>
								<li v-for="item in value.data.templatelist[7].items">
									<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
								</li>
							</ul>
						</div>
						<!--分割线-->
						<div class="Oneimgs">

						</div>

						<!--专柜同款-->
						<div class="FloorSpace2">
							<img class="title" v-bind:src="value.data.templatelist[9].items[0].imgurl" alt="">
						</div>

						<div class="ThreeImgLeftOne12">
							<div class="ThreeImgLeftOne12one">
								<img v-bind:src="value.data.templatelist[10].items[0].imgurl" v-bind:alt="value.data.templatelist[10].items[0].imgname">
							</div>
							<div class="ThreeImgLeftOne12two">
								<img v-bind:src="value.data.templatelist[10].items[1].imgurl " alt="">
								<img v-bind:src="value.data.templatelist[10].items[2].imgurl" alt="">
							</div>
						</div>
						<ul class="ThreeImgAbreast13">
							<li v-for="item in value.data.templatelist[11].items">
								<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
							</li>
						</ul>
						<!--分割线-->
						<div class="Oneimgs">

						</div>
						<!--奢品大图片-->
						<div class="Oneimg">
							<img v-bind:src="value.data.templatelist[12].items[0].imgurl" alt="">
						</div>

						<!--海淘馆-->
						<div class="FloorSpace2">
							<img class="title" v-bind:src="value.data.templatelist[14].items[0].imgurl" alt="">
						</div>
						<div class="OneImage5">
							<ul>
								<li v-for="item in value.data.templatelist[15].items">
									<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
								</li>
							</ul>
						</div>
						<div class="OneImage5">
							<ul>
								<li v-for="item in value.data.templatelist[16].items">
									<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
								</li>
							</ul>
						</div>
						<!--分割线-->
						<div class="Oneimgs">

						</div>
						<!--流行馆-->
						<div class="FloorSpace2">
							<img class="title" v-bind:src="value.data.templatelist[18].items[0].imgurl" alt="">
						</div>
						<div class="ThreeImgLeftOne12">
							<div class="ThreeImgLeftOne12one">
								<img v-bind:src="value.data.templatelist[19].items[0].imgurl" v-bind:alt="value.data.templatelist[10].items[0].imgname">
							</div>
							<div class="ThreeImgLeftOne12two">
								<img v-bind:src="value.data.templatelist[19].items[1].imgurl " alt="">
								<img v-bind:src="value.data.templatelist[19].items[2].imgurl" alt="">
							</div>
						</div>
						<ul class="ThreeImgAbreast13">
							<li v-for="item in value.data.templatelist[20].items">
								<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
							</li>
						</ul>
						<!--流行大图片-->
						<div class="Oneimg">
							<img v-bind:src="value.data.templatelist[21].items[0].imgurl" alt="">
						</div>
						<!--分割线-->
						<div class="Oneimgs">

						</div>
						<!--奢品馆-->
						<div class="FloorSpace2">
							<img class="title" v-bind:src="value.data.templatelist[23].items[0].imgurl" alt="">
						</div>
						<div class="ThreeImgLeftOne12">
							<div class="ThreeImgLeftOne12one">
								<img v-bind:src="value.data.templatelist[24].items[0].imgurl" v-bind:alt="value.data.templatelist[10].items[0].imgname">
							</div>
							<div class="ThreeImgLeftOne12two">
								<img v-bind:src="value.data.templatelist[24].items[1].imgurl " alt="">
								<img v-bind:src="value.data.templatelist[24].items[2].imgurl" alt="">
							</div>
						</div>
						<ul class="ThreeImgAbreast13">
							<li v-for="item in value.data.templatelist[25].items">
								<img v-bind:src="item.imgurl" v-bind:alt="item.imgname">
							</li>
						</ul>
						<!--分割线-->
						<div class="Oneimgs">

						</div>
						<!--分割线-->
						<div class="Oneimgss">

						</div>
						<!--分割线-->
						<div class="Oneimg">
							<img v-bind:src="value.data.templatelist[28].items[0].imgurl" alt="">
						</div>
						<div class="ProductDouble">
							<ul>
								<li v-for="item in value.data.templatelist[40].items">
									<span>{{item.extra.productdetail.prmotionlist[0].plabel}}</span>
									<img v-bind:height="item.height/2" v-bind:src="item.imgurl" alt="">
									<p>{{item.extra.productdetail.name}}</p>
									<b>￥{{item.extra.productdetail.price}}</b>
								</li>
							</ul>
						</div>