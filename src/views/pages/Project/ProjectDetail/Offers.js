import React from "react"
import AggridTable from "../../../../components/tables/aggrid/Aggrid";
import {projectOffersColumnDefs} from '../../../../redux/Constants'
import * as Icon from "react-feather";
import {Row, Col, Input, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Button} from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy.js"


let data = [
	{
		goods: 'Address', proposalstatus: 'Offer', youroffer: 250000, request: 280000, award: 290000
	}
]

class Offers extends React.Component{
	render(){
		return(
			<div className="proposition">
				<div className="heading">
					<h4>Proposals with Offers</h4>
					<div className="createButton">
						<Button><Icon.Plus/>Offer / Counter Offer</Button>
					</div>
				</div>
				<div className="customCheckbox">
					<Checkbox
            color="primary"
            icon={<Icon.Check className="vx-icon" size={16} />}
            label="My Proposals"
            defaultChecked={false}
          />
          <Checkbox
            color="primary"
            icon={<Icon.Check className="vx-icon" size={16} />}
            label="Offers at Price"
            defaultChecked={false}
          />
          <Checkbox
            color="primary"
            icon={<Icon.Check className="vx-icon" size={16} />}
            label="Show abandoned Proposals"
            defaultChecked={false}
          />
				</div>
				<div className="proposaltable">
					<div className="customFilter">
		        <Row>
		          <Col md="4">
		          	<FormGroup className="position-relative has-icon-left">
			            <Input
			              className="inputs"
			              type="text"
			              placeholder="Search Here"
			            />
			            <div className="form-control-position">
			              <Icon.Search size={15} />
			            </div>
			            <div className="position-left">
			            	<Icon.ChevronDown size={17}/>
			            </div>
			          </FormGroup>
		          </Col>
		          <Col md="4" className="text">
		          	<span>1 Offer Found</span>
		          </Col>
		          <Col md="4">
		            <div className="dropdown ml-1 mb-1 d-inline-block">
		              <UncontrolledButtonDropdown className="buttonBtn">
		                <DropdownToggle color="white" caret>
		                  Sort by Status
		                  <Icon.ChevronDown size={15} />
		                </DropdownToggle>
		              </UncontrolledButtonDropdown>
		            </div>
		          </Col>
		        </Row>
		      </div>
					<AggridTable
	          data={data}
	          columnDefs={projectOffersColumnDefs}
	        />
        </div>
			</div>
		)
	}
}

export default Offers;