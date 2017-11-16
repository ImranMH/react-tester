import React from 'react'
import {observer, inject} from 'mobx-react';
@inject('store')
@observer
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
			<div className="form-group"> 
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

export default InputForm