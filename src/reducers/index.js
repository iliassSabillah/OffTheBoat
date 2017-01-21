import {combineReducers} from 'redux';
import info from './infoReducer';


import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	info,
	routing: routerReducer
});

export default rootReducer;
