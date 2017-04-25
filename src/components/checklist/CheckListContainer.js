//This component handles the Experience section
import React, {PropTypes, Component} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {checkList} from '../../actions/checklistActions';
import CheckList from './CheckList';


class CheckListContainer extends Component{
	constructor(){
		super(prop);
		this.state = {
			checklist: {
				document: '',
				id: ''
			}
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
