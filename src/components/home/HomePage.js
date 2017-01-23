//This component handles the Home template
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stepActions from '../../actions/stepActions';


class HomePage extends React.Component {
	render() {
		console.log('home page props',this.props.state);
		return (
			<div className="container-fluid">
				<div id='body'>
					{this.props.children}
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	children : PropTypes.object,
	state: React.PropTypes.object,
};

const mapStateToProps= (state,ownProps)=>({state: state});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({stepActions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
