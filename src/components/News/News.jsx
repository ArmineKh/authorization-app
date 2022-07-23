import React, { useEffect, useRef } from 'react'
import Header from '../Header/Header'
import NewsCard from './NewsCard'

import newsJson from "../../api/news.json";
import { isPrime } from '../../helpers/isPrime'

import { Container } from 'react-bootstrap'

import { getNews } from "../../redux/slices/newsSlice";
import { useSelector, useDispatch } from 'react-redux'

const News = () => {
  const news = useSelector(state => state.newsReducer.news);
  const dispatch = useDispatch();

  const searchInputRef = useRef()

  useEffect(() => {
    dispatch(getNews(newsJson));
  
  }, [dispatch])

  const handleSearch = (e) => {
    let filter = e.target.value.toUpperCase();
    let filteredNews = news.filter(item => item.newsTitle.toUpperCase().indexOf(filter) > -1)
    dispatch(getNews(filteredNews));
    
  }

  return (
    <>
      <Header />
      <Container>
      <section id="focus" className="focus-section">
        <div className="container-lg py-5">
          <div className="container px-0">
            <div className="row mb-3">
              <div className="col-4">
                  <h2 className="title-section">News</h2>
              </div>
              <div className="col-6 mr-auto"> 
              <input type="text" id="searcNewsInput" ref={searchInputRef} onChange={handleSearch} placeholder="Search for news.."></input>
              </div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3">
            {news && news.map(newItem => (
              <NewsCard 
                key={newItem.id}
                newsImgSrs={newItem.inewsImageSrc} 
                newsTitle={newItem.newsTitle} 
                newsText={newItem.newsText} 
                fibonaciNumber={isPrime(newItem.fibonaciNumber) ? `${newItem.fibonaciNumber} is prime` : `${newItem.fibonaciNumber} is not prime`}
              />
            ))}
          </div>
        </div>
      </section>
      </Container>


    </>
  )
}

export default News