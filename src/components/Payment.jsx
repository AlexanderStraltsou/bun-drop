import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Payment() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [city, setCity] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!name || !address || !houseNumber || !city || !mobileNumber || !paymentMethod) {
      alert('Please fill in all the fields.');
      return;
    }

  
    setName('');
    setAddress('');
    setHouseNumber('');
    setCity('');
    setMobileNumber('');
    setPaymentMethod('');
  };

  return (
    <div className='payment'>
      <h2>Please fill in your address and choose a payment method:</h2>

      <form onSubmit={handleSubmit}>
        <label>
        <br />
        <br />
          Name:
          <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />

        <label>
          Address:
          <br />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />

        <label>
          House Number:
          <br />
          <input type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
        </label>
        <br />

        <label>
          City:
          <br />
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <br />

        <label>
        
          Mobile Number:
          <br />
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <br />

        <label>
          Payment Method:
          <div>
            <label>
              <input
                type="radio"
                value="swish"
                checked={paymentMethod === 'swish'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Swish
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Card
            </label>
          </div>
        </label>
        <br />

        <button className='button' type="submit"><Link to="/Confirmation">Place Order</Link></button>
      </form>
    </div>
  );
}

export default Payment;

