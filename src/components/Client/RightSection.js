import React from "react";
import {
  Button,
} from "reactstrap";
import * as Icon from "react-feather";
import { FormattedMessage } from "react-intl";

class RightSection extends React.PureComponent {

  render() {
    let {detail} = this.props;
    return (
      <div className="rightBtnsCon">
        <Button
          color="white"
          className="relief-light pink"
          onClick={this.props.onDelete}
        >
          <Icon.Trash2 size={14} className="mr-50" />
          <span className="align-right"><FormattedMessage id="client.delete" /></span>
        </Button>

        <Button
          color="white"
          className="relief-light"
          onClick={this.props.onEdit}
        >
          <Icon.Edit2 size={14} className="mr-50" />
          <span className="align-right"><FormattedMessage id="client.edit" /></span>
        </Button>
      </div>
    );
  }
}
export default RightSection;
