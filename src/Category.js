import React from 'react';
import Movie from "./Movie";
import "./Styling.css";

const Category = ({catName, movies}) => {
    return (
        <div className="movies-container">
            <div>
                {catName}
            </div>
            <div className="movies">
                {movies.map(movie => {
                    return <Movie {...movie} />;
                })}
            </div>
        </div>
    );
};

export default Category;