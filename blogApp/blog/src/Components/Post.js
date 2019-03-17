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
                <h2>Post Title</h2>
                <p>Post Content</p>
                <Comment name={'David'} text={'Great post!'}/>
                <Comment name={'Michael'} text={'Very insightful!'}/>
                <Comment name={'Joe'} text={'Wonderful read!'}/>
            </>
        );
    };
}

export default Post;