//This component handles the Home template
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as infoActions from '../../actions/infoActions';
import $ from 'jquery';
import Info from './Info';
// import onUsersEnter from '../../routes/route_data';


class InfoContainer extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			info: {
				id: '',
				name: '',
				email: '',
				phone: '',
				address: ''
			}
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, inputField) {
		const info = this.state.info;
		info[inputField] = e.target.value;
	}

	render() {
		return (
			<Info handleChange={this.handleChange} info={this.props.info}/>
		);
	}
}

InfoContainer.propTypes = {
	actions: PropTypes.object.isRequired,
	info: React.PropTypes.object.isRequired,
	fetchUsers: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({info: state.info});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(infoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);

