import React from 'react';
const Status =(props) => {
	let statusList = props.status.map(status=> {
		return <StatusList key={Date.now().toString()} status = {status} />
	})
	 return (
      <div className="statusArea">
      	<div className="statusList">
					{statusList}
      	</div>
      	<div className="statusAdd">
					<AddStatus />
      	</div>
      </div>
    );
}
const StatusList =(props) => {

	 return (
      <li>
      	<h2>ho status</h2>
      	<h2>{props.status.title}</h2>
      	<p>{props.status.body}</p>
      </li>
    );
}
const StatusList =(props) => {

	 return (
      <form>
      	<h2>Add new Status</h2>
      	<div> 
					<label htmlFor=""> Author </label>
					<input type="text" name ={} />
      	</div>
      </form>
    );
}
 export default Status