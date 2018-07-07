import React, { Component } from 'react'
import { currentUser } from '../../helpers';

export default class AddNewsForm extends Component {
    render() {
        const user = currentUser();
        return (
            <div className="news-form-wrapper">
                <div className="news-form">
                <div className="close-btn" onClick={this.props.close}><i className="fa fa-times"></i></div>

                    <div className="news-form-top">
                        <i className="fa fa-pencil" aria-hidden="true"></i>Add news
            </div>
                    <div className="news-form-middle">
                        <div className="author-avatar avatar-block"></div>
                        <input type="text" placeholder="Add description for your news" className="description-input" />
                    </div>
                    <div className="news-form-bottom">
                        <div className="news-form-bottom-btns">
                            <div className="news-form-bottom-btn">
                                <i className="fa fa-pencil"></i>Title
                            </div> 
                            <div className="news-form-bottom-btn">
                                <i className="fa fa-pencil"></i>Image
                            </div> 
                            <div className="news-form-bottom-btn">
                                <i className="fa fa-pencil"></i>Link
                            </div>
                        </div>
                    </div>
                    <div className="news-form-submit">
                        Add
            </div>
                </div>
            </div>
        )
    }
}
