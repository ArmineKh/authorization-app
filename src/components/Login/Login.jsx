import React, {useRef, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

import { Container, Form, Button, Card, Alert } from 'react-bootstrap'
import { generateToken } from '../../helpers/tokenGenerator'

import { useDispatch } from 'react-redux'
import { setUser, setUserToken } from '../../redux/slices/userSlice'

import './Login.scss'


const Login = () => {
  const dispatch = useDispatch()

  const loginRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      if (loginRef.current.value === "admin" && passwordRef.current.value === "12345") {
        const token = generateToken(32);
        localStorage.setItem('userToken', JSON.stringify(token))
        dispatch(setUser({login: loginRef.current.value}))
        dispatch(setUserToken(token))
        navigate("/profile")
      }else{
        setError('The username or password you entered is incorrect')
      }
    } catch (error) {
      console.log(error)
      setError('Failed to log in')
    }
    setLoading(false)
  }

  return (
    <>
    <Container className='d-flex flex-column align-items-center justify-content-center' style={{minHeight: "100vh"}}>
    <h5 className="auth-logo"><i className="la la-circle text-primary"></i>Sing App React<i className="la la-circle text-danger"></i></h5>
    <Card className='auth-card mx-auto'>
      <div className='auth-card-title'>
        <h3 className="mt-0">Login to your Web App</h3>
      </div>
      <Card.Body>
        <p className="auth-info">Use your email to sign in.</p>
        <Alert className='alert-sm text-center mt-2 alert alert-secondary fade show'>For user with "admin" role <br></br> use<span>"admin / 12345" </span>to login!</Alert>

        {error && <Alert variant='danger'>{ error }</Alert>}
        <Form onSubmit={handleSubmit} className='mt'>
          <Form.Group id="login" className="form-group">
            <Form.Control className="form-control no-border" placeholder="Login" type='text' ref={loginRef} required />
          </Form.Group>
          <Form.Group id="password"  className="form-group">
            <Form.Control className="form-control no-border" placeholder="Password" type='password' ref={passwordRef} required />
          </Form.Group>
          <Link to='#/forgot' className="auth-links d-block text-right mb-3 mt-1 fs-sm">Forgot password?</Link>
          <Button disabled={loading} className="auth-btn mb-3 btn btn-primary btn-sm w-100" type='submit'>Login</Button>
          <p className="auth-info">or sign in with</p>
          <div className="social-buttons">
            <Button className="social-button mb-2 btn btn-warning w-100" type='submit'><i className="social-icon social-google"></i> <p className="social-text">GOOGLE</p></Button>
            <Button className="social-button mb-2 btn btn-warning w-100" type='submit'><i className="social-icon social-microsoft"></i> <p className="social-text">MICROSOFT</p></Button>
          </div>
        </Form>
        <p className="auth-info">Don't have an account? Sign up now!</p>
        <Link className="auth-links d-block text-center" to="#/register">Create an Account</Link>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default Login