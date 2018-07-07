import React, { Component } from 'react'
import AddNews from './AddNews';
import NewsList from './NewsList';
import { fetchGet } from '../../helpers';
import Footer from '../layout/Footer';
import AddNewsForm from './AddNewsForm';



export default class Main extends Component {

    constructor(){
        super();
        this.state = {
            addNewsMode: false,
            news: []
        }
        this.addNewsClick = this.addNewsClick.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    async componentWillMount(){
        // const response = await  fetchGet('/api/news');
        // const data = await response.json();
        const data = [
            {
                author: { name: 'Vache Katsadze'},
                title: "Machine Learning....",
                poster: "https://cdn-images-1.medium.com/max/1024/1*3CXBOKNql4qS-lRyHT3pqw.png",
                up: 45,
                down: 3
            },
            {
                author: { name: 'Vache Katsadze'},
                title: "Machine Learning....",
                poster: "https://cdn-images-1.medium.com/max/1024/1*3CXBOKNql4qS-lRyHT3pqw.png",
                up: 45,
                down: 3
            },
            {
                author: { name: 'Vache Katsadze'},
                title: "Machine Learning....",
                poster: "https://cdn-images-1.medium.com/max/1024/1*3CXBOKNql4qS-lRyHT3pqw.png",
                up: 45,
                down: 3
            },
            {
                author: {name: 'Vache Katsadze'},
                title: "Machine Learning....",
                poster: "https://cdn-images-1.medium.com/max/1024/1*3CXBOKNql4qS-lRyHT3pqw.png",
                up: 45,
                down: 3
            },
            {
                author: {name: 'Vache Katsadze'},
                title: "Machine Learning....",
                poster: "https://cdn-images-1.medium.com/max/1024/1*3CXBOKNql4qS-lRyHT3pqw.png",
                up: 45,
                down: 3
            },
            {
                author: {name: 'Vache Katsadze'},
                title: "Machine Learning....",
                poster: "https://cdn-images-1.medium.com/max/1024/1*3CXBOKNql4qS-lRyHT3pqw.png",
                up: 45,
                down: 3
            }
        ]
        this.setState({ news: data });
    }

    addNewsClick(){
        this.setState({
            addNewsMode: true
        });
    }

    closeForm(){
        this.setState({
            addNewsMode: false
        });
    }


    render() {
        return (
        <div className="main-block">
            { this.state.addNewsMode ?
              <AddNewsForm close={this.closeForm}/>
             : 
            <AddNews onClick={this.addNewsClick} /> }
            
            <NewsList news={this.state.news} />
            <Footer />
        </div>
        )
    }
}
