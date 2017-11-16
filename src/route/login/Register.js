
import React from 'react';
// import AlertMessage from './login/AlertMessage';
// import Login from './login/Login';
class Register extends React.Component{
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
				<div>
					<div className="col-md-10 col-offset-2">
            <h1><span className="fa fa-sign-in"></span> Register</h1>
            <div className="row" >
                <div className="col-md-8">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" />
                        
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
                        <input type="password" className="form-control" /> 
                        
                    </div>
                </div>        
                <div className="col-md-4">
                    <div className="alert alert-danger msgInfo"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="form-group">
                       <label>Confarm Password</label>
                       <input type="password" className="form-control" />
                        
                    </div>
                </div>        
                <div className="col-md-4">
                    <div className="alert alert-danger msgInfo"></div>
                </div>
            </div>
            <div className="row">
                 <div className="col-md-8">
                    <div className="form-group">
                        <label>Full Name (Optional)</label>
                        <input type="text" className="form-control" />
                    </div>
                    </div>        
                <div className="col-md-4">
                    <div className="alert alert-danger msgInfo"></div>
                </div>
            </div>
                <button  className="btn btn-warning btn-lg">Register</button>
                <hr />

                <p>Already Have an account? <a href="/#/login">Login</a></p>
                <p>Or go <a href="/">home</a></p>
          </div>
				</div>
			)
	}
}

export default Register