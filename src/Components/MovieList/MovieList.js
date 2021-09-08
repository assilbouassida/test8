import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies}) => {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    )
}

export default MovieList
