import React, { useContext, useState } from 'react';
import './Pagination.scss';
import prev from '../../images/004-left-arrow.png';
import next from '../../images/003-right-arrow.png';
import { GlobalContext } from '../../context/GlobalState';

const Pagination = () => {
  const {
    qString,
    currentPage,
    pageHandler,
    pageSubmitHandler,
    totalResult,
    prevHandler,
    nextHandler,
  } = useContext(GlobalContext);

  const [isEditable, setIsEditable] = useState(false);
  const totalPage = Math.floor(totalResult / 7 + 1);
  console.log(totalPage);

  return (
    <div className="pagination">
      <button
        onClick={prevHandler}
        className={qString.page === 1 ? 'mute' : ''}
        disabled={qString.page === 1}
      >
        <img src={prev} alt="" /> <span> Previous</span>
      </button>
      <div
        className="pagination-indicator"
        onDoubleClick={() => setIsEditable(!isEditable)}
      >
        {isEditable ? (
          <form onSubmit={pageSubmitHandler}>
            <input
              className="pagination-input"
              type="number"
              placeholder="Type and press enter"
              min="1"
              max={totalPage}
              onDoubleClick={() => setIsEditable(!isEditable)}
              value={currentPage}
              onChange={pageHandler}
            />
          </form>
        ) : (
          <h5>
            <p>
              {qString.page} of {totalPage || 1} page
            </p>
            <small>Dabble click to enter the page number</small>
          </h5>
        )}
      </div>
      <button
        onClick={nextHandler}
        className={
          qString.page.toString() === totalPage.toString() ? 'mute' : ''
        }
        disabled={qString.page.toString() === totalPage.toString()}
      >
        <span>Next </span>
        <img src={next} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
