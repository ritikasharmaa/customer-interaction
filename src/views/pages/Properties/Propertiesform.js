import React, { Component } from "react";
import { FormGroup, Row, Col, Input, Button } from "reactstrap";
import {
  typesProperties,
  finance,
  outdoorSpace1,
  copro
} from "../../../redux/Constants";
import Radio from "../../../components/@vuexy/radio/RadioVuexy";
import Select from "react-select";
import properties from "../../../redux/reducers/properties/propertiesReducer";
import * as Icon from "react-feather";
import { FormattedMessage } from "react-intl";

const agreement = [
  { value: "individual", label:  <FormattedMessage id="property.individual" /> },
  { value: "shared", label:  <FormattedMessage id="property.shared" /> },
];
const urgency = [
  { value: "needed", label:  <FormattedMessage id="property.needed" /> },
  { value: "toplan", label:  <FormattedMessage id="property.toplan" />},
];
const energy = [
  { value: "electric", label: <FormattedMessage id="property.electric" /> },
  { value: "gaz", label:  <FormattedMessage id="property.gaz" /> },
  { value: "fuel", label:  <FormattedMessage id="property.fuel" /> },
  { value: "wood", label:  <FormattedMessage id="property.wood" /> },
  { value: "sun", label:  <FormattedMessage id="property.sun" /> },
  { value: "coal", label:  <FormattedMessage id="property.coal" />},
];
const heater = [
  { value: "header", label:  <FormattedMessage id="property.header" /> },
  { value: "floor", label:  <FormattedMessage id="property.floor" /> },
  { value: "convecteur", label:  <FormattedMessage id="property.convecteur" /> },
];
const waterType = [
  { value: "electric", label: <FormattedMessage id="property.electric" />},
  { value: "gaz", label:  <FormattedMessage id="property.gaz" /> },
  { value: "thermodynamic", label:  <FormattedMessage id="property.thermodynamic" /> },
];
const transport = [
  { value: "station", label:  <FormattedMessage id="property.station" /> },
  { value: "rer", label:  <FormattedMessage id="property.rer" /> },
  { value: "tube", label:  <FormattedMessage id="property.tube" />},
  { value: "bus", label:  <FormattedMessage id="property.bus" /> },
];
const constructions = [
  { value: "old", label:  <FormattedMessage id="property.old" /> },
  { value: "semi", label:  <FormattedMessage id="property.semi" /> },
  { value: "new", label:  <FormattedMessage id="property.new" /> },
];
const state = [
  { value: "medium", label:  <FormattedMessage id="property.medium" /> },
  { value: "normal", label:  <FormattedMessage id="property.normal" /> },
  { value: "good", label:  <FormattedMessage id="property.good" />},
  { value: "excelent", label:  <FormattedMessage id="property.excelent" /> },
];
const outdoorSpace = [
  { value: "garden", label: <FormattedMessage id="property.garden" /> },
  { value: "terrace", label: <FormattedMessage id="property.terrace" /> },
  { value: "balcony", label: <FormattedMessage id="property.balcony" /> },
  { value: "patio", label: <FormattedMessage id="property.patio" /> },
];
const parking = [
  { value: "parking", label: <FormattedMessage id="property.parking" /> },
  { value: "box", label:<FormattedMessage id="property.box" /> },
];
const workTodo = [
  { value: "small", label:<FormattedMessage id="property.small" /> },
  { value: "big", label:<FormattedMessage id="property.big" /> },
];
export class Propertiesform extends Component {
  onChange(key, event) {
    event.preventDefault()
    if (event.value) {
      this.props.onChange(key, event.value);
    } else if (event.target.value) {
      this.props.onChange(key, event.target.value);
    }
  }
  onChanges(key, index, event) {
    console.log(event.target.value);
    this.props.onChange(key, event.target.value[index]);
  }
  addRooms() {
    this.props.addRooms();
  }
  removeRooms(index) {
    this.props.removeRooms(index, 1);
    this.props.properties.size.splice(index, 1);
  }
  render() {
    let { properties } = this.props;

    return (
      <div className="purchaseTab">
        <h6>
          <FormattedMessage id="property.infoWell" />
        </h6>
        <div>
          <h6>
            <FormattedMessage id="property.localisation" />
          </h6>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.localisation.address.street" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="text"
                    value={
                      properties.propertiesForm.localisation.address.street
                    }
                    onChange={this.onChange.bind(this, [
                      "localisation",
                      "address",
                      "street",
                    ])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.address.postcode" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="number"
                  value={
                    properties.propertiesForm.localisation.address.postcode
                  }
                  onChange={this.onChange.bind(this, [
                    "localisation",
                    "address",
                    "postcode",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.address.city" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="text"
                    value={properties.propertiesForm.localisation.address.city}
                    onChange={this.onChange.bind(this, [
                      "localisation",
                      "address",
                      "city",
                    ])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id= "property.localisation.address.country" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="text"
                  value={properties.propertiesForm.localisation.address.country}
                  onChange={this.onChange.bind(this, [
                    "localisation",
                    "address",
                    "country",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <h5 className="headings left">
                  {" "}
                  <FormattedMessage id="property.type" />:
                </h5>
                {typesProperties.map((item, index) => {
                  return (
                    <div className="d-inline-block mr-3" key={index}>
                      <Radio
                       defaultChecked={item.value === properties.propertiesForm.type}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        value={item.value}
                        name="source"
                        onChange={this.onChange.bind(this, ["type"])}
                      />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.lift" />:
                </h5>
                <div className="">
                  {finance.map((item, index) => {
                    return (
                      <div
                        className="d-inline-block mr-2 customCheckbox"
                        key={index}
                      >
                        <Radio
                        defaultChecked={item.value === properties.propertiesForm.localisation.lift}
                          className="origin-heading"
                          label={item.label}
                          color="primary"
                          name="lift"
                          value={item.value}
                          onChange={this.onChange.bind(this, [
                            "localisation",
                            "lift",
                          ])}
                        />
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.code" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.localisation.code.exists}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="code"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "localisation",
                          "code",
                          "exists",
                        ])}
                      />
                    </div>
                  );
                })}
                {properties.propertiesForm.localisation.code.exists ===
                  "true" && (
                  <Input
                    name="outdoor"
                    type="text"
                    className=" inline-selectBox"
                    onChange={this.onChange.bind(this, [
                      "localisation",
                      "code",
                      "value",
                    ])}
                  />
                )}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.intercom" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.localisation.intercom.exists}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="intercom"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "localisation",
                          "intercom",
                          "exists",
                        ])}
                      />
                    </div>
                  );
                })}
                {properties.propertiesForm.localisation.intercom.exists ===
                  "true" && (
                  <Input
                    name="outdoor"
                    type="text"
                    className=" inline-selectBox"
                    onChange={this.onChange.bind(this, [
                      "localisation",
                      "intercom",
                      "value",
                    ])}
                  />
                )}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.floor" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="number"
                    value={properties.propertiesForm.localisation.floor.actual}
                    onChange={this.onChange.bind(this, [
                      "localisation",
                      "floor",
                      "actual",
                    ])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.totalfloor" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="number"
                  value={properties.propertiesForm.localisation.floor.total}
                  onChange={this.onChange.bind(this, [
                    "localisation",
                    "floor",
                    "total",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.door" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="number"
                    value={properties.propertiesForm.localisation.door}
                    onChange={this.onChange.bind(this, [
                      "localisation",
                      "door",
                    ])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.localisation.other" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="text"
                  value={properties.propertiesForm.localisation.other}
                  onChange={this.onChange.bind(this, ["localisation", "other"])}
                />
              </Col>
            </Row>
          </FormGroup>
          <h6>
            <FormattedMessage id="property.attributes" />
          </h6>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.rooms" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="number"
                    value={properties.propertiesForm.attributes.rooms}
                    onChange={this.onChange.bind(this, ["attributes", "rooms"])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.bedrooms" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="number"
                  value={properties.propertiesForm.attributes.bedrooms}
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "bedrooms",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.size" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="number"
                    value={properties.propertiesForm.attributes.size.m2}
                    onChange={this.onChange.bind(this, [
                      "attributes",
                      "size",
                      "m2",
                    ])}
                  /> M<sup>2</sup>
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.size.carrez" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.size.carrez}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="carrez"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "size",
                          "carrez",
                        ])}
                      />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.mainView.clear" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div className="d-inline-block mr-2" key={index}>
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.mainView.clear}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="clear"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "mainView",
                          "clear",
                        ])}
                      />
                    </div>
                  );
                })}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.mainView.sunny" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.mainView.sunny}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="sunny"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "mainView",
                          "sunny",
                        ])}
                      />
                    </div>
                  );
                })}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.mainView.visavis" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.mainView.visavis}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="visavis"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "mainView",
                          "visavis",
                        ])}
                      />
                    </div>
                  );
                })}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.attributes.mainView.expo" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.mainView.expo}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="expo"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "mainView",
                          "expo",
                        ])}
                      />
                    </div>
                  );
                })}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <FormGroup>
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.basement" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.basement.choice}
                        className="origin-heading"
                        label={item.label}
                        color="basement"
                        name="basement"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "basement",
                          "choice",
                        ])}
                      />
                    </div>
                  );
                })}
                {properties.propertiesForm.attributes.basement.choice ===
                  "true" && (
                  <Input
                    name="type"
                    type="text"
                    className="inline-selectBox"
                    placeholder="access"
                    onChange={this.onChange.bind(this, [
                      "attributes",
                      "basement",
                      "access",
                    ])}
                  />
                )}
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Row>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.heater.agreement" />:
                </h5>
                <Select
                  name="colors"
                  options={agreement}
                  defaultValue={agreement[0]}
                  className="React customeChip"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "heater",
                    "agreement",
                  ])}
                />
              </Col>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.attributes.heater.energy" />:
                </h5>
                <Select
                  name="colors"
                  options={energy}
                  defaultValue={energy[0]}
                  className="React customeChip"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "heater",
                    "energy",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.heater" />:
                </h5>
                <Select
                  name="colors"
                  options={heater}
                  defaultValue={heater[0]}
                  className="React customeChip"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "heater",
                    "type",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.attributes.waterAgreement" />:
                </h5>
                <Select
                  name="colors"
                  options={agreement}
                  defaultValue={agreement[0]}
                  className="React customeChip"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "water",
                    "agreement",
                  ])}
                />
              </Col>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.water" />:
                </h5>
                <Select
                  name="colors"
                  options={waterType}
                  defaultValue={waterType[0]}
                  className="React customeChip"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "water",
                    "type",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col sm="6">
              <FormGroup>
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.outdoorSpace" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.outdoorSpace.choice}
                        className="origin-heading"
                        label={item.label}
                        color="outdoorSpace"
                        name="outdoorSpace"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "outdoorSpace",
                          "choice",
                        ])}
                      />
                    </div>
                  );
                })}
                {properties.propertiesForm.attributes.outdoorSpace.choice ===
                  "true" && (
                  <Select
                    name="outdoor"
                    options={outdoorSpace}
                    className="React customeChip inline-selectBox"
                    classNamePrefix="select"
                    onChange={this.onChange.bind(this, [
                      "attributes",
                      "outdoorSpace",
                      "type",
                    ])}
                  />
                )}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.parking" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div className="d-inline-block mr-3" key={index}>
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.parking.choice}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="parking"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "parking",
                          "choice",
                        ])}
                      />
                    </div>
                  );
                })}
                {properties.propertiesForm.attributes.parking.choice ===
                  "true" && (
                  <Select
                    name="parking"
                    options={parking}
                    className="React customeChip inline-selectBox"
                    classNamePrefix="select"
                    onChange={this.onChange.bind(this, [
                      "attributes",
                      "parking",
                      "type",
                    ])}
                  />
                )}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <FormGroup>
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.workTodo" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.workTodo.choice}
                        className="origin-heading"
                        label={item.label}
                        color="workTodo"
                        name="workTodo"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "workTodo",
                          "choice",
                        ])}
                      />
                    </div>
                  );
                })}
                {properties.propertiesForm.attributes.workTodo.choice ===
                  "true" && (
                  <Select
                    name="workTodo"
                    options={workTodo}
                    className="React customeChip inline-selectBox"
                    classNamePrefix="select"
                    onChange={this.onChange.bind(this, [
                      "attributes",
                      "workTodo",
                      "type",
                    ])}
                  />
                )}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.workTodo.urgency" />:
                </h5>
                <Select
                  name="urgency"
                  defaultValue={urgency[0]}
                  options={urgency}
                  className="React customeChip"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "workTodo",
                    "urgency",
                  ])}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.workTodo.info" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="text"
                  value={properties.propertiesForm.attributes.workTodo.info}
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "workTodo",
                    "info",
                  ])}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <FormGroup>
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.workToPlan.info" />
                </h5>
                {finance.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.attributes.workToPlan.choice}
                        className="origin-heading"
                        label={item.label}
                        color="workToPlan"
                        name="workToPlan"
                        value={item.value}
                        onChange={this.onChange.bind(this, [
                          "attributes",
                          "workToPlan",
                          "choice",
                        ])}
                      />
                    </div>
                  );
                })}
                {properties.propertiesForm.attributes.workToPlan.choice ===
                  "true" && (
                  <Select
                    name="workToPlan"
                    options={workTodo}
                    className="React customeChip inline-selectBox"
                    classNamePrefix="select"
                    onChange={this.onChange.bind(this, [
                      "attributes",
                      "workToPlan",
                      "type",
                    ])}
                  />
                )}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup className="height">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.workToPlan.info" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="text"
                  value={properties.propertiesForm.attributes.workToPlan.info}
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "workToPlan",
                    "info",
                  ])}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="height">
            <Row>
              <Col sm="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.attributes.recentImprovements" />:{" "}
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="text"
                    value={
                      properties.propertiesForm.attributes.recentImprovements
                    }
                    onChange={this.onChange.bind(this, [
                      "attributes",
                      "recentImprovements",
                    ])}
                  />
                </div>
              </Col>
              <Col sm="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.attributes.bigWorkDone" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="text"
                  value={properties.propertiesForm.attributes.bigWorkDone}
                  onChange={this.onChange.bind(this, [
                    "attributes",
                    "bigWorkDone",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <h6>
            <FormattedMessage id="property.copro" />
          </h6>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.highway" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="text"
                    value={
                      properties.propertiesForm.copro.accesses.highway.name
                    }
                    onChange={this.onChange.bind(this, [
                      "copro",
                      "accesses",
                      "highway",
                      "name",
                    ])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.highway.distance" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="number"
                  value={
                    properties.propertiesForm.copro.accesses.highway.distance
                  }
                  onChange={this.onChange.bind(this, [
                    "copro",
                    "accesses",
                    "highway",
                    "distance",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id= "property.copro.accesses.shops" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="number"
                  value={properties.propertiesForm.copro.accesses.shops}
                  onChange={this.onChange.bind(this, [
                    "copro",
                    "accesses",
                    "shops",
                  ])}
                />
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.accesses.publicTransports" />
                </h5>
                <Select
                  className="React customeChip"
                  classNamePrefix="select"
                  name="transport "
                  options={transport}
                  defaultValue={transport[0]}
                  onChange={this.onChange.bind(this, [
                    "copro",
                    "accesses",
                    "publicTransports",
                    "type",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.accesses.transportsName" />:{" "}
                </h5>
                <Input
                  className="inputBox width"
                  type="text"
                  value={
                    properties.propertiesForm.copro.accesses.publicTransports
                      .name
                  }
                  onChange={this.onChange.bind(this, [
                    "copro",
                    "accesses",
                    "publicTransports",
                    "name",
                  ])}
                />
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.accesses.publicTransports.distance" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="number"
                  value={
                    properties.propertiesForm.copro.accesses.publicTransports
                      .distance
                  }
                  onChange={this.onChange.bind(this, [
                    "copro",
                    "accesses",
                    "publicTransports",
                    "distance",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.syndic" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="text"
                    value={properties.propertiesForm.copro.syndic}
                    onChange={this.onChange.bind(this, ["copro", "syndic"])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id= "property.copro.corpoHisto" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="text"
                  value={properties.propertiesForm.copro.coproHisto}
                  onChange={this.onChange.bind(this, ["copro", "coproHisto"])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.copro.corpoNext" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="text"
                    value={properties.propertiesForm.copro.coproNext}
                    onChange={this.onChange.bind(this, ["copro", "coproNext"])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.copro.state" />
                </h5>
                <Select
                  name="state"
                  defaultValue={state[0]}
                  options={state}
                  className="React customeChip"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, [
                    "copro",
                    "state",
                    "state",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.construction" />
                </h5>
                <Select
                  name="construction"
                  options={constructions}
                  defaultValue={constructions[0]}
                  className="React customeChip"
                  classNamePrefix="select"
                  onChange={this.onChange.bind(this, [
                    "copro",
                    "construction",
                    "type",
                  ])}
                />
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.copro.construction.year" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="number"
                  value={properties.propertiesForm.copro.construction.year}
                  onChange={this.onChange.bind(this, [
                    "copro",
                    "construction",
                    "year",
                  ])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.propertyTax" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="number"
                    value={properties.propertiesForm.copro.propertyTax}
                    onChange={this.onChange.bind(this, [
                      "copro",
                      "propertyTax",
                    ])}
                  />
                </div>
              </Col>
              <Col md="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.housingTax" />:
                </h5>
                <Input
                  className="inputBox width"
                  type="number"
                  value={properties.propertiesForm.copro.housingTax}
                  onChange={this.onChange.bind(this, ["copro", "housingTax"])}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  {" "}
                  <FormattedMessage id="property.copro.caretaker" />:
                </h5>
                {copro.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Radio
                      defaultChecked={item.value === properties.propertiesForm.copro.caretaker}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        name="caretaker"
                        value={item.value}
                        value={properties.propertiesForm.copro.caretaker}
                        onChange={this.onChange.bind(this, [
                          "copro",
                          "caretaker",
                        ])}
                      />
                    </div>
                  );
                })}
              </Col>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.monthlyfees" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="text"
                    value={properties.propertiesForm.copro.monthlyFees}
                    onChange={this.onChange.bind(this, [
                      "copro",
                      "monthlyFees",
                    ])}
                  />
                </div>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs="6">
                <h5 className="headings line-height min-width">
                  <FormattedMessage id="property.copro.other" />:
                </h5>
                <div className="">
                  <Input
                    className="inputBox width"
                    type="text"
                    value={properties.propertiesForm.copro.other}
                    onChange={this.onChange.bind(this, ["copro", "other"])}
                  />
                </div>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <h5 className="headings">
              <FormattedMessage id="property.copro.state.comment" />:
            </h5>
            <Input
              type="textarea"
              placeholder="Placeholder"
              value={properties.propertiesForm.copro.state.comment}
              onChange={this.onChange.bind(this, ["copro", "state", "comment"])}
            />
          </FormGroup>

          <div className="rooms">
            {properties.size.map((index) => {
              const fieldName = `${index}`;
              return (
                <div key={fieldName}>
                  <h6 className="ml-0 room">
                    <FormattedMessage id="property.rooms" />
                  </h6>
                  <FormGroup>
                    <Row className="ml-1">
                      <Col md="6">
                        <h5 className="headings line-height min-width">
                          <FormattedMessage id="property.rooms.name" />:
                        </h5>
                        <div className="">
                          <Input
                            className="inputBox width"
                            type="text"
                            value={properties.propertiesForm.rooms.name}
                            onChange={this.onChanges.bind(this, index, [
                              "rooms",
                              "name",
                            ])}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <h5 className="headings line-height min-width">
                          <FormattedMessage id="property.rooms.size" />:
                        </h5>
                        <Input
                          className="inputBox width"
                          type="number"
                          value={properties.propertiesForm.rooms.size}
                          onChange={this.onChanges.bind(this, index, [
                            "rooms",
                            "size",
                          ])}
                        /> M<sup>2</sup>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row className="ml-1">
                      <Col md="6">
                        <h5 className="headings line-height min-width">
                          <FormattedMessage id="property.rooms.floor" />:
                        </h5>
                        <div className="">
                          <Input
                            className="inputBox width"
                            type="number"
                            value={properties.propertiesForm.rooms.floor}
                            onChange={this.onChanges.bind(this, index, [
                              "rooms",
                              "floor",
                            ])}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <h5 className="headings line-height min-width">
                          <FormattedMessage id="property.rooms.expo" />:
                        </h5>
                        <Input
                          className="inputBox width"
                          type="text"
                          value={properties.propertiesForm.rooms.expo}
                          onChange={this.onChanges.bind(
                            this,
                            index[("rooms", "expo")]
                          )}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row className="ml-1">
                      <Col md="6">
                        <h5 className="headings line-height min-width">
                          <FormattedMessage id="property.rooms.windows" />:
                        </h5>
                        <div className="">
                          <Input
                            className="inputBox width"
                            type="text"
                            value={properties.propertiesForm.rooms.windows}
                            onChange={this.onChanges.bind(this, index, [
                              "rooms",
                              "windows",
                            ])}
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <h5 className="headings line-height min-width">
                          <FormattedMessage id="property.rooms.view" />:
                        </h5>
                        <Input
                          className="inputBox width"
                          type="text"
                          value={properties.propertiesForm.rooms.view}
                          onChange={this.onChange.bind(this, index, [
                            "rooms",
                            "view",
                          ])}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row className="ml-1">
                      <Col md="6">
                        <h5 className="headings line-height min-width">
                          <FormattedMessage id="property.rooms.other" />:
                        </h5>
                        <div className="">
                          <Input
                            className="inputBox width"
                            type="text"
                            value={properties.propertiesForm.rooms.other}
                            onChange={this.onChange.bind(this, index, [
                              "rooms",
                              "other",
                            ])}
                          />
                        </div>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className="buttons">
                    <Row>
                      <Col>
                        <Button
                          type="button"
                          size="sm"
                          color="success mr-1 round"
                          onClick={this.addRooms.bind(this)}
                        >
                          <Icon.Plus />
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          color="success round"
                          onClick={this.removeRooms.bind(this, index)}
                        >
                          <Icon.Minus />
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
              );
            })}
            {properties.size.length === 0 && (
              <FormGroup className="room">
                <Row>
                  <Col>
                    <h6 className="ml-0">
                      {" "}
                      <FormattedMessage id="property.rooms" />
                    </h6>
                  </Col>
                  <Col className="bttn">
                    <Button
                      type="button"
                      color="success mr-1 round"
                      onClick={this.addRooms.bind(this)}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            )}
          </div>

          <br></br>
        </div>
      </div>
    );
  }
}

export default Propertiesform;
