import React from 'react'

const MovieCard = ({item}) => {
    const {id,title,body} = item;
  return (
   <div className="card">
    <div className="card-info">
        <p className='card-id'>{id}</p>
        <p>{body.substr(0,150)}</p>
        <p>{title.substr(0,15)}</p>
    </div>
   </div>
  )
}

export default MovieCard