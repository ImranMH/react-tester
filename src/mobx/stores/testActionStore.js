import {observable , action, computed, autorun} from 'mobx';
class User {
	@observable username
	@observable id
	@observable password

	constructor(username,password) {
		this.username = username
		this.id = Date.now()
		this.password = password
	}
}

class TestActionStore{
	@observable users = [];
	// @computed get UserList (){
	// 	let matchTodos = new RegExp(this.filter, "i")
	// 	return this.todos.filter(todo=> !this.filter|| matchTodos.test(todo.username))
	// }
	@computed get ActionUser() {
		return this.users.length
	}
	@action AddUser(username, password){
		this.users.push(new User(username,password))
	}

};

const testActionStore = new TestActionStore()
export default testActionStore;