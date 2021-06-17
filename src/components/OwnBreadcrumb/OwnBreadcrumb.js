import React from "react";
import {
  BreadcrumbItem,
  Breadcrumb
} from "reactstrap";

import { Link } from "react-router-dom";

class OwnBreadcrumb extends React.PureComponent {

  render() {
    let {links} = this.props;
    return (
      <Breadcrumb>
        {links && links.length && links.map((item, index)=>{
          return  <BreadcrumbItem className="bread-crumbs" key={index}>
                    {item.link ? 
                      <Link to={item.link}>
                        {item.render}
                      </Link>
                      :
                      <span className="client-namee">
                        {item.render}
                      </span>
                    }
                  </BreadcrumbItem>
        })}
      </Breadcrumb>
    );
  }
}
export default OwnBreadcrumb;
