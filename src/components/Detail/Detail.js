import React from 'react'
import { data } from '../Movies/ListOfFilm'
import { useParams } from 'react-router-dom'
import '../Detail/Detail.css'

export default function Detail() {
  
    const userName = useParams();
  const movie = data.find(obj => {
    return obj.id == userName.id;
  });
  //  let cost = movie.cost.toLocaleString();
   return(
    <div className='container'>
     <div className='product-card'>
    	<div className='badge'>{movie.name}</div>
    	<div className='product-tumb'>
    		<img src={ `../${movie.img}`} alt=''/>
    	</div>
    	<div className='product-details'>
      		<p>{movie.infor}</p>
      		<div className='product-bottom-details'></div>
    	</div>
  </div>
</div>
   )
  
  
}
