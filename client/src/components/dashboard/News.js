import React, { Component } from 'react'
import Header from '../layout/Header';
import Main from './Main';

export default class News extends Component {
  render() {
    return (
      <div className="news-page">
        <Header />
        <Main />
      </div>
    )
  }
}
