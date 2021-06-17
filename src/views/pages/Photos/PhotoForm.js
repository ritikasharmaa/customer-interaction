import React, { Component } from "react";
import { Button, Form, Col, Row, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import { FormattedMessage } from "react-intl";
import { Active } from "../../../redux/Constants";
import Radio from "../../../components/@vuexy/radio/RadioVuexy";
import * as Icon from "react-feather";

const option = [
  {
    value: <FormattedMessage id="photo.client" />,
    label: "client",
  },
  {
    value: <FormattedMessage id="photo.agent" />,
    label: "agent",
  },
  {
    value: <FormattedMessage id="photo.pro" />,
    label: "pro",
  },
];
export class PhotoForm extends Component {
  onChange(key, event) {
    if (event.value) {
      this.props.onChange(key, event.value);
    }  else if (event.target.files) {
      let  file = URL.createObjectURL(event.target.files[0])
      this.props.onChange(key, file);
    } else {
      this.props.onChange(key, event.target.value);
    }
  }
 
  render() {
     console.log(this.props, "photo");
    let { photoForm } = this.props;
    return (
      <div className="photoForm">
        <Form>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Row>
                  <Col md="6" sm="12" className="column-right">
                    <h5 className="headings">
                      <FormattedMessage id="photo.label" />
                    </h5>
                    <Input
                      className="input-fields"
                      type="text"
                      name="name"
                      placeholder="name"
                      value={photoForm?.label}
                      onChange={this.onChange.bind(this, "label")}
                    />
                  </Col>
                  <Col md="6" sm="12" className="column-left">
                    <h5 className="headings">
                      <FormattedMessage id="photo.type" />
                    </h5>
                    <Select
                      defaultValue={{ label: photoForm?.type }}
                      className="React creator-heading input-fields"
                      classNamePrefix="select"
                      options={option}
                      onChange={this.onChange.bind(this, "type")}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col sm="12">
              <FormGroup>
                <Row>
                  <Col md="6" sm="12" className="column-right">
                    <h5 className="headings">
                      <FormattedMessage id="photo.active" />
                    </h5>
                    {Active.map((item, index) => {
                      return (
                        <div
                          className="d-inline-block mr-2 customCheckbox"
                          key={index}
                        >
                          <Radio
                            className="origin-heading"
                            label={item.label}
                            color="primary"
                            name="active"
                            value={item.value}
                            onChange={this.onChange.bind(this, "active")}
                          />
                        </div>
                      );
                    })}
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Row>
                  <Col md="6" className="column-right">
                    <label
                      className="btn btn-primary"
                      htmlFor="upload-image"
                      color="primary"
                    >
                      <Icon.UploadCloud />
                      <span style={{ marginLeft: "6px" }}>
                        {" "}
                        <FormattedMessage id="photo.uploadImage" />
                      </span>
                      <input
                        type="file"
                        id="upload-image"
                        hidden
                        multiple
                        onChange={this.onChange.bind(this, "file")}
                      />
                    </label>
                  </Col>
                  <Col md="6">
                    <span>
                      {" "}
                      {/* <Button.Ripple
                            className="btn-icon rounded-circle btnIcon rippleButton"
                            color="secondary"  onClick={this.triggerDelete.bind(this,index)}
                          >
                            <Icon.X  />
                          </Button.Ripple> */}
                      {photoForm.file && <img className="imageSell" src={photoForm.file} />}
                    </span>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default PhotoForm;
