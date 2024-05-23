import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/payments/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber,
          expiryDate,
          cvv,
          amount,
        }),
      });

      if (response.ok) {
        console.log('Payment submitted successfully');
        // Handle success, such as showing a success message or redirecting
      } else {
        console.error('Failed to submit payment');
        // Handle error, such as showing an error message
      }
    } catch (error) {
      console.error('Error submitting payment', error);
      // Handle error, such as showing an error message
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment</h1>
      <form className="payment-form" onSubmit={handlePayment}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;
