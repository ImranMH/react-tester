import React from 'react'
import {observer, inject} from 'mobx-react';

@inject('BirdStore')
@observer
class BirdCase extends React.Component {
	handleBird =(e) => {
		e.preventDefault()
		let newBird = this.bird.value
		this.props.BirdStore.addBird(newBird)
		this.bird.value = ''
		console.log(this.props.BirdStore.birds);
	}
	render() {
		const {BirdStore} = this.props
		console.log(BirdStore.birds.length);
		var bv= BirdStore.birds.length
		const birdLink =BirdStore.birds.map((i)=> (
			<li key="i"> {i} </li>
		))


		return (
		  <div className ="birdStoreComponent container">
		    
		    <div className ="row">
		    	<h2>Welcome to the Birdcase!</h2>
		    	<h2> bird list  </h2>
		    	<ul> 
		    		{birdLink}
		    	</ul>
		    	<small> you Have {BirdStore.birdCount} number of bird </small>
		     </div>
		    <div className ="row">
					<form onSubmit= { (e)=> this.handleBird(e) } > 
						<label> Bird Name </label>
						<input type="text" className ="form-control" ref={(input)=> this.bird = input } />
						<br />
						<input type="submit" className ="btn btn-primary" value="Add Bird" />
					</form>
		    </div>
		  </div>
		)
	}
}


export default BirdCase


//{/* 
// // ---- ES5 syntax ----
 
// const TodoView = observer(React.createClass({
//     displayName: "TodoView",
//     render() {
//         return <div>{this.props.todo.title}</div>
//     }
// }));
 
// // ---- ES6 syntax ----
 
// const TodoView  = observer(class TodoView extends React.Component {
//     render() {
//         return <div>{this.props.todo.title}</div>
//     }
// })
 
// // ---- ESNext syntax with decorators ----
 
// @observer class TodoView extends React.Component {
//     render() {
//         return <div>{this.props.todo.title}</div>
//     }
// }
 
// // ---- or just use a stateless component function: ----
 
// const TodoView = observer(({todo}) => <div>{todo.title}</div>)*/}