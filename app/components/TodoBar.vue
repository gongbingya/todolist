<template>
	<div>
		<input type="checkbox" :checked="item.done" @click="chanegDone($event)">
		{{item.title}}
		<button @click="del(item.id)">删除</button>
	</div>
</template>

<script>
	export default{
		props : ["item"],
		methods : {
			del(id){
				this.$store.commit("DEL",{id})
			},
			chanegDone(e){
				this.$store.commit("CHANGEDOME",{id : this.item.id , done : e.target.checked})
			}
		}
	}
</script>