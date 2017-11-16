 import React from 'react'

const Schedule = () => (
  <div>
    <ul>
    	nt
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)
const Login =(props)=> (
	<h3> Well come user here </h3>
)
const Logout =(props)=> (
	<h3> please login first </h3>
)

const LoginGreeting =(props)=> {

	if(props.isLoggedIn) {
	 return 	<Login />
	} else {
		return <Logout />
	}
}

const LoginButton =(props)=> (
	<button onClick={props.onClick} >login </button>
)
const LoginOutButton =(props)=> (
	<button onClick={props.onClick} >logOut </button>
)
const Worning =(props)=> {
	if( !props.warn) {
		return null;
	}
	return (
		
		<div> 
			<h3> warning content </h3>
			
		</div>
	)
}

class LoginControl extends React.Component{
	constructor(props) {
		super(props)
		this.state ={
			isLoggedIn : false,
			showWarning: true,
		}
		this.handleLoggedIn = this.handleLoggedIn.bind(this)
		this.handleLoggedOut = this.handleLoggedOut.bind(this)
		this.toggleWarning = this.toggleWarning.bind(this)
	}
	
	handleLoggedIn() {
		console.log('logged  in');
		this.setState({isLoggedIn: true})
	}
	toggleWarning() {
		this.setState(prevState=> ({
			showWarning : !prevState.showWarning
		}))
	}
	handleLoggedOut() {
		console.log('logged  out');
		this.setState({isLoggedIn: false})
	}
	render() {
		var loggedin = this.state.isLoggedIn;
		var element = null;
		if (loggedin) {
			element = <LoginButton onClick={this.handleLoggedOut} />
		} else {
			element = <LoginOutButton onClick={this.handleLoggedIn} />
		}
		
		return (
			<div > 
				<h2> LoginControl element </h2>
				<Worning  warn ={this.state.showWarning} />
				<button onClick={this.toggleWarning}>{this.state.showWarning?'Hide Warn': 'Show warn'}</button>
				<LoginGreeting isLoggedIn ={this.state.isLoggedIn}/>
				{element}
				<Schedule />
			</div>
		)
	}
}
export default LoginControl ;