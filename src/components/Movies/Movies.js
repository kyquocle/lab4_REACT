import React, { useState } from 'react'
import { data } from './ListOfFilm'
import '../Movies/Movies.css'
import { Link } from 'react-router-dom'
export default function Movies() {

    const [movie, setMovie] = useState([])
    return (

        <div className='container'>

            {data.map((movie) => (

                <div className='column' key={movie.id}>
                    <div className='card'>
                        <img src={movie.img} />
                        <h3> {movie.name} </h3>
                        <p className='title'> Year: {movie.year} </p>
                        <p className='title'> Nation: {movie.nation} </p>
                        <Link to={`detail/${movie.id}`}>
                            <button>Detail</button>
                        </Link>
                    </div>

                </div>
            ))}
        </div>
    )
}
