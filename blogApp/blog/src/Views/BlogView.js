import React, { Component } from 'react';
import PostList from '../Components/PostList'

class BlogView extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <>
                <PostList />
            </>
        );
    };
}

export default BlogView;