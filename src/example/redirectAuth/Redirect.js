import React from 'react'
import {Route,Link, Redirect, withRouter} from 'react-router-dom'
const RedirectAuth = () => (
  <div className="container">
    <h1>Welcome to Auth redirect Module!</h1>
    <div className ="row">
    	<AuthButton />
    	<ul className="navbar navbar-basic"> 
					<li> <Link to= 'public' > Public Page</Link></li>
					<li> <Link to= 'protected' > Protected Page</Link></li>
    	</ul> 
    </div>
    <div>
    	<Route path={'/public'} component={Public} /> 
    	<Route path="/login" component={Login} /> 
    	<PrivateRoute path="/protected" component={Protected}/>
    	 
    </div>
  </div>
)

const fakeAuth = {
	isAuthenticated : false,
	authenticate(cb){
		this.isAuthenticated = true;
		setTimeout(cb, 100)
	},
	signout(cb) {
		isAuthenticated : false,
		setTimeout(cb, 100)
	}
}


const AuthButton = withRouter(({history})=> (
	fakeAuth.isAuthenticated? (
		<p> 
			Welcome! <button onClick={()=>{
				fakeAuth.signout(()=> history.push('/'))
			}} > SignOut</button>
		</p>
	) : (
		<p> You are not loggedin</p>
	)
))

const PrivateRoute = ({component:Component, ...rest}) => (
	<Route {...rest} render={ props=> (
		fakeAuth.isAuthenticated? (
			<Component {...props} />
		): (
			<Redirect to= {{
				pathname: '/login',
				state : {from: props.location}
			}} />
		)
	)} />
)
const Public = ()=> (
	<div>
		Public
	</div>
)

const Protected = () => <h3>Protected</h3>

class Login extends React.Component{
	state = {
		redirectToRefferer: false
	}

	login= () => {
		console.log('login');
		fakeAuth.authenticate(()=> {
			this.setState({redirectToRefferer: true})
		})
	}

	render() {
		const {from} = this.props.location.state || {from:{pathname: '/'}}
		const {redirectToRefferer} = this.state;

		if(redirectToRefferer) {
			return (
				<Redirect to = {from} />
			)
		}
		return(
			<div>
				<p> You Must login to view the page {from.pathname}</p>
				<button onClick= {this.login}> Login</button>
			</div>
		)
	}
}
export default RedirectAuth