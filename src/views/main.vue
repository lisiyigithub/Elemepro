<template>
	<div id="main">
		<section>
			<router-view @toparent="getdata"></router-view>
		</section>
		<footer>
			<router-link to="/home" tag="span">首页</router-link>
			<router-link to="/find" tag="span">发现</router-link>
			<router-link to="/order" tag="span">订单</router-link>
			<router-link to="/mine" tag="span">我的</router-link>	
		</footer>
	</div>
</template>

<script>
	export default{
		name:'Main',
		data(){
			return{
				tit:'首页'
			}
		},
		methods:{
			getdata(msg){
				this.tit = msg
			}
		}
	}
</script>

<style>
	#main{
	    height: 100vh;
	    display: flex;
	    flex-direction: column;
	}
	section{
	    flex: 1;
	    overflow: auto;
	    margin-bottom:44px;
	}
	footer{
	    height: 44px;
	    line-height: 44px;
	    width: 100%;
	    text-align: center;   
	    font-size: 16px;
	}
	footer{
	    position: fixed;   
	    background: #Fff;
	    bottom:0;
	    font-size: 14px;
	    border-top: 1px solid #ddd;
	}
	footer span{
	    float:left;
	    width: 25%;
	    color: #555d62;
	}
	footer .router-link-active{
	    color: #267aeb;
	}
</style>