import React from 'react';
import './imagelist.css';
import ImageCard from './imagecard';
const imageslist = (props) => {

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });


    return (

        <div className="image-list">{images}</div>
    );

};
export default imageslist;