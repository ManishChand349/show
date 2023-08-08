import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';



const ShowSummary = ({match}) => {
     const showId = match.param.id;
     const [show, setShow] = useState(null);
   
     useEffect(() => {
      async function getData(){
         const response = await fetch(`https://api.tvmaze.com/shows/${showId}`)
         const data = await response.json()
         console.log(data);
         setShow(data)
      }    
      getData()
         
     }, [showId]);
  return (
    <div>
      <h1>Show Summary</h1>
      {show && (
        <div>
          <h2>{show.name}</h2>
          <p>{show.summary}</p>
        </div>
      )}
      <Link to="/">Back to Show List</Link>
    </div>
  )
}

export default ShowSummary
