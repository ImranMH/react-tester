import React from 'react';
import { Route  } from 'react-router-dom';
import AppNav from './app/AppNav'
import NewApp from './app/NewApp'
import ParamApp from './app/ParamApp'
import TempCalculator from './app/TempCalculator'


const AppPage = ({ match }) => (
	<div>
		<AppNav linkUrl= {match} />
		<h2> App Develpment example</h2>

			
			<Route exact path={match.url} component = {TempCalculator} />
			<Route  path={match.url+'/app2/22' } component = {NewApp} />
			<Route  path={match.url+'/:app4' } component = {ParamApp} />

	 </div>
)

export default AppPage