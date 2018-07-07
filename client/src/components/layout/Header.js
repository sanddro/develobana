import React, { Component } from 'react'
import { currentUser } from '../../helpers';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      searchActive: false
    }
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(e) {
    if(document.querySelector('.search-block:hover')){
      e.preventDefault();
    }
  }

  render() {
    const user = currentUser();
    if(!user.avatar){
      user.avatar = '../../img/default-avatar.png';
    }
    const avatarStyle = {
      backgroundImage: `url(${user.avatar})`
    };
    return (
      <div className="header">
          <div tabIndex="-1"
           onBlur={this.onBlur} 
           className={"search-block" + (this.state.searchActive ? ' active': '') } 
           >
            <div className="search-icon">
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="search-input-block">
                <input type="text" className="search-input"/>
            </div>
          </div>
          <div className="logo-block"><Link to='/news'/> </div>
          <div className="nav-block">
            <Link to="/profile">
              <span>Hello {user.firstname}!</span>
            </Link>
            <div className="avatar-block"></div>
          </div>
      </div>
    )
  }
}
