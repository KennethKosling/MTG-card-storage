import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import { getUser } from '../../utilities/users-service';
import CardsPage from '../CardsPage/CardsPage';
import NewCardsPage from '../NewCardsPage/NewCardsPage';
import HomePage from '../HomePage/HomePage';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={getUser() ? <Navigate to="/cards" /> : <HomePage user={user} setUser={setUser}/> } />
        <Route path="/cards" element={getUser() ? <CardsPage user={user} setUser={setUser}/> : <Navigate to="/" /> } />
        <Route path="/cards/new" element={getUser() ? <NewCardsPage user={user} setUser={setUser}/> : <Navigate to="/" /> } />
        <Route path="/*" element={<Navigate to={getUser() ? "/cards" : "/" } />} />
      </Routes>
    </div>
  );
}

export default App;
