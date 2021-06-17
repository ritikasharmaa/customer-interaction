import React, { Component } from 'react'
import {
    Card,
    CardBody,
    Row,
    Col,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    FormGroup,
    Input,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    Table,Button
  } from "reactstrap";
import * as Icon from "react-feather";
import Flatpickr from "react-flatpickr";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy.js"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";




export class HistoricTabPane extends Component {
  state = {
    basicPicker : new Date(),
  }
  
    render() {
      let { 
          basicPicker, 
        } = this.state

        return (
            <div className="historicTab">
              <div className="filters">
                <h6>Filters</h6>
                <div className="historicFilters">
                  <div className="date">
                    <h5>Date</h5>
                    <div className="calendar">
                      <Icon.Calendar size={20}/>
                      <Flatpickr
                        className="form-control"
                        value={basicPicker}
                        onChange={date => {
                          this.setState({ basicPicker : date });
                        }}
                        wrap={true}
                      />
                    </div>
                    <span>to</span>
                    <div className="calendar">
                      <Icon.Calendar size={20}/>
                      <Flatpickr
                        className="form-control"
                        value={basicPicker}
                        onChange={date => {
                          this.setState({ basicPicker : date });
                        }}
                        wrap={true}
                      />
                    </div>
                  </div>
                  <div className="projects">
                    <h5>Projects</h5>
                    <div className="customCheckbox">
                      <Checkbox
                        color="primary"
                        icon={<Icon.Check className="vx-icon" size={16} />}
                        label="Purchase"
                        defaultChecked={false}
                      />
                    </div>
                    <div className="customCheckbox">
                      <Checkbox
                        color="primary"
                        icon={<Icon.Check className="vx-icon" size={16} />}
                        label="Sale"
                        defaultChecked={false}
                      />
                    </div>
                    <div className="customCheckbox">
                      <Checkbox
                        color="primary"
                        icon={<Icon.Check className="vx-icon" size={16} />}
                        label="Credit"
                        defaultChecked={false}
                      />
                    </div>
                    <div className="customCheckbox">
                      <Checkbox
                        color="Works"
                        icon={<Icon.Check className="vx-icon" size={16} />}
                        label="Purchase"
                        defaultChecked={false}
                      />
                    </div>
                  </div>
                  <div className="status">
                   <h5>Status of Project</h5>
                   <div className="d-inline-block text">
                      <Radio
                        className="origin-heading"
                        label="All"
                        color="primary"
                        name="origin"
                        // onChange={this.onChange.bind(this, "origin")}
                      />
                    </div>
                    <div className="d-inline-block text">
                      <Radio
                        className="origin-heading"
                        label="In Progress"
                        color="primary"
                        name="origin"
                        // onChange={this.onChange.bind(this, "origin")}
                      />
                    </div>
                    <div className="d-inline-block text">
                      <Radio
                        className="origin-heading"
                        label="Past"
                        color="primary"
                        name="origin"
                        // onChange={this.onChange.bind(this, "origin")}
                      />
                    </div>
                  </div> 
                  <div className="activities">
                    <h5>Activities</h5>
                    <div>
                      <div className="customCheckbox">
                        <Checkbox
                          color="primary"
                          icon={<Icon.Check className="vx-icon" size={16} />}
                          label="Tasks"
                          defaultChecked={false}
                        />
                      </div>
                      <div className="customCheckbox">
                        <Checkbox
                          color="primary"
                          icon={<Icon.Check className="vx-icon" size={16} />}
                          label="Purchase"
                          defaultChecked={false}
                        />
                      </div>
                    </div>
                    <div className="width">
                      <div className="customCheckbox">
                        <Checkbox
                          color="primary"
                          icon={<Icon.Check className="vx-icon" size={16} />}
                          label="RDV"
                          defaultChecked={false}
                        />
                      </div>
                      <div className="customCheckbox">
                        <Checkbox
                          color="primary"
                          icon={<Icon.Check className="vx-icon" size={16} />}
                          label="Project Milestones"
                          defaultChecked={false}
                        />
                      </div>
                      <div className="customCheckbox">
                        <Checkbox
                          color="primary"
                          icon={<Icon.Check className="vx-icon" size={16} />}
                          label="Purchase"
                          defaultChecked={false}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="historicHeading">
                <h6>Historic</h6>
                <div className="historicMain">
                  <Row className="searchFilters">
                    <Col md="9" className="position-relative has-icon-left">
                      <Input
                        className="inputs"
                        type="text"
                        placeholder="address, number, step, etc."
                        // onChange={this.props.onChange.bind(this,'searchText')}
                        // value={this.props.filter.searchText}
                      />
                      <div className="form-control-position">
                        <Icon.Search size={15} />
                      </div>
                    </Col>
                    <Col md="3" className="paddingLeft">
                      <div className="dropdown d-inline-block">
                        <UncontrolledButtonDropdown className="buttonBtn">
                          <DropdownToggle color="white" caret>
                            Quick Filters
                            <Icon.ChevronDown size={15} />
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem tag="a">Not Active</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                    </Col>
                  </Row>
                  <Card>
                    <CardBody>
                      <ul className="activity-timeline timeline-left list-unstyled">
                        <li>
                          <div className="timeline-icon bg-primary">
                            <Icon.Plus size="18" />
                          </div>
                          <div className="timeline-info">
                            <p className="font-weight-bold">Task Added</p>
                            <span>
                              Bonbon macaroon jelly beans gummi bears jelly
                              lollipop apple
                            </span>
                          </div>
                          <small className="">25 days ago</small>
                          <Icon.Eye className="rightIcon" size={15} />
                        </li>
                        <li>
                          <div className="timeline-icon bg-warning">
                            <Icon.AlertCircle size="18" />
                          </div>
                          <div className="timeline-info">
                            <p className="font-weight-bold">Task Updated</p>
                            <span>
                              Cupcake gummi bears soufflé caramels candy
                            </span>
                          </div>
                          <small className="">15 days ago</small>
                          <Icon.Eye className="rightIcon" size={15} />
                        </li>
                        <li>
                          <div className="timeline-icon bg-success">
                            <Icon.Check size="18" />
                          </div>
                          <div className="timeline-info">
                            <p className="font-weight-bold">Task Completed</p>
                            <span>Candy ice cream cake. Halvah gummi bears</span>
                          </div>
                          <small className="">20 minutes ago</small>
                          <Icon.Eye className="rightIcon" size={15} />
                        </li>
                      </ul>
                      <div className="historicButton">
                        <Button>Load Previous Activities</Button>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>


            {/*<Row>
              <Col md="4" sm="12">
                <h1>Filters</h1>
                <Card>
                  <CardBody>
                    <h5>Date</h5>
                    <p className="mb-0">By Pixinvent Creative Studio</p>
                    <span>Elite Author</span>
                    <div className="card-btns d-flex justify-content-between mt-2"></div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="8" sm="12">
                <h1>Historical</h1>
                <div className="d-inline-block">
                  <Col>
                    <FormGroup className="position-relative has-icon-left">
                      <Input
                        className="inputs"
                        type="text"
                        placeholder="Icon Left, Default Input"
                      />
                      <div className="form-control-position">
                        <Icon.Search size={15} />
                      </div>
                    </FormGroup>
                  </Col>
                </div>
                <div className="dropdown mr-1 mb-1 d-inline-block">
                  <Col md="4">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle color="white" caret>
                        Filters
                        <Icon.ChevronDown size={15} />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem tag="a">Option 1</DropdownItem>
                        <DropdownItem tag="a">Option 2</DropdownItem>
                        <DropdownItem tag="a">Option 3</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </Col>
                </div>
                <Card>
                  <CardBody>
                    <ul className="activity-timeline timeline-left list-unstyled">
                      <li>
                        <div className="timeline-icon bg-primary">
                          <Icon.Plus size="18" />
                        </div>
                        <div className="timeline-info">
                          <p className="font-weight-bold">Task Added</p>
                          <span>
                            Bonbon macaroon jelly beans gummi bears jelly
                            lollipop apple
                          </span>
                        </div>
                        <small className="">25 days ago</small>
                      </li>
                      <li>
                        <div className="timeline-icon bg-warning">
                          <Icon.AlertCircle size="18" />
                        </div>
                        <div className="timeline-info">
                          <p className="font-weight-bold">Task Updated</p>
                          <span>
                            Cupcake gummi bears soufflé caramels candy
                          </span>
                        </div>
                        <small className="">15 days ago</small>
                      </li>
                      <li>
                        <div className="timeline-icon bg-success">
                          <Icon.Check size="18" />
                        </div>
                        <div className="timeline-info">
                          <p className="font-weight-bold">Task Completed</p>
                          <span>Candy ice cream cake. Halvah gummi bears</span>
                        </div>
                        <small className="">20 minutes ago</small>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            </Row>*/}
            </div>
        )
    }
}

export default HistoricTabPane;
