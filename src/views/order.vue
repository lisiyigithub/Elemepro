<template>
	<div id="order">
		<header><span><</span>{{tit}}</header>
		<div class="order-top">
			<div class="pic">
				<img src="https://fuss10.elemecdn.com/a/5d/f5f174e9b960777b77a49b6156a12png.png?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="" />
			</div>
			<div class="conn">
				<h4>绝味鸭脖（二七万达1）><span>订单已送达</span></h4>
				<span>2018-07-02 12:21</span>
				<p>黑鸭鸭架小份等3件商品<span>￥35.00</span></p>
				<div>再来一单</div>
			</div>
		</div>
		<div class="order-list">
			<ul>
				<li>
					<div class="pic">
						<img src="https://fuss10.elemecdn.com/a/5d/f5f174e9b960777b77a49b6156a12png.png?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="" />
					</div>
					<div class="conn">
						<h4>绝味鸭脖（二七万达1）><span>订单已送达</span></h4>
						<span>2018-07-02 12:21</span>
						<p>黑鸭鸭架小份等3件商品<span>￥35.00</span></p>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="https://fuss10.elemecdn.com/a/5d/f5f174e9b960777b77a49b6156a12png.png?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="" />
					</div>
					<div class="conn">
						<h4>绝味鸭脖（二七万达1）><span>订单已送达</span></h4>
						<span>2018-07-02 12:21</span>
						<p>黑鸭鸭架小份等3件商品<span>￥35.00</span></p>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="https://fuss10.elemecdn.com/a/5d/f5f174e9b960777b77a49b6156a12png.png?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="" />
					</div>
					<div class="conn">
						<h4>绝味鸭脖（二七万达1）><span>订单已送达</span></h4>
						<span>2018-07-02 12:21</span>
						<p>黑鸭鸭架小份等3件商品<span>￥35.00</span></p>
					</div>
				</li>
				<li>
					<div class="pic">
						<img src="https://fuss10.elemecdn.com/a/5d/f5f174e9b960777b77a49b6156a12png.png?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/" alt="" />
					</div>
					<div class="conn">
						<h4>绝味鸭脖（二七万达1）><span>订单已送达</span></h4>
						<span>2018-07-02 12:21</span>
						<p>黑鸭鸭架小份等3件商品<span>￥35.00</span></p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Order',
		data(){
			return{
				tit:'订单'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
	header{
		width: 100%;
		height: 44px;
		line-height: 44px;
		background: #267AEB;
		color: #fff;
		text-align: center;
		position: fixed;
		top: 0;
	}
	header span{
		position: absolute;
		left: 10px;
	}
	#order{
		margin-top: 50px;
	}
	.order-top{
		height: 105px;
		background: #fff;
		padding:10px;
	}
	.order-top>div{
		float: left;
	}
	.pic{
		width: 11%;
		height: 100%;
		margin-right: 8px;
	}
	.conn{
		width: 86%;
		height: 100%;
		font-size: 12px;
		color: #333;
	}
	.conn h4{
		font-size: 14px;
	}
	.conn h4 span{
		float: right;
		font-size: 12px;
	}
	.conn>span{
		color: #999;
	}
	.conn>p{
		line-height: 50px;
	}
	.conn>div{
		float: right;
	    border: 1px solid #2395ff;
	    padding: 3px 5px;
	    color: #2395ff;
	    border-radius:3px;
	}
	.order-list ul li>div{
		float: left;
	}
	.order-list ul li{
		margin: 10px 0;
		background: #fff;
		height: 80px;
		padding: 10px;
	}
	img{
		width: 30px;
		height: 30px;
	}
</style>