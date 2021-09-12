import React,{useState,useEffect}  from 'react'
import axios from './axios'
import "./Detailed.css"
import requests from './requests'

function Detailed({fetchUrl}) {
    const urulu='https://image.tmdb.org/t/p/w500'
    const[moives,setMoives] = useState([])
    useEffect(() =>{
      async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMoives(request.data.results)
      return request;
    }
    fetchData()
    },[fetchUrl]);
    console.table(moives)
    return (
        <div className="detailed">
            <div className="d">
              <div className="d1">
              {moives.map(moive=>(
                <center>
                  <img className="image" src={(urulu)+(moive.poster_path)}></img>
                  </center>))}
              </div>
            </div>  
              
        </div>

    )
}

export default Detailed
