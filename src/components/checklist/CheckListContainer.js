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
				jobs: false,
				housing: false,
				documents: false,
				services: false,
				zip: null
		}

	}
}



const mapStateToProps = (state) => ({
	checkList: state.checkListReducer
});

const mapDispatchToProps= (dispatch) => ({
	actions: bindActionCreators(checkList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);
