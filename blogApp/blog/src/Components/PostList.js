import React, { Component } from 'react';

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