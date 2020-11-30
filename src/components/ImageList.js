import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
    const image = props.imagelist.map( (image) => {
        return( <ImageCard key={image.id} image={image} />);
    });

    return(
        <div className="image-list">
            {image}
        </div>
    );
};

export default ImageList;