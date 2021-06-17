import React, { Component } from 'react'
import OwnBreadcrumb from "../../../components/OwnBreadcrumb/OwnBreadcrumb";
import { FormattedMessage } from "react-intl";
import * as Icon from "react-feather";
import { Button, Card , Row, Col, CardBody} from "reactstrap";
import OwnModal from "../../../components/OwnModal/OwnModal";
import { AgenciesForm } from "./AgenciesForm";

export class agenciesDetail extends Component {
    componentDidMount() {
        const agenciesId = this.props.match.params._id;
        this.props.apiGetAgenciesData(agenciesId);
        this.props.apiGetUsers();
      }
    getLinks() {
        let { agencies } = this.props;
        if (agencies.detail) {
          return [
            {
              link: "/agencies",
              render: <Icon.User />,
            },
            {
              render: agencies.detail.name,
            },
          ];
        }
      }
      editAgencies(){
        console.log(this.props)
        this.props.editAgencies(this.props.agencies.detail)
      }
      toggleAgenciesModal() {
        this.props.toggleAgenciesModal();
      }
      onSave(){
        const agenciesId = this.props.match.params._id
        this.props.apiUpdateAgencies(this.props.agencies.detail, agenciesId)
      }
    render() {
        const{agencies, user} = this.props
        return (
            
            <div>
        <div className="detailTopSec">
          <Row>
            <Col sm="2">
              <h1 className="client">
                <FormattedMessage id="agency.agency" defaultMessage="Clients" />
              </h1>
            </Col>
            <Col sm="4">
              <OwnBreadcrumb links={this.getLinks()} />
            </Col>
            <Col sm="6">
              <div className="rightBtnsCon">
                <Button color="white" className="relief-light" onClick={this.editAgencies.bind(this)}>
                  {" "}
                  <Icon.Edit2 size={14} className="mr-50" />
                  <FormattedMessage
                    id="user.edit"
                    defaultMessage="Client"
                  />{" "}
                </Button>
              </div>{" "}
            </Col>
          </Row>
        </div>
        <div className="userInfo">
          <Card>
           
            <Row>
              <Col>
                <CardBody className="marginLeft">
                  <div className="contactDetail">
                    <Col xs="2">
                      <h6>
                        {" "}
                        <FormattedMessage
                          id="agency.fullname"
                          defaultMessage="Clients"
                        />
                      </h6>
                    </Col>
                    <Col xs="8">
                      <span>{agencies.detail.name}</span>
                    </Col>
                  </div>
                  <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="agency.legalInfo"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{agencies.detail?.legalInfos}</span>
                      </Col>
                    </div>
                    <div className="contactDetail">
                      <Col xs="2">
                      <h6><FormattedMessage
                          id="agency.collaborators"
                          defaultMessage="Clients"
                        /></h6>
                      </Col>
                      <Col xs="8">
                      <span>{agencies.detail?.collaborators?.map(i =>i.full_name)}</span>
                      </Col>
                    </div>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </div>
        <OwnModal
              isOpen={agencies.isModalOpen}
              toggleModal={this.toggleAgenciesModal.bind(this)}
              heading={
                <FormattedMessage id="agency.agency" defaultMessage="Client" />
              }
              isSaving={agencies.isSaving}
              onSave={this.onSave.bind(this)}

            >
              <AgenciesForm
               user={user}
                agencies={agencies}
                agenciesForm={agencies.agenciesForm}
                onChange={this.props.onChangeFormAgencies}
                editAgencies={true}
              />
            </OwnModal>
      </div>
        )
    }
}

export default agenciesDetail
