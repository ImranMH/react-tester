import React from 'react';

class ContactPage extends React.Component{
	constructor(props) {
		super(props)
		this.handleTempareture = this.handleTempareture.bind(this)
	}
	handleTempareture(e) {
		this.props.onTemperatureChange(e.target.value)
	}

	componentDidMount() {
		fetch('/apis/user').then((res)=> {
			console.log(res);
		})
	}
	render(){

		return (
			<div>
				<h2> json file in console</h2>
			</div>
			
		)
	}
}

export default ContactPage