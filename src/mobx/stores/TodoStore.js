import {observable , action, computed, autorun} from 'mobx';
import {observer} from 'mobx-react';

class ObservarableTodoStore {
	@observable todos = [{task:'job1',completed: false, assignee:null}];
	@observable PendingRequest = 0;

	constructor() {
		autorun( () => console.log(this.report))
	}
	@computed get completedTodosCount() {
		return this.todos.filter(todo=> todo.completed === true).length;
	}
	@computed get report() {
		if(this.todos.length === 0)
			return '<none>'
		return `Next todo: ${this.todos[0].task} .` + `progress: 
		${this.completedTodosCount}/ ${this.todos.length}`;
	}
	addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			assignee : null
		})
	}
}
const store = new ObservarableTodoStore();

export default store;