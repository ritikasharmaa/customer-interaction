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
export class PropertyAttribute extends Component {
    render() {
        let { project } = this.props;
        return (
            <div>
                 <h4>
                  <FormattedMessage
                    id="property.attributes"
                    defaultMessage="Clients"
                  />
                </h4>
                <Row>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id= "property.attributes.rooms"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {project.detailProject.property?.attributes?.rooms}
                      </span>
                    </div>

                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.bedrooms"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {project.detailProject.property?.attributes?.bedrooms}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.size"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {project.detailProject.property?.attributes?.size.m2}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.size.carrez"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.property?.attributes?.size
                              .carrez,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.waterAgreement"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "property." +
                            project.detailProject.property?.attributes?.water
                              .agreement,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.parking"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.property?.attributes?.parking
                              .type,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.workTodo.urgency"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.attributes?.workTodo
                            .urgency
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.recentImprovements"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.attributes
                            ?.recentImprovements
                        }
                      </span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.mainView.sunny"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.property?.attributes?.mainView
                              .sunny +
                            "",
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.mainView.clear"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.property?.attributes?.mainView
                              .clear +
                            "",
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id= "property.attributes.mainView.visavis"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.property?.attributes?.mainView
                              .visavis +
                            "",
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id= "property.attributes.heater.energy"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "property." +
                            project.detailProject.property?.attributes?.heater
                              .energy,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.water"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "property." +
                            project.detailProject.property?.attributes?.water
                              .type,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.workTodo"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "property." +
                            project.detailProject.property?.attributes?.workTodo
                              .type,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.workToPlan.info"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "property." +
                            project.detailProject.property?.attributes
                              ?.workToPlan.type,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.workTodo.info"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.attributes?.workTodo
                            .info
                        }
                      </span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.mainView.expo"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.attributes?.mainView
                            .expo
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.basement"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.property?.attributes?.basement?.choice +
                            "",
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.heater.agreement"
                          defaultMessage="Clients"
                        />
                      </h6>{" "}
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "property." +
                            project.detailProject.property?.attributes?.heater
                              ?.agreement,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id= "property.attributes.heater"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "property." +
                            project.detailProject.property?.attributes?.heater
                              .type,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id= "property.attributes.outdoorSpace"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.property?.attributes
                              ?.outdoorSpace.type,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="client.outdoorSize"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.attributes
                            ?.outdoorSpace.size
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.property.attributes.workToPlan.info"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.attributes?.workToPlan
                            .info
                        }
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="property.attributes.bigWorkDone"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {
                          project.detailProject.property?.attributes
                            ?.bigWorkDone
                        }
                      </span>
                    </div>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default injectIntl(PropertyAttribute)
