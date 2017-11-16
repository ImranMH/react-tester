import { Route, NavLink  } from 'react-router-dom';
import React from 'react';

import HomePage from './home';
import AppPage from './app';
import ProfilePage from './profile';
import LoginPage from './login';
import ContactPage from './contact';
import Register from './login/Register';
const BaseLayout = () => (
	<div className = "base">
		<header> 
			  <nav className="navbar navbar-default" >
				 	<div className="container-fluid">
				 		
				 		<div className="collapse navbar-collapse navbar-ex1-collapse">
				 			<ul className="nav navbar-nav">
				 				<li> <NavLink  to = '/'>home </NavLink > </li>
				 				<li> <NavLink  to = '/app'>app </NavLink > </li>
								<li> <NavLink  to = '/profile'>Profile </NavLink > </li>
								<li> <NavLink  to = '/login'>login </NavLink > </li>
								<li> <NavLink  to = '/contact'>contact </NavLink > </li>
				 			</ul>
				 			

				 		</div>
				 	</div>
				 </nav>
		</header>
		<div className = "container"> 
			<Route path = '/' exact component = {HomePage} />
			<Route path = '/app'  component = {AppPage} />
			<Route path = '/profile'  component = {ProfilePage} />
			<Route path = '/login'  component = {LoginPage} />
			<Route path = '/register'  component = {Register} />
			<Route path = '/contact'  component = {ContactPage} />
		</div>
		 <footer>
		 	<div className = "container"> 
        React Router v4 Browser Example (c) 2017
      </div>
    </footer>
	</div>
)
 export default BaseLayout


