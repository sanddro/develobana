import React, { Component } from 'react'
import { currentUser } from '../../helpers';

export default class ProfileInner extends Component {
  render() {
      const user = currentUser();
    return (
      <div class="profile-block">
        <div className="profile-info">
            <div className="overview">
                <div className="avatar-block"></div>
                <div className="info">
                    <div className="name">{ user.firstname + " " + user.lastname }</div>
                    <div className="location"><i className="fa fa-map-marker"></i> Georgia, tbilisi</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
