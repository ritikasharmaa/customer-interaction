import React, { Component } from 'react'
import {
    Card,
    CardBody,
    Container,
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
    Table,
    UncontrolledCollapse, Button
 } from "reactstrap";
 import { FormattedMessage, injectIntl } from "react-intl";

import * as Icon from "react-feather";

export class ClientInfoTabPane extends Component {
  state = {
    activeTab: '1'
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ active: tab})
    }
  }
  

    render() {
      let{client}= this.props
        return (
          <div className="contactInfo">
            <h5><FormattedMessage id="client.information" defaultMessage="Clients" /></h5>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody className="marginLeft">
                  <div className="contactDetail">
                      <Col xs="2">
                      <h6>  <FormattedMessage
                          id="client.creator"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{client.detail?.creator?.full_name}</span>
                      </Col>
                    </div>
                  <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="client.source"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{this.props.intl.formatMessage({ id: 'client.' +client.detail.origin })}</span>
                      </Col>
                    </div>
                    <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="client.address"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{client.detail.address?.address}</span>
                      </Col>
                    </div> 
                  
                    <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="client.postcode"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{client.detail.address?.postcode}</span>
                      </Col>
                    </div> 
                    
                    <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="client.city"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{client.detail.address?.city}</span>
                      </Col>
                    </div> 
                    <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="client.country"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{client.detail.address?.country}</span>
                      </Col>
                    </div> 
                  </CardBody>
                </Card>
              </Col>
              {/* <Col md="6" sm="12">
                <h5> Sources</h5>
                <Card>
                  <CardBody className="marginLeft">
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6" sm="12">
                <h5> Orders</h5>
                <Card>
                  <CardBody className="marginLeft">
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12">
                <Card>
                  <CardBody className="marginLeft">
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <div className="contactDetail">
                      <h6>Test</h6>
                      <span>Something</span>
                    </div>
                    <Row>
                      <Col sm="4">
                        <div className="contactDetail">
                          <h6>Test</h6>
                          <span>Something</span>
                        </div>
                        <div className="contactDetail" className="contactDetail">
                          <h6>Test</h6>
                          <span>Something</span>
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="contactDetail">
                          <h6>Test</h6>
                          <span>Something</span>
                        </div>
                        <div className="contactDetail">
                          <h6>Test</h6>
                          <span>Something</span>
                        </div>
                      </Col>
                      <Col sm="4">
                        <div className="contactDetail">
                          <h6>Test</h6>
                          <span>Something</span>
                        </div>
                        <div className="contactDetail">
                          <h6>Test</h6>
                          <span>Something</span>
                        </div>
                      </Col>
                    </Row>
                    <div className="accordian">
                      <h5>Others</h5>
                      <div color="primary" id="toggler" className="accordianHead">
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                        <span>test</span>
                        <Icon.ChevronDown size={20}/>
                      </div>
                      <UncontrolledCollapse toggler="#toggler">
                        <Card>
                          <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                      <div color="primary" id="toggler2" className="accordianHead">
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                        <span>test</span>
                        <Icon.ChevronDown size={20}/>
                      </div>
                      <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                          <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                      <div color="primary" id="toggler3" className="accordianHead">
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                        <span>test</span>
                        <Icon.ChevronDown size={20}/>
                      </div>
                      <UncontrolledCollapse toggler="#toggler3">
                        <Card>
                          <CardBody>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                            dignissimos esse fuga! Minus, alias.
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                      <div className="accordianButton">
                        <Button type="button">Test Button</Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
            </div>
        )
    }
}

export default injectIntl(ClientInfoTabPane)
