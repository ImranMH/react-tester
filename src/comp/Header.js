import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
		<header> 
			  <nav className="navbar navbar-default">
				 	<div className="container-fluid">
				 		
				 		<div className="collapse navbar-collapse navbar-ex1-collapse">
				 			<ul className="nav navbar-nav">
				 				<li> <NavLink to = '/' activeClassName="active">home </NavLink > </li>
				 				<li> <NavLink to ='/roster' activeClassName="active">Roster </NavLink > </li>
								<li> <NavLink to = '/login_control' activeClassName="active">LoginControl </NavLink > </li>
				 			</ul>
				 			

				 		</div>
				 	</div>
				 </nav>
		</header>
)

export default Header;