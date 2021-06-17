import React from "react";
import AggridTable from "../../../../components/tables/aggrid/Aggrid";
import {
  projectColumnDefs,
  GoodsColumnDefs,
} from "../../../../redux/Constants";
import { FormattedMessage, injectIntl } from "react-intl";

import * as Icon from "react-feather";
import {
  Row,
  Col,
  Input,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy.js";

const handleClick = (event, props, params, action) => {
  event.preventDefault();
  event.stopPropagation();
  props.apiUpdateProposals(action, params.data._id);
};
class Proposition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        user: this.props.auth.login.user._id,
        rejected: "rejected",
      },
      projectColumnDefs: [
        {
          headerName: "proposal.property",
          filter: false,
          width: 200,
          sortable: false,
          checkboxSelection: true,
          headerCheckboxSelection: true,
          suppressSizeToFit: true,
          cellRenderer: function (params) {
            return `${params.data.sellingProject?.property?.localisation?.address?.street} 
           
           <span class="propertyAddress">${params.data.sellingProject?.property?.localisation?.address?.postcode}</span> 
          
            <span class="propertyCity">${params.data.sellingProject?.property?.localisation?.address?.city}</span>`;
          },
        },
        {
          headerName: "proposal.proposedBy",
          field: "",
          filter: "agNumberColumnFilter",
          width: 220,
        },
        {
          headerName: "proposal.status",
          field: "status",
          filter: "agNumberColumnFilter",
          width: 200,
          wordWrap: true,
          cellRenderer: function (params) {
            return `<span class="color layout">${params.data.status}</span>`;
          },
        },

        {
          headerName: "proposal.action",
          field: "",
          width: 200,
          cellRendererFramework: function (params) {
            return (
              <div>
                <span>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={(e) => handleClick(e, props, params, "rejected")}
                  >
                    {" "}
                    <FormattedMessage
                      id="proposal.reject"
                      defaultMessage="Clients"
                    />{" "}
                  </Button>
                </span>
                <span style={{ marginLeft: "4px" }}>
                  <Button
                    color="success"
                    size="sm"
                    onClick={(e) => handleClick(e, props, params, "accepted")}
                  >
                    {" "}
                    <FormattedMessage
                      id="proposal.accept"
                      defaultMessage="Clients"
                    />{" "}
                  </Button>
                </span>
              </div>
            );
          },
        },
      ],
      rejected: false,
    };
  }
  componentDidMount() {
    const projectId = this.props.match.params._id;
    this.props.apiGetProposals(projectId);
  }
  getData() {
    let { proposal } = this.props;
    let { filter } = this.state;
    if (!proposal.proposalList.length) {
      return [];
    }

    let filterData;

    // if (filter.user === proposal.proposalList?.creator?._id) {
    //   return (filterData = proposal.proposalList);
    // }
    // if (filter.rejected === "rejected") {
    //   return (filterData = proposal.proposalList.filter((i) => {
    //     return i.status === "rejected";
    //   }));
    // }
    if (this.state.rejected) {
      filterData = proposal.proposalList.filter(
        (item) => item.status === "rejected"
      );
    } else {
      filterData = proposal.proposalList.filter(
        (item) => item.status !== "rejected"
      );
    }
    filterData = filterData.map((item) => {
      return {
        ...item,
        status: this.props.intl.formatMessage({
          id: "proposal." + item.status,
        }),
      };
    });
    return filterData;
  }
  onRowClicked(event, props) {
    this.props.history.push(`/projectsSell/${event.data.sellingProject._id}`);
  }

  onRejectedCheck = (e) => {
    this.setState({ rejected: !this.state.rejected });
  };
  render() {
    let { proposal } = this.props;
    let columnDef = this.state.projectColumnDefs.map((item) => {
      return {
        ...item,
        headerName: this.props.intl.formatMessage({ id: item.headerName }),
      };
    });

    return (
      <div className="proposition">
        <div className="heading">
          <h4>
            {" "}
            <FormattedMessage id="proposal.currentProposal" />
          </h4>
          <div className="createButton">
            <Button onClick={this.props.toggleProposalModal.bind(this)}>
              <Icon.Plus />
              <FormattedMessage
                id="proposal.proposition"
                defaultMessage="Clients"
              />
            </Button>
          </div>
        </div>
        <Card>
          <CardBody>
            <div className="customCheckbox">
              <Checkbox
                color="primary"
                icon={<Icon.Check className="vx-icon" size={16} />}
                label="My Proposals"
                defaultChecked={false}
              />
              {/* <Checkbox
                color="primary"
                icon={<Icon.Check className="vx-icon" size={16} />}
                label="Visits Without Offers"
                defaultChecked={false}
              /> */}
              <Checkbox
                color="primary"
                icon={<Icon.Check className="vx-icon" size={16} />}
                label="Show rejected Proposals"
                defaultChecked={false}
                onChange={(e) => this.onRejectedCheck(e)}
              />
            </div>

            <div className="proposaltable">
              <div className="customFilter">
                <Row>
                  <Col md="4">
                    <FormGroup className="position-relative has-icon-left">
                      <Input
                        className="inputs"
                        type="text"
                        placeholder="Search Here"
                      />
                      <div className="form-control-position">
                        <Icon.Search size={15} />
                      </div>
                      <div className="position-left">
                        <Icon.ChevronDown size={17} />
                      </div>
                    </FormGroup>
                  </Col>
                  {/* <Col md="4" className="text">
                    <span>7 Proposal Found</span>
                  </Col> */}
                  <Col md="4">
                    {/* <div className="dropdown ml-1 mb-1 d-inline-block">
                      <UncontrolledButtonDropdown className="buttonBtn">
                        <DropdownToggle color="white" caret>
                          Sort by Status
                          <Icon.ChevronDown size={15} />
                        </DropdownToggle>
                      </UncontrolledButtonDropdown>
                    </div> */}
                  </Col>
                </Row>
              </div>
              <AggridTable
                columnDefs={columnDef}
                data={this.getData()}
                onRowClicked={this.onRowClicked.bind(this)}
              />
            </div>
          </CardBody>
        </Card>
        {/* <div className="heading display">
          <h4>Potential Goods</h4>
		  <Card>
		  <CardBody>
		  <div>
          <p>
            List of goods meeting the search criteria of the purchase project
          </p>
        <div className="goodsTable">
          <AggridTable data={data2} columnDefs={GoodsColumnDefs} />
		  </div>
        </div>
		</CardBody>
		</Card>
      </div> */}
      </div>
    );
  }
}

export default injectIntl(Proposition);
