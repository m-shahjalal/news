import React, { createContext, useEffect, useReducer, useState } from 'react';
import string from 'query-string';
import AppReducer from './AppReducer';
import api from 'axios';

// Initial state
const initialState = {
  url: 'http://newsapi.org/v2/top-headlines?',
  news: [],
  totalResult: null,
  search: null,
  currentPage: 1,

  qString: {
    country: 'us',
    pageSize: 7,
    page: 1,
    q: null,
    category: null,
    apiKey: '02a8e09c30d443a3aa00e302e71a85ae',
  },
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const path = `${state.url}${string.stringify(state.qString, {
    skipNull: true,
  })}`;

  useEffect(() => {
    console.log(path);
    try {
      api.get(path).then((res) => {
        dispatch({
          type: 'SET_NEWS',
          payload: res.data,
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, [state.qString]);

  // Actions

  const searchHandler = (event) => {
    dispatch({
      type: 'SET_SEARCH',
      payload: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SUBMIT_HANDLE',
      payload: state.search,
    });
    dispatch({
      type: 'CLEAR_NEWS',
    });
  };

  const buttonHandler = (e) => {
    dispatch({
      type: 'BUTTON_HANDLE',
      payload: e.target.innerText,
    });
    dispatch({
      type: 'CLEAR_NEWS',
    });
  };

  const pageHandler = (e) => {
    dispatch({
      type: 'PAGE_HANDLE',
      payload: e.target.value,
    });
  };

  const pageSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'PAGE_SUBMIT_HANDLER',
      payload: state.currentPage,
    });
    dispatch({
      type: 'CLEAR_NEWS',
    });
  };

  const prevHandler = () => {
    dispatch({
      type: 'CLEAR_NEWS',
    });
    dispatch({
      type: 'PREV_HANDLE',
    });
  };

  const nextHandler = () => {
    dispatch({
      type: 'NEXT_HANDLE',
    });
    dispatch({
      type: 'CLEAR_NEWS',
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        search: state.search,
        currentPage: state.currentPage,
        qString: state.qString,
        currentPage: state.currentPage,
        totalResult: state.totalResult,
        searchHandler,
        submitHandler,
        buttonHandler,
        pageHandler,
        pageSubmitHandler,
        nextHandler,
        prevHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
