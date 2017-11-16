import React from 'react';
import ProfileNav from './profile/ProfileNav'
import Players from './profile/PlayerList'
import { Route  } from 'react-router-dom';


class PlayerListPage extends React.Component{
	constructor(props) {
		super(props)

		this.submitPlayer = this.submitPlayer.bind(this)
		this.showDetails = this.showDetails.bind(this)
		this.state= {
			players : []
		}
	}
	submitPlayer(newplayer) {
		let playerslist = this.state.players;
		playerslist.push(newplayer)
		this.setState({players:playerslist})
	}
	showDetails(e) {
		console.log('show details');
	
	
	}
	componentDidMount() {
		this.setState({
			players : [
				{
					name: 'Messi',
					country : 'Argentina',
					club: 'Barcelona',
					type: 'Footboll'
				},
					{
					name: 'Ronaldo',
					country : 'Portugal',
					club: 'Real Madriad',
					type: 'Footboll'
				},
					{
					name: 'Neimar',
					country : 'Brazil',
					club: 'PSG',
					type: 'Footboll'
				}
			],
			playerType : ['Football', 'Cricket', 'Tanis','Hockey','Baseball']
		})
	}
	render(){

		return (
			<div>
				
				<Players players= {this.state.players} playerType={this.state.playerType} handlePlayer={this.submitPlayer} handleRoute={this.props.match} />
			</div>
			
		)
	}
}

const ProfilePage = (props) => (
	<div> 
		<Route exact path={props.match.url} component={PlayerListPage} />
		<Route exact path={`${props.match.url}/:name`} component={ProfileNav} />
	</div>
)
export default ProfilePage