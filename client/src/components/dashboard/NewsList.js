import React, { Component } from 'react'

export default class NewsList extends Component {
    constructor(){
        super();
        this.generateNews = this.generateNews.bind(this);        
    }

    generateNews(){
        let res = this.props.news.map(el =>
                <div className="news-item">
                    <div className="news-item-top">
                        <div className="author-block">
                            <div className="author-avatar avatar-block"></div>
                            <div className="author-name-block">{el.author.name}</div>
                        </div>
                        <div className="rates-block">
                            <div className="up"><i class="fa fa-arrow-up" aria-hidden="true"></i>{el.up}</div>
                            <div className="down"><i class="fa fa-arrow-down" aria-hidden="true"></i>
{el.down}</div>
                        </div>
                    </div>
                    <div className="news-item-bottom">
                        <div className="news-item-poster" style={ {backgroundImage: `url(${el.poster})`} }></div>
                        <div className="news-item-title">{el.title}</div>
                    </div>
                </div>   
        )
        console.log(res);
        return res;
    }

  render() {
    return (
      <div className="news-list">
        {this.generateNews()}
      </div>
    )
  }
}
