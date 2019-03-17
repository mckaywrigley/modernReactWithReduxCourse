import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <>
                <Post />
                <Post />
                <Post />
            </>
        );
    };
};

export default PostList;