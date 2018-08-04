<template>
	<div id="mine">
		<header><span><</span>{{tit}}</header>
		<div class="login">
			<div>
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="" />
				<div>
					<p>登录/注册</p>
					<span>登录后享受更多特权</span>
					<b>></b>
				</div>
			</div>
		</div>
		<div class="my-list">
			<div>
				<span style="background: orange;">1</span>
				<p>钱包</p>
			</div>
			<div style="border: 1px solid #ddd;border-top: 0;border-bottom: 0;">
				<span style="background:red ;">2</span>
				<p>红包</p>
			</div>
			<div>
				<span style="background: green;">3</span>
				<p>金币</p>
			</div>
		</div>
		<div class="bottom-list">
			<ul>
				<li>我的地址</li>
				<li style="margin-top: 10px;">金币商城</li>
				<li style="margin-bottom: 10px;border-top: 0;">分享拿5元现金</li>
				<li>我的客服</li>
				<li style="border-top: 0;">下载饿了么APP</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Mine',
		data(){
			return{
				tit:'我的'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
	header{
		height: 44px;
		line-height: 44px;
		text-align: center;
		background-image: linear-gradient(90deg,#0af,#0085ff);
		color: #fff;
		margin-bottom: 1px;
	}
	header span{
		position: absolute;
		left:10px;
	}
	.login{
		height: 80px;
		color: #fff;
		padding: 20px 0;
		background-image: linear-gradient(90deg,#0af,#0085ff);
	}
	.login>div{
		margin: 0 15px;
	}
	.login img{
		float: left;
		width:50px;
		height: 50px;
		border-radius: 50%;
		margin:15px 10px 0 0;
	}
	.login>div>div{
		float: left;
		width: 78%;
		padding-top:15px ;
	}
	.login>div>div b{
		float: right;
		line-height: 10px;
	}
	.my-list{
		height: 70px;
		line-height: 25px;
		font-size: 12px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		background: #fff;
		margin-bottom: 10px;
		border-bottom: 1px solid #ddd;
	}
	.my-list>div{
		width: 33%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.my-list>div span{
		display: inline-block;
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		color: #fff;
		border-radius: 50%;
	}
	.bottom-list ul li{
		font-size: 12px;
		background: #fff;
		line-height: 40px;
		border: 1px solid #ddd;
		border-left: 0;
		border-right: 0;
	}
</style>