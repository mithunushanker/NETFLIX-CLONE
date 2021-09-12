import React from 'react'
import './Navbar.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Button from '@material-ui/core/Button'
import { auth } from './firebase';


function Navbar() {
  const scrool=()=>{
    window.scroll({top: 520,
      behavior: "smooth"})
  }
  const scrool1=()=>{
    window.scroll({top: 800,
      behavior: "smooth"})
  }
  const scrool2=()=>{
    window.scroll({top: 1100,
      behavior: "smooth"})
  }
  const scrool3=()=>{
    window.scroll({top: 1650,
      behavior: "smooth"})


    
  }
  const signOut = () => {
    auth.signOut();
  };
    return (
        <div className="container-fluid">
        <nav className="navbar navbar-expand-md">
          <img className="topimg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XXCiu9M79mUiIp-sTxspQwHaEc%26pid%3DApi&f=1"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
            <MenuRoundedIcon style={{ color: "white" }} />
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ml-auto mb-lg-0">
              <li className="nav-item"><h4 onClick={scrool} className="nav-link">Trending</h4></li>
              <li className="nav-item"><h4 onClick={scrool2} className="nav-link">Top Rated</h4></li>
              <li className="nav-item"><h4 onClick={scrool1} className="nav-link">Animation</h4></li>
              <li className="nav-item"><h4 onClick={scrool3} className="nav-link">Horror</h4></li>
              <Button onClick={signOut} variant="contained" color="primary" >LogOut</Button>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default Navbar
