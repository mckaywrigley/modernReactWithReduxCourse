import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <>
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
            </>
        );
    };
};

export default Comment;