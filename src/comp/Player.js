import PlayerAPI from '../api';
import React from 'react';
import { Link } from 'react-router-dom';
const Player = (props) => {
	const player = PlayerAPI.get(
		parseInt(props.match.params.id, 10)
	)
	console.log(player);
	if(!player) {
		return <div> Sorry, but the player was not found </div>
	}

	return (
		<div> 
			 <h1>{player.name} (#{player.number})</h1>
			 <h2> position: {player.position} </h2>
			 <h3>well come to players</h3>
			   <Link to='/roster'>Back</Link>
		</div>
	)
}

export default Player