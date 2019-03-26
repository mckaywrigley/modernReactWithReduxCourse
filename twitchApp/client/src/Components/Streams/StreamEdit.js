import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../Actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };
    
    render() {
        if (!this.props.stream) {
            return (
                <div>
                    Loading
                </div>
            )
        };

        return (
            <div>
                <p>{this.props.stream.title}</p>
                <p>{this.props.stream.description}</p>
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamEdit);