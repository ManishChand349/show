
import React, { useState, useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';
import './ShowSummary.css'



const ShowSummary = () => {
  const {id} = useParams();
     const showId = id;
     const [show, setShow] = useState(null);
   
     useEffect(() => {
      async function getData(){
         const response = await fetch(`https://api.tvmaze.com/shows/${showId}`)
         const data = await response.json()
         setShow(data)
      }    
      getData()
         
     }, [showId]);

  return (
    <div>
      <h1>Show Summary</h1>
      {show && (
        <div className='show-summary'>

          <h2>{show.name}</h2>
          <p>{show.summary}</p>

        </div>
      
      )}
      <div className='footer'>

      <button className='btn'>Booking</button>
      <Link className='btn' to="/">Back to Show List</Link>
      </div>
    </div>
  )
}
export default ShowSummary
