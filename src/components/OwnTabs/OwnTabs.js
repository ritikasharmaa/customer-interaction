import React from "react";
import {
  TabContent,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  Badge,
  Col,
  Row,
  Button,
} from "reactstrap";
import classnames from "classnames";

class OwnTabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }

  toggle = (tab) => {
    if (this.state.active !== tab) {
      this.setState({ active: tab });
    }
  };

  render() {
    return (
      <>
        <Nav
          tabs
          className={`navTabs nav-left tabPanel ${this.props.classNames}`}
        >
          {this.props.tabsData.map((item, index) => {
            return (
              <NavItem key={index}>
                <NavLink
                  className={classnames({
                    active: this.state.active === index + 1,
                  })}
                  onClick={() => {
                    this.toggle(index + 1);
                  }}
                  disabled={item.disabled}
                >
                  <span className={item.className}>
                    <i className={item.icon} />
                    {item.tabTitle}

                    {item.badge &&
                      <Badge className="badgePill badgeIcon" pill color="primary">
                        {item.badge}
                      </Badge>
                    }
                  </span>
                </NavLink>
                {item.button && 
                  <Button className={item.buttonClass} onClick={item.onClick}>
                    {item.buttonIcon}
                    {item.button}
                  </Button>
                }
              </NavItem>
            );
          })}
        </Nav>
          <TabContent activeTab={this.state.active}>
          {this.props.tabsData.map((item, index) => {
            return (
              <TabPane tabId={index + 1} key={index}>
                {item.tabComponent}
              </TabPane>
            );
          })}
        </TabContent>
    
      </>
    );
  }
}
export default OwnTabs;
