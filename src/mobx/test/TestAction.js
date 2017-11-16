import React from 'react'
import {observer, inject} from 'mobx-react';
@inject('store')
@observer
class TestAction extends React.Component{
	constructor(props) {
		super(props)
	}
	submitLogin(e) {
		console.log('subbmitted');
		console.log(this.props.store);
		this.props.onChange(e.target.name, e.target.value)
	}
	handleChange(e){
		this.updateProperty(e.target.name, e.target.value)
	}
	updateProperty(key, value){
		this.props.users[key] = value
	}
	render() {
		const {users} = this.props.store.testAtionStore
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12"> 
						{/*<div className="userligin">
							<h2> Login Form</h2>
							<form onSubmit={this.submitLogin.bind(this)}> 
								<InputForm label="email" name= "imran" fullName={'imran hossain'}
								onChange={this.handleChange.bind(this)} id={'email'} />
								<button type = "submit" className="btn btn-primary"> Login </button>
							</form> 
							
						</div>*/}
					</div>
				 </div>
			 </div>
		)
	}
}

class InputForm extends React.Component{
	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this)
	}
	onChange(e){
		this.props.onChange(e.target.name, e.target.value)
	}

	render() {
		return (
			<div> 
					<label htmlFor={this.props.id}> {this.props.label || this.props.name} </label>
					<input type={this.props.type} id={this.props.id} name={this.props.name} className="form-control"
					 value ={this.props.fullName} onChange={this.onChange} />
			</div>
		)
	}
}
InputForm.defaultProps = {
  type: 'text'
}

export default TestAction




