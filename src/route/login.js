import React from 'react';
import AlertMessage from './login/AlertMessage';
import Login from './login/Login';
class LoginPage extends React.Component{
	constructor(props) {
		super(props)

		this.submitPlayer = this.submitPlayer.bind(this)
		this.state= {
			players : []
		}
	}
	submitPlayer() {
		// let playerslist = this.state.players;
		// playerslist.push(newplayer)
		// this.setState({players:playerslist})
	}

	componentDidMount() {
		this.setState({
			
		})
	}
	render(){

		return (
			<div className="loginComponent">
				<AlertMessage />
				<Login />
			</div>			
		)
	}
}

export default LoginPage
