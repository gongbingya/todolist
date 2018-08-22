import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./stores/index.js";

Vue.use(Vuex);

new Vue({
	el:"#app",
	render(h){
		return h(App)
	},
	store : new Vuex.Store(store)
})