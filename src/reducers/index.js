import {combineReducers} from 'redux';
import checkListReducer from './checkListReducer';
import jobReducer from './jobReducer';
import housingReducer from './housingReducer';
import trainingReducer from './trainingReducer';
import documentationReducer from './documentationReducer';


import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	checkListReducer,
	housingReducer,
	trainingReducer,
	jobReducer,
	documentationReducer,
	routing: routerReducer
});

export default rootReducer;
