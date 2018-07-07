import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';

class Register extends Component {
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

    this.props.register(registerInfo, this.props.history);
  }

  onChange(e) {
    let field = e.target.name;
    let val = e.target.value;
    this.setState({ [field]: val });
  }

  render() {
    const errors = this.props.errors || {};

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
            <div className={ "input-block" + (errors.firstname ? ' invalid' : '') }>
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
                  <div className="invalid-message">{errors.firstname}</div>
                </div>
              </div>
              <div className={ "input-block" + (errors.lastname ? ' invalid' : '') }>
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
                  <div className="invalid-message">{errors.lastname}</div>

                </div>
              </div>
              <div className={ "input-block" + (errors.mail ? ' invalid' : '') }>
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
                  <div className="invalid-message">{errors.mail}</div>
                </div>
              </div>
              <div className={ "input-block" + (errors.password ? ' invalid' : '') }>
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
                  <div className="invalid-message">{errors.password}</div>
                </div>
              </div>
              <div className={ "input-block" + (errors.password2 ? ' invalid' : '') }>
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
                  <div className="invalid-message">{errors.password2}</div>
                </div>
              </div>
              <div className="auth-btn-block">
                <input type="submit" value="Register" className="submit-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth, errors}) => ({
  auth,
  errors
});

export default  connect(mapStateToProps, { register })(withRouter(Register));