<template>
	<div class="details container">
	  	<router-link to="/" class="btn btn-default">返回</router-link>
	    <h1 class="page-header">
	    	{{customer.name}}
	
	    	<span class="pull-right">
	    		<router-link class="btn btn-primary" :to="'/edit/'+customer.id">
	    			编辑
	    		</router-link>
	    		<button class="btn btn-danger" @click="deleteCustomer(customer.id)">删除</button>
	    	</span>
	    </h1>
	    <ul class="list-group">
	    	<li class="list-group-item">
	    		<span class="glyphicon"> 
	    			电话:{{customer.phone}}
	    		</span>
	    	</li>
	    	<li class="list-group-item">
	    		<span class="glyphicon"> 
	    			邮箱:{{customer.email}}
	    		</span>
	    	</li>
	    </ul>
	
	    <ul class="list-group">
	    	<li class="list-group-item">
	    		<span class="glyphicon ">
	    		学历:{{customer.education}}
	    		</span>
	    	</li>
	    	<li class="list-group-item">
	    		<span class="glyphicon"> 
	    			毕业学校:{{customer.graduationschool}}
	    		</span>
	    	</li>
	
			<li class="list-group-item">
				<span class="glyphicon"> 
					职业:{{customer.profession}}
				</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon"> 
					个人简介:{{customer.profile}}
				</span>
			</li>
	    </ul>
	  </div>
	</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				customer:""
			};
		},
		methods:{
			linkCustomers(id){
				axios.get('http://localhost:3000/users/'+id).then(result=>{
					//console.log(result);
					this.customer=result.data;
				})
			},
			deleteCustomer(id){
				axios.delete('http://localhost:3000/users/'+id).then(result=>{
					this.$router.push({path:"/",query:{alert:"信息删除成功！"}})
				})
			}
		},
		created(){
			this.linkCustomers(this.$route.params.id);
		},
		
	}
</script>

<style>

</style>
