import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import persistState from 'redux-localstorage';

const enhancer = compose(
	applyMiddleware( logger(),thunk,reduxImmutableStateInvariant()), persistState()
);


export default function configureStore(initialState){
	return createStore(
		rootReducer,
		initialState,
		enhancer)
}
