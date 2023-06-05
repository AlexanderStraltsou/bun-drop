import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Order({ selectedItems, removeFromOrder }) {

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedItems]);

  function calculateTotalPrice() {
    const totalPrice = selectedItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(totalPrice);
  }
    


    return (
        <div>
          <h2>Your Order:</h2>
          
          {selectedItems.length > 0 ? (
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
          )}
    
    <p>Total Price: {totalPrice} SEK </p>
        </div>
      );
    }

export default Order;
