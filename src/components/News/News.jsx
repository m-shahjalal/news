import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import axios from 'axios';
import './News.scss';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';

const News = () => {
  const { news } = useContext(GlobalContext);

  return news.length ? (
    <div>
      {news.map((item, index) => (
        <div className="news-container" key={index}>
          <a href={item.url}>
            <div className="news-img">
              <img src={item.urlToImage} alt="" />
            </div>
          </a>
          <a href={item.url}>
            <h2 className="news-title">{item.description}</h2>
          </a>
          <p className="news-content">{item.content}</p>
          <div className="news-others">
            <div className="news-date">{item.source.name}</div>
            <a href={item.url}>
              <div className="news-source">{item.publishedAt}</div>
            </a>
          </div>
        </div>
      ))}
      <Pagination />
    </div>
  ) : (
    <Spinner />
  );
};

export default News;
