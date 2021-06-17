import React, { Component } from "react";
import AggridTable from "../../../components/tables/aggrid/Aggrid";
import { projectMainColumnDefs } from "../../../redux/Constants";
import { FormattedMessage } from "react-intl";
import OwnBreadcrumb from '../../../components/OwnBreadcrumb/OwnBreadcrumb'
import * as Icon from "react-feather";
import { Button } from "reactstrap";
import Filters from "../../../components/Client/Filters"
import Customizer from "../../../components/@vuexy/customizer/Customizer"
import ProjectFilter from "../../../components/Project/ProjectFilter"


let data = [
  {
    name:'John Doe', 
    budget: 250000, 
    type: 'Appartment', 
    prop: 4, 
    status: 'Offer', 
    visits: 6, 
    offers: 1
  }
]

export class Projects extends Component {
  state = {
    filter: {
      searchText: ''
    },
    modal: false
  }

  getLinks() {
    return [
      {
        link: '/projects',
        render:  <Icon.Share2 size={18} />
      }
    ]
  }

   onChange(key, event){
    let {filter} = this.state;
    filter[key] = event.target.value
    this.setState({filter})
  }

  customFilters(){
    return <Filters onChange={this.onChange.bind(this)} filter={this.state.filter} />
  }

  render() {
    return(
      <div className="projects common">
        <div className="detailTopSec">
          <h1 className="client"><FormattedMessage id="project.buyProject" defaultMessage="Clients" /></h1>
          <OwnBreadcrumb links={this.getLinks()} />
          <div className="rightBtnsCon">
            <Button className="filterButton" onClick={() => this.setState({modal:true})}>
              <Icon.AlignCenter/>
              Filter(2)
            </Button>
          </div>
        </div>
        <div className="subDetailCon">
          <ul>
            <li>Total Clients</li>
            <li>Seller</li>
            <li>Buyers</li>
          </ul>
        </div>
        <AggridTable
          data={data}
          columnDefs={projectMainColumnDefs}
          // onRowClicked={this.onRowClicked.bind(this)}
          customFilters={this.customFilters()}
          paginationAutoPageSize={true}
        />
        <Customizer 
          customizerState={this.state.modal} 
          handleCustomizer={()=> this.setState({modal: false})} 
          child={<ProjectFilter/>}
          heading="Filters - Client"
          subheading="1345 clients found"
        />
      </div>
    )
  }
}

export default Projects;
