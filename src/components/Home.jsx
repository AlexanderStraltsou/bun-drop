import React from "react";
import { Link } from "react-router-dom";
import img from '../bundropimages/logo-black.png';

function Home() {
  return (
    <div>
      
      <div style={{textAlign: "center", margin: "5%"}} >
      <img src={img} 
      alt=""
      className="big-logo"/>
      <Link to="/Menu">
        <div style={{textAlign: "center", margin: "2%"}}>
          <button className="button">Menu</button>
          
        </div>
      </Link>

    <h2>Welcome To The Best Burger Restaurant In The City</h2>
    <p>Please click on the menu to get your meal wihin the next 30 minutes</p>
      </div>
      
    </div>
  );
}


export default Home;