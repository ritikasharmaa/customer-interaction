import React from "react";
import * as Icon from "react-feather";
import {FormGroup, Input,UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, Button } from "reactstrap";
import Checkbox from "../@vuexy/checkbox/CheckboxesVuexy.js"

class Filters extends React.Component{
	render(){
		return(  
			<div className="customFilter">
        <Row>
          <Col md="8">
            <Row>
              <Col md="7">
                <FormGroup className="position-relative has-icon-left">
                  <Input
                    className="inputs"
                    type="text"
                    placeholder="Name, City, Mail, Tel"
                    onChange={this.props.onChange.bind(this,'searchText')}
                    value={this.props.filter.searchText}
                  />
                  <div className="form-control-position">
                    <Icon.Search size={15} />
                  </div>
                </FormGroup>
              </Col>
              <Col md="5" className="customCheckbox">
                <Row>
                  <Col md="6">
                    <Checkbox
                      color="primary"
                      icon={<Icon.Check className="vx-icon" size={16} />}
                      label="Quick Filter1"
                      defaultChecked={false}
                    />
                  </Col>
                  <Col md="6">
                    <Checkbox
                      color="primary"
                      icon={<Icon.Check className="vx-icon" size={16} />}
                      label="Quick Filter2"
                      defaultChecked={false}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <div className="dropdown ml-1 mb-1 d-inline-block">
              <UncontrolledButtonDropdown className="buttonBtn">
                <DropdownToggle color="white" caret>
                  Sort by Project
                  <Icon.ChevronDown size={15} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a">Not Active</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </div>
          </Col>
        </Row>
      </div>
		)
	}
}

export default Filters;