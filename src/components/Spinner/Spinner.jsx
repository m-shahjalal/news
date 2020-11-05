import React, { useEffect, useState } from 'react';
import SPINNER from '../../images/download.svg';
import './Spinner.scss';

const Spinner = () => {
  const [found, setFound] = useState(null);
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setFound('No news is good news');
    }, 10000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className="spinner-container">
      {found ? (
        <h3>{found}</h3>
      ) : (
        <div className="spinner">
          <img src={SPINNER} alt="#" />
        </div>
      )}
    </div>
  );
};

export default Spinner;
