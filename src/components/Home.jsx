import React from "react";
import { Link } from "react-router-dom";
import img from '../bundropimages/logo-black.png';

function Home() {
  return (
    <div>
      {/* <h1 style={headerStyle}>Thanks For Coming Back!</h1> */}
      <div style={{textAlign: "center", margin: "5%"}} >
      <img src={img} 
      alt=""
      className="big-logo"/>

    <h2>Welcome To The Best Burger Restaurant In The City</h2>
    <p>Please click on the menu to get your meal wihin the next 30 minutes</p>
      </div>
      <Link to="/Menu">
        <div style={{textAlign: "center", margin: "5%"}}>
          <button className="button">Menu</button>
          
        </div>
      </Link>
    </div>
  );
}

// const headerStyle = {
//   fontSize: 50,
//   color: "red",
//   textAlign: "center",
// };

export default Home;