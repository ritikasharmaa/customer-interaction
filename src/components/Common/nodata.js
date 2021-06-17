import React from "react"
import * as Icon from "react-feather";


function NoData(){
	return(
		<div className="noData">
			<Icon.Inbox/>
			<h6>No Data</h6>
		</div>
	)
}

export default NoData;