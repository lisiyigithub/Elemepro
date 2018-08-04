import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main.vue'
import Home from '../views/home.vue'
import Find from '../views/find.vue'
import Order from '../views/order.vue'
import Mine from '../views/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/home'
  	},
    {
      path:'/main',
      component:Main,
      children:[
      	{
      		path:'/home',
      		component:Home
      	},
      	{
      		path:'/find',
      		component:Find
      	},
      	{
      		path:'/order',
      		component:Order
      	},
      	{
      		path:'/mine',
      		component:Mine
      	}
      ]
    }
  ]
})
