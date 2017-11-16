import  React, {Component} from 'react';
function Formatdate (props) {
	return (
		<div>
		<h3> this is formated section of date </h3>
		<p>{props.date.toLocaleTimeString()} </p>
		</div>
	)
}

class Clock extends React.Component{
	constructor(props) {
		super(props)
		this.state ={
			date : new Date()
		}
	}
	componentDidMount() {
		this.timeID = setInterval(
			()=> this.tick(), 1000) ;
	}
	componentWillUnmount() {
		clearInterval(this.timeID)
	}
	tick() {
		this.setState({
			date: new Date()
		})
	}
	render() {

		return (
			<div > 
				<h2>its a clock component </h2>
				<strong>{this.state.date.toLocaleTimeString()} </strong>
				<Formatdate date= {this.state.date} /> 
			</div>
		)
	}
}


const Doing = (props) => (
	<div>
		<h2> Its from anather Comment </h2>
		<div>
			<h4>{props.name}</h4>
			<h5>{props.city}</h5>
		 </div>
		<a href ="/roster" > go Roster </a>
	</div>
) 
function Header (props) {
	return <div><h2>Welcome to {props.name}  </h2> </div>
}
const But = (props) => (
	<div>
		<h2> Its a Buttons element </h2>
		<div>
		<button onClick = {props.handleClick} >{props.value} </button>
		 </div>
		<a href ="/schedule" > go Schedule </a>
	</div>
) 

class FormData extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname : '',
			lastname : ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleSubmit(event) {
		console.log('handleSubmit');
		console.log(this.state);
		event.preventDefault()
	}
	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name] : value
		})
		
		

	}
	render() {
		return (
			<form onSubmit = {this.handleSubmit} > 
				<label> 
					First Name:
					<input type ="text" value= {this.state.firstname} name= "firstname" onChange = {this.handleChange} />
					Last Name: 
					<input type ="text" value= {this.state.lastname} name= "lastname" onChange = {this.handleChange} />
				</label>
				<input type = "submit"/>
			</form>
		)
	}
}

class HomeData extends Component {
	renderEle(i) {
		return <But value={i} />
	} 
  render() {
    return (
    	<div>
      <table>
        <thead>
            <tr>
            	<td>its ok  </td>
           
            </tr>
        </thead>
  
      </table>
      <div className="con_area">
      	<div className="component_area">
					<Header name="imran Website"  />
      	</div>
      	<div className="component_area">
					<Clock  />
      	</div>
      	<div className="component_area">
					<Doing name="imran" city ="madaripur" />
      	</div>
      	<div className="component_area"> 
					<But value="enter a value" handleClick= {()=> console.log("clicked")} />
      	</div>
      	<div className="component_area">
					<FormData />
      	</div>
      	
      
      	
      	<div> 
      		{/*this.renderEle('from render function')*/}
      	</div>
      </div>
     </div>
    );
  }
}






export default HomeData;