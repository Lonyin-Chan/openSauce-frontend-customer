import React from 'react';
import './AccountPage.css'; // Optional CSS for styling

const AccountPage = () => {
  const user = {
    name: 'John Doe',
    accountNumber: '123456789',
    balance: 4500.50,
    recentTransactions: [
      { date: '2024-12-01', description: 'Deposit', amount: 1500.00 },
      { date: '2024-11-28', description: 'Withdrawal', amount: -200.00 },
      { date: '2024-11-20', description: 'Online Transfer', amount: -300.00 },
    ],
  };

  return (
    <div className="account-page">
      <header className="account-header">
        <h1>Account Dashboard</h1>
        <p>Welcome, {user.name}</p>
      </header>
      <section className="account-details">
        <h2>Account Information</h2>
        <p><strong>Account Number:</strong> {user.accountNumber}</p>
        <p><strong>Account Balance:</strong> ${user.balance.toFixed(2)}</p>
      </section>
      <section className="recent-transactions">
        <h2>Recent Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {user.recentTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td className={transaction.amount >= 0 ? 'credit' : 'debit'}>
                  ${transaction.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <footer className="account-footer">
        <button className="btn">Manage Account</button>
      </footer>
    </div>
  );
};

export default AccountPage;
