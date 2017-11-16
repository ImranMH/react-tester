import React from 'react';
import { Link  } from 'react-router-dom';

class PlayerList extends React.Component{
	constructor(props){
		super(props)
		this.handleDetails = this.handleDetails.bind(this)
	}
	handleDetails(pl) {
		
		var match = this.props.handleDetails
		console.log(match);
		

	}
	render() {
		return (
			<li className = 'playerlist'> 
			<h2>{this.props.player.name} <span className = 'sportstype'>  {this.props.player.type}</span> </h2>
			<div>{this.props.player.country} </div>
			<div>{this.props.player.club} </div>
			<Link to ={this.props.handleDetails.url+'/'+this.props.player.name} > View De </Link>
			<button onClick={this.handleDetails} >View detail </button>
	</li>
		)
	}
}
/*const PlayerList = (props) => {
	const handleDetails= (el) => {
		console.log('works');
		props.handleDetails(el)
	}
	return (
	
	<li className = 'playerlist'> 
			<h2>{props.player.name} <span className = 'sportstype'>  {props.player.type}</span> </h2>
			<div>{props.player.country} </div>
			<div>{props.player.club} </div>
			<button onClick={handleDetails(props.player)} >View detail </button>
	</li>
	)
}*/

class AddPlayers extends React.Component{
	constructor(props){
		super(props)
		this.haandleSubmit = this.haandleSubmit.bind(this)
	}
	static defaultProps = {
		type : ['Football', 'Cricket', 'Tanis','Hockey','Baseball']
	}
	haandleSubmit(e) {
		let newplayer = {
			name: this.name.value,
			country: this.country.value,
			club: this.club.value,
			type: this.type.value,
		}
		this.props.addPlayer(newplayer)
		e.preventDefault()
	}
	componentWillMount(){

	}
	render(){
		let PlayerTypes = this.props.type.map((c, index)=> {
			return <option key={index} value={c} >{c} </option>
		})
	

		return (
			<div className = 'addPlayer'> 
				<h2> Add players to player list </h2>
				<form onSubmit= {this.haandleSubmit} >
					<label> Players Name </label>
					<input type="text" ref= {(name)=> this.name = name}  className="form-control" />

					<label> Players Country </label>
					<input type="text" ref= {(input)=> this.country = input}   className="form-control" />

					<label> Players Club </label>
					<input type="text"  ref= {(input)=> this.club = input}  className="form-control" />

					<label> Player Playing</label>
					<select ref= {(input)=> this.type = input} className="form-control" >
						{PlayerTypes }
					 </select>

					<br />
					<input type="submit" value="Add to Player list" className="btn btn-primary" />
					</form>
			</div>
		)
	}
}


const Players = (props) => {	
	let playerlist;
	if(props.players) {
		playerlist = props.players.map((player, index)=> {
		return (
			<PlayerList key={index} player= {player} handleDetails={props.handleRoute}/>
		)
	})
	}
	return (
	<div className="row">
		<div className="col-md-6">
			<h2> Player list component below</h2>
			<ul className = 'players'> 
				{playerlist}
			</ul>
	 	</div>
	 	<div className="col-md-6">
	 		<AddPlayers addPlayer={props.handlePlayer} playerOrigin = {props.playerType} />
	 	</div>
	 </div>

	)
}
export default Players