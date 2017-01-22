import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import CheckList from '../components/checklist/CheckList';
import {onUsersEnter} from './route_data';
import AllSteps from '../components/steps/allsteps-page';
import StepContainer from '../components/steps/step-container';


export default (
	<Route path="/" component={App}>
		<IndexRoute component ={HomePage}/>
		<Route path="checklist" component ={CheckList} />
		<Route path ="steps" component={StepContainer}/>
		<Route path ="about" component={AboutPage}/>
	</Route>
);
