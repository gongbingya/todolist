export default{
	state : {
		data:{
			a  : 520
		},
		todos:[
			{"id":1231,"title":"吃饭","done":true},
			{"id":1221,"title":"睡觉","done":false},
			{"id":1232,"title":"哈哈","done":true}
		]
	},
	mutations:{
		ADD(state){
			state.data.a += 1
		},
		ADDTODO(state,{v}){
			state.todos.push({"id":Math.random()*1000,"title":v,"'done" :false})
		},
		DEL(state,{id}){
			state.todos = state.todos.filter(item=>item.id != id)
		},
		CHANGEDOME(state,{id,done}){
			state.todos = state.todos.map(item => item.id == id ? {...item,done} : item)
		}
	},
	actions:{

	}
}