<template>
	<div>
		<input type="text" ref="kuang">
		<button @click = "addTodo">增加</button>
	</div>
</template>

<script>
	export default{
		methods :{
			addTodo(){
				var v = this.$refs.kuang.value;
				this.$store.commit('ADDTODO',{v})
			}
		}
	}
</script>