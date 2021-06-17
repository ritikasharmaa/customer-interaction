import React from "react";
import AggridTable from "../../../../components/tables/aggrid/Aggrid";
import {
  projectColumnDefs,
  GoodsColumnDefs,
  projectColumnDefsProp,
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

const handleClick = (e, props, params, action) => {
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
      projectColumnDefsProp: [
        {
          headerName: "proposal.property",
          filter: false,
          width: 200,
          sortable: false,
          checkboxSelection: true,
          headerCheckboxSelection: true,
          suppressSizeToFit: true,
          valueGetter: function sumField(params) {
            return (
              params.data.buyingProject?.clients?.map((i) => i.name) +
              " " +
              params.data.buyingProject?.clients?.map((i) => i.surname)
            );
          },
        },
        {
          headerName: "proposal.proposedBy",
          field: "",
          filter: "false",
          width: 220,
          cellRenderer: function (params) {
            return `<span>${params.data.creator?.full_name}</span>`;
          },
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
          field: "action",
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

  onChange(key, event) {
    let { filter } = this.state;
    filter[key] = event.value;
    this.setState({ filter });
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
    // if (!filter.rejected) {
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
  onRejectedCheck = (e) => {
    this.setState({ rejected: !this.state.rejected });
  };
  render() {
    let { proposal } = this.props;
    let columnDef = this.state.projectColumnDefsProp.map((item) => {
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
              <FormattedMessage id="proposal.proposition" />
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
                onChange={this.onChange.bind(this, "user")}
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
                    <div className="dropdown ml-1 mb-1 d-inline-block">
                      <UncontrolledButtonDropdown className="buttonBtn">
                        <DropdownToggle color="white" caret>
                          Sort by Status
                          <Icon.ChevronDown size={15} />
                        </DropdownToggle>
                      </UncontrolledButtonDropdown>
                    </div>
                  </Col>
                </Row>
              </div>
              <AggridTable columnDefs={columnDef} data={this.getData()} />
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
