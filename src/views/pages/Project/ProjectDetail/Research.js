import React from "react";
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

class ResearchCriteria extends React.Component {
  render() {
    let { project } = this.props;
    return (
      <div className="researchCriteria">
        <h4>
          <FormattedMessage
            id="client.criteriaOfResearch"
            defaultMessage="Clients"
          />
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
                          id="project.buy.type"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {project.detailProject.search?.property?.type
                          .map((item) =>
                            this.props.intl.formatMessage({
                              id: "project." + item,
                            })
                          )
                          .join(" ,")}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.buyType"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {" "}
                        {project.detailProject?.buyType
                          ?.map((item) =>
                            this.props.intl.formatMessage({
                              id: "project.buyType." + item,
                            })
                          )
                          .join(" ,")}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.currentState"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {this.props.intl.formatMessage({
                          id: "project.currentState." + project.detailProject.currentState,
                        })}
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.search.finance.budget"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {project.detailProject.search?.finance?.budget} €
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.search.property.groundfloor"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.search?.property.groundfloor,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.search.property.size"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>{project.detailProject.search?.property.size}</span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.search.property.bedrooms"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {project.detailProject.search?.property.bedrooms}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.search.property.basement"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.search?.property.basement,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.search.property.rooms"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {project.detailProject.search?.property?.rooms}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h5>
                        <FormattedMessage
                          id="project.search.building.heater"
                          defaultMessage="Clients"
                        />
                      </h5>
                      <span>
                        {this.props.intl.formatMessage({
                          id:
                            "project.heater." +
                            project.detailProject.search?.building?.heater,
                        })}
                      </span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.urgency"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>{project.detailProject.urgency}</span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.search.parking"
                          defaultMessage="Clients"
                        />
                      </h6>
                      {project.detailProject.search?.property.parking?.type && (
                        <span>
                          {project.detailProject.search?.property?.parking.type
                            .map((item) =>
                              this.props.intl.formatMessage({
                                id: "project." + item,
                              })
                            )
                            .join(" ,")}
                        </span>
                      )}
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.search.property.work"
                          defaultMessage="Clients"
                        />
                      </h6>
                      {project.detailProject.search?.property.work?.type && (
                        <span>
                          {project.detailProject.search?.property?.work.type
                            .map((item) =>
                              this.props.intl.formatMessage({
                                id: "project." + item,
                              })
                            )
                            .join(" ,")}
                        </span>
                      )}
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.search.building.construction"
                          defaultMessage="Clients"
                        />
                      </h6>

                      <span>
                        {project.detailProject.search?.building?.construction
                          .map((item) =>
                            this.props.intl.formatMessage({
                              id: "project." + item,
                            })
                          )
                          .join(" ,")}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        {" "}
                        <FormattedMessage
                          id= "project.search.building.state"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {project.detailProject.search?.building?.state.state
                          .map((item) =>
                            this.props.intl.formatMessage({
                              id: "project.search.building." + item,
                            })
                          )
                          .join(" ,")}
                      </span>
                    </div>
                    {/* <div className="contactDetail">
                      <h6><FormattedMessage
                          id="client.restrictionsZone"
                          defaultMessage="Clients"
                        /></h6>
                      <span>{project.detailProject.search?.property?.zoneRestriction}</span>
                    </div> */}
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.search.building.floors.maxWithoutLift"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {" "}
                        {
                          project.detailProject.search?.building?.floors
                            ?.maxWithoutLift
                        }
                      </span>
                    </div>
                  </Col>
                  <Col sm="4">
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.buy.reasons"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {" "}
                        {this.props.intl.formatMessage({
                          id: "project.reason." + project.detailProject.reason,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.search.property.outdoor"
                          defaultMessage="Clients"
                        />
                      </h6>
                      {project.detailProject.search?.property.outdoorSpace
                        ?.type && (
                        <span>
                          {project.detailProject.search?.property?.outdoorSpace.type
                            .map((item) =>
                              this.props.intl.formatMessage({
                                id: "project." + item,
                              })
                            )
                            .join(" , ")}
                        </span>
                      )}
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.search.building.monthlyfees"
                          defaultMessage="Clients"
                        />
                      </h6>{" "}
                      <span>
                        {" "}
                        {project.detailProject.search?.building?.monthlyFees}
                      </span>
                    </div>

                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.search.building.floors.last"
                        />
                      </h6>
                      <span>
                        {" "}
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.search?.building?.floors
                              ?.last,
                        })}
                      </span>
                    </div>
                    <div className="contactDetail">
                      <h6>
                        <FormattedMessage
                          id="project.search.building.floors.lift"
                          defaultMessage="Clients"
                        />
                      </h6>
                      <span>
                        {" "}
                        {this.props.intl.formatMessage({
                          id:
                            "project." +
                            project.detailProject.search?.building?.floors
                              ?.lift,
                        })}
                      </span>
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

export default injectIntl(ResearchCriteria);
