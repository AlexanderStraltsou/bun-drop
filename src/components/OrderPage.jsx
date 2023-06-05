import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function OrderPage() {
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);



  useEffect(() => {
    const cart = getLocalStorage();
    setOrderItems(cart);
  }, []);


  useEffect(() => {
    calculateTotalPrice();
  }, [orderItems]);



  function getLocalStorage() {
    const cart = localStorage.getItem("cart");

    if (!cart || cart.length <= 0) {
      return [];
    } else {
      return JSON.parse(cart);
    }

    

    
  }

  function removeFromOrder(itemId) {
    const updatedOrderItems = orderItems.map((item) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setOrderItems(updatedOrderItems);
    updateLocalStorage(updatedOrderItems);
  }


  // function removeFromOrder(itemId) {
  //   const updatedOrderItems = orderItems.filter((item) => item.id !== itemId);
  //   setOrderItems(updatedOrderItems);
  //   updateLocalStorage(updatedOrderItems);
  // }

  function updateLocalStorage(items) {
    localStorage.setItem("cart", JSON.stringify(items));
  }

  function calculateTotalPrice() {
    const totalPrice = orderItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }


  return (
    <div className="payment">
      <h1>Your Order</h1>
      {orderItems.map((item) => (
        <li key={item.id}>{item.name } x {item.quantity} pcs
        <button type="submit" className='remove-button' onClick={() => removeFromOrder(item.id)}
        ><FontAwesomeIcon icon={faTrash} /></button>
    </li> 
    
      ))}
      <p>Total Price: {totalPrice} SEK </p>



<Link to="/Payment">
        <div style={{textAlign: "center", margin: "5%"}}>
          <button className="button">Go To Payment</button>
          
        </div>
      </Link>
    </div>
  );
}

export default OrderPage;



/* {selectedItems.length > 0 ? (
            <ul className='order-list'>
              {selectedItems.map((item) => (
                <li key={item.id}>{item.name } x {item.quantity} pcs
                <button type="submit" className='remove-button' onClick={() => removeFromOrder(item.id)}
                ><FontAwesomeIcon icon={faTrash} /></button>
            </li>
              ))}
            </ul>
          ) : (
            <p>No items added to the order.</p>
          )} */


          // <div key={item.id}>
        //   <h3>{item.name}</h3>
        //   <p>Price: {item.price}</p>
        //   <p>Quantity: {item.quantity}</p>
          // <button onClick={() => removeFromOrder(item.id)}>Remove</button>
          
        // </div>