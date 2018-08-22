<template>
	<div>
		<TodoBar
			v-for="(item,index) in $store.state.todos"
			:key = "index"
			:item = "item"
		>
		</TodoBar>
	</div>
</template>

<script>
	import TodoBar from "./TodoBar.vue";
	export default{
		components:{
			TodoBar
		}
	}
</script>