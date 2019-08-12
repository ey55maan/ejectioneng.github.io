import React from 'react'
 
export default class About extends React.Component {
	
	render() {
		return ( 
			<div className="about-container">
			   	<div className="about-graphic-block flex-container" >
			   	</div>
				<div className="about-head-block">
                	<h1>About</h1>
                </div>
    			<div className="about-message-block">
                	<p className="about-text">
                    Ejection Engineering focuses on redesigning existing tools and equipment for improved function, reduced cost, and increased safety. By taking a new and unique approach, tried and tested designs can be enhanced beyond the original limitations.
					</p>
				</div>
			</div>
		)
	}
}