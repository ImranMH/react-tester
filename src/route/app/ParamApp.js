import React from 'react';

const ParamApp = (props) => (
	<div> 
		<h2> param Route ui </h2>
		<h3>{props.match.url}</h3>
		<h3>{props.match.params.app4}</h3>
	</div>
) 

export default ParamApp