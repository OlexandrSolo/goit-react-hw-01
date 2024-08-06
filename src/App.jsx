import { useState } from 'react';
import Profile from './Profile/Profile';
import userData from '../userData.json';
import './App.css';

function App() {
  return (
    <div>
      <Profile props={userData} />
    </div>
  );
}

export default App;
