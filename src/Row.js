import React,{useState,useEffect} from 'react'
import axios from './axios';
import './Row.css'

function Row({title,fetchUrl}) {
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
    return (
            
        <div>
            <h2>{title}</h2>
            <div className="posters" >
            {moives.map(moive=>(
                
                
                <img className="moiveposters" key={moive.id} src={(urulu)+(moive.poster_path)} alt={moive.title} />
                
            )
            )}
            </div>
        </div>
    )
}

export default Row;
