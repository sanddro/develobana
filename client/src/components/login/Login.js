import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { currentUser } from "../../helpers";

class Login extends Component {
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

  componentWillReceiveProps(){
    if(currentUser()){
      this.props.history.push('/news');
    }
  }

  async submitLoginForm(e){
    e.preventDefault();
    let loginInfo = {
      mail: this.state.mail,
      password: this.state.password,
    }
    this.props.login(loginInfo);
  }

  onChange(e) {
    let field = e.target.name;
    let val = e.target.value;
    this.setState({ [field]: val })
  }

  render() {
    const errors = this.props.errors;

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

const mapStateToProps = ({ auth, errors }) => ({
  auth,
  errors
});

export default connect(mapStateToProps, { login })(Login);