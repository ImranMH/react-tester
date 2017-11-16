import React from 'react'
import request from 'request'
import {observer, inject} from 'mobx-react';
import axios from 'axios'
import InputForm from './Input';
import NestedInput from './NestedInput';
@inject('store')
@observer
class Forms extends React.Component{
	constructor(props) {
		super(props)
		this.state= {
			todos : []
		}
	}
	submitLogin(e) {
		console.log('subbmitted');
		const personStore = this.props.store.PersonStore;
		var newUser = personStore.aperson;
		personStore.addTodo(newUser)
		//personStore.persons.push(newUser)
		console.log(personStore);
		e.preventDefault()
	}

	handleChange(e){
		this.updateProperty(e.target.name, e.target.value)
	}
	updateProperty(key, value){
		this.props.store.PersonStore.aperson[key] = value
	}


	getTodos(){
		axios.get("https://jsonplaceholder.typicode.com/posts")
		  .then(function (response) {
		    console.log(response);
		    this.setState({todos: response.data});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	componentWillMount(){
		this.getTodos()
		console.log(this.state.todos);
	}
	componentDidMount(){
		this.getTodos()
		console.log(this.state.todos);
	}
	render() {
		const {aperson, persons} = this.props.store.PersonStore
		console.log(aperson.address);
		const userList = persons.map((person)=> {
			return <li key ={person.name}>
				<h2>{person.name} </h2>
				<div>{person.email} </div>
				<div>{person.address.city} </div>
				<div>{person.address.country} </div>
				<div>{person.address.zip} </div>
			</li>
		})

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6"> 
						<div className="userligin">
							<h2> Login Form</h2>
							<form onSubmit={this.submitLogin.bind(this)}> 
								<InputForm label="name" name= {'name'} 
								onChange={this.updateProperty.bind(this)} id={'name'} value={aperson.name} />
								<InputForm label="email" type="email" name= {'email'} 
								onChange={this.updateProperty.bind(this)} id={'email'} value={aperson.email} />
								<InputForm label="password" type="password" name= {"password"} 
								onChange={this.updateProperty.bind(this)} id={'password'} value={aperson.password} />
								<NestedInput address={aperson.address} />
								<button type = "submit" className="btn btn-primary"> Login </button>
							</form> 
								
						</div>
					</div>
					<div className ="col-md-6"> 
						<ul> 
							{userList}
						</ul>
					</div>
				 </div>
				 <div className ="row"> 
				 		<div className ="col-md-12"> 
					 		<ul> 
					 	
					 		</ul>
					 </div>
				 </div>
			 </div>
		)
	}
}

// const Posts =(props) => {
// 	 const items = this.props.todos.map(item=> {
//   		return <li>
// 	  		<h2> {props.todo.title} </h2>
// 				<p> {props.todo.body}</p>
//   		 </li>
//   	})
// }
export default Forms
