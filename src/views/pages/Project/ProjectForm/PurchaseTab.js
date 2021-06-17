import React, { useState } from "react";
import { FormGroup, Row, Col, Input } from "reactstrap";
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";
import Select from "react-select";
import {
  searchType,
  searchType2,
  buyType,
  currentState,
  finance,
  views,
  outdoorSpace1,
  constructions,
  state,
  heater,
  outdoorSpace,
  work,
  parking,
} from "../../../../redux/Constants";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy.js";
import * as Icon from "react-feather";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Flatpickr from "react-flatpickr";
import { FormattedMessage } from "react-intl";

const userOptions = [
  { value: "city1", label: <FormattedMessage id="city1" /> },
  { value: "city2", label: "city2" },
  { value: "postcode", label: "postcode" },
];

const urgentOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];

const reasonOptions = [
  { value: "buy", label: <FormattedMessage id="project.reason.buy" /> },
  { value: "separation", label: <FormattedMessage id="project.reason.separation" /> },
  { value: "size", label: <FormattedMessage id="project.reason.size" /> },
  { value: "mutation", label: <FormattedMessage id="project.reason.mutation" /> },
  { value: "other", label: <FormattedMessage id="project.reason.other" /> },
];

class PurchaseTab extends React.Component {
  onChange(key, event, date) {
    if (event.value) {
      this.props.onChange(key, event.value);
    } else if (date) {
      this.props.onChange(key, date);
    } else {
      this.props.onChange(key, event.target.value);
    }
  }

  render() {
    let { ProjectForm } = this.props;

    return (
      <div className="purchaseTab">
        <h6>
          {" "}
          <FormattedMessage id="project.buyType" />
        </h6>
        <FormGroup>
          <Row>
            <Col xs="6">
              <h5 className="headings left">
                {" "}
                <FormattedMessage id="project.buy.type" />:
              </h5>
              {buyType.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Checkbox
                      checked={ProjectForm.buyType?.indexOf(item.value) != -1}
                      color="primary"
                      icon={<Icon.Check className="vx-icon" size={16} />}
                      label={item.label}
                      value={item.value}
                      onChange={this.onChange.bind(this, ["buyType"])}
                    />
                  </div>
                );
              })}
            </Col>
            <Col xs="6">
              <h5 className="headings left">
                <FormattedMessage id="project.currentState" />
              </h5>
              {currentState.map((item, index) => {
                return (
                  <div className="d-inline-block mr-2" key={index}>
                    <Radio
                      defaultChecked={item.value === ProjectForm?.currentState}
                      className=""
                      label={item.label}
                      color="primary"
                      name="currentState"
                      value={item.value}
                      onChange={this.onChange.bind(this, ["currentState"])}
                    />
                  </div>
                );
              })}
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md="6">
              <h5 className="headings">
                <FormattedMessage id="project.buy.reasons" />
              </h5>
              <Select
                className="React creator-heading input-fields customeChip"
                classNamePrefix="select"
                name="reason "
                options={reasonOptions}
                onChange={this.onChange.bind(this, ["reason"])}
              />
              <br></br>
              {ProjectForm.reason === "other" && (
                <Input
                  type="textarea"
                  name="reason"
                  value={ProjectForm.reason}
                  onChange={this.onChange.bind(this, ["reason"])}
                />
              )}
            </Col>
            <Col md="6">
              <h5 className="headings">
                <FormattedMessage id="project.urgency" />
              </h5>
              <Select
                className="React creator-heading input-fields customeChip"
                classNamePrefix="select"
                name="urgency"
                defaultValue={urgentOptions[0]}
                options={urgentOptions}
                onChange={this.onChange.bind(this, ["urgency"])}
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row className="flatpickRow">
            <Col xs="6">
              <div className="d-inline-block items">
                <Col>
                  <h5 className="headings line-height min-width">
                    <FormattedMessage id="project.buy.start" />:
                  </h5>
                </Col>
                <Col>
                  <Flatpickr
                    className="form-control inputBox"
                    value={ProjectForm.start}
                  options={{dateFormat: "d-m-Y"}}  
                    onChange={this.onChange.bind(this, ["start"])}
                  />
                </Col>
              </div>
            </Col>
            <Col xs="6">
              <div className="d-inline-block items">
                <Col>
                  <h5 className="headings line-height min-width">
                    <FormattedMessage id="project.buy.end" />:
                  </h5>
                </Col>
                <Col>
                  <Flatpickr
                    className="form-control inputBox"
                    value={ProjectForm.end}
                    onChange={this.onChange.bind(this, ["end"])}
                    options={{dateFormat: "d-m-Y"}}
                  />
                </Col>
              </div>
            </Col>
          </Row>
        </FormGroup>
        <h6>
          {" "}
          <FormattedMessage id="project.buy.searchCriteria" />
        </h6>
        <FormGroup>
          <h5 className="headings left">
            <FormattedMessage id="property.type" />:
          </h5>
          {searchType.map((item, index) => {
            return (
              <div className="d-inline-block mr-2 customCheckbox" key={index}>
                <Checkbox
                  checked={
                    ProjectForm.search.property?.type.indexOf(item.value) != -1
                  }
                  color="primary"
                  icon={<Icon.Check className="vx-icon" size={16} />}
                  label={item.label}
                  value={item.value}
                  onChange={this.onChange.bind(this, [
                    "search",
                    "property",
                    "type",
                  ])}
                />
              </div>
            );
          })}
        </FormGroup>
        <FormGroup>
          <h5 className="headings">
            <FormattedMessage id="project.buy.searchArea" />
          </h5>
          <Select
            defaultValue={[userOptions[1], userOptions[3]]}
            isMulti
            name="colors"
            options={userOptions}
            className="React customeChip"
            classNamePrefix="select"
            value={userOptions}
            onChange={this.onChange.bind(this, ["search", "property", "zone"])}
          />
          <div className="d-inline-block text customCheckbox">
            <Checkbox
              color="primary"
              icon={<Icon.Check className="vx-icon" size={16} />}
              label="Extended to nearby municipalities"
              defaultChecked={false}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md="8">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.property.size" />:
              </h5>
              <input
                className="inputBox width"
                type="number"
                value={ProjectForm.search.property?.size}
                onChange={this.onChange.bind(this, [
                  "search",
                  "property",
                  "size",
                ])}
              />{" "}
              M<sup>2</sup>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md="4">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.property.rooms" />:
              </h5>
              <div className="">
                <Input
                  className="inputBox width"
                  type="number"
                  value={ProjectForm.search.property?.rooms}
                  onChange={this.onChange.bind(this, [
                    "search",
                    "property",
                    "rooms",
                  ])}
                />
              </div>
            </Col>
            <Col md="8">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.property.bedrooms" />:
              </h5>
              <Input
                className="inputBox width"
                type="number"
                value={ProjectForm.search.property?.bedrooms}
                onChange={this.onChange.bind(this, [
                  "search",
                  "property",
                  "bedrooms",
                ])}
              />
            </Col>
          </Row>
        </FormGroup>
        <Row>
          <Col sm="6">
            <FormGroup className="height">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.property.basement" />:
              </h5>
              {outdoorSpace1.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.property?.basement
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="basement"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "property",
                        "basement",
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
                <FormattedMessage id="project.search.property.outdoor" />:
              </h5>
              {outdoorSpace1.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value ===
                        ProjectForm.search?.property?.outdoorSpace.choice
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="outdoor"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "property",
                        "outdoorSpace",
                        "choice",
                      ])}
                    />
                  </div>
                );
              })}
              {ProjectForm.search.property?.outdoorSpace?.choice == 1 && (
                <div>
                  {outdoorSpace.map((item, index) => {
                    return (
                      <div
                        className="d-inline-block mr-2 customCheckbox workCheckbox"
                        key={index}
                      >
                        <Checkbox
                          color="primary"
                          checked={
                            ProjectForm.search.property.outdoorSpace.type.indexOf(
                              item.value
                            ) != -1
                          }
                          icon={<Icon.Check className="vx-icon" size={16} />}
                          label={item.label}
                          value={item.value}
                          onChange={this.onChange.bind(this, [
                            "search",
                            "property",
                            "outdoorSpace",
                            "type",
                          ])}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FormGroup className="height">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.property.groundfloor" />
              </h5>
              {outdoorSpace1.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.property?.groundfloor
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="groundFloor"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "property",
                        "groundfloor",
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
                <FormattedMessage id="project.search.property.work" />:
              </h5>
              {outdoorSpace1.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox "
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.property?.work.choice
                      }
                      color="primary"
                      className="origin-heading"
                      label={item.label}
                      value={item.value}
                      color="primary"
                      name="work"
                      onChange={this.onChange.bind(this, [
                        "search",
                        "property",
                        "work",
                        "choice",
                      ])}
                    />
                  </div>
                );
              })}
              {ProjectForm.search.property?.work?.choice == 1 && (
                <div>
                  {work.map((item, index) => {
                    return (
                      <div
                        className="d-inline-block mr-2 customCheckbox"
                        key={index}
                      >
                        <Checkbox
                          color="primary"
                          checked={
                            ProjectForm.search.property?.work?.type.indexOf(
                              item.value
                            ) != -1
                          }
                          icon={<Icon.Check className="vx-icon" size={16} />}
                          label={item.label}
                          value={item.value}
                          onChange={this.onChange.bind(this, [
                            "search",
                            "property",
                            "work",
                            "type",
                          ])}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FormGroup className="height">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.view" />:
              </h5>
              {views.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.property?.views.free
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="views"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "property",
                        "views",
                        "free",
                        "sunny",
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
                <FormattedMessage id="project.search.parking" />:
              </h5>
              {outdoorSpace1.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value ===
                        ProjectForm.search.property?.parking?.choice
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="parking"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "property",
                        "parking",
                        "choice",
                      ])}
                    />
                  </div>
                );
              })}
              {ProjectForm.search.property?.parking?.choice == 1 && (
                <div>
                  {parking.map((item, index) => {
                    return (
                      <div
                        className="d-inline-block mr-2 customCheckbox"
                        key={index}
                      >
                        <Checkbox
                          color="primary"
                          checked={
                            ProjectForm.search.property.parking?.type.indexOf(
                              item.value
                            ) != -1
                          }
                          icon={<Icon.Check className="vx-icon" size={16} />}
                          label={item.label}
                          value={item.value}
                          onChange={this.onChange.bind(this, [
                            "search",
                            "property",
                            "parking",
                            "type",
                          ])}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Row>
            <Col md="8">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.property.outdoorSpace.size" />:
              </h5>
              <input
                className="inputBox width"
                type="number"
                value={ProjectForm.search.property?.outdoorSpace?.size}
                onChange={this.onChange.bind(this, [
                  "search",
                  "property",
                  "outdoorSpace",
                  "size",
                ])}
              />
            </Col>
          </Row>
        </FormGroup>

        <h6>
          {" "}
          <FormattedMessage id="project.building" />
        </h6>
        <FormGroup>
          <Row>
            <Col xs="6">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.building.construction" />
              </h5>
              {constructions.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Checkbox
                      checked={
                        ProjectForm.search.building.construction.indexOf(
                          item.value
                        ) != -1
                      }
                      color="primary"
                      icon={<Icon.Check className="vx-icon" size={16} />}
                      label={item.label}
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "building",
                        "construction",
                      ])}
                    />
                  </div>
                );
              })}
            </Col>
            <Col xs="6">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.building.state" />
              </h5>
              {state.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Checkbox
                      checked={
                        ProjectForm.search.building.state?.state.indexOf(
                          item.value
                        ) != -1
                      }
                      color="primary"
                      icon={<Icon.Check className="vx-icon" size={16} />}
                      label={item.label}
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "building",
                        "state",
                        "state",
                      ])}
                    />
                  </div>
                );
              })}
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col sm="6">
              <h5 className="headings line-height min-width">
                {" "}
                <FormattedMessage id="project.search.building.floors.maxWithoutLift" />:
              </h5>
              <div className="">
                <Input
                  className="inputBox width"
                  type="number"
                  value={ProjectForm.search.building?.floors?.maxWithoutLift}
                  onChange={this.onChange.bind(this, [
                    "search",
                    "building",
                    "floors",
                    "maxWithoutLift",
                  ])}
                />
              </div>
            </Col>
            <Col sm="6">
              <h5 className="headings line-height min-width">
                {" "}
                <FormattedMessage id="project.search.building.heater" />:
              </h5>
              {heater.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Checkbox
                      defaultChecked={
                        ProjectForm.search?.building?.construction == item.value
                      }
                      color="primary"
                      icon={<Icon.Check className="vx-icon" size={16} />}
                      label={item.label}
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "building",
                        "heater",
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
                {" "}
                <FormattedMessage id="project.search.building.floors.last" />:
              </h5>
              {outdoorSpace1.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.building?.floors.last
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="last"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "building",
                        "floors",
                        "last",
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
                <FormattedMessage id="project.search.building.floors.lift" />
              </h5>
              {outdoorSpace1.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.building?.floors.lift
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="lift"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "building",
                        "floors",
                        "lift",
                      ])}
                    />
                  </div>
                );
              })}
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Row>
            <Col xs="6">
              <h5 className="headings line-height min-width">
                {" "}
                <FormattedMessage id="project.search.building.monthlyfees" />:
              </h5>
              <div className="">
                <Input
                  className="inputBox width"
                  type="number"
                  value={ProjectForm.search.building?.monthlyFees}
                  onChange={this.onChange.bind(this, [
                    "search",
                    "building",
                    "monthlyFees",
                  ])}
                />
              </div>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <h5 className="headings">
            <FormattedMessage id="project.search.building.state.comment" />:
          </h5>
          <Input
            type="textarea"
            placeholder="Placeholder"
            value={ProjectForm.search.building?.state?.comment}
            onChange={this.onChange.bind(this, [
              "search",
              "building",
              "state",
              "comment",
            ])}
          />
        </FormGroup>

        <h6>
          {" "}
          <FormattedMessage id="project.finance" />
        </h6>
        <FormGroup>
          <Row>
            <Col xs="6">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.finance.budget" />:
              </h5>
              <div className="dollar">
                <input
                  className="inputBox"
                  type="number"
                  value={ProjectForm.search.finance?.budget}
                  onChange={this.onChange.bind(this, [
                    "search",
                    "finance",
                    "budget",
                  ])}
                />
              </div>
            </Col>
            <Col xs="6">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.finance.mortgageNeeded" />
              </h5>
              {finance.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.finance?.mortgageNeeded
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="mortgageNeeded"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "finance",
                        "mortgageNeeded",
                      ])}
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
                {" "}
                <FormattedMessage id="project.search.finance.bankStudy" />
              </h5>
              {finance.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.finance?.bankStudy
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="bankStudy"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "finance",
                        "bankStudy",
                      ])}
                      disabled={
                        ProjectForm.search.finance.mortgageNeeded !== "true"
                      }
                    />
                  </div>
                );
              })}
            </Col>
            <Col xs="6">
              <h5 className="headings line-height min-width">
                <FormattedMessage id="project.search.finance.useOurPartner" />
              </h5>
              {finance.map((item, index) => {
                return (
                  <div
                    className="d-inline-block mr-2 customCheckbox"
                    key={index}
                  >
                    <Radio
                      defaultChecked={
                        item.value === ProjectForm.search?.finance?.useOurPartner
                      }
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      name="useOurPartner"
                      value={item.value}
                      onChange={this.onChange.bind(this, [
                        "search",
                        "finance",
                        "useOurPartner",
                      ])}
                      disabled={
                        ProjectForm.search.finance.mortgageNeeded !== "true"
                      }
                    />
                  </div>
                );
              })}
            </Col>
          </Row>
        </FormGroup>

        <FormGroup>
          <h5 className="headings">
            {" "}
            <FormattedMessage id="project.search.finance.comments" />:
          </h5>
          <Input
            type="textarea"
            placeholder="Placeholder"
            value={ProjectForm.search.finance.comments}
            onChange={this.onChange.bind(this, [
              "search",
              "finance",
              "comments",
            ])}
          />
        </FormGroup>
      </div>
    );
  }
}

export default PurchaseTab;
