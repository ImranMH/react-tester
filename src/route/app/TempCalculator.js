import React from 'react';
const scaleNames = {
	C : 'celsius',
	F : 'fahrenheit'
}

function toCelcius(fahrenheit) {
	console.log(fahrenheit);
	return (fahrenheit - 32) * 5/ 9;
}
const toFahrenheit = (celcius) => (celcius * 9/5 ) + 32 ;

const tryConvert = (tempareture, convert) => {
	const input = parseFloat(tempareture);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output*1000)/1000;
	return rounded.toString();
}
function BoilStatus(props) {
	if(props.celsius >= 100) {
		return <div> <p> Water will boil  </p> </div>
	}
	return <div> <p> Water will not boil  </p> </div>
}
class InputTempareture extends React.Component{
	constructor(props) {
		super(props)
		this.handleTempareture = this.handleTempareture.bind(this)
	}
	handleTempareture(e) {
		this.props.onTemperatureChange(e.target.value)
	}
	render(){
		const tempareture = this.props.tempareture
		const scale = this.props.scale
		return (
			<fieldset>
				<legend> Enter temperature in {scaleNames[scale]}: </legend>
				<input value={tempareture} onChange={this.handleTempareture} placeholder=" Enter tempareture value"/>

			</fieldset>
			
		)
	}
}

class TempCalculator extends React.Component{
	constructor(props) {
		super(props)
		this.handleCelciusChange = this.handleCelciusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
		this.state={
			temperature: '',
			scale 	: 'C',
		}
	}
	handleCelciusChange(temperature) {
		this.setState({scale: 'C', temperature })
	}
	handleFahrenheitChange(temperature) {
		this.setState({scale: 'F', temperature })
	}
	render(){
		const temperature = this.state.temperature
		const scale = this.state.scale;
		const celsius = scale === 'F'? tryConvert(temperature,toCelcius): temperature ;
		const fahrenheit = scale === 'C'? tryConvert(temperature,toFahrenheit): temperature ;
		return (
			<div>
				<InputTempareture scale= 'C' tempareture ={celsius} onTemperatureChange={this.handleCelciusChange} />
				<InputTempareture scale= 'F' tempareture ={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
				<BoilStatus celsius= {parseFloat(celsius)} />
			</div>
			
		)
	}
}

export default TempCalculator;