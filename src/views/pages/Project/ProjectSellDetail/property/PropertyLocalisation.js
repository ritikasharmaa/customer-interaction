import React, { Component } from 'react'
import {
  Row,
  Col,
  UncontrolledCollapse,
  Card,
  CardBody,
  Button,
} from "reactstrap";
import * as Icon from "react-feather";
import { FormattedMessage, injectIntl } from "react-intl";

export class PropertyLocalisation extends Component {
    render() {
        let { project } = this.props;
        return (
            <div>
                 <h4>
                  <FormattedMessage
                    id="project.localisation"
                    defaultMessage="Clients"
                  />
                </h4>
                <Row>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.localisation.address.street"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.localisation?.address?.street
                        }
                      </span>
                    </div>

                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.property.localisation.address.country"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.localisation?.address?.country
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.property.localisation.intercom"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.localisation?.intercom?.value
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.property.localisation.code"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.localisation?.code?.value
                        }
                      </span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.localisation.address.postcode"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.localisation?.address?.postcode
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.localisation.floor"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {project.detailProject.localisation?.floor?.actual}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.property.localisation.door"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {project.detailProject.property?.localisation?.door}
                      </span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id= "property.localisation.address.city"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.localisation?.address?.city
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.localisation.totalfloor"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.localisation?.floor?.total
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.localisation.other"
                          defaultMessage="Clients"
                        />
                      </h6>{" "}
                      <span>
                        {" "}
                        {project.detailProject.property?.localisation?.other}
                      </span>
                    </div>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default injectIntl(PropertyLocalisation)
