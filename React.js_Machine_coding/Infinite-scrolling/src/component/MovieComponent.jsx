import React from 'react'
import MovieCard from './MovieCard'

const MovieComponent = ({movieinfo}) => {
  return (
     <div className="wrapper">
        <div className="container">
            <h1>List of cards</h1>
            <div className="grid grid-three-column">
                {
                    movieinfo.map((item)=>(
                        <MovieCard key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
     </div>
  )
}

export default MovieComponent