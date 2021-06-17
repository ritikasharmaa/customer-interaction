import React from "react";
import { FormGroup, Row, Col, Button, Input } from "reactstrap";
import Select from "react-select";
import * as Icon from "react-feather";
import { SaleTabInfo } from "./SaleTabInfo";
import {
  togglePropertiesForm,
  onChangeFormProperties,
  addRooms,
  removeRooms,
} from "../../../../redux/actions/properties";
import { apiGetProperties } from "../../../../redux/api/ApiProperties";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import Flatpickr from "react-flatpickr";

const collaboration = [
  { value: "open", label:<FormattedMessage id="project.open" /> },
  { value: "maybe", label: <FormattedMessage id="project.maybe" /> },
  { value: "close", label: <FormattedMessage id="project.close" /> },
];

class SaleTab extends React.Component {
  componentDidMount() {
    this.props.apiGetProperties();
  }

  onChange(key, event, date, ) {
    if (event.value) {
      this.props.onChange(key, event.value);
    } else if (date) {
      this.props.onChange(key, date);
    } else {
      this.props.onChange(key, event.target.value);
    }
  }
  toggleForm() {
    this.props.togglePropertiesForm();
  }

  render() {
    let { properties, ProjectForm } = this.props;
    let options = this.props.properties.propertiesList.map((suggestion) => ({
      value: suggestion._id,
      label: suggestion.localisation?.address?.street + ' - ' + suggestion.localisation?.address?.city,
    }));
    return (
      <div className="saleTab">
        <FormGroup>
          <Row>
            <Col md="6">
              <h5 className="headings line-height min-width"><FormattedMessage id="project.sell.price" />:</h5>
              <div className="dollar">
                <Input
                  className="inputBox"
                  type="number"
                  value={ProjectForm.price}
                  onChange={this.onChange.bind(this, ["price"])}
                />
              </div>
            </Col>
            <Col md="6">
              <h5 className="headings line-height min-width"><FormattedMessage id="project.sell.goal" />:</h5>
              <Input
                className="inputBox width"
                type="text"
                value={ProjectForm.goal}
                onChange={this.onChange.bind(this, ["goal"])}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md="6">
              <h5 className="headings line-height min-width"><FormattedMessage id="project.sell.collaboration" />:</h5>
              <div className="">
                <Select
                  name="outdoor"
                  options={collaboration}
                  defaultValue={collaboration[0]}
                  className="React customeChip inline-selectBox"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, ["collaboration"])}
                />
              </div>
            </Col>
            <Col md="6" className="flatpickRow">
              <h5 className="headings line-height min-width"><FormattedMessage id="project.sell.date" />:</h5>
              <Flatpickr
                className="form-control inputBox"
                value={ProjectForm.dateCallback}
                options={{dateFormat: "d-m-Y"}}
                onChange={this.onChange.bind(this, ["dateCallback"])}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <h6><FormattedMessage id="project.propertyForSale" /></h6>
          <div>
            <Select
              className="React creator-heading input-fields"
              classNamePrefix="select"
              name="user"
              options={options}
              onChange={this.onChange.bind(this, ["property"])}
            />
            <span className="lineHeight">or</span>
            <div className="createButton">
              <Button onClick={this.toggleForm.bind(this)}>
                <Icon.Plus />
                <FormattedMessage id="property.createProperty" />
              </Button>
            </div>
          </div>
        </FormGroup>
      <SaleTabInfo
          toggleForm={this.toggleForm.bind(this)}
          onChange={this.props.onChangeFormProperties}
          properties={properties}
          addRooms={this.props.addRooms}
          removeRooms={this.props.removeRooms}
          ProjectForm={ProjectForm}
        />
        <FormGroup></FormGroup>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    project: state.project,
    properties: state.properties,
  };
};

const mapDispatchtoProps = {
  togglePropertiesForm,
  onChangeFormProperties,
  addRooms,
  removeRooms,
  apiGetProperties,
};
export default connect(mapStateToProps, mapDispatchtoProps)(SaleTab);
