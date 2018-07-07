import React, { Component } from 'react'
import { currentUser } from '../../helpers';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ProfileInner from './ProfileInner';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProfileInner />
        <Footer />
      </div>
    )
  }
}
