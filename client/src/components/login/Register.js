import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(){
    super();
    this.state = {
      firstname: '',
      lastname: '',
      mail: '',
      password: '',
      password2: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.submitRegisterForm = this.submitRegisterForm.bind(this);
  }

  async submitRegisterForm(e){
    e.preventDefault();
    let registerInfo = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      mail: this.state.mail,
      password: this.state.password,
      password2: this.state.password2
    }
    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerInfo)
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
    this.setState({ [field]: val });
  }

  render() {
    return (
      <div className="auth-content register">
        <div className="auth-link-block">
          <Link to="/login">Login</Link>
        </div>
        <div className={"auth-block normal"}>
          <div className="auth-title">
            <span>Register</span>
          </div>
          <div className="auth-form">
            <form onSubmit={this.submitRegisterForm}>
            <div className={ "input-block" + (this.state.errors.firstname ? ' invalid' : '') }>
                <div className="inner">
                  <input
                    type="text"
                    className={"my-input" + (this.state.firstname ? " filled" : "")}
                    name="firstname"
                    autoComplete="off"
                    value={this.state.firstname}
                    onChange={this.onChange}
                  />
                  <span className="input-placeholder">Firstname</span>
                  <div className="input-border" />
                  <div className="invalid-message">{this.state.errors.firstname}</div>
                </div>
              </div>
              <div className={ "input-block" + (this.state.errors.lastname ? ' invalid' : '') }>
                <div className="inner">
                  <input
                    type="text"
                    className={"my-input" + (this.state.lastname ? " filled" : "")}
                    name="lastname"
                    autoComplete="off"
                    value={this.state.lastname}
                    onChange={this.onChange}
                  />
                  <span className="input-placeholder">Lastname</span>
                  <div className="input-border" />
                  <div className="invalid-message">{this.state.errors.lastname}</div>

                </div>
              </div>
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
              <div className={ "input-block" + (this.state.errors.password2 ? ' invalid' : '') }>
                <div className="inner">
                  <input
                    type="password"
                    className={"my-input" + (this.state.password2 ? " filled" : "")}
                    name="password2"
                    autoComplete="off"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  <span className="input-placeholder">Confirm Password</span>
                  <div className="input-border" />
                  <div className="invalid-message">{this.state.errors.password2}</div>
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
