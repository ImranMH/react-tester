import React from 'react'
import {observer, inject} from 'mobx-react';
import InputForm from './Input';
@inject('store')
@observer
class InputAddress extends React.Component{
	constructor(props){
		super(props)
	}
	onChange(key, value){
		this.props.store.PersonStore.aperson.address[key] = value
	}

	render() {
		const address = this.props.address
		return (
			<div> 
				<InputForm label="city" name= {'city'} 
				onChange={this.onChange.bind(this)} id={'city'} value={address.city} />
				<InputForm label="country" name= {'country'} 
				onChange={this.onChange.bind(this)} id={'country'} value={address.country} />
				<InputForm label="zip" name= {'zip'} 
				onChange={this.onChange.bind(this)} id={'zip'} value={address.zip} />
			</div>
		)
	}
}
InputAddress.defaultProps = {
  type: 'text'
}

export default InputAddress