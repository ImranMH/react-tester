import React from 'react';

const HomePage = () => {
	return (
		<div>
		<WelcomePage color= "red"> 
			<div>
				<h2 className="site-header"> hello from welcome </h2>
				<p className=" site-discription"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum animi totam nam delectus optio quas sequi. Omnis fuga amet quae ipsum. Laboriosam veniam labore praesentium totam, quos incidunt iste autem.
				</p>
			</div>
		</WelcomePage>
		<SplitPane left= { <LeftPane />} right= { <RightPane /> } />
		</div>
	)
}

const WelcomePage = (props) => (

	<div className= {'fancyBorder fancyBorder-'+props.color} >
		{props.children}
	</div>
)

const LeftPane = (props) => (

	<div className= {'left-pane'} >
		<h2> left pane content </h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum sequi esse autem ipsam harum dolorum fugiat facilis, excepturi beatae?
		</p>
	</div>
)

const RightPane = (props) => (

	<div className= {'right-pane'} >
		<h2> right pane content </h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eum sequi esse autem ipsam harum dolorum fugiat facilis, excepturi beatae?
		</p>
	</div>
)

const SplitPane = (props) => (

	<div className= {'row'} >
		<h2 className="site-header"> split content  area</h2>
		<div className = 'left col-md-6'> {props.left} </div>
		<div className = 'right col-md-6'>{props.right} </div>
	</div>
)



export default HomePage

