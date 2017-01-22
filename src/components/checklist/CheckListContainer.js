//This component handles the Experience section
import React, {PropTypes, Component} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as checkList from '../../actions/checklistActions';
import CheckList from './CheckList';

class CheckListContainer extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			checklist: {
				jobs: false,
				housing: false,
				documents: false,
				services: false,
				zip: null
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSelected = this.handleSelected.bind(this);

	}

	handleChange(e) {


		if (e.target.checked) {
			!e.target.checked;


		} else {
			e.target.checked;

		}
		let item = e.target.name;
		this.setState({[item] : e.target.checked});

		console.log('item',item);
		consoel.log('value',e.target.checked)

	}
	handleSelected() {
		props.actions.checkList({type: 'CHECKLIST', payload: this.state})
	}

}

CheckListContainer.propTypes = {
	handleSelected : PropTypes.func,
	handleChange: PropTypes.func
};

const mapStateToProps = (state) => ({
	checkList: state.checkListReducer
});

const mapDispatchToProps= (dispatch) => ({
	actions: bindActionCreators(checkList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);
