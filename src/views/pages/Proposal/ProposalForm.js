import React, { Component } from "react";
import { Button, Form, Col, Row, FormGroup, Input, Label } from "reactstrap";
import { connect } from "react-redux";
import Radio from "../../../components/@vuexy/radio/RadioVuexy";
import Select from "react-select";
import { type } from "../../../redux/Constants";
import { FormattedMessage } from "react-intl";
import { apiGetClients } from "../../../redux/api/ApiClients";
import { apiGetProject } from "../../../redux/api/ApiProject";
const userOptions = [
  { value: "city1", label: <FormattedMessage id="city1" /> },
  { value: "city2", label: "city2" },
  { value: "postcode", label: "postcode" },
];
export class ProposalForm extends Component {
  componentDidMount() {
    this.props.apiGetClients();
    this.props.apiGetProject();
  }
  onChange(key, event) {
    console.log(event.value);
    if (event.value) {
      this.props.onChange(key, event.value);
    } else {
      this.props.onChange(key, event.target.value);
    }
  }

  clientList() {
    return this.props.client.clientList.map((suggestion) => ({
      value: suggestion._id,
      label: suggestion.name + "  " + suggestion.surname,
    }));
  }
  buyList() {
    return this.props.project.projectList
      .filter(
        (item) =>
          item.type === "buy" &&
          item.clients.findIndex(
            (i) => i._id === this.props.proposal.proposalForm.client
          ) !== -1 
      )
      .map((suggestion) => ({
        value: suggestion._id,
        label:
          suggestion.search?.property?.rooms +
          " " +
          " rooms " +
          " - " +
          " " +
          suggestion.search?.finance?.budget +
          " " +
          " € ",
      }));
  }
  sellList() {
    return this.props.project.projectList
      .filter((item) => item.type === "sell")
      .map((suggestion) => ({
        value: suggestion._id,
        label:
          suggestion.property?.localisation?.address?.street +
          " - " +
          suggestion.property?.localisation?.address?.city,
      }));
  }
  selectedClient() {
    if (this.props.project.detailProject.clients &&this.props.project.detailProject.type==="buy" ) {
      return (
        this.props.project.detailProject.clients[0].name +
        " " +
        this.props.project.detailProject.clients[0].surname
      );
    } else {
      return 'Select....';
    }
  }
  valueClient(){
   return this.props.project.detailProject.clients[0]._id 
  }
  selectedBuy(){
    if (this.props.project.detailProject.type==="buy" ) {
      return (
        this.props.project.detailProject.search?.property?.rooms +
        " " +
          " rooms " +
          " - " +
          " " +
          this.props.project.detailProject.search?.finance?.budget +
          " " +
          " € "
      );
    } else {
      return 'Select....';
    }
  
  }
  selectedSell(){
    if (this.props.project.detailProject.type==="sell" ) {
      return (
        this.props.project.detailProject.property?.localisation?.address?.street +
        " - " +
        this.props.project.detailProject.property?.localisation?.address?.city
      );
    } else {
      return 'Select....';
    }
  }
 
  render() {
    let { proposalForm } = this.props;
    console.log(this.props, "proposal");
    return (
      <div className="proposalForm">
        <Form>
          <Row>
            <Col sm="12" className="column-right">
              <FormGroup>
                <h5 className="headings">
                  <FormattedMessage id="proposal.type" />
                </h5>
                {type.map((item, index) => {
                  return (
                    <div className="d-inline-block mr-3" key={index}>
                      <Radio
                        defaultChecked={item.value === proposalForm.type}
                        className="origin-heading"
                        label={item.label}
                        color="primary"
                        value={item.value}
                        name="status"
                        onChange={this.onChange.bind(this, "type")}
                      />
                    </div>
                  );
                })}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Row>
                  <Col md="6" sm="12" className="column-right">
                    <h5 className="headings">
                      <FormattedMessage id="proposal.creator" />
                    </h5>
                    <Input value={this.props.userName} />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="4" sm="4" className="column-right">
              <FormGroup>
                <h5 className="headings">
                  <FormattedMessage id="client.client" />
                </h5>
                <Select
                  defaultValue={{ label: this.selectedClient(), value: this.valueClient() }}
                  className="React creator-heading input-fields"
                  classNamePrefix="select"
                  options={this.clientList()}
                  onChange={this.onChange.bind(this, "client")}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="6">
              <FormGroup>
                <h5 className="headings">
                  <FormattedMessage id="project.buyingProject" />
                </h5>
                <Select
                defaultValue={{ label: this.selectedBuy(), value: this.selectedBuy()}}
                  className="React creator-heading input-fields"
                  classNamePrefix="select"
                  name="user"
                  options={this.buyList()}
                  onChange={this.onChange.bind(this, "buyingProject")}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="4" sm="4" className="column-right">
              <FormGroup>
                <h5 className="headings">
                  <FormattedMessage id="project.sellingProject" />
                </h5>
                <Select
                defaultValue={{label:this.selectedSell(), value:this.selectedSell()}}
                  className="React creator-heading input-fields"
                  classNamePrefix="select"
                  name="user"
                  options={this.sellList()}
                  onChange={this.onChange.bind(this, "sellingProject")}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
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
  apiGetProject,
};
export default connect(mapStateToProps, mapDispatchtoProps)(ProposalForm);
