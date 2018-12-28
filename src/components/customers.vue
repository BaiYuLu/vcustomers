<template>
  <div class="customers container">
		<alert v-if="msg" :message="msg"></alert>
    <h1 class="page-header">用户管理系统</h1>
		<input type="text" class="form-control" placeholder="搜索" v-model="search">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="customer in filter" :key="customer.id">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
					<td><router-link class="btn btn-default" :to="'/customer/'+customer.id" tag="button">详情</router-link></td>

        </tr>
      </tbody>

    </table>
  </div>
</template>



<script>
	import axios from 'axios'
	import alert from '@/components/alert'
	
	export default {
		data(){
			return {
				customers:[],
				msg:"",
				search:""
			};
		},
		methods:{
			linkCustomers(){
				axios.get('http://localhost:3000/users').then(result=>{
					//console.log(result);
					this.customers=result.data;
				})
			}
		},
		computed:{
			filter(){
					return this.customers.filter(customer=>{
						return customer.name.match(this.search);
					})
			}
		},
		created(){
			if(this.$route.query.alert){
				this.msg=this.$route.query.alert;
			}
			//console.log(this.msg);
			this.linkCustomers();
			
		},
		updated(){
			this.linkCustomers()
		},
		components:{
			alert
		}
	}
</script>

<style>

</style>
