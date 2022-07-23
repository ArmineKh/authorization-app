import React from 'react'
import { Card } from 'react-bootstrap'
import './NewsCard.scss'

const NewsCard = ({ newsImgSrs, newsTitle, newsText, fibonaciNumber }) => {
  return (
    <div className="col mb-5">
      <Card className="shadow-sm h-100 mb-5">
        <div className="card-image">
          <img src={newsImgSrs} className="card-img-top" alt="..." />
        </div>
        <Card.Body>
          <h3 className="card-title">{newsTitle} - {fibonaciNumber}</h3>
          <p className="card-text">{newsText}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default NewsCard