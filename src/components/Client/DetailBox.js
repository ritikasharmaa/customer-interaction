import React from "react";
import {
  Button,
  Row,
  Col
} from "reactstrap";
import * as Icon from "react-feather";
import { FormattedMessage } from "react-intl";

class DetailBox extends React.PureComponent {

  render() {
    let {detail} = this.props;
    return (
      <div className="clientDetilBox">
        <div className="upperSection">
          <div className="leftsection">
            <Row>
              <Col>
                <div className="clientDetail minwidth">
                  <h6> <FormattedMessage id="client.firstname" /></h6>
                  <h5>{detail.name}</h5>
                </div>
                <div className="clientDetail minwidth">
                  <h6><FormattedMessage id="client.lastname" /></h6>
                  <h5>{detail.surname}</h5>
                </div>
              </Col>
              <Col>
                <div className="clientDetail minwidth">
                  <h6><FormattedMessage id="client.tel" /></h6>
                  <h5>{detail.phone}</h5>
                </div>
                <div className="clientDetail minwidth">
                  <h6><FormattedMessage id="client.mail" /></h6>
                  <h5>{detail.email}</h5>
                </div>
              </Col>
            </Row>
          </div>
          {/* <div className="rightsection">
            <div className="rightsectionButton">
              <button><Icon.Share2 size="12" className="iconShare" /> Purchase</button>
              <button><Icon.Share2 size="12" className="iconShare" /> Credit</button>
              <button><Icon.Share2 size="12" className="iconShare" /> Works</button>
            </div>
            <ul className="buttonsRipple">
              <li className="">
                <Button.Ripple
                  className="btn-icon rounded-circle btnIcon"
                  color="primary"
                >
                  <Icon.Mail />
                </Button.Ripple>
              </li>
              <li>
                <Button.Ripple
                  className=" btn-icon rounded-circle btnIcon"
                  color="primary"
                >
                  <Icon.Phone />
                </Button.Ripple>
              </li>
              <li>
                <Button.Ripple
                  className=" btn-icon rounded-circle btnIcon"
                  color="primary"
                >
                  <Icon.MessageSquare />
                </Button.Ripple>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}
export default DetailBox;
