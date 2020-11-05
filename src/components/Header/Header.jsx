import React, { useContext, useState } from 'react';
import './Header.scss';
import searchImg from '../../images/001-search.png';
import { Category } from '../../utils/util';
import { GlobalContext } from '../../context/GlobalState';

function Header() {
  const {
    qString,
    search,
    totalResult,
    searchHandler,
    submitHandler,
    buttonHandler,
  } = useContext(GlobalContext);

  return (
    <header className="header">
      <h1>block baster headlines</h1>
      <hr />
      <br />
      <br />
      <br />
      <div className="searchbox">
        <form onSubmit={submitHandler} className="search-input">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Type Anything To Search"
            onChange={searchHandler}
            value={search || ''}
          />
          <button type="submit" defaultValue="btn">
            <img src={searchImg} alt="search" />
          </button>
        </form>

        {Category.length > 0 &&
          Category.map((item, index) =>
            qString.category === item ? (
              <button className="search-btn search-btn-active" key={index}>
                {item}
              </button>
            ) : (
              <button
                className="search-btn"
                key={index}
                onClick={buttonHandler}
              >
                #{item}
              </button>
            ),
          )}
      </div>

      <div className="counter flex">
        <div className="counter-result counter item">
          about {totalResult || 0} result found
        </div>
        <div className="counter-page counter item">
          page {qString.page || 1} of {Math.floor(totalResult / 7 + 1) || 1}
        </div>
      </div>
    </header>
  );
}

export default Header;
