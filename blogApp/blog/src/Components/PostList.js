import React, { Component } from 'react';
import Post from './Post';
import './PostList.scss';

class PostList extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="postList">
                <Post name='Mckay' title='HTML' text='The noun of web-dev.'/>
                <Post name='Mckay' title='CSS' text='The adjective of web dev.'/>
                <Post name='Mckay' title='JavaScript' text='The verb of web dev.'/>
            </div>
        );
    };
};

export default PostList;