//This component handles the Home template
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stepActions from '../../actions/stepActions';


class HomePage extends React.Component {
	render() {
		console.log('home page props',this.props.state);
		return (
			<div>Home page</div>
			// <div className="container-fluid">
			// 	<div id="index-banner" className="parallax-container">
			// 		<div className="section no-pad-bot">
			// 			<div className="container">
			// 				<br/><br/>
            //
			// 				<div className="row center" style="margin: auto; width:500px; margin-top: 50px; background-color: rgba(255, 0, 0, 0.3);">
			// 					<h5 className="header col s12" style="font-family:'Anonymous Pro'; font-size: 42px; color:white !important; border: 10px solid #fff; display: inline-block; padding: 10px; margin-top:-10px; margin-bottom:-10px;">Start playing now</h5>
			// 				</div>
			// 				<br></br>
            //
			// 			</div>
			// 		</div>
			// 		<div className="parallax"><img src="http://st.gdefon.com/wallpapers_original/s/214259_sport_ispaniya_komandy_kluby_igroki_futbolisty_sta_1920x1080_(www.GdeFon.ru).jpg" alt="Unsplashed background img 1"/></div>
			// 	</div>
            //
            //
			// 	<div className="container">
			// 		<div className="section">
			// 			<div className="row">
			// 				<div className="col s12 m4">
			// 					<div className="icon-block">
			// 						<h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
			// 						<h5 className="center">Lorem Ipsum is simply</h5>
            //
			// 						<p className="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
			// 							specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
			// 						</p>
			// 					</div>
			// 				</div>
            //
			// 				<div className="col s12 m4">
			// 					<div className="icon-block">
			// 						<h2 className="center brown-text"><i className="material-icons">group</i></h2>
			// 						<h5 className="center">Lorem ipsum dolor</h5>
            //
			// 						<p className="light">Lorem ipsum dolor sit amet, vix graece libris theophrastus ex. Brute semper an vim, aperiam aliquando ea sea. Adhuc apeirian adipiscing id vel. At labores elaboraret intellegebat qui. Mea hinc choro utroque eu. Vim enim putent
			// 							ea, verterem oportere patrioque ius ea.</p>
			// 					</div>
			// 				</div>
            //
			// 				<div className="col s12 m4">
			// 					<div className="icon-block">
			// 						<h2 className="center brown-text"><i className="material-icons">settings</i></h2>
			// 						<h5 className="center">Easy to work with</h5>
            //
			// 						<p className="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
			// 							specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
			// 					</div>
			// 				</div>
			// 			</div>
            //
			// 		</div>
			// 	</div>
            //
            //
			// 	<div className="parallax-container valign-wrapper">
			// 		<div className="section no-pad-bot">
			// 			<div className="container">
			// 				<div className="row center">
			// 					<h5 className="header col s12 light"></h5>
			// 				</div>
			// 			</div>
			// 		</div>
			// 		<div className="parallax"><img src="https://secure.static.tumblr.com/b053d3e85382f6c428370cc6aaa6729a/q48is5n/ybJn1wncb/tumblr_static_cricket_sports_1.jpg" alt="Unsplashed background img 2"/></div>
			// 	</div>
            //
			// 	<div className="container">
			// 		<div className="section">
            //
			// 			<div className="row">
			// 				<div className="col s12 center">
			// 					<h3><i className="mdi-content-send brown-text"></i></h3>
			// 					<h4>Contact Us</h4>
			// 					<p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien
			// 						id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed
			// 						ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
			// 					</p>
			// 				</div>
			// 			</div>
            //
			// 		</div>
			// 	</div>
            //
            //
			// 	<div className="parallax-container valign-wrapper">
			// 		<div className="section no-pad-bot">
			// 			<div className="container">
			// 				<div className="row center">
			// 					<h5 className="header col s12 light"></h5>
			// 				</div>
			// 			</div>
			// 		</div>
			// 		<div className="parallax"><img src="http://wallpapermad.com/wp-content/uploads/2016/08/wallpaper-sports-HD2-1.jpg" alt="Unsplashed background img 3"/>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

HomePage.propTypes = {
	children : PropTypes.object,
	state: React.PropTypes.object,
};

// const mapStateToProps= (state,ownProps)=>({state: state});
//
// const mapDispatchToProps=(dispatch)=>({
// 	actions: bindActionCreators({stepActions}, dispatch)
// });
//
export default HomePage;
// connect(mapStateToProps, mapDispatchToProps)(HomePage);

