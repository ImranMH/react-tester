import React from 'react'
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Todos extends React.Component {
	handleBird =(e) => {
		e.preventDefault()
		let newTodo = this.todo.value
		this.props.store.addTodo(newTodo)
	}
	render() {
		const {store} = this.props

		return (
		  <div className ="todos container">
		    
		    <div className ="row">
		    	<h2>{store.report}</h2>
		    	<h2> todos list  </h2>
		    	<ul> 
		    		{store.todos.map((todo, inx)=> (
		    			<Todo key ={inx} todo={todo} />
		    		))}
		    	</ul>
		    	<small> you Have number of Todos </small>
		    	{store.pendingrequests > 0 ? <marquee>Loading </marquee>: null}
		     </div>
		    <div className ="row">
					<form onSubmit= { (e)=> this.handleBird(e) } > 
						<label> todos name </label>
						<input type="text" className ="form-control" ref={(input)=> this.todo = input } />
						<br />
						<input type="submit" className ="btn btn-primary" value="Add Todos" />
					</form>
		    </div>
		  </div>
		)
	}
}

@observer
class Todo extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.onToggleCompleted }
        />
        { todo.task }
        { todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        }
       {/* <RenderCounter />*/}
      </li>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
   }
}
  

export default Todos