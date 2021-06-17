import React, { Component } from "react";
import { FormGroup, Row, Col, Button } from "reactstrap";
import { Propertiesform } from "../../Properties/Propertiesform";
import { FormattedMessage } from "react-intl";

export class SaleTabInfo extends Component {
  render() {
    let { properties, ProjectForm } = this.props;
    return (
      <div>
        {ProjectForm.property && (
          <div>
            <FormGroup className="saleDetail">
              {properties.propertiesList.map((item, index) => {
                if (item._id == ProjectForm.property) {
                  return (
                    <div key={index}>
                      <h6>Info Well</h6>
                      <Row>
                        <Col md="12">
                          <h5><FormattedMessage id="property.address" /></h5>
                          <h4>
                            {item.localisation?.address?.street}
                            {""}
                            {item.localisation?.address?.postcode}
                            {""}
                            {item.localisation?.address?.city}
                            {""}
                            {item.localisation?.address?.country}{" "}
                          </h4>
                        </Col>
                        <Col>
                          <div>
                            <h5><FormattedMessage id="property.type" /></h5>
                            <h4>{item.type}</h4>
                          </div>
                          <div>
                            <h5><FormattedMessage id="property.attributes.size" /></h5>
                            <h4>{item.localisation?.attributes?.size?.m2}</h4>
                          </div>
                          <div>
                            <h5><FormattedMessage id="property.attributes.size.carrez" /></h5>
                            <h4>
                              {item.localisation?.attributes?.size?.carrez+ " "}
                            </h4>
                          </div>
                          <div>
                            <h5><FormattedMessage id="property.localisation.intercom" /></h5>
                            <h4>{item.localisation?.intercom?.exists+ " "}</h4>
                          </div>
                        </Col>
                        <Col>
                          
                          <div>
                            <h5><FormattedMessage id="property.localisation.totalfloor" /></h5>
                            <h4>{item.localisation?.floor?.total}</h4>
                          </div>
                          <div>
                            <h5><FormattedMessage id="property.localisation.door" /></h5>
                            <h4>{item.localisation?.door}</h4>
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <h5>&nbsp;</h5>
                            <h4>&nbsp;</h4>
                          </div>
                          <div>
                            <h5><FormattedMessage id= "property.attributes.rooms" /></h5>
                            <h4>{item.attributes?.rooms}</h4>
                          </div>
                          <div>
                            <h5><FormattedMessage id="property.elevator" /></h5>
                            <h4>Yes</h4>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  );
                }
              })}
            </FormGroup>
          </div>
        )}
        {properties.isShow && <Propertiesform {...this.props} />}
      </div>
    );
  }
}

export default SaleTabInfo;
