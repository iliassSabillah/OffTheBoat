//This component handles the Home template
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stepActions from '../../actions/stepActions';
import '../../styles/styles.css';

class HomePage extends React.Component {
	render() {
		return (
				<div id='homepage'>
						<h5 className="title">Start You Life in the USA the right way</h5>
						<img role="presentation" className="homeImage"
							 src="https://images.unsplash.com/photo-1419407118704-43ccfda4036d?dpr=1&amp;auto=format&amp;fit=crop&amp;w=767&amp;h=511&amp;q=80&amp;cs=tinysrgb&amp;crop="/>
				</div>
		);
	}
}

export default HomePage;
