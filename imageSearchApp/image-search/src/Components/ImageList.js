import React, { Component } from 'react';

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="imageList">
                {
                    this.props.images.map(({ description, id, urls }) => {
                        return (
                            <img
                                key={id} 
                                src={urls.regular} 
                                alt={description}
                            />
                        );
                    })
                }
            </div>
        );
    };
};

export default ImageList;