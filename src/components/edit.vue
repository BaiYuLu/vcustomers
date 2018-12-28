<template>
	 <div class="edit container">
	<alert v-if="msg" :message="msg"></alert>
	    <h1 class="page-header">添加用户</h1>
	    <form v-on:submit="updataCustomer">
	    	<div class="well">
	    		<h4>用户信息</h4>
	    		<div class="form-group">
	    			<label>姓名</label>
	    			<input type="text" class="form-control" placeholder="name" v-model="customer.name">
	    		</div>
	    		<div class="form-group">
	    			<label>电话</label>
	    			<input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
	    		</div>
	    		<div class="form-group">
	    			<label>邮箱</label>
	    			<input type="text" class="form-control" placeholder="email" v-model="customer.email">
	    		</div>
	    		<div class="form-group">
	    			<label>学历</label>
	    			<input type="text" class="form-control" placeholder="education" v-model="customer.education">
	    		</div>
	    		<div class="form-group">
	    			<label>毕业学校</label>
	    			<input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
	    		</div>
	    		<div class="form-group">
	    			<label>职业</label>
	    			<input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
	    		</div>
	    		<div class="form-group">
	    			<label>个人简介</label>
	    			<!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
	    			<textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
	    		</div>
	    		<button type="submit" class="btn btn-primary">修改</button>
	    	</div>
	    </form>
	  </div>
	</template>

<script>
	import axios from 'axios'
	import alert from '@/components/alert'

	
	export default {
		data() {
			return {
				customer:{
					
				},
				msg:""
			};
		},
		methods:{
			updataCustomer(e){
				if(!this.customer.name||!this.customer.phone||!this.customer.email){
					this.msg="请添加对应信息。";
				}else{
				
					axios.put('http://localhost:3000/users/'+this.$route.params.id,this.customer).then(result=>{
						//console.log(result);
						this.$router.push({path:"/",query:{alert:"用户信息修改成功！"}})
					})
					
				}
				e.preventDefault();
			},
			fetchData(){
				//console.log(this.id)
				axios.get('http://localhost:3000/users/'+this.$route.params.id).then(responce=>{
				this.customer=responce.data;
				})
			}
		},
		created() {
			this.fetchData()
		},
		components:{
			alert
		}
	}
</script>

<style>

</style>
