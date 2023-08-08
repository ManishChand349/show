import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';



const URL = 'https://api.tvmaze.com/search/shows?q=all'

const ShowList = () => {
     const [shows, setShows] = useState([]);
     useEffect(() => {
        async function getData(){
          const response = await fetch(URL);
          const data = await response.json()
          console.log(data);
          setShows(data)
        }
        getData()
     },[]);
  return (
    <div>
      <h1>TV Show List</h1>
      <ul>
        {shows.map(showData => (
          <li key={showData.show.id}>
            <Link to={`/show/${showData.show.id}`}>
              {showData.show.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowList
