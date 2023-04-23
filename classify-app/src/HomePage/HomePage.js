import React from "react"
import "./HomePage.css"
import { Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container">
          <div className="logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/30fy97xhmp8-153%3A30?alt=media&token=7049c365-b265-4847-9d5c-e4d2e763fa0c"
              alt="Logo"
              className="logo-image"
            />
            <div className="buttons">
            <button className="sign-up"><Link to="/signup">Sign Up</Link></button>
              <button className="log-in">Log In</button>
            </div>
          </div>
        </div>
      )
  };
  
  export default HomePage;
