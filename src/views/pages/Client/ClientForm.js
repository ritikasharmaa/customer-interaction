import React from "react";
import { Button, Form, Col, Row, FormGroup, Input, Label } from "reactstrap";
import Radio from "../../../components/@vuexy/radio/RadioVuexy";
import Select from "react-select";
import { origins } from "../../../redux/Constants";
import { FormattedMessage } from "react-intl";
import NumberFormat from 'react-number-format';

const userOptions = [
  { value: "", label: ""},
  { value: "user 1", label: "user 1" },
  { value: "user 2", label: "user 2" },
];

class ClientForm extends React.Component {
  onChange(key, event) {
    if (event.value) {
      this.props.onChange(key, event.value);
    }  else {
      this.props.onChange(key, event.target.value);
    }
  };
  render() {
    let { clientForm } = this.props;
    return (
      <Form>
        <Row>
          <Col sm="12" className="column-right">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.origin"/></h5>
              {origins.map((item, index) => {
                return (
                  <div className="d-inline-block mr-3" key={index}>
                    <Radio
                      className="origin-heading"
                      label={item.label}
                      color="primary"
                      value={item.value}
                      defaultChecked={clientForm.origin === item.value}
                      name="origin"
                      onChange={this.onChange.bind(this, "origin")}
                    />
                  </div>
                );
              })}
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Row>
                <Col md="6" sm="12" className="column-right">
                  <h5 className="headings"><FormattedMessage id="client.creator"/></h5>
                  <Input 
                    value={this.props.userName}
                    onChange={this.onChange.bind(this)}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>

        <div>
          <span className="separator">IDENTIFICTION CLIENT</span>
        </div>
        <br></br>
        <Row>
          <Col md="6" sm="12" className="column-right">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.firstname"/></h5>
              <Input
                className="input-fields"
                type="text"
                name="name"
                id="nameMulti"
                placeholder="First Name"
                onChange={this.onChange.bind(this, "name")}
                value={clientForm.name}
              />
            </FormGroup>
          </Col>
          <Col md="6" sm="12" className="column-left">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.lastname"/></h5>
              <Input
                className="input-fields"
                type="text"
                name="surname"
                id="surNameMulti"
                placeholder="Last Name"
                onChange={this.onChange.bind(this, "surname")}
                value={clientForm.surname}
              />
            </FormGroup>
          </Col>
          <Col md="6" sm="12" className="column-right">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.tel"/></h5>
              <NumberFormat format="+(##) ####-######" 
              className="input-fields form-control"
              allowEmptyFormatting 
              onChange={this.onChange.bind(this, "phone")}
              value={clientForm.phone} />
            </FormGroup>
          </Col>
          <Col md="6" sm="12" className="column-left">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.email"/></h5>
              <Input
                className="input-fields"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.onChange.bind(this, "email")}
                value={clientForm.email}
              />
            </FormGroup>
          </Col>
          <Col md="6" sm="12" className="column-right">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.address"/></h5>
              <Input
                className="input-fields "
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                onChange={this.onChange.bind(this, "address")}
                value={clientForm.address}
              />
            </FormGroup>
          </Col>
          <Col md="6" sm="12" className="column-left">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.postcode"/></h5>
              <Input
                className="input-fields"
                type="text"
                name="postCode"
                id="postCode"
                placeholder="PostCode"
                onChange={this.onChange.bind(this, "postcode")}
                value={clientForm.postcode}
              />
            </FormGroup>
          </Col>
          <Col md="6" sm="12" className="column-right">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.city"/></h5>
              <Input
                className="input-fields"
                type="text"
                name="city"
                id="city"
                placeholder="City"
                onChange={this.onChange.bind(this, "city")}
                value={clientForm.city}
              />
            </FormGroup>
          </Col>
          <Col md="6" sm="12" className="column-left">
            <FormGroup>
              <h5 className="headings"><FormattedMessage id="client.country"/></h5>
              <Input
                className="input-fields"
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                onChange={this.onChange.bind(this, "country")}
                value={clientForm.country}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default ClientForm ;
