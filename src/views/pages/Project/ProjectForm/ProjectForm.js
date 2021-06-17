import React from "react";
import {
  Form,
  Col,
  Row,
  FormGroup,
  Container,
} from "reactstrap";
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";
import Select from "react-select";
import { projectOrigins, projectTypes } from "../../../../redux/Constants";
import { FormattedMessage } from "react-intl";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy.js";
import * as Icon from "react-feather";
import ProjectDetailTabs from "./ProjectDetailTabs.js";
import { connect } from "react-redux";
import { apiGetClients } from "../../../../redux/api/ApiClients";

class ProjectForm extends React.Component {
  componentDidMount() {
    this.props.apiGetClients();
  }
  onChange(key, event) {
    if (event.value) {
      this.props.onChange(key, event.value);
    } else {
      this.props.onChange(key, event.target.value);
    }
  }
  options() {
    return this.props.client.clientList.map((suggestion) => ({
      value: suggestion._id,
      label: suggestion.name + " - " + suggestion.surname,
    }));
  }
  selectedClient() {
    if (Object.keys(this.props.client.detail).length) {
      return (
        this.props.client.detail.name + " " + this.props.client.detail.surname
      );
    } else {
      return "Select...";
    }
  }
  render() {
    let { ProjectForm } = this.props;
    return (
      <Form className="projectForm">
        <Container>
          <Row>
            <Col sm="12">
              <FormGroup>
                <h5 className="headings">
                  {" "}
                  <FormattedMessage id="project.sourceProject" />:
                </h5>
                {projectOrigins.map((item, index) => {
                  return (
                    <div className="d-inline-block mr-3" key={index}>
                      <Radio
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        value={item.value}
                        defaultChecked={ProjectForm.source === item.value}
                        name="source"
                        onChange={this.onChange.bind(this, ["source"])}
                      />
                    </div>
                  );
                })}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <h5 className="headings">
                  {" "}
                  <FormattedMessage id="client.typeProject" />
                </h5>
                {projectTypes.map((item, index) => {
                  return (
                    <div
                      className="d-inline-block mr-2 customCheckbox"
                      key={index}
                    >
                      <Checkbox
                        color="primary"
                        icon={<Icon.Check className="vx-icon" size={16} />}
                        label={item.label}
                        value={item.value}
                        onChange={this.onChange.bind(this, ["type"])}
                        checked={ProjectForm.type.indexOf(item.value) != -1}
                      />
                    </div>
                  );
                })}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <h5 className="headings">
                  <FormattedMessage id="client.client" />
                </h5>
                <div className="">
                  <Select
                    defaultValue={{ label: this.selectedClient() }}
                    name="client"
                    className="React customeChip "
                    classNamePrefix="select"
                    options={this.options()}
                    onChange={this.onChange.bind(this, ["clients"])}
                  />
                </div>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <ProjectDetailTabs {...this.props} />
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    project: state.project,
    properties: state.properties,
    client: state.client,
  };
};

const mapDispatchtoProps = {
  apiGetClients,
};
export default connect(mapStateToProps, mapDispatchtoProps)(ProjectForm);
