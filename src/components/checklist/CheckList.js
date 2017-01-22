//This component handles the Info section
import React, {PropTypes, Component}   from "react";
import {Link} from "react-router";
import {checkList} from "../../actions/checklistActions";

const CheckList= (props)=>(

			<div id="info" className="contact-form col-md-3">
				<h2>Hi! Welcome To The United States.</h2>
				<form >
					<p>
						<input type="checkbox" name="documents" id="filled-in-box" onChange={props.handleChange} />
						<label htmlFor="filled-in-box">documents</label>
					</p>
					<p>
						<input type="checkbox" name="services" className="services" id="filled-in-box-2" onChange={props.handleChange}/>
						<label htmlFor="filled-in-box-2">Government Services</label>
					</p>
					<p>
						<input type="checkbox" name="jobs" className="jobs" id="filled-in-box-3" onChange={props.handleChange} />
						<label htmlFor="filled-in-box-3">Jobs</label>
					</p>
					<p>
						<input type="checkbox" name="housing" className="housing" id="filled-in-box-4" onChange={props.handleChange} />
						<label htmlFor="filled-in-box-4">Housing</label>
					</p>
				</form>
				<div className="row">
					<form className="col s12">
						<div className="row">
							<div className="input-field col s12">
								<input id="zip" type="zip" name= "zip" className="validate" onChange={props.handleChange} />
									<label htmlFor="zip" data-error="wrong" data-success="right">Zip Code</label>
							</div>
						</div>
					</form>
				</div>
				<button onClick={props.handleSelected}><Link to="/steps">Next</Link></button>
			</div>
		);

CheckList.propTypes = {
	handleSelected : PropTypes.func,
	handleChange: PropTypes.func

};


export default CheckList;
