import './App.css';
import Row from './Row';
import request from './requests';
import Banner from './Banner';
import Navbar from './Navbar';
import Login from './Login';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";



//api 815dc76237d3517692bbd2bcdab99ef

function App() {
  const [user] = useAuthState(auth);
  return (
    
   <div className="App">
     {user ? (
       <div>
      <Navbar/>
      <Banner/>
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
      <Row title="Animation Moives" fetchUrl={request.fetchAnimation} />
      <Row title="Top rated" fetchUrl={request.fetchTopRated} />
      <Row title="Science Fiction Moives" fetchUrl={request.fetchSciencefiction}/>
      <Row title="Horror Moives" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romantic Moives" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Comedy Moives" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Action Moives" fetchUrl={request.fetchActionMovies} />
      <Row title="Thriller MOives" fetchUrl={request.fetchThriller}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      </div>
      ) : (
        <div className="btn" >
        <Login />
        </div>
      )}

       {/*<div style={{
                backgroundColor:'black',
                border: '5px solid'
                
            }}><center><a className="btn btn-primary"  style={{
                
            }}href="/mobile"><button className="btn btn-primary">MOBILE VIEW</button></a></center></div>*/}
      
     
     
      
      
      
      
    </div>
  );
}

export default App;
