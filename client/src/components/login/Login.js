import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      mail: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
  }

  async submitLoginForm(e){
    e.preventDefault();
    let loginInfo = {
      mail: this.state.mail,
      password: this.state.password,
    }
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    });
    const data = await response.json();
    if(!response.ok){
      this.setState({ errors: data });
    } else {
      this.setState({ errors: {} })
    }
  }

  onChange(e) {
    let field = e.target.name;
    let val = e.target.value;
    this.setState({ [field]: val })
  }

  render() {
    return (
      <div className="auth-content">
        <div className="auth-link-block">
          <Link to="/register">Register</Link>
        </div>
        <div className={"auth-block normal"}>
          <div className="auth-title">
            <span>Login</span>
          </div>
          <div className="auth-form">
            <form onSubmit={this.submitLoginForm}>
            <div className={ "input-block" + (this.state.errors.mail ? ' invalid' : '') }>
                <div className="inner">
                  <input
                    type="text"
                    className={"my-input" + (this.state.mail ? " filled" : "")}
                    name="mail"
                    autoComplete="off"
                    value={this.state.mail}
                    onChange={this.onChange}
                  />
                  <span className="input-placeholder">Mail</span>
                  <div className="input-border" />
                  <div className="invalid-message">{this.state.errors.mail}</div>
                </div>
              </div>
              <div className={ "input-block" + (this.state.errors.password ? ' invalid' : '') }>
                <div className="inner">
                  <input
                    type="password"
                    className={"my-input" + (this.state.password ? " filled" : "")}
                    name="password"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <span className="input-placeholder">Password</span>
                  <div className="input-border" />
                  <div className="invalid-message">{this.state.errors.password}</div>
                </div>
              </div>
              <div className="auth-btn-block">
                <input type="submit" value="Log in" className="submit-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
