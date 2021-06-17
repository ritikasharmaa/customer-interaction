import React, { Component } from "react";
import { Button, Form, Col, Row, FormGroup, Input, Label } from "reactstrap";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
export class UserForm extends Component {
 
  onChange(key, event) {
    this.props.onChange(key, event.target.value);
  }
  render() {
    const { userForm } = this.props;
    return (
      <div>
        <div className="agenciesForm">
          <Form>
            <FormGroup row>
              <Col md="3" className="heading">
                <span>
                  <h5 className="headings">
                    <FormattedMessage id="agency.name" />
                  </h5>
                </span>
              </Col>
              <Col md="7">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={userForm?.name}
                  onChange={this.onChange.bind(this, "name")}
                />
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default UserForm;
