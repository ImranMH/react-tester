import React from 'react';
import { Link  } from 'react-router-dom';

const AppNav = (props) => {
	console.log(props.linkUrl);
	return (
		<div> 
			<nav className="navbar navbar-default navbar-static-top" >
				<div className="container">
					<ul className="nav navbar-nav">
						<li className="active">
							<Link to = {props.linkUrl.url } >TempApp</Link >
						</li>
						<li>
							<Link to = {`${props.linkUrl.url}/app2/22` } >app2</Link >
						</li>
						<li>
							<Link to = {`${props.linkUrl.url}/app3/444` } >app3</Link >
						</li>
						<li>
							<Link to = {`${props.linkUrl.url}/app4` } >app4</Link >
						</li>
					</ul>
				</div>
			</nav>
		</div>
	) 
}

export default AppNav