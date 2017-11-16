import React from 'react';
const MyComponents = {
	ShowEven : function (props) {
		let numberStatus ;
		if (props.number % 2 ===0 ) {
			numberStatus = 'even'
		} else {
			numberStatus = 'odd'
		}
		return <div> {props.number} is an {numberStatus} number </div>
	},
	DatePicker: function (props) {
		return <div> it is a {props.picker} element </div>
	}
}
const LowerCase = (props) => (
	<div > 
		<h2>i am from a {props.case} element  </h2>
		<div className="child"> {props.children} </div>
	</div>
)

const Button = (props) => {
	/*const {kind, ...others} = props;*/
	const kind = props.kind

	const className = kind === 'PrimaryButton'? 'btn btn-primary': 'btn btn-default'
	return <button className= {className} {...props} >Post </button>
}

const RetProps = () => {
	const options = { }
	return <Button kind={'PrimaryButton'} name="big" value="React Button" onClick= {()=> {alert('clicked')} }/> 
}

const Item = (props) => <li> {props.message} </li>

const ItemList = (props) => {
	let todos = ['first job', 'second job', 'third job']
	return (
		<ul> 
			<h2> some data</h2>
			{todos.map(todo=> {
				return <Item key={todo} message={todo} />
			})}
		</ul>
	)
}

function Repeat(props) {
	let items = [];
	for (let i = 0; i < props.times; i++) {
		items.push(props.children(i))
	}
	return <div>{items} </div>
}
const ListOfitems =(props)=> {
	return (
		<Repeat times ={10} > 
			{(index)=> (
				<div key ={index} >{index} number of item</div>
			)}
		</Repeat>
	)
}
const Test = () =>{
	const show = false;
	return (
		<div> 
			<MyComponents.DatePicker picker="colorPicker" />
			<LowerCase case= {3+5+9}> <h3> go to hell</h3> </LowerCase> 
			<MyComponents.ShowEven number= {3+5+9+9} /> 
			<ListOfitems />
			<RetProps />
			{show && <ItemList />}
			
		</div>
	)
} 


export default Test