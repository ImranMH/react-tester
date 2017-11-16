import { Switch, Route } from 'react-router-dom';
import React from 'react'
import Player from './Player';
import FullRoster from './Fullroster';
const Roster = ()=> (

		<Switch>
			
			<Route exact path = '/roster' component ={FullRoster} />
			<Route  path = '/roster/:id' component ={Player} />
			
		</Switch>


)
export default Roster