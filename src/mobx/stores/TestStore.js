import {observable , action, computed, autorun} from 'mobx';

class Todo {
	@observable value
	@observable id
	@observable complete

	constructor(value) {
		this.value = value
		this.id = Date.now()
		this.complete = false
	}
}

class TestStore{
	@observable todos = [];
	@observable filter = "";
	@computed get filteredTodos (){
		let matchTodos = new RegExp(this.filter, "i")
		return this.todos.filter(todo=> !this.filter|| matchTodos.test(todo.value))
	}
	@computed get unfinishedTodos() {
		return this.todos.filter(todo=> !todo.complete).length
	}
	@action addTodo(value){
		this.todos.push(new Todo(value))
	}
	clearComplete =()=> {
		let incompletedtodos = this.todos.filter(todo=> {
			return !todo.complete
		})
		this.todos.replace(incompletedtodos)
	}
};

const testStore = window.store = new TestStore();
export default testStore;

// autorun(()=> {
// 	console.log('store.filter =',testStore.filter);
// 	console.log(testStore.todos[0]);
// })