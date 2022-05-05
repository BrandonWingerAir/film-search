import React from "react";

import NoImage from './no-image-placeholder.jpg';

const MediaCard = ({ mediaData }) => {
    return (
        <div className="media">
            <div>
                <p>{mediaData.Year}</p>
            </div>

            <div>
                <img src={mediaData.Poster !== 'N/A' ? mediaData.Poster : NoImage} alt={mediaData.Title}/>
            </div>

            <div>
                <span>{mediaData.Type}</span>
                <h3>{mediaData.Title}</h3>
            </div>
        </div>
    )
}

export default MediaCard;