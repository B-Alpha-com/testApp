import React from 'react';
import "./Styling.css";

const Movie = ({Title,Year,Poster}) => {
    return (
        <div style={{backgroundImage: `url(${Poster})`}} className="movie">
            <span>{Title}</span>
        </div>
    );
};

export default Movie;