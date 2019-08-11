import React from 'react';

export default class Jumbo extends React.Component {
    
    							
    
    render () {
	    return (
	    	<div className="jumbotron-container">
    	    	<div className="jumbotron-content center" >
    	    		<h1>Ejection Engineering</h1>
					<div className="jumbotron-text">Solving complex design issues with a unique approach</div>
				</div>
				<div className="down-arrow-wrapper">
					<span className="fa-stack fa-4x">
						<i className="fa fa-circle-thin fa-stack-2x"></i>
						<i className="fa fa-chevron-down fa-stack-1x" onClick={() => this.props.scrollTo(1)}></i>
					</span>
	            </div>
            </div>	        
	    );
	}
}
