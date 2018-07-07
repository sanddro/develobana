import React, { Component } from 'react'

export default class Main extends Component {

  render() {
    return (
        <div className="add-news-pre">
        <div className="inner">
            <button className="add-news-btn" onClick={this.props.onClick}>
                Add news
            </button>
        </div>
    </div>
    )
  }
}
