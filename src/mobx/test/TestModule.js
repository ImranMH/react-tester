import React from 'react';
import {observer, inject} from 'mobx-react';
@inject('store')
@observer

class TestMobx extends React.Component{
	filterChange(e) {
		this.props.store.testStore.filter = e.target.value
	}
	toggleChange(todo) {
		if(!todo.complete){
			todo.complete = !todo.complete
		}else {
			todo.complete = todo.complete
		}
		
	}
	addTodo(e) {
		if(e.which=== 13) {
			this.props.store.testStore.addTodo(e.target.value)
			e.target.value = ""
		}
	}
	render() {
	const {todos,filteredTodos,clearComplete, unfinishedTodos, filter} = this.props.store.testStore
	var todoList =filteredTodos.map(test=> (
		<li key={test.id}><input type='checkbox' checked={test.complete} value={test.complete} onChange={this.toggleChange.bind(this, test)} /> {test.value} </li>
	));


		return (
			<div className={'container'}>
				<div className="row">  
					<h2> Filter Items Using mobx </h2>
					{filter} <br />
					<input value={filter} onChange= {this.filterChange.bind(this)} />
					<p>Number of unfinished todos {unfinishedTodos} </p>

					<h2> Add todos </h2>
					<input className={'form-control'} onKeyPress= {this.addTodo.bind(this)} />
					<h2>List of  todos </h2>
					<ul>
						{todoList}
					</ul>
					<a href="#" onClick={clearComplete}>Clear Completed </a>
				</div>
			</div>
		)
	}
}
export default TestMobx