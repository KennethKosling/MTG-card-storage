import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.css';
import CardsPage from '../CardsPage/CardsPage';
import HomePage from '../HomePage/HomePage';

function App() {
  const user = true
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/cards" /> : <HomePage /> } />
        <Route path="/cards" element={user ? <CardsPage /> : <Navigate to="/" /> } />
        <Route path="/*" element={<Navigate to={user ? "/cards" : "/" } />} />
      </Routes>
    </div>
  );
}

export default App;
