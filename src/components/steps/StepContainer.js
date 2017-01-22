//This component handles the Experience section
import React, {PropTypes} from 'react';
import 'jquery-ui';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as stepActions from '../../actions/stepActions';
import AllSteps from './AllSteps';


const mapStateToProps = (state) => ({
  housing: state.housingReducer,
	training: state.trainingReducer,
	job: state.jobReducer
});

const mapDispatchToProps= (dispatch) => ({
	actions: bindActionCreators(stepActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AllSteps);
