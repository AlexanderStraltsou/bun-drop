import React, { useState } from 'react';
import { Link } from "react-router-dom";
import swishIcon from '../bundropimages/Swish_(payment)-Logo.wine.png';
import cardIcon from '../bundropimages/png-clipart-visa-and-master-cards-mastercard-money-foothills-florist-business-visa-visa-mastercard-text-service.png';



function Payment() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [city, setCity] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (name.length < 2 || address.length < 2 || isNaN(houseNumber) || houseNumber.length <1 || city.length < 1 || mobileNumber.length < 2 || isNaN(mobileNumber) || !paymentMethod || (paymentMethod === 'Card' &&
    (cardNumber.length < 1 ||
      expiryDate.length < 1 ||
      cvv.length < 3 ||
      isNaN(cardNumber) ||
      isNaN(expiryDate) ||
      isNaN(cvv)))
) 
    {
      setErrorMessage('Please fill in all the fields correctly.');
      return;
    }

    setErrorMessage('');

    const paymentInfo = {
      name,
      address,
      houseNumber,
      city,
      mobileNumber,
      paymentMethod
    };
  
    localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));

  
    setName('');
    setAddress('');
    setHouseNumber('');
    setCity('');
    setMobileNumber('');
    setPaymentMethod('');
    setCVV('');
    setCardNumber('');
    setExpiryDate('');
    setAddressConfirmed(true);
  };

  return (
    <div className='payment'>
      

      {!addressConfirmed && (
      <h2>Please fill in your address and choose a payment method:</h2>
    )}
      
      
      {errorMessage && (
        <p style={{ color: 'red' }}>{errorMessage}</p>
        
      )}
      
      {!addressConfirmed && (
      <form onSubmit={handleSubmit} >
        <label>
        
        <br />
          Name:
          <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={name.length < 2 ? 'error' : ''} />
        
        </label>
        <br />

        <label>
          Address:
          <br />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className={address.length < 2 ? 'error' : ''} />
        
        </label>
        <br />

        <label>
          House Number:
          <br />
          <input type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} className={isNaN(houseNumber) || houseNumber.length < 1 ? 'error' : ''} />
        
        </label>
        <br />

        <label>
          City:
          <br />
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className={city.length < 1 ? 'error' : ''} />
      
        </label>
        <br />

        <label>
        
          Mobile Number:
          <br />
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className={mobileNumber.length < 2 || isNaN(mobileNumber) ? 'error' : ''} />
        
        </label>
        <br />
        <br />
        <label>
          Payment Method:
          <br />
          
          <div  >
          <img className='payment-icon' src={swishIcon} alt="Swish Icon" />
          {/* <FontAwesomeIcon icon={faMoneyBillAlt} /> */}
            <label>
            
              <input
              
                type="radio"
                value="Swish"
                checked={paymentMethod === 'Swish'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              
              Swish
            </label>
            <br />
            {paymentMethod === 'Swish' && (
      <img className='swish-qr' src="https://www.hjarnfonden.se/uploads/2022/10/SwishQR_1x1.png" alt="Swish QR Code" />
    )}
          </div>
          <div>
            
          <img className='payment-card' src={cardIcon} alt="Card Icon" />
          {/* <FontAwesomeIcon icon={faCreditCard} /> */}
            <label>
              <input
                type="radio"
                value="Card"
                checked={paymentMethod === 'Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Card
            </label>
            
          </div>
          <br />
          {paymentMethod === 'Card' && (
      <div>
        <label>
          <br />
          Card Number:
          <br />
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className={cardNumber.length < 1 || isNaN(cardNumber) ? 'error' : ''}/>
        </label>
        <br />
        <label>
          Expiry Year:
          <br />
          <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className={expiryDate.length < 1 || isNaN(expiryDate) ? 'error' : ''}/>
        </label>
        <br />
        <label>
          CVV:
          <br />
          <input type="text" value={cvv} onChange={(e) => setCVV(e.target.value)} className={cvv.length < 3 || isNaN(cvv) ? 'error' : ''} />
        </label>
        
      </div>
      
    )}
        </label>
        
        <br />

        {/* <button className='button' type="submit"><Link to="/Confirmation">Place Order</Link></button> */}
        {/* <Link onClick={handleSubmit} to="/Confirmation">
        <div >
          <button className="button">Place Order</button>
          
          
        </div>
      </Link> */}

      
    
    
        <div >
          <button className="button" onClick={handleSubmit} >Confirm & Save</button>
          
        </div>
        <br />
        

        {addressConfirmed && <p style={{ color: 'green' }}>Your delivery address and payment info is confirmed! Click "Place Order" to continue!</p>}

        <Link to="/Confirmation" >
        <button className={`button ${!addressConfirmed ? 'disabled' : ''}`} disabled={!addressConfirmed} >Place Order</button>
        
        


      </Link>

      {/* <button className="button" type="submit" onClick={() => {
            handleSubmit();
            navigate('/Confirmation');
          }}> Place Order
    </button> */}

      </form>
)}

{addressConfirmed && (
      <div>
        <br />
        <br />
        <br />
        <p style={{ color: 'green' }}>Your delivery address and payment info are confirmed & saved! Click "Place Order" to continue!</p>
        <Link to="/Confirmation">
          <button className={`button ${!addressConfirmed ? 'disabled' : ''}`} disabled={!addressConfirmed}>
            Place Order
          </button>
        </Link>
      </div>
    )}


<br />
    </div>
  );
}

export default Payment;

