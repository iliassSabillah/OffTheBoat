import {combineReducers} from 'redux';
import checkListReducer from './checkListReducer';
import jobReducer from './jobReducer';
import housingReducer from './housingReducer';
import trainingReducer from './trainingReducer';
import documentationReducer from './documentationReducer';
import { reducer as formReducer } from 'redux-form'


import { routerReducer } from 'react-router-redux';

const rootReducer = {
	checkListReducer,
	housingReducer,
	trainingReducer,
	jobReducer,
	documentationReducer,
	form: formReducer ,
	routing: routerReducer
}

const reducer = combineReducers(rootReducer);

export default reducer;
