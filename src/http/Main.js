import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import request from 'request'

import TodoList from './todos/TodoList'
import Posts from './posts/Index'
import Status from './posts/Status'

export default class Main extends React.Component {
  static propTypes = {
    title:PropTypes.string,
    id:PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.getTodos = this.getTodos.bind(this)
    this.getPosts = this.getPosts.bind(this)
    this.state = {
      todos: [],
      posts : [],
      status: [
      	{title:'ststus title', author:'imran', body:"Lorem ipsum dolor sit amet, consectetur adipisicing."}
      ]
    };
  }
  getPosts(){
			fetch(`https://jsonplaceholder.typicode.com/posts`)
				.then((response)=> response.json()).then(posts=> this.setState({posts}))
		  
		}
	/*  getPosts(){
			axios.get(`https://jsonplaceholder.typicode.com/posts`)
		  .then((response)=> {
		    
		    this.setState({posts: response.data});
		  })
		  .catch( (error) => {
		    console.log(error);
		  });
		}*/
  getTodos(){
			axios.get(`https://jsonplaceholder.typicode.com/todos`)
		  .then((response)=> {
		    
		    this.setState({todos: response.data});
		  })
		  .catch( (error) => {
		    console.log(error);
		  });
	}
	componentDidMount() {
		this.getTodos()
		this.getPosts()
	}
  render() {
  console.log(this.state.posts);
    return (
      <div>
      	<div className="container">
      		<div className="row">
      			<h2> Http Module Exercise</h2>
      			<div className="col-md-6">
      				<TodoList todos={this.state.todos} />
      				<Status status={this.state.status} />
      			</div>
      			<div className="col-md-6">
      				<Posts posts= {this.state.posts} />
      			</div>
      		</div>
      	</div> 
      	
      </div>
    );
  }
}
