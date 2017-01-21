import {combineReducers} from 'redux';
import checklistReducer from './checkList';


import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	checklistReducer,
	routing: routerReducer
});

export default rootReducer;
