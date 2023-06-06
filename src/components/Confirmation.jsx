import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


function Confirmation() {

    const paymentInfo = JSON.parse(localStorage.getItem('paymentInfo'));
    // const cart = localStorage.getItem("cart");
    const cart = JSON.parse(localStorage.getItem('cart'));




    const getRandomTime = () => {
        const min = 15; 
        const max = 45; 
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };




  return (
    <div>

      
      
      <br />
      <br />



      {/* <h1
        style={{ fontSize: 55, textAlign: "center"}}
      >
        Confirmation!
      </h1> */}
      
      <h2 style={{ fontSize: 40, textAlign: "center"}} >Thank You For Your Order</h2>

      <div style={{textAlign: "center"}}>
      <FontAwesomeIcon icon={faCircleCheck} beat size="2xl" />

      <br />
      
      <br />
      <h3 style={{textAlign: "center"}}>Your order will be delivered within the next {getRandomTime()} minutes. Please, keep your appartment windows open!</h3>
      
      <div>
      <br />
                <h3>Your Order:</h3>
                    {cart.map((item) => (
                        <p key={item.id}>
                            {item.name} x {item.quantity} pcs
                        </p>
                    ))}
                
            </div>
</div >



      <div className='payment'>
      {paymentInfo && (
        <>
          <h3>Delivery & Payment Information:</h3>
          <br />
          <p>Name: {paymentInfo.name}</p>
          <p>Address: {paymentInfo.address}</p>
          <p>House Number: {paymentInfo.houseNumber}</p>
          <p>City: {paymentInfo.city}</p>
          <p>Mobile Number: {paymentInfo.mobileNumber}</p>
          <p>Payment Method: {paymentInfo.paymentMethod}</p>
        </>
      )}
      </div>  

        


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