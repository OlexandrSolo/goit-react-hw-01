import { useState } from 'react';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import './App.css';

function App() {
  return (
    <div className="container">
      <Profile props={userData} />
      <FriendList friends={friends} />
      <TransactionHistory operations={transactions} />
    </div>
  );
}

export default App;
