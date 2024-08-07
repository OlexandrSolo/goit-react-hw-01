import { useState } from 'react';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import userData from '../userData.json';
import friends from '../friends.json';
import './App.css';

function App() {
  return (
    <div>
      <Profile props={userData} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
