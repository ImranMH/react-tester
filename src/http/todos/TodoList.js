import React from 'react';
import Todos from './Todos'
const TodoList =(props) => {
	const todos = props.todos.map(todo=>{
		if(todo.id <= 20){
			return <Todos key ={todo.id} title={todo.title} completed={todo.id} />
		}
	})
	 return (
      <div>
      	<h2>Todos List</h2>
      	<ul>
						{todos}
      	</ul>
      </div>
    );
}
 export default TodoList

