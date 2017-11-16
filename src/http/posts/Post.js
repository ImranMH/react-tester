import React from 'react';

const Post =(props) => {

	 return (
      <li>
      	<h2>{props.post.title}</h2>
      	<p>{props.post.body}</p>
      </li>
    );
}
 export default Post