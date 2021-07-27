import React, { useEffect, useState } from 'react';
import "./Styling.css";
import Category from './Category';

const Search = () => {
    const [categories, setCategories] = useState([]);
    const [term, setTerm] = useState('bat');
    
    const handleSearch = () => {
        fetch(`http://www.omdbapi.com/?s=${term}&apikey=bf39529`)
        .then(async response => {
            const cats = {}
            const data = await response.json();
            const movies = data['Search'];
            if(movies.length > 0){
                movies.forEach(movie => {
                    if(movie.Type in cats){
                        cats[movie.Type].movies.push(movie)
                    } else {
                        cats[movie.Type] = {
                            catName: movie.Type,
                            movies: [movie]
                        }
                    }
                });
            }
            setCategories(Object.values(cats))
        })
    };
    
    const handleEnter =(e)=>{
        if(e.key ==="Enter"){
            handleSearch();
        }
    }

    useEffect(() => {
        handleSearch()
    }, []);

    return (
        <>
        <div className="search">
            <p className="searchText">Search</p>
            <input type="text" className="input" onChange={(e)=>{setTerm(e.target.value)}} onKeyPress={(e)=>handleEnter(e)}/>
            <div>
                {categories.map(cat => (
                <Category {...cat}/>
            ))}
            </div>
        </div>    
        </>
    );
};

export default Search;