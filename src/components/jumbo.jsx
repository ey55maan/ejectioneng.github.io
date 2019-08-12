import React from 'react';

export default class Jumbo extends React.Component {
    
    							
    
    render () {
	    return (
	    	<div className="jumbotron-container">
    	    	<div className="jumbotron-content center" >
    	    		<h1>Ejection Engineering</h1>
					<div className="jumbotron-text">Solving complex design issues with a unique approach</div>
				</div>
				<div className="down-arrow"
                      onClick={() => this.props.downArrowClick(1)}>
                  <a><i className="fa fa-arrow-circle-down fa-4x"></i></a>
                </div>
            </div>	        
	    );
	}
}
