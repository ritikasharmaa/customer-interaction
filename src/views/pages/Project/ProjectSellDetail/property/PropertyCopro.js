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
import { FormattedMessage, injectIntl } from "react-intl";
export class PropertyCopro extends Component {
  render() {
    let { project } = this.props;
    return (
      <div>
        <h4>
          <FormattedMessage id="property.copro" defaultMessage="Clients" />
        </h4>
        <Row>
          <Col sm="4">
            <div className="contactDetail">
              <h6>
                <FormattedMessage id="property.copro.accesses.shops" defaultMessage="Clients" />
              </h6>
              <span>
                {project.detailProject.property?.copro?.accesses?.shops}
              </span>
            </div>

            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id= "property.copro.highway"
                  defaultMessage="Clients"
                />
              </h6>
              <span>
                {project.detailProject.property?.copro?.accesses?.highway?.name}
              </span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id= "property.copro.accesses.publicTransports.distance"
                  defaultMessage="Clients"
                />
              </h6>
              <span>
                {
                  project.detailProject.property?.copro?.accesses?.highway?.distance
                }
              </span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id="property.copro.accesses.publicTransports"
                  defaultMessage="Clients"
                />
              </h6>
              <span>
                {this.props.intl.formatMessage({
                  id:
                    "property." +
                    project.detailProject.property?.copro?.accesses.publicTransports?.type,
                })}
              </span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id= "property.copro.accesses.transportsName"
                  defaultMessage="Clients"
                />
              </h6>
              <span>
                {
                  project.detailProject.property?.copro?.accesses?.publicTransports?.name
                }
              </span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id="property.copro.caretaker"
                  defaultMessage="Clients"
                />
              </h6>
              <span>{this.props.intl.formatMessage({
                  id:
                    "property." +
                    project.detailProject.property?.copro?.caretaker+""
                })}</span>
            </div>
          </Col>
          <Col sm="4">
            <div className="contactDetail">
              <h6>
                <FormattedMessage id= "property.copro.syndic" defaultMessage="Clients" />
              </h6>
              <span>{project.detailProject.property?.copro?.syndic}</span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id= "property.copro.corpoHisto"
                  defaultMessage="Clients"
                />
              </h6>
              <span>{project.detailProject.property?.copro?.coproHisto}</span>
            </div>

            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id= "property.copro.corpoNext"
                  defaultMessage="Clients"
                />
              </h6>
              <span>{project.detailProject.property?.copro?.coproNext}</span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id="property.copro.construction"
                  defaultMessage="Clients"
                />
              </h6>
              <span>
                {this.props.intl.formatMessage({
                  id:
                    "property." +
                    project.detailProject.property?.copro?.construction?.type,
                })}
              </span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id="property.copro.monthlyfees"
                  defaultMessage="Clients"
                />
              </h6>
              <span>{project.detailProject.property?.copro?.monthlyFees}</span>
            </div>
          </Col>
          <Col sm="4">
            <div className="contactDetail">
              <h6>
                <FormattedMessage id="property.copro.construction.year" defaultMessage="Clients" />
              </h6>
              <span>{project.detailProject.copro?.construction.year}</span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage id="client.state" defaultMessage="Clients" />
              </h6>
              <span>
                {this.props.intl.formatMessage({
                  id: "client." + project.detailProject.copro?.state?.state,
                })}
              </span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id="property.copro.state.comment"
                  defaultMessage="Clients"
                />
              </h6>
              <span>{project.detailProject.copro?.state?.comment}</span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id= "property.copro.propertyTax"
                  defaultMessage="Clients"
                />
              </h6>
              <span>{project.detailProject.copro?.propertyTax}</span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id="property.copro.housingTax"
                  defaultMessage="Clients"
                />
              </h6>
              <span>{project.detailProject.copro?.housingTax}</span>
            </div>
            <div className="contactDetail">
              <h6>
                <FormattedMessage
                  id="property.copro.other"
                  defaultMessage="Clients"
                />
              </h6>
              <span>{project.detailProject.property?.copro?.other}</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectIntl(PropertyCopro);
