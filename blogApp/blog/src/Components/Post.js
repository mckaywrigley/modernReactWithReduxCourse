import React, { Component } from 'react';

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
                <Comment />
                <Comment />
                <Comment />
            </>
        );
    };
}

export default Post;