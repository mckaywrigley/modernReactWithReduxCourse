import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="">
                PostList
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
};

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);