import React, { useState, useEffect } from 'react';
import './Transactions.css';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from API or define them statically for now
    const fetchedTransactions = [
      { id: 1, date: '2023-01-01', amount: '$100', description: 'Payment 1' },
      { id: 2, date: '2023-02-01', amount: '$150', description: 'Payment 2' },
      { id: 3, date: '2023-03-01', amount: '$200', description: 'Payment 3' },
    ];
    setTransactions(fetchedTransactions);
  }, []);

  return (
    <div className="transactions-container">
      <h1>Transaction List</h1>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
