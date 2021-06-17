import React from 'react';
import { FormGroup } from "reactstrap";
// import Select from "react-select";
// import * as Icon from "react-feather";


class WorkTab extends React.Component{
	render(){
		return(
			<div className="workTab">
				<p>Please fill the information sent by the client below.The project will be sent to the works department, which will call the client back</p>
				<FormGroup>
		    	<h5 className="headings">Project Information</h5>
		    	<textarea type="text" placeholder="Context, budget, etc."/>
		    </FormGroup>
			</div>
		)
	}
}

export default WorkTab;
