import React from 'react'
import Header from '../Header/Header'

import { Container, Card } from 'react-bootstrap'

import adminImg from '../../assets/img/chat2.png'
import "./Profile.scss"



const Profile = () => {
  return (
    <>
      <Header />
      <Container className="container-lg py-5 profile-container">
        <div className="container px-0 ">
          <div className="row mb-3 d-flex justify-content-center">
            <div className="col-md-6 ">
                <h2 className="title-section">User - Profile</h2>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-6 mb-5">
            <Card className="shadow-sm mb-5" id="profile-card">
              <div className="card-image">
                <img src={adminImg} className="card-img-top" alt="..." />
              </div>
              <Card.Body>
                <h3 className="card-title">My name is Adam Johns and here is my new Sing user profile page.</h3>
                <p className="card-text">I love reading people's summaries page especially those who are in the same industry as me. Sometimes it's much easier to find your concentration during the night.</p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Profile