import {combineReducers} from 'redux';
import checklistReducer from './checkList';
import jobReducer from './jobReducer';
import housingReducer from './housingReducer';


import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	checklistReducer,
	housingReducer,
	trainingReducer,
	jobReducer,
	routing: routerReducer
});

export default rootReducer;
