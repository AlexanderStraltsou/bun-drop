import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Confirmation() {

    const getRandomTime = () => {
        const min = 15; 
        const max = 45; 
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };


  return (
    <div>
      <h1
        style={{ fontSize: 55, textAlign: "center"}}
      >
        Confirmation!
      </h1>
      <div style={{textAlign: "center"}}>
      <FontAwesomeIcon icon={faCircleCheck} beat size="2xl" />
</div >
      <h2 style={{ fontSize: 40, textAlign: "center"}} >Thank You For Your Order</h2>
      
      
      <h3 style={{textAlign: "center"}}>Your order will be delivered within the next {getRandomTime()} minutes. Please, keep your appartment windows open!</h3>
      
      <div style={{textAlign: "center", margin: "5%"}}>
      <img 
        src={"https://www.drupal4u.org/sites/default/files/2022-03/Grayscale-and-Black%2520and-White-Google-Maps.jpg"}
        alt=""
      />

      </div>
      

    </div>
  );
}

export default Confirmation;