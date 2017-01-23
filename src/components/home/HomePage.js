//This component handles the Home template
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stepActions from '../../actions/stepActions';
import '../../styles/styles.css';

class HomePage extends React.Component {
	render() {
		console.log('home page props',this.props.state);
		return (
			<div className="container-fluid">
				<div id='body'>
				<div >
					<div>
						<div className="container">
							<br/><br/>

							<div className="row" >
								<h5 className="col s12 title" >Start You Life in the USA the right way</h5>
							</div>
							<br/>

						</div>
					</div>
					<div><img role="presentation" className="homeImage" src="https://images.unsplash.com/photo-1419407118704-43ccfda4036d?dpr=1&amp;auto=format&amp;fit=crop&amp;w=767&amp;h=511&amp;q=80&amp;cs=tinysrgb&amp;crop="/></div>
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	children : PropTypes.object,
	state: React.PropTypes.object,
};

// const mapStateToProps= (state,ownProps)=>({state: state});
//
// const mapDispatchToProps=(dispatch)=>({
// 	actions: bindActionCreators({stepActions}, dispatch)
// });
//

export default HomePage;
// connect(mapStateToProps, mapDispatchToProps)(HomePage);
