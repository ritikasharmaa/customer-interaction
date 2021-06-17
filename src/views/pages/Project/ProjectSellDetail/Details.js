import React, { Component } from "react";
import {
  Row,
  Col,
  UncontrolledCollapse,
  Card,
  CardBody,
  Button,
} from "reactstrap";
import * as Icon from "react-feather";
import { FormattedMessage } from "react-intl";

export class Details extends Component {
  render() {
    let { project } = this.props;
    var date = new Date(project.detailProject.dateCallback).toLocaleDateString(
      "fr-FR"
    );

    return (
      <div className="researchCriteria">
        <h4>
          <FormattedMessage id="client.details" defaultMessage="Clients" />
        </h4>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody className="margin">
                <Row>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.sell.collaboration"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>{project.detailProject.collaboration}</span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.sell.goal"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>{project.detailProject.goal}</span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.sell.date"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>{date}</span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.sell.price"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>{project.detailProject.price} €</span>
                    </div>
                  </Col>
                </Row>
               
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

export default Details;
