<template>
	<div>
		<h1>{{$store.state.data.a}}</h1>
		<button @click = "add">按我加一</button>
		<hr/>
		<Hd></Hd>
		<Bd></Bd>
		<Fd></Fd>
	</div>
</template>

<script>
	import Bd from "./components/Bd.vue";
	import Hd from "./components/Hd.vue";
	import Fd from "./components/Ft.vue";
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			add(){
				this.$store.commit("ADD");
			}
		},
		components:{
			Hd,
			Bd,
			Fd
		}
	}
</script>