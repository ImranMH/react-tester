import React from 'react';
import Post from './Post';

const Posts =(props) => {
	const postList = props.posts.map(post=> {
		if(post.id<= 30){
			return <Post key= {post.id} post={post} />
		}
	})
	 return (
      <div>
      	<h2>posts List</h2>
      	<ul>
					{postList}	
      	</ul>
      </div>
    );
}
 export default Posts