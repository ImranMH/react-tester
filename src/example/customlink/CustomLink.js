import React from 'react'
import {Route,Link, Redirect, withRouter} from 'react-router-dom'
const CustomLink = () => (
  <div className="container">
    <h1>Welcome to Auth redirect Module!</h1>
    <div className ="row">
        <OldSchoolMenuLink activeOnlyWennExact={true} to= {'/'} label= "Home" />
        <OldSchoolMenuLink  to= {'/about'} label= "About" />
        <hr />
    	<ul className="navbar navbar-basic"> 
			<li> <Link to= '/' > Home Page</Link></li>
			<li> <Link to= '/about' > About Page</Link></li>
    	</ul> 
    </div>
    <div>
    	<Route exact path={'/'} component={Home} /> 
    	<Route path="/about" component={About} /> 
    	
    	 
    </div>
  </div>
)
export default CustomLink
const Home = () => (<div> Home </div>)
const About = () => (<div> About </div>)

const OldSchoolMenuLink =({label, to, activeOnlyWennExact})=> (
    <Route path= {to} exact={activeOnlyWennExact} children= {({match})=> (
        <div className={ match? 'active': ''}> 
            {match? '>': ''} <Link to = {to}> {label} </Link>
        </div>
    )} />
)