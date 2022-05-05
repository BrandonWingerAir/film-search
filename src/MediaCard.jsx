import React from "react";

import NoImage from './no-image-placeholder.jpg';

const MediaCard = ({ media }) => {
    return (
        <div className="media">
            <div>
                <p>{media.Year}</p>
            </div>

            <div>
                <img src={media.Poster !== 'N/A' ? media.Poster : NoImage} alt={media.Title}/>
            </div>

            <div>
                <span>{media.Type}</span>
                <h3>{media.Title}</h3>
            </div>
        </div>
    )
}

export default MediaCard;