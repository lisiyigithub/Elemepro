<template>
	<div id="home">
		<header>
			<select>
				<option>海为科技</option>
			</select>
			<input type="text" placeholder="搜索饿了么商家、商品名称"/>
		</header>
		<div class="nav">
			<div>
				<img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>美食</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>晚餐</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>商超便利</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>果蔬生鲜</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/e/8a/1a58f9145075322665b12552da1aejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>新店特惠</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>医药健康</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>大牌5折</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>浪漫鲜花</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>麻辣烫</span>
			</div>
			<div>
				<img src="//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt=""/>
				<span>地方菜系</span>
			</div>
		</div>
		<div class="products">
			<div>
				<h4>品质套餐</h4>
				<p>搭配齐全吃得好</p>
				<a href="">立即抢购></a>
			</div>
			<div>
				<h4 style="color: red;">限量抢购</h4>
				<p>超值美味9.9元起</p>
				<a href="" style="color: #000;"><span style="color: red;">2066人</span>正在抢购></a>
			</div>
		</div>
		<div style="line-height:40px;font-size: 14px;text-align: center;">-推荐商家-</div>
		<div class="tuijian">		
			<div>
				<span>综合排序</span>
				<span>距离最近</span>
				<span>品质联盟</span>
				<span>筛选</span>
			</div>			
		</div>
		<div class="list">
			<div class="one">
				<img src="//fuss10.elemecdn.com/4/5f/802ca9c151cd27019273ca7c72fd7jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"/>
			</div>
			<div class="two">
				<h4>米多面多（京广路店）</h4>
				<p><span>4.8月售3575单</span></p>
				<p><span>￥20起送 <i></i> 配送费￥3</span><b>409m|20分钟</b></p>
				<p><span>简餐</span><i>口碑人气好店</i></p>
				<p>新用户下单立减17元<b>4个活动</b></p>
				<p class="list-last-p">满25减14，满45减21，满75减35，满95减55<span>4个活动</span></p>
			</div>		
		</div>
	</div>
</template>

<script>
	export default{
		name:'Home',
		data(){
			return{
				tit:'首页'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
	header{
		width: 90%;
		height: 75px;
		padding: 0 5%;
		text-align: left;
		line-height:24px;	
		background: #267AEB;
		position: fixed;
		top: 0;
	}
	header select{
		font-weight: 900;
		height: 40px;
		color: #fff;
		text-align: left;
		line-height: 40px;
		background: none;
		border: none;
		outline: none;
		margin: 0;
	}
	header input{
		width: 100%;
		border: none;
		outline: none;
		text-align: center;
		line-height: 30px;
		margin: 0;
	}
	header div{
	 width: 94%;
	 margin:0 auto; 
	}
	#home{
		background: #fff;
	}
	.nav{
		margin-top:75px;
		height: 135px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		
	}
	.nav>div{
		width: 20%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.nav>div>img{
		width: 35px;
		height: 35px;
	}
	.nav>div>span{
		font-size: 12px;
	}
	.products{
		height: 120px;
		padding: 0 5px;
		font-size: 12px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
	.products>div{
		width: 49%;
		height: 100%;
		text-indent: 10px;
		display: flex;	
		flex-direction: column;
		background:#eee url(//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/) no-repeat right bottom/70% 50% ;
	}
	.products>div h4{
		line-height: 24px;
		margin-top: 8px;
		font-size: 14px;
	}
	.products>div p{
		line-height: 20px;
		color: #555D62;
	}
	.products>div a{
		text-decoration: none;
		color:rosybrown;
	}
	.tuijian{
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
	.tuijian>div{
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 12px;
		color: #555D62;
		line-height: 30px;
		border-bottom: 1px solid #ddd;
	}
	.list{
		height: 120px;
		padding:10px 8px;
	}
	.list img{
		width: 100%;
		height: 45%;		
	}
	.list div:nth-child(1){
		float: left;
		width: 20%;
		height: 100%;
		margin-right: 10px;
	}
	.list p{
		line-height: 20px;
		font-size: 12px;
		color: #333333;
	}
	.list p b{
		float: right;
		color: #888888;
	}
	.list p i{
		font-style: normal;
		color: red;
		margin-left: 5px;
	}
	.list p span i{
		display: inline-block;
		background: #ddd;
		width: 1px;
		height: 10px;
	}
	.list-last-p{
		overflow: hidden;
	    text-overflow:ellipsis;
	    white-space: nowrap;
	}
</style>