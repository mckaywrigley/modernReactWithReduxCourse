import React, { Component } from 'react'

class SeasonView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lon: null,
            errMessage: ''
        };
    };

    componentDidMount() {
        console.log('Component did mount!');
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
    };

    componentDidUpdate() {
        console.log('Component did update!');
        
    };


    render() {
        const getSeason = (lat, month) => {
            if(month > 2 && month < 9) {
                return lat > 0 ? 'Summer' : 'Winter';
            } else {
                return lat > 0 ? 'Winter' : 'Summer';
            }
        };

        const season = getSeason(this.state.lat, new Date().getMonth());

         if(this.state.errMessage && !this.state.lat) {
            return (
                <div className="seasonView">
                <h1>Seasons</h1>
                <p>{this.state.errMessage}</p>
            </div>
            );
        }

        if(!this.state.errMessage && this.state.lat) {
            return (
                <div className="seasonView">
                <h1>Seasons</h1>
                <p>Latitude: {this.state.lat}</p>
                <p>Longitude: {this.state.lon}</p>
                <p>Season: {season}</p>
            </div>
            );
        }

        if(!this.state.errMessage && !this.state.lat) {
            return (
                <div className="seasonView">
                    <p>Loading...</p>
                </div>
            );
        }
    };
};

export default SeasonView;