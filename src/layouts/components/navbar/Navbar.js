import React, {useEffect,Component} from "react"
import { Navbar } from "reactstrap"
import classnames from "classnames"
import NavbarBookmarks from "./NavbarBookmarks"
import NavbarUser from "./NavbarUser"
import userImg from "../../../assets/img/portrait/small/dummy_user.jpg"
import PlusIcon from './PlusIcon'
import { connect } from 'react-redux';

import {loadUser, logout} from '../../../redux/actions/auth'

const colorsArr = [ "primary", "danger", "success", "info", "warning", "dark"]
const navbarTypes = ["floating" , "static" , "sticky" , "hidden"]

export class ThemeNavbar extends Component {
  
  componentDidMount(){
    this.props.loadUser()
  }

  render(){
    let{client, project, properties, proposal} = this.props
    return (
      <React.Fragment>
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <Navbar
          className={classnames(
            "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow",
            {
              "navbar-light": this.props.navbarColor === "default" || !colorsArr.includes(this.props.navbarColor),
              "navbar-dark": colorsArr.includes(this.props.navbarColor),
              "bg-primary":
                this.props.navbarColor === "primary" && this.props.navbarType !== "static",
              "bg-danger":
                this.props.navbarColor === "danger" && this.props.navbarType !== "static",
              "bg-success":
                this.props.navbarColor === "success" && this.props.navbarType !== "static",
              "bg-info":
                this.props.navbarColor === "info" && this.props.navbarType !== "static",
              "bg-warning":
                this.props.navbarColor === "warning" && this.props.navbarType !== "static",
              "bg-dark":
                this.props.navbarColor === "dark" && this.props.navbarType !== "static",
              "d-none": this.props.navbarType === "hidden" && !this.props.horizontal,
              "floating-nav":
                (this.props.navbarType === "floating" && !this.props.horizontal) || (!navbarTypes.includes(this.props.navbarType) && !this.props.horizontal),
              "navbar-static-top":
                this.props.navbarType === "static" && !this.props.horizontal,
              "fixed-top": this.props.navbarType === "sticky" || this.props.horizontal,
              "scrolling": this.props.horizontal && this.props.scrolling

            }
          )}
        >
          <div className="navbar-wrapper">
            <div className="navbar-container content">
              <div
                className="navbar-collapse d-flex justify-content-between align-items-center"
                id="navbar-mobile"
              >
                <div className="bookmark-wrapper">
                  <NavbarBookmarks
                    sidebarVisibility={this.props.sidebarVisibility}
                    handleAppOverlay={this.props.handleAppOverlay}
                  />
                </div>
                {this.props.horizontal ? (
                  <div className="logo d-flex align-items-center">
                    <div className="brand-logo mr-50"></div>
                    <h2 className="text-primary brand-text mb-0">Vuexy</h2>
                  </div>
                ) : null}
                <PlusIcon client={client} project={project} properties={properties} proposal={proposal}/>
                <NavbarUser
                  handleAppOverlay={this.props.handleAppOverlay}
                  changeCurrentLang={this.props.changeCurrentLang}
                  userName={this.props.auth.login.user && this.props.auth.login.user.full_name}
                  userImg={ userImg }
                  {...this.props}
                />
               
              </div>
            </div>
          </div>
        </Navbar>
      </React.Fragment>
    )
  }
  
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    client:state.client,
    project:state.project,
    properties:state.properties,
    proposal:state.proposal
  };
};

const mapDispatchtoProps = {
    loadUser,
    logout
};


export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ThemeNavbar);

