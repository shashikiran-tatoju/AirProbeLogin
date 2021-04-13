import React, { Component } from "react";
import "../login/login.css";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Logincontainer">
          <div className="leftLoginContainer">
              <p></p>

        <form onSubmit={this.login} className="form-signin">
            <h2>&nbsp;</h2>
          <h1>&nbsp;</h1>

          <div className="row">
            <div className="col">
                <label  className="loginLabel">Email</label>
              <input
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
              <div className="inputpswd">
              <label className="loginLabel2">Password</label>  <a className="forgotPwd">Forgot Password?</a>
              <input
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
              </div>
              <input type="submit" value="Login" />
            </div>
          </div>
          {/* <p>user_id === "admin" and user_password === "123"</p> */}
        </form>
        </div>

        <div className="rightLoginContainer">

            <image  className="bannerimage"></image>
        </div>
      </div>
    );
  }
}
export default Login;
