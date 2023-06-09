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
        } else {
          return null; 
        }
      }
      return item;
    });
    const filteredOrderItems = updatedOrderItems.filter((item) => item !== null);
    setOrderItems(filteredOrderItems);
    updateLocalStorage(filteredOrderItems);
  }


  function setQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
      removeFromOrder(itemId); 
    } else {
      const updatedOrderItems = orderItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setOrderItems(updatedOrderItems);
      updateLocalStorage(updatedOrderItems);
    }
  }


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
    
    <div>

<Link to="/Menu">
        <div style={{textAlign: "left", margin: "2%"}}>
          <button className="button">Go Back</button>
          
        </div>
      </Link>


      <h1 className="payment">Your Order</h1>
      <br />
      <div className="orderpage">
      {orderItems.map((item) => (
        <li  key={item.id}>{item.name } x {item.quantity} pcs
        <button type="submit" className='r-button' onClick={() => removeFromOrder(item.id)}
        ><FontAwesomeIcon icon={faTrash} /></button>
        <button type="button" className='quantity-button' onClick={() => setQuantity(item.id, item.quantity - 1)}>-</button>
            <button type="button" className='quantity-button' onClick={() => setQuantity(item.id, item.quantity + 1)}>+</button>
    </li> 
    
    
      ))}
      </div>
      <p className="payment">Total Price: {totalPrice} SEK </p>



<Link to="/Payment">
        <div style={{textAlign: "center", margin: "5%"}}>
          <button className="button">Go To Payment</button>
          
        </div>
      </Link>
    </div>
  );
}

export default OrderPage;

