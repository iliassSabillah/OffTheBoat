//This component handles the Home template
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as infoActions from '../../actions/infoActions';


class HomePage extends React.Component {
	render() {
		console.log('home page props',this.props.state);
		return (
			<div className="container-fluid">
				<h1>Home page</h1>
				{this.props.children}
			</div>
		);
	}
}

HomePage.propTypes = {
	children : PropTypes.object.isRequired,
	state: React.PropTypes.object,
};

const mapStateToProps= (state,ownProps)=>({state: state});

const mapDispatchToProps=(dispatch)=>({
	actions: bindActionCreators({infoActions}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

