import React from 'react'
import {auth,provider} from './firebase'
import Button from '@material-ui/core/Button'
import './Login.css'


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
      };
    return (
        
        <div className="signin" style={{ backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XXCiu9M79mUiIp-sTxspQwHaEc%26pid%3DApi&f=1")`}} >
            
                        
            <Button className="btn" onClick={signIn} variant="contained" color="primary">Sign In With Google</Button>
            
        </div>
    )
}

export default Login
