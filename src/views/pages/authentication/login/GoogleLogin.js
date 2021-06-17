import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import {Button} from "reactstrap";
import * as Icon from "react-feather";

export class GoogleLoginAuth extends Component {

  signup = (res) => {
    console.log(res, "res")
    this.props.ApiLoginWithGoogle(res.accessToken)    
  }
  
  onerror = (err) => {
    console.log(err, "err")
  }
  render() {
    return (
      <React.Fragment>
        <GoogleLogin
              clientId="1024899071118-2lfnl93qn79vgeedkhn355fercp9mkhq.apps.googleusercontent.com"
          onSuccess={this.signup}
          onFailure={this.onerror} 
          render={renderProps => (
            <Button.Ripple onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn-google" color="">
              <i className="fab fa-google"></i>
            </Button.Ripple>
          )}
        ></GoogleLogin>
      </React.Fragment>
    );
  }
}

export default GoogleLoginAuth;
