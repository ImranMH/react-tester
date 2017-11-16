import React from 'react';

const NewApp = (props) => (
	<div> 
		<h2> Match route ui </h2>
		<h3>{props.match.url}</h3>
	</div>
) 

export default NewApp