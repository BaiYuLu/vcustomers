import Vue from 'vue'
import Router from 'vue-router'
import Cunstomers from '@/components/customers.vue'
import About from '@/components/about.vue'
import Add from  '@/components/add.vue'
import Detail from '@/components/customersDetails.vue'
import Edit from '@/components/edit.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
	routes: [
    {path:"/",component:Cunstomers},
		{path:"/about",component:About},
		{path:"/add",component:Add},
		{path:"/customer/:id",component:Detail},
		{path:"/edit/:id",component:Edit},
  ]
})
