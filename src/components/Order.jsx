import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Order({ selectedItems, removeFromOrder }) {

    


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
    
          
        </div>
      );
    }

export default Order;
