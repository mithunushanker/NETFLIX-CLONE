import React, {useState,useEffect} from 'react';
import axios from './axios';
import requests  from './requests';
import './BAnner.css'

const urulu='https://image.tmdb.org/t/p/w500'

function Banner() {
    
    const [moive,setmoive] = useState([]);
    useEffect(() =>{
      async function fetchData(){
        const request = await axios.get(requests.fetchAnimation);
        setmoive(request.data.results[Math.floor(Math.random()) * request.data.results.length]
        );
        return request;
      }
      fetchData()
    },[]);
    
    
    return (
                  <header className="Banner"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${urulu}${moive?.backdrop_path}")`,
                    backgroundPosition: "center center"
                  }}
                  >
                    <div className="banner_container" >
                    <h1 className="banner_title"  >
                    {moive?.title || moive?.name || moive?.original_name}
                  </h1>

                  <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                  </div>
                  <h1 className="banner_description">{moive?.overview}</h1>
                </div>
                <div className="banner--fadeBottom" />
                </header>
    )
}

export default Banner;
