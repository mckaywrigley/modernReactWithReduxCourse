import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
    constructor() {
        super();
        this.state = {

        };
    };

    render() {
        return (
            <div className="comment">
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
            </div>
        );
    };
};

export default Comment;