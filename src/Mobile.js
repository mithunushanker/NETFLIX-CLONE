import React from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Detailed from './Detailed'
import requests from './requests'
import Banner from './Banner'

function Mobile() {
    
    return (
         
        <div>
            <div style={{
                backgroundColor:'black',
                border: '5px solid'
                
            }}><center><a className="btn btn-primary" href="/"><button className="btn btn-primary">DESKTOP VIEW</button></a></center></div>
            
            <Banner/>
      <Detailed fetchUrl={requests.fetchTrending} />
      <Detailed fetchUrl={requests.fetchAnimation} />
      <Detailed fetchUrl={requests.fetchTopRated} />
      <Detailed fetchUrl={requests.fetchSciencefiction}/>
      <Detailed fetchUrl={requests.fetchHorrorMovies}/>
      <Detailed fetchUrl={requests.fetchRomanceMovies}/>
      <Detailed fetchUrl={requests.fetchComedyMovies}/>
      <Detailed fetchUrl={requests.fetchActionMovies} />
      <Detailed fetchUrl={requests.fetchThriller}/>
      <Detailed fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}

export default Mobile
