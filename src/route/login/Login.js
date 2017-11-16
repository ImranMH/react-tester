import { Route, NavLink  } from 'react-router-dom';
import React from 'react';
// import AlertMessage from './login/AlertMessage';
// import Login from './login/Login';
class Login extends React.Component{
	constructor(props) {
		super(props)

		this.loginUser = this.loginUser.bind(this)
		this.inputUserPass = this.inputUserPass.bind(this)
		this.state= {
				username: '',
				password: ''
		}
	}
	inputUserPass(e) {
		 let value = e.target.value;
		 let name = e.target.name;
		// playerslist.push(newplayer)
		this.setState({
			 [name]: value
		 })
	}
	loginUser(e) {
		console.log('submited');
		
		console.log(this.state);
		e.preventDefault()
	}

	componentDidMount() {
		this.setState({
			
		})
	}
	render(){

			return (
				<div className="Login">
					<div className="row">
		          <div className="col-md-10 col-offset-2">
		            <h1><span className="fa fa-sign-in"></span> Login</h1>
		            <form onSubmit={this.loginUser} > 
		            	<div className="row" >
		                <div className="col-md-8">
		                    <div className="form-group">
		                        <label>Username</label>
		                        <input type="text" value={this.state.username} onChange={this.inputUserPass} name="username" className="form-control" />
		                        
		                    </div>
		                </div>        
		                <div className="col-md-4">
		                    <div className="alert alert-danger msgInfo"></div>
		                </div>          
			            </div>
			            <div className="row">
			                <div className="col-md-8">
			                    <div className="form-group">
			                        <label>Password</label>
			                        <input type="password"  value={this.state.password} onChange={this.inputUserPass} name="password" className="form-control" /> 			                        
			                    </div>
			                </div>        
			                <div className="col-md-4">
			                    <div className="alert alert-danger msgInfo"></div>
			                </div>
			            </div>
			            <div className="row">
			                <div className="col-md-8">
			                    <div className="form-group">
														<button  className="btn btn-primary btn-lg">Register</button>                        
			                    </div>
			                </div>        
			            </div>
		            </form>
		        </div>
					</div>
					<div > 
						<NavLink  to = '/register'>Register </NavLink >
					</div>
				</div>
			)
	}
}

export default Login