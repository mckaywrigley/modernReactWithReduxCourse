import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <>
                <Post name={'Mckay'} title={'HTML'} text={'The noun of web-dev.'}/>
                <Post name={'Mckay'} title={'CSS'} text={'The adjective of web dev.'}/>
                <Post name={'Mckay'} title={'JavaScript'} text={'The verb of web dev.'}/>
            </>
        );
    };
};

export default PostList;