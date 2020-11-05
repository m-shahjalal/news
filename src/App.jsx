import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Pagination from './components/Pagination/Pagination';
import wave from './images/wave.png';
import Spinner from './components/Spinner/Spinner';
import { GlobalContext } from './context/GlobalState';

function App() {
  const { news } = useContext(GlobalContext);
  return (
    <div className="app">
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>
      <Header />
      <News />
    </div>
  );
}

export default App;
