import React from 'react'

import {  Switch, Route,Redirect } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import LoginControl from './Schedule';


const Main = () => (
	<div > 
	<main>
		<div className = "container">
			<div className = "row"> 
				<div className = "col-md-12"> 
						<Switch>
							<Route exact path='/' component={Home}/>
							<Route path='/roster' component={Roster}/>
							<Route path='/login_control' component={LoginControl}/>
							<Redirect to="/" />
						 </Switch>		
				</div>
			</div>
		</div>
	</main>
	</div>
)

export default Main




