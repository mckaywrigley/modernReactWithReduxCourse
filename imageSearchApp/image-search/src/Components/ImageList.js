import React, { Component } from 'react';
import './ImageList.scss';
import ImageCard from './ImageCard';

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
                    this.props.images.map(image => {
                        return (
                            <ImageCard
                                key={image.id} 
                                image={image}
                            />
                        );
                    })
                }
            </div>
        );
    };
};

export default ImageList;