import React from 'react';
import { Route, NavLink  } from 'react-router-dom';

const ProfileNav = (props) => (
	<div> 
		<div className="" >
			<div className="container">
				
				<ul className="">
					<li className="active">
						<a href="#">Home</a>
						
					</li>
					<li>
						<a href="#">{props.match.params.name}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
) 

export default ProfileNav