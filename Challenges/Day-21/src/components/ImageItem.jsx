import React from 'react';

const ImageItem = ({ title, url }) => {
    return ( 
        <div>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    );
}
 
export default ImageItem;