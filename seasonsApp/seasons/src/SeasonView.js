import React, { Component } from 'react';

class SeasonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lon: null,
            errMessage: ''
        };
    };

    render() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ 
                    lat: position.coords.latitude, 
                    lon: position.coords.longitude
                });
            },
            (err) => {
                this.setState({ errMessage: err.message });
            }
        );

        return (
            <div className="seasonView">
                <h1>Seasons</h1>
                <p>Latitude: {this.state.lat}</p>
                <p>Longitude: {this.state.lon}</p>
            </div>
        );
    };
};

export default SeasonView;