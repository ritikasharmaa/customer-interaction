import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import { FormattedMessage, injectIntl } from "react-intl";
import PropertyAttribute from "./PropertyAttribute";
import PropertyLocalisation from "./PropertyLocalisation";
import { PropertyCopro } from "./PropertyCopro";

export class Property extends Component {
  render() {
    let { project } = this.props;
    return (
      <div className="researchCriteria">
        <h4>
          <FormattedMessage
            id="client.detailsProperty"
            defaultMessage="Clients"
          />
        </h4>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody className="margin">
                <Row>
                  <Col sm="12">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.type"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id: "property." + project.detailProject.property?.type,
                        })}
                      </span>
                    </div>
                  </Col>
                </Row>
               
                
                <PropertyLocalisation {...this.props} />
                <PropertyAttribute {...this.props} />
                <PropertyCopro  {...this.props} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* <div className="accordian">
              <h5>History of modifications</h5>
              <div color="primary" id="toggler" className="accordianHead">
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                <span>test</span>
                <Icon.ChevronDown size={20} />
              </div>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt magni, voluptas debitis similique porro a molestias
                    consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                    similique porro a molestias consequuntur earum odio officiis
                    natus, amet hic, iste sed dignissimos esse fuga! Minus, alias.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <div color="primary" id="toggler2" className="accordianHead">
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                <span>test</span>
                <Icon.ChevronDown size={20} />
              </div>
              <UncontrolledCollapse toggler="#toggler2">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt magni, voluptas debitis similique porro a molestias
                    consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <div color="primary" id="toggler3" className="accordianHead">
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                <span>test</span>
                <Icon.ChevronDown size={20} />
              </div>
              <UncontrolledCollapse toggler="#toggler3">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt magni, voluptas debitis similique porro a molestias
                    consequuntur earum odio officiis natus, amet hic, iste sed
                    dignissimos esse fuga! Minus, alias.
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
              <div className="accordianButton">
                <Button type="button">Load Previous Changes</Button>
              </div>
            </div> */}
      </div>
    );
  }
}

export default injectIntl(Property);
