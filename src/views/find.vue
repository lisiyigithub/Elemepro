<template>
	<div id="find">
		<header>
			<router-link to="/" tag="span"><</router-link>
			{{tit}}
		</header>
		<div class="content">
			<div>
				<div style="background: url(https://fuss10.elemecdn.com/3/cc/a45d2b9d7d09bbc49b40d4e626093jpeg.jpeg?imageMogr/format/webp/) no-repeat right bottom/65px 65px;">
					<p>百元红包</p>
					<span>兴业银行名卡</span>					
				</div>
				<div style="background: url(https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/) no-repeat right center/40px 40px;">
					<p>推荐有奖</p>
					<span>5元现金拿不停</span>
				</div>
			</div>
			<div>
				<div style="border-top: 1px solid #ddd;background: url(https://fuss10.elemecdn.com/d/eb/c8ad79611ef80216a0b84700d3e0ajpeg.jpeg?imageMogr/format/webp/) no-repeat right center/40px 40px;">
					<p>超级会员</p>
					<span>每月领大额红包</span>
				</div>
				<div style="background: url(https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/) no-repeat right center/40px 40px;"> 
					<p>金币商城</p>
					<span>0元好物在这里</span>
				</div>
				<div style="background: url(https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/) no-repeat right center/40px 40px;">
					<p>周边优惠</p>
					<span>领取口碑好券</span>
				</div>
			</div>
		</div>
		<div class="liwu">
			<div>
				<h4>-限时好礼-</h4>
				<p>金币换豪礼</p>
			</div>
		</div>
		<div class="last">
			<div>
				<b>限时优惠</b>
				<img src="https://fuss10.elemecdn.com/c/66/89cc6ef54261bbd98b94deeff2546jpeg.jpeg?imageMogr/format/webp/" alt="" />
				<p>3元饿了么红包</p>
				<span>90金币<i>￥3</i></span>
			</div>
			<div>
				<b>特价换购</b>				
				<img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/" alt="" />
				<p>扫地机器人</p>
				<span>9金币<i>￥99</i></span>				
			</div>
			<div>
				<b>特价换购</b>				
				<img src="https://fuss10.elemecdn.com/5/1d/b8e34dee6e362e482499fe0552fbbjpeg.jpeg?imageMogr/format/webp/" alt="" />
				<p>机械手感键盘</p>
				<span>9金币<i>￥29</i></span>
			</div>
		</div>
		<div class="bottom">
			<p>查看更多></p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Find',
		data(){
			return{
				tit:'发现'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
	#find{
		background: #ddd;
	}
	header{
		line-height: 44px;
		padding: 0 8px;
		color: #fff;
		text-align: center;
		background: #267AEB;
	}
	header span{
		position: absolute;
		left:8px;
	}
	.content>div{
		width: 49.8%;
		float: left;
		border-right:1px solid #ddd;
		background: #fff;
	}
	.content>div:nth-child(1) div:nth-child(1){
		height:117px;
		padding: 20px 0 5px 15px;
	}
	.content>div:nth-child(1) div:nth-child(2){
		padding: 15px 0 0 15px;
		height:55px;
		border-top: 1px solid #ddd;
	}
	.content>div:nth-child(2){
		border-right: 0;
	}
	.content>div:nth-child(2) div{
		padding: 15px 0 0 15px;
		height:55px;
		border-top: 1px solid #ddd;
	}
	.content>div p{
		font-size: 14px;
	}
	.content>div span{
		font-size: 12px;
	}
	.liwu{
		float: left;
		width: 100%;
		margin-top:10px;
		background: #fff;
		text-align: center;
	}
	.liwu p{
		font-size: 12px;
	}
	.liwu>div{
		padding: 10px 0;
	}
	.last{
		float: left;
		width:100%;
		background: #fff;
		height: 160px;		
	}
	.last>div{
		float: left;
		width:30%;
		font-size: 12px;
		margin-left:10px ;
		position: relative;
	}
	.last>div b{
		background: #000;
		color:#fff;
		position: absolute;
		top: 0;
		left: 0;
	}
	.last>div img{
		width: 100%;
	}
	.last>div span{
		color: red;
	}	
	.last>div span i{
		font-style: normal;
		color: #888888;
	}
	.bottom{
		float: left;
		width:100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		color: #333;
		background: #fff;
		font-size: 12px;
	}
	
</style>