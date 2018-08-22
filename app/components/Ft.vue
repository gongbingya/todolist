<template>
	<div>
		当前已做{{yizuo}}个事件,未做{{$store.state.todos.length-yizuo}}个事件.
	</div>
</template>

<script>
	export default {
		computed:{
			yizuo(){
				return this.$store.state.todos.filter(item=>item.done).length
			}
		}
	}
</script>