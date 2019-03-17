import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
                <Comment name={'David'} text={'Great post!'}/>
                <Comment name={'Michael'} text={'Very insightful!'}/>
                <Comment name={'Joe'} text={'Wonderful read!'}/>
            </>
        );
    };
}

export default Post;