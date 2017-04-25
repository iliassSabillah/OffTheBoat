import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import CheckListContainer from '../components/checklist/CheckListContainer';
import {onCheckList} from './routeData';
import StepContainer from '../components/steps/StepContainer';



export default (
	<Route path="/" component={App}>
		<IndexRoute component ={HomePage}/>
		<Route path="checklist" component ={CheckListContainer} />
		<Route path ="steps" component={StepContainer} onEnter={onCheckList()}/>
		<Route path ="about" component={AboutPage}/>
	</Route>
);
