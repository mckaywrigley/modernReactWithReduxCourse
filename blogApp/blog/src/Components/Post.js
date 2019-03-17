import React, { Component } from 'react';
import Comment from './Comment';
import './Post.scss';

class Post extends Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return (
            <div className="post">
                <h2>{this.props.title}</h2>
                <h3>By {this.props.name}</h3>
                <p>{this.props.text}</p>
                <Comment name='David' text='Great post!'/>
                <Comment name='Michael' text='Very insightful!'/>
                <Comment name='Joe' text='Wonderful read!'/>
            </div>
        );
    };
}

export default Post;