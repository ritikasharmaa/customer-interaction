import React from "react"
import { CustomInput } from "reactstrap"
import { Settings, X } from "react-feather"
import classnames from "classnames"
import PerfectScrollbar from "react-perfect-scrollbar"
import { ContextLayout } from "../../../utility/context/Layout"
import "../../../assets/scss/components/customizer.scss"



class Customizer extends React.Component {
  state = {
    activeNavbar: this.props.activeNavbar,
    navbarType: null,
    footerType: null,
    menuTheme: null,
    collapsedSidebar: null
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.navbarType !== state.navbarType ||
      props.footerType !== state.footerType ||
      props.menuTheme !== state.menuTheme ||
      props.activeMode !== state.activeMode ||
      props.sidebarState !== state.collapsedSidebar
    ) {
      return {
        activeNavbar: props.activeNavbar,
        navbarType: props.navbarType,
        footerType: props.footerType,
        menuTheme: props.menuTheme,
        activeMode: props.activeMode,
        collapsedSidebar: props.sidebarState
      }
    }
    // Return null if the state hasn't changed
    return null
  }

  handleNavbarChange = color => {
    this.props.changeNavbar(color)
    this.setState({
      activeNavbar: color
    })
  }

  componentDidMount() {
    this.setState({
      navbarType: this.props.navbarType,
      footerType: this.props.footerType,
      menuTheme: this.props.menuTheme,
      activeMode: this.props.activeMode,
      collapseSidebar: this.props.sidebarState
    })
  }

  render() {
    const {
      activeNavbar,
      navbarType,
      footerType,
      menuTheme,
      activeMode,
      collapsedSidebar
    } = this.state
    return (
      <ContextLayout.Consumer>
        {context => {
          return (
            <div
              className={classnames("customizer d-none d-md-block", {
                open: this.props.customizerState === true
              })}
            >
              <div className="header d-flex justify-content-between px-2 pt-2">
                <div className="title">
                  <h4 className="text-uppercase mb-0">{this.props.heading}</h4>
                  <small>{this.props.subheading}</small>
                </div>
                <div
                  className="close-icon cursor-pointer"
                  onClick={() => this.props.handleCustomizer(false)}
                >
                  <X size={24} />
                </div>
              </div>
              <hr />
              <PerfectScrollbar
                options={{
                  wheelPropagation: false
                }}
                className="customizer-content p-2"
              >
                {this.props.child}
              </PerfectScrollbar>
            </div>
          )
        }}
      </ContextLayout.Consumer>
    )
  }
}

export default Customizer
